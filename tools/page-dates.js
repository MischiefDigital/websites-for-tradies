#!/usr/bin/env node
/**
 * Snapshot per-page git commit dates into src/_data/pageDates.json.
 *
 * WHY A SNAPSHOT, RATHER THAN JUST READING GIT AT BUILD TIME
 *
 * Vercel builds from a shallow clone, where per-file history does not exist.
 * eleventy.config.js already detects that and refuses to guess, which is why
 * every <lastmod> in production came from hand-maintained front matter instead.
 * Committing the dates as data is the only way git can drive them where the
 * site is actually built.
 *
 * Wired into `npm run build`. On a shallow clone it exits without writing, so a
 * Vercel build always uses the snapshot committed from a full local clone.
 *
 * SCOPE: this feeds sitemap <lastmod> only. The visible "Last updated" line on
 * the guides and legal pages stays on front-matter `updated`, deliberately —
 * that date is an editorial claim that the content was revised, and a git date
 * would bump it for a typo fix. See src/_includes/layouts/page.njk.
 */
const { execSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const OUT = path.join(__dirname, "..", "src", "_data", "pageDates.json");

/**
 * Data files that supply a template's actual copy, so a change to one is a
 * change to the page even though the template itself is untouched.
 *
 * This is the trap a naive per-file lookup falls into: every word of the 11
 * trade pages lives in trades.js, so `git log -- src/trade-pages.njk` would
 * report them as unchanged while their content was being rewritten.
 *
 * Deliberately NOT listed: site.js, the layouts and the partials. Every page
 * depends on those, so including them would bump all 30 lastmods on any nav or
 * pricing tweak — and a lastmod that always changes carries no information.
 */
const DATA_DEPS = {
  "src/trade-pages.njk": ["src/_data/trades.js"],
  "src/city-pages.njk": ["src/_data/cities.js", "src/_data/trades.js"],
  "src/trades.njk": ["src/_data/trades.js"],
  "src/locations.njk": ["src/_data/cities.js"],
  "src/faq.njk": ["src/_data/faq.js"],
  "src/index.njk": ["src/_data/trades.js", "src/_data/cities.js", "src/_data/faq.js"],
};

function git(cmd) {
  return execSync(`git ${cmd}`, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
}

/** Local Y-M-D. Matches how the git dates below are read: %cI is the committer's
 *  own offset, so slicing its first 10 chars gives their local day, not UTC. */
function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * Latest commit date for every tracked file under src/, in one git call.
 *
 * Per-file `git log` would mean ~40 process spawns per build, which is slow
 * enough on Windows to notice. This walks the log once, newest first, and takes
 * the first date each path appears under.
 */
function parseLog(text) {
  const dates = new Map();
  let current = null;
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (trimmed.startsWith("\0")) current = trimmed.slice(1, 11);
    // Reverse-chronological, so the first sighting of a path is its latest date.
    else if (current && !dates.has(trimmed)) dates.set(trimmed, current);
  }
  return dates;
}

function lastCommitDates() {
  return parseLog(git("log --format=%x00%cI --name-only -- src"));
}

/** Files with staged or working-tree changes: they are about to be committed,
 *  so their real date is today, not whenever they were last committed. */
function pendingFiles() {
  const set = new Set();
  for (const line of git("status --porcelain -- src").split("\n")) {
    const p = line.slice(3).trim();
    if (p) set.add(p.replace(/^"|"$/g, ""));
  }
  return set;
}

function pageTemplates(dir = "src", found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      if (entry.name !== "_includes" && entry.name !== "_data") pageTemplates(rel, found);
    } else if (entry.name.endsWith(".njk")) {
      found.push(rel);
    }
  }
  return found;
}

function main() {
  // Every git failure below is non-fatal by design. This runs inside
  // `npm run build`, including on Vercel where the clone is shallow and history
  // may be missing entirely — a thrown error there would fail the deploy over a
  // sitemap date. Any problem means: leave the committed snapshot alone.
  let committed;
  let pending;
  try {
    if (git("rev-parse --is-shallow-repository").trim() === "true") {
      console.warn("[wft] Shallow clone: keeping the committed pageDates.json as-is.");
      return;
    }
    committed = lastCommitDates();
    pending = pendingFiles();
  } catch (err) {
    console.warn(`[wft] git unavailable (${err.message.trim().split("\n")[0]}) — keeping pageDates.json as-is.`);
    return;
  }

  const stamp = today();
  const dateFor = (f) => (pending.has(f) ? stamp : committed.get(f));

  const out = {};
  for (const tpl of pageTemplates().sort()) {
    // Newest wins: the page changed when its template OR its copy changed.
    const dates = [tpl, ...(DATA_DEPS[tpl] || [])].map(dateFor).filter(Boolean);
    if (dates.length) out[tpl] = dates.sort().pop();
  }

  if (!Object.keys(out).length) {
    console.warn("[wft] No dates resolved — keeping pageDates.json as-is.");
    return;
  }

  const next = JSON.stringify(out, null, 2) + "\n";
  if (fs.existsSync(OUT) && fs.readFileSync(OUT, "utf8") === next) return;
  fs.writeFileSync(OUT, next);
  console.log(`[wft] pageDates.json updated — ${Object.keys(out).length} templates.`);
}

if (require.main === module) main();

module.exports = { parseLog };

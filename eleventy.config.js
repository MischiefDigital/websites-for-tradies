const { execSync } = require("node:child_process");

/**
 * Last-modified date for a template, from git rather than the filesystem.
 *
 * File mtime is useless here: a CI checkout stamps every file with the clone
 * time, so a mtime-based sitemap would tell Google that every page changed on
 * every deploy. Git commit dates are the real answer.
 *
 * Returns null when git can't answer — a shallow CI clone may not reach the
 * commit that last touched a given file. Callers must omit <lastmod> in that
 * case rather than substitute a guess: no lastmod is fine, a wrong one is not.
 */
const gitDateCache = new Map();

/**
 * In a shallow clone every file looks like it was added in the boundary
 * commit, so per-file dates all collapse to the deploy date — the exact wrong
 * answer we are trying to avoid, just wearing a nicer hat. Detect it once and
 * skip lastmod entirely in that case.
 */
let repoIsShallow = null;
function isShallowRepo() {
  if (repoIsShallow !== null) return repoIsShallow;
  try {
    const out = execSync("git rev-parse --is-shallow-repository", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    repoIsShallow = out === "true";
  } catch {
    repoIsShallow = true; // no git at all — treat dates as untrustworthy
  }
  if (repoIsShallow) {
    console.warn(
      "[wft] Shallow clone or no git history: omitting sitemap <lastmod>. " +
        "Dates would otherwise be identical across all pages and misleading."
    );
  }
  return repoIsShallow;
}

function gitLastModified(inputPath) {
  if (!inputPath || isShallowRepo()) return null;
  if (gitDateCache.has(inputPath)) return gitDateCache.get(inputPath);
  let result = null;
  try {
    const out = execSync(`git log -1 --format=%cI -- "${inputPath}"`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (out) result = out.slice(0, 10);
  } catch {
    result = null;
  }
  gitDateCache.set(inputPath, result);
  return result;
}

module.exports = function (eleventyConfig) {
  // Static assets copied through untouched
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/Images": "Images" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });
  // IndexNow ownership key — must be served verbatim at the site root.
  // Filename and contents both equal the key; changing either breaks ownership.
  eleventyConfig.addPassthroughCopy({
    "src/2351f8bd239d5cc9326e7d9f6fadae4f.txt": "2351f8bd239d5cc9326e7d9f6fadae4f.txt",
  });

  eleventyConfig.addWatchTarget("src/assets/");

  // YYYY-MM-DD, the only date format sitemaps need
  eleventyConfig.addFilter("isoDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("gitLastmod", gitLastModified);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};

/**
 * Ping IndexNow with changed URLs.
 *
 *   node tools/indexnow.js                 # submit every URL in the sitemap
 *   node tools/indexnow.js /pricing/ /faq/ # submit specific paths
 *
 * IndexNow tells Bing, Yandex, Seznam and Naver that a URL has changed rather
 * than waiting for them to crawl it. Bing's index is what ChatGPT search and
 * Copilot query, so discovery speed there has a direct GEO payoff.
 *
 * Run this AFTER a deploy has gone live — submitting a URL that still returns
 * the old content (or a 404) is worse than not submitting it.
 *
 * Do NOT run it on every deploy. IndexNow is for content changes; repeatedly
 * submitting unchanged URLs is what gets a key throttled.
 */
const fs = require("fs");
const path = require("path");

const KEY = "2351f8bd239d5cc9326e7d9f6fadae4f";
const HOST = "www.websitesfortradies.co.nz";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

function urlsFromSitemap() {
  const p = path.join(__dirname, "..", "_site", "sitemap.xml");
  if (!fs.existsSync(p)) {
    console.error("No _site/sitemap.xml — run `npm run build` first.");
    process.exit(1);
  }
  const xml = fs.readFileSync(p, "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

(async () => {
  const args = process.argv.slice(2);
  const urlList = args.length
    ? args.map((a) => (a.startsWith("http") ? a : ORIGIN + (a.startsWith("/") ? a : "/" + a)))
    : urlsFromSitemap();

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow:`);
  urlList.forEach((u) => console.log(`  ${u}`));

  // Confirm the key file is actually reachable before submitting. IndexNow
  // rejects the whole batch if it cannot verify ownership, and the error it
  // returns is far less obvious than this check.
  const keyUrl = `${ORIGIN}/${KEY}.txt`;
  const keyRes = await fetch(keyUrl);
  const keyBody = keyRes.ok ? (await keyRes.text()).trim() : "";
  if (!keyRes.ok || keyBody !== KEY) {
    console.error(`\nKey file check FAILED at ${keyUrl}`);
    console.error(`  status: ${keyRes.status}, body: ${JSON.stringify(keyBody.slice(0, 60))}`);
    console.error("  Deploy the key file before submitting.");
    process.exit(1);
  }
  console.log(`\nKey file verified at ${keyUrl}`);

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList }),
  });

  const body = await res.text();
  console.log(`\nIndexNow responded ${res.status} ${res.statusText}`);
  if (body) console.log(body.slice(0, 400));

  // 200 = accepted, 202 = accepted pending key validation
  if (res.status === 200 || res.status === 202) {
    console.log("\nSubmitted. Discovery is not instant — expect crawling over the next days.");
  } else {
    console.error("\nSubmission was not accepted. Common causes:");
    console.error("  400 bad request   — malformed JSON or a URL outside the host");
    console.error("  403 forbidden     — key file missing, wrong contents, or wrong location");
    console.error("  422 unprocessable — URLs do not belong to the stated host");
    console.error("  429 too many      — throttled; wait rather than retrying");
    process.exit(1);
  }
})();

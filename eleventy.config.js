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
function gitLastModified(inputPath) {
  if (!inputPath) return null;
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
  eleventyConfig.addPassthroughCopy({ "src/llms.txt": "llms.txt" });
  eleventyConfig.addPassthroughCopy({ "src/site.webmanifest": "site.webmanifest" });

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

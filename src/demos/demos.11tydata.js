/**
 * Every page under src/demos/ is a demonstration build for a fictional
 * business (see /example-builds/). They are deliberately kept out of the
 * sitemap and llms.txt, and their layouts add a robots noindex meta — the
 * demos exist to be clicked through from the example-builds page, not to
 * compete with real pages in search.
 */
module.exports = {
  sitemapExclude: true,
};

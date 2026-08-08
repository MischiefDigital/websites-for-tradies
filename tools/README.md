# Build tools

One-off generators. Nothing here runs during `npm run build` — the outputs are
committed, so the site builds without them.

## `generate-images.js`

Rasterises the brand SVGs into the PNGs that social platforms and legacy
browsers need (neither accepts SVG).

```bash
node tools/generate-images.js
```

Reads `tools/og-image.svg` and `src/assets/favicon.svg`. Writes:

| Output | Size | Used by |
|---|---|---|
| `src/assets/og-image.png` | 1200×630 | `og:image`, `twitter:image` |
| `src/assets/icons/apple-touch-icon.png` | 180×180 | iOS home screen |
| `src/assets/icons/icon-192.png` | 192×192 | `site.webmanifest` |
| `src/assets/icons/icon-512.png` | 512×512 | manifest + schema `logo` |
| `src/assets/icons/favicon-32.png` | 32×32 | browser tab fallback |

Re-run after editing either SVG. **Check the result visually** — text in the OG
card is rendered with system fonts and can overflow its container if the copy
gets longer.

## Hero image variants

The hero is the LCP element, so it ships at two sizes. `src/assets/css/site.css`
switches at 769px and `src/index.njk` preloads the matching one.

| File | Size | Weight | Served to |
|---|---|---|---|
| `hero-tradie-900.webp` | 900×507 | 25 KB | ≤768px |
| `hero-tradie.webp` | 1672×941 | 262 KB | ≥769px |

The original 1.88 MB PNG master lives in `tools/source-images/`, deliberately
outside `src/` — anything under `src/Images/` is copied straight into the
deploy, and that PNG was shipping to every visitor despite nothing referencing
it. Keep masters here, keep only what the site serves in `src/`.

Regenerate the mobile variant from the full-size source:

```bash
node -e "require('sharp')('src/Images/hero-tradie.webp').resize(900).webp({quality:78}).toFile('src/Images/hero-tradie-900.webp')"
```

If you change the breakpoint, change it in **three** places or the preload will
fetch an image the CSS never uses: the `@media` rule in `site.css`, and both
`media` attributes on the preload links in `index.njk`.

## `indexnow.js`

Tells Bing, Yandex, Seznam and Naver that URLs have changed, instead of waiting
to be crawled. Bing's index is what ChatGPT search and Copilot query, so this
has a GEO payoff as well as an SEO one.

```bash
npm run indexnow                      # every URL in the sitemap
node tools/indexnow.js /pricing/      # just these paths
```

**Run it after the deploy is live**, not before — submitting a URL that still
serves old content or a 404 is worse than not submitting it. The script checks
the key file is reachable and correct before submitting, because IndexNow
rejects the whole batch on an ownership failure with a fairly opaque error.

**Don't run it on every deploy.** IndexNow is for content changes. Repeatedly
submitting unchanged URLs is what gets a key throttled. A CSS tweak is not a
reason to ping four search engines.

The ownership key lives in two places that must stay in sync: the filename and
the contents of `src/2351f8bd239d5cc9326e7d9f6fadae4f.txt`, and the `KEY`
constant in `tools/indexnow.js`. It is passthrough-copied to the site root in
`eleventy.config.js`. Changing any one of those breaks verification.

## Fonts

Inter is self-hosted in `src/assets/fonts/`, licensed under the SIL Open Font
License 1.1 (`LICENSE.txt` in that folder).

These are **variable** font files covering the whole 100–900 weight axis, which
is why two files cover every weight the site uses. The `unicode-range` on each
`@font-face` means `inter-latin-ext.woff2` is only downloaded when a character
in its range actually renders — that is what covers Māori macrons (ā ē ī ō ū),
so do not remove it.

To refresh from Google Fonts, request the CSS with a modern browser User-Agent
(otherwise Google serves legacy formats), take the `latin` and `latin-ext`
blocks, download the two `.woff2` files and copy the `unicode-range` values
verbatim into `site.css`.

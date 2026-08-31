# Build tools

## Cache policy

`vercel.json` sets Cache-Control per path. **vercel.json is strict JSON — it
accepts no comments and no unknown keys.** Adding a `comment` field to a
headers rule fails the build silently (Vercel keeps serving the last good
deploy, so the site stays up and you won't notice unless you check). The
reasoning therefore lives here instead.

| Path | Policy | Why it's safe |
|---|---|---|
| `/assets/css/*`, `/assets/js/*` | 1 year, immutable | URLs carry `?v=<content hash>` from `assetHash` in `eleventy.config.js`, so a deploy produces a new URL rather than a stale cache |
| `/assets/fonts/*`, `/assets/icons/*`, `/Images/*` | 1 year, immutable | Versioned by filename — changing one means renaming it, as with `hero-tradie-900.webp` |
| `og-image.png`, `favicon.svg` | 1 week | Fetched by social platforms and browsers that ignore query strings, so a shorter window keeps a bad share card recoverable |
| `.html`, `.xml`, `.txt`, `.webmanifest` | must-revalidate | Content. Search engines should see changes immediately |

Without these, Vercel defaults everything to `max-age=0, must-revalidate` and
every asset is revalidated on every page navigation.

**If you add a new asset type, add a rule.** Anything unmatched falls back to
the default and quietly costs a round trip per page.


One-off generators. Nothing here runs during `npm run build` — the outputs are
committed, so the site builds without them.

## `generate-images.js`

Derives every web-served brand asset from the master artwork in `tools/brand/`
(the brand system is documented in `docs/brand-guidelines.md`). The masters
live here, not under `src/`, for the same reason as the hero source image —
anything in `src/assets/` ships to every deploy.

```bash
node tools/generate-images.js
```

Reads the masters in `tools/brand/` and `tools/og-image.svg`. Writes:

| Output | Size | Used by |
|---|---|---|
| `src/assets/og-image.png` | 1200×630 | `og:image`, `twitter:image` |
| `src/assets/favicon.svg` | any | browser tab (128px raster embedded) |
| `src/assets/icons/wft-mark.png` | 96px tall | header/footer logo (`partials/logo.njk`) |
| `src/assets/icons/wft-apple-touch-icon.png` | 180×180 | iOS home screen |
| `src/assets/icons/wft-icon-192.png` | 192×192 | `site.webmanifest` |
| `src/assets/icons/wft-icon-512.png` | 512×512 | manifest + schema `logo` |
| `src/assets/icons/wft-favicon-32.png` | 32×32 | browser tab fallback |

The icon PNGs sit under the 1-year immutable cache rule, so if the artwork
changes again, **rename them** (see the header comment in the script) rather
than overwriting. `og-image.png` and `favicon.svg` cache for a week and keep
their names — social platforms and schema point at those URLs.

Re-run after replacing a master or editing the OG SVG. **Check the result
visually** — text in the OG card is rendered with system fonts and can
overflow its container if the copy gets longer.

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

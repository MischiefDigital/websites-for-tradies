# WFT brand guidelines

The brand system behind everything the site (and any collateral) shows.
Derived from the master artwork in `tools/brand/` — those six PNGs are the
source of truth for the logo; this document is the source of truth for how to
use it. Updated 31 August 2026, when the new WFT identity replaced the original
"job alert" rounded-square mark.

## The identity in one line

A heavy, forward-leaning **WFT** monogram — black (or white when reversed) with
the top bar of the T cut as a **yellow slash** — over the wordmark
**WEBSITES FOR TRADIES** and the tagline **WEBSITES THAT GET JOBS** with
"GET JOBS" in yellow. Fast, industrial, high-vis: the visual language of the
trades, not of a design agency.

## Logo files (masters, `tools/brand/`)

| File | What it is | Use it for |
|---|---|---|
| `WFT Primary Logo.png` | Monogram + wordmark + tagline, black/yellow on transparent | Default lockup on white or light backgrounds |
| `WFT Stacked Logo.png` | Same lockup, squarer proportions | Square-ish spaces: social avatars on light, print blocks |
| `WFT Icon_Monogram.png` | Monogram alone, black/yellow on transparent | Small spaces where the wordmark would be illegible; source for the site header mark |
| `WFT Reversed Version On Black.png` | Full lockup, white/yellow on solid black | Dark backgrounds, dark-mode collateral, social banners |
| `WFT Monochrome Versions.png` | One-colour black, and white-in-black-box | Single-colour print, embroidery, engraving, faxes-from-1997 |
| `WFT Favicon_App Icon.png` | Monogram reversed inside a black rounded square | Favicons, app icons, avatars on unknown backgrounds |

Rules:

- On **light** backgrounds use the black/yellow versions; on **dark** use the
  reversed (white/yellow) treatment. Never put the black monogram on black.
- The yellow slash is part of the monogram. Don't recolour it, don't drop it,
  don't move it to another letter.
- Clear space: keep at least the height of the monogram's "W" free on all
  sides. Minimum size: don't use a lockup that includes the tagline below
  ~140px wide — switch to the monogram alone.
- Don't stretch, rotate, outline, shadow, or re-set the wordmark in another
  font.

## Colour

| Name | Hex | Role |
|---|---|---|
| WFT Black | `#000000` | Backgrounds (dark sections, nav, footer), text on light |
| WFT Yellow | `#FDBE00` | The accent: CTAs, the monogram slash, "GET JOBS", highlights. Never body text on white |
| White | `#FFFFFF` | Text on dark, light section backgrounds |

Supporting web palette (elevation and accessibility, defined in
`src/assets/css/site.css` `:root`):

| Token | Hex | Why it exists |
|---|---|---|
| `--charcoal` | `#1A1A1A` | Cards/surfaces one step up from black |
| `--slate` | `#2E2E2E` | Borders and hairlines on dark |
| `--grey` | `#9E9E9E` | Secondary text on dark (AA-checked) |
| `--grey-on-light` | `#6B6B6B` | Secondary text on white — `--grey` fails AA there |
| `--off` | `#F5F5F5` | Off-white section background |
| `--amber-dark` | `#B85100` | Links/accents **on white** — the brand yellow itself fails contrast as text on white |
| `--green` / `--red` | `#2d7a2d` / `#E05050` | Ticks and crosses only |

Contrast rules that must survive any redesign: yellow is a background or
large-display colour, not a text colour on white; anything grey on a light
surface uses `--grey-on-light`; links in prose on white use `--amber-dark`.

## Typography

- Site typeface: **Inter** (variable, 100–900, self-hosted — see
  `tools/README.md`). Fallbacks: Arial, Helvetica Neue, sans-serif.
- Display/headlines: 900 weight, uppercase, tight letter-spacing (−0.02 to
  −0.06 em). This echoes the wordmark without pretending to be the logo.
- Labels/eyebrows/taglines: 700–800 weight, uppercase, wide tracking
  (+0.1 to +0.18 em), small sizes.
- Body: 400, sentence case, 1.6–1.8 line height.
- The monogram itself is artwork, not type. Never fake it with Inter.

## Voice (unchanged by the rebrand)

Blunt, concrete, tradie-first. Prices, day counts and guarantees in numbers.
"GET JOBS", not "generate enquiries". No agency jargon.

## Where the brand lives on the site

Everything web-served is **generated** from the masters — never hand-edit a
PNG in `src/assets/`. Regenerate with `node tools/generate-images.js` (outputs
table in `tools/README.md`).

- Header/footer logo: `partials/logo.njk` — reversed monogram
  (`wft-mark.png`) + wordmark/tagline text stack. On ≤480px screens the text
  stack hides and the monogram carries the brand alone.
- CSS tokens: `:root` in `site.css`, mirrored in `partials/critical-css.njk`
  (both must change together — see the warning at the top of that file).
- Favicons/app icons: `favicon.svg` + `src/assets/icons/wft-*` — from the
  rounded-square app-icon master.
- Social share card: `og-image.png` from `tools/og-image.svg` + the monogram.
- Schema.org logo (`site.js` → `logo`): `wft-icon-512.png`.
- `theme-color` meta (`base.njk`) and `site.webmanifest` colours: WFT Black.

/**
 * One-off asset generator. Derives every web-served brand asset from the
 * master artwork in tools/brand/ (see docs/brand-guidelines.md for the brand
 * system these files express).
 *
 *   node tools/generate-images.js
 *
 * Outputs into src/assets/. Re-run after replacing the masters in tools/brand/
 * or editing tools/og-image.svg. The icon PNGs are served under the 1-year
 * immutable cache rule, so if their artwork ever changes again they must be
 * RENAMED (wft-icon-512.png → wft-icon-512-v2.png etc.) and every reference
 * updated — overwriting in place would leave return visitors on the old icon
 * for up to a year.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const out = path.join(root, 'src', 'assets');
const icons = path.join(out, 'icons');
const brand = path.join(__dirname, 'brand');
fs.mkdirSync(icons, { recursive: true });

const appIcon = path.join(brand, 'WFT Favicon_App Icon.png');
const monogram = path.join(brand, 'WFT Icon_Monogram.png');

/**
 * The reversed monogram: the master is black + yellow on transparency, which
 * disappears on the site's black header/footer. Repaint the dark pixels white
 * and keep the yellow slash — the same treatment the master
 * "WFT Reversed Version On Black.png" shows, but with transparency kept so it
 * can sit on any dark surface.
 */
async function reversedMark(height) {
  const trimmed = await sharp(monogram).trim().png().toBuffer();
  const { data, info } = await sharp(trimmed).raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    // Yellow has G≈190, black/antialiased-black has G<140 — that gap is the test.
    if (data[i + 3] > 0 && data[i] < 140 && data[i + 1] < 140) {
      data[i] = data[i + 1] = data[i + 2] = 255;
    }
  }
  return sharp(data, { raw: info })
    .resize({ height })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

function report(file) {
  const { size } = fs.statSync(file);
  console.log(`${path.relative(root, file)}  ${(size / 1024).toFixed(1)} KB`);
}

(async () => {
  // Header/footer logo mark — 96px tall so it stays crisp at 3x on a 32px slot.
  const markFile = path.join(icons, 'wft-mark.png');
  fs.writeFileSync(markFile, await reversedMark(96));
  const markMeta = await sharp(markFile).metadata();
  console.log(`mark aspect: ${markMeta.width}x${markMeta.height}`);
  report(markFile);

  // Favicons + manifest icons, straight from the rounded-square app icon master.
  for (const [w, name] of [[512, 'wft-icon-512.png'], [192, 'wft-icon-192.png'], [32, 'wft-favicon-32.png']]) {
    const f = path.join(icons, name);
    await sharp(appIcon).resize(w, w).png({ compressionLevel: 9 }).toFile(f);
    report(f);
  }

  // iOS ignores transparency (renders it black anyway) and applies its own
  // mask, so flatten onto brand black for a clean full-bleed tile.
  const touch = path.join(icons, 'wft-apple-touch-icon.png');
  await sharp(appIcon)
    .resize(180, 180)
    .flatten({ background: '#000000' })
    .png({ compressionLevel: 9 })
    .toFile(touch);
  report(touch);

  // favicon.svg — browsers get the SVG first (any-size). The artwork only
  // exists as raster, so embed a 128px PNG; tab icons render at ≤64px.
  const b64 = (await sharp(appIcon).resize(128, 128).png({ compressionLevel: 9 }).toBuffer()).toString('base64');
  const faviconSvg = path.join(out, 'favicon.svg');
  fs.writeFileSync(
    faviconSvg,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="WFT">\n` +
      `  <image width="128" height="128" href="data:image/png;base64,${b64}"/>\n` +
      `</svg>\n`
  );
  report(faviconSvg);

  // Social share card: rasterise the SVG layout, then composite the reversed
  // monogram into the logo slot (librsvg can't reach external images, and
  // base64-embedding it in the SVG would make the layout uneditable).
  const ogFile = path.join(out, 'og-image.png');
  const ogSvg = fs.readFileSync(path.join(__dirname, 'og-image.svg'));
  const mark = await reversedMark(60);
  await sharp(ogSvg, { density: 400 })
    .resize(1200, 630)
    .composite([{ input: mark, top: 50, left: 80 }])
    .png({ compressionLevel: 9 })
    .toFile(ogFile);
  report(ogFile);
})();

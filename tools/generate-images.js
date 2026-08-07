/**
 * One-off asset generator. Rasterises the brand SVGs into the PNGs that
 * social platforms and legacy browsers need (neither accepts SVG).
 *
 *   node tools/generate-images.js
 *
 * Outputs into src/assets/. Re-run after editing tools/og-image.svg or
 * src/assets/favicon.svg.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const out = path.join(root, 'src', 'assets');
const icons = path.join(out, 'icons');
fs.mkdirSync(icons, { recursive: true });

const favicon = fs.readFileSync(path.join(out, 'favicon.svg'));
const og = fs.readFileSync(path.join(__dirname, 'og-image.svg'));

const jobs = [
  // Social share card
  { src: og, w: 1200, h: 630, file: path.join(out, 'og-image.png') },
  // Favicons + touch icon
  { src: favicon, w: 180, h: 180, file: path.join(icons, 'apple-touch-icon.png') },
  { src: favicon, w: 192, h: 192, file: path.join(icons, 'icon-192.png') },
  { src: favicon, w: 512, h: 512, file: path.join(icons, 'icon-512.png') },
  { src: favicon, w: 32, h: 32, file: path.join(icons, 'favicon-32.png') },
];

(async () => {
  for (const j of jobs) {
    await sharp(j.src, { density: 400 })
      .resize(j.w, j.h)
      .png({ compressionLevel: 9 })
      .toFile(j.file);
    const { size } = fs.statSync(j.file);
    console.log(`${path.relative(root, j.file)}  ${j.w}x${j.h}  ${(size / 1024).toFixed(1)} KB`);
  }
})();

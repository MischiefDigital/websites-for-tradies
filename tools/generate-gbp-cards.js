/**
 * Google Business Profile cards.
 *
 *   node tools/generate-gbp-cards.js
 *
 * Produces 1200x1200 square PNGs in tools/gbp-cards/. That size works as both
 * a profile photo and a GBP post image, which matters because the audit wants
 * a weekly posting cadence and these double as the content for it.
 *
 * Brand-matched to the site: WFT Black #0D0D0D, Job Alert Yellow #F5C200.
 *
 * Text is rendered with system fonts (Arial Black), not Inter, because the
 * rasteriser has no access to webfonts. It's close enough at this weight, but
 * ALWAYS look at the output — long strings silently overflow their box.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT = path.join(__dirname, 'gbp-cards');
fs.mkdirSync(OUT, { recursive: true });

const BLACK = '#0D0D0D';
const YELLOW = '#F5C200';
const WHITE = '#FFFFFF';
const GREY = '#9A9A9A';
const CHARCOAL = '#1A1A1A';
const SLATE = '#2E2E2E';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Rough width estimate so we can catch overflow before rendering. */
const widthAt = (text, size, black = true) => text.length * size * (black ? 0.66 : 0.55);

function chrome() {
  return `
  <rect width="1200" height="1200" fill="${BLACK}"/>
  <defs>
    <radialGradient id="glow" cx="0.85" cy="0.1" r="0.6">
      <stop offset="0%" stop-color="${YELLOW}" stop-opacity="0.14"/>
      <stop offset="100%" stop-color="${YELLOW}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="1200" fill="url(#glow)"/>

  <g transform="translate(80, 72) scale(0.62)">
    <rect width="80" height="80" rx="18" fill="${CHARCOAL}"/>
    <path d="M49 15H29c-8 0-14 6-14 14v22c0 8 6 14 14 14h22c8 0 14-6 14-14V38" stroke="${WHITE}" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M55 37v28" stroke="${WHITE}" stroke-width="9" stroke-linecap="round"/>
    <circle cx="60" cy="22" r="10" fill="${YELLOW}"/>
  </g>
  <text x="144" y="116" font-family="Arial Black, Arial" font-size="40" font-weight="900" fill="${WHITE}" letter-spacing="-1">WFT</text>
  <!-- x=260 not 212: "WFT" at 40px Arial Black is ~95px wide, so a tighter
       offset collides with the tagline. Measured, not estimated. -->
  <text x="260" y="116" font-family="Arial" font-size="20" fill="${GREY}">Websites for Tradies</text>

  <rect x="80" y="152" width="90" height="8" rx="4" fill="${YELLOW}"/>

  <text x="80" y="1128" font-family="Arial" font-size="26" fill="${GREY}">websitesfortradies.co.nz</text>
  <text x="1120" y="1128" font-family="Arial" font-size="26" fill="${GREY}" text-anchor="end">027 424 1214</text>`;
}

const CARDS = [
  {
    file: 'offer-price',
    lines: [
      { t: 'ONE FLAT PRICE.', y: 330, size: 78, fill: WHITE },
      { t: 'NOTHING HIDDEN.', y: 420, size: 78, fill: WHITE },
    ],
    hero: { t: 'NZ$1,997', y: 620, size: 150, fill: YELLOW },
    body: [
      { t: 'Website, all copywriting, local SEO,', y: 730, size: 32 },
      { t: '.nz domain and Google Business Profile', y: 776, size: 32 },
      { t: 'setup. One invoice, no scope creep.', y: 822, size: 32 },
    ],
    chip: { t: 'FIRST 10 TRADIES PAY NZ$1,697', y: 900 },
  },
  {
    file: 'seven-days',
    lines: [
      { t: 'YOUR WEBSITE,', y: 340, size: 82, fill: WHITE },
      { t: 'LIVE IN', y: 434, size: 82, fill: WHITE },
    ],
    hero: { t: '7 DAYS', y: 610, size: 150, fill: YELLOW },
    body: [
      { t: 'One 30-minute call. Send us some photos.', y: 720, size: 32 },
      { t: 'We write it, build it and put it live.', y: 766, size: 32 },
      { t: 'That is your entire to-do list.', y: 812, size: 32 },
    ],
    // "7 working days", not "7 days" — the guarantee is defined in working
    // days and these images get seen standalone, without the site's context.
    chip: { t: '7 WORKING DAYS — MISS IT, NZ$200 BACK', y: 890 },
  },
  {
    file: 'guarantee',
    lines: [
      { t: 'NO JOB ENQUIRY', y: 330, size: 76, fill: WHITE },
      { t: 'IN 90 DAYS?', y: 420, size: 76, fill: WHITE },
    ],
    hero: { t: 'WE REBUILD', y: 570, size: 96, fill: YELLOW },
    hero2: { t: 'IT FREE', y: 680, size: 96, fill: YELLOW },
    body: [
      { t: 'And we keep working until you get one.', y: 790, size: 32 },
      { t: 'No other NZ web company offers this.', y: 836, size: 32 },
    ],
    chip: { t: 'FULL CONDITIONS PUBLISHED ON OUR SITE', y: 910 },
  },
  {
    file: 'whats-included',
    lines: [{ t: "WHAT'S INCLUDED", y: 300, size: 80, fill: WHITE }],
    checklist: [
      '5+ page website, built mobile-first',
      'Every word written for you',
      'Local SEO set up before launch',
      'Your .nz domain, registered to you',
      'Google Business Profile set up',
      'Jobs In 90 Guarantee',
    ],
    checklistY: 400,
    chip: { t: 'NZ$1,997 FLAT — YOU OWN IT OUTRIGHT', y: 940 },
  },
  {
    file: 'tradies-only',
    lines: [
      { t: 'WE ONLY BUILD', y: 340, size: 80, fill: WHITE },
      { t: 'FOR TRADIES', y: 434, size: 80, fill: YELLOW },
    ],
    body: [
      { t: 'Sparkies. Plumbers. Chippies. Painters.', y: 560, size: 34 },
      { t: 'Roofers. Drainlayers. Gasfitters.', y: 610, size: 34 },
      { t: 'Tilers. Landscapers.', y: 660, size: 34 },
      { t: '', y: 700, size: 34 },
      { t: 'That focus is why we can quote a flat', y: 750, size: 30 },
      { t: 'price and a 7-day build instead of', y: 792, size: 30 },
      { t: '"it depends" and six weeks.', y: 834, size: 30 },
    ],
    chip: { t: 'NEW ZEALAND ONLY', y: 920 },
  },
];

function buildSvg(card) {
  let s = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">${chrome()}`;
  const warn = [];

  for (const l of card.lines || []) {
    if (widthAt(l.t, l.size) > 1040) warn.push(`headline "${l.t}" at ${l.size}px`);
    s += `<text x="80" y="${l.y}" font-family="Arial Black, Arial" font-size="${l.size}" font-weight="900" fill="${l.fill}" letter-spacing="-2">${esc(l.t)}</text>`;
  }
  for (const h of [card.hero, card.hero2].filter(Boolean)) {
    if (widthAt(h.t, h.size) > 1040) warn.push(`hero "${h.t}" at ${h.size}px`);
    s += `<text x="80" y="${h.y}" font-family="Arial Black, Arial" font-size="${h.size}" font-weight="900" fill="${h.fill}" letter-spacing="-4">${esc(h.t)}</text>`;
  }
  for (const b of card.body || []) {
    if (!b.t) continue;
    if (widthAt(b.t, b.size, false) > 1040) warn.push(`body "${b.t}" at ${b.size}px`);
    s += `<text x="80" y="${b.y}" font-family="Arial" font-size="${b.size}" fill="${GREY}">${esc(b.t)}</text>`;
  }
  if (card.checklist) {
    card.checklist.forEach((item, i) => {
      const y = card.checklistY + i * 82;
      if (widthAt(item, 32, false) > 950) warn.push(`checklist "${item}"`);
      s += `<circle cx="102" cy="${y - 10}" r="20" fill="${YELLOW}"/>`;
      s += `<path d="M92 ${y - 11} l8 8 16 -17" stroke="${BLACK}" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
      s += `<text x="146" y="${y}" font-family="Arial" font-size="34" fill="${WHITE}">${esc(item)}</text>`;
    });
  }
  if (card.chip) {
    const w = Math.min(1040, widthAt(card.chip.t, 24, false) + 56);
    s += `<rect x="80" y="${card.chip.y - 40}" width="${w}" height="60" rx="10" fill="none" stroke="${SLATE}" stroke-width="2"/>`;
    s += `<text x="108" y="${card.chip.y}" font-family="Arial" font-size="24" font-weight="bold" fill="${YELLOW}">${esc(card.chip.t)}</text>`;
  }
  s += `</svg>`;
  return { svg: s, warn };
}

(async () => {
  let warnings = 0;
  for (const card of CARDS) {
    const { svg, warn } = buildSvg(card);
    warn.forEach((w) => { warnings++; console.log(`  ⚠ possible overflow — ${w}`); });
    const file = path.join(OUT, `${card.file}.png`);
    // density 200 renders the 1200pt SVG at 3333px (librsvg uses a 72dpi base),
    // so resize back down explicitly — that gives clean text without shipping
    // an image nearly three times the size Google actually wants.
    const info = await sharp(Buffer.from(svg), { density: 200 })
      .resize(1200, 1200)
      .png({ compressionLevel: 9 })
      .toFile(file);
    const { size } = fs.statSync(file);
    console.log(`${path.relative(path.join(__dirname, '..'), file)}  ${info.width}x${info.height}  ${(size / 1024).toFixed(0)} KB`);
  }
  console.log(warnings ? `\n${warnings} overflow warning(s) — check those cards visually.` : '\nNo overflow warnings. Still worth a visual check.');
})();

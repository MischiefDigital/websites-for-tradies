module.exports = {
  name: "WFT — Websites for Tradies",
  shortName: "WFT",
  legalName: "WFT — Websites for Tradies",
  tagline: "WEBSITES THAT GET JOBS",
  url: "https://www.websitesfortradies.co.nz",
  email: "info@websitesfortradies.co.nz",
  locale: "en-NZ",

  // Offer facts. Single source of truth — referenced in copy, schema and llms.txt
  // so a price change never leaves a stale number somewhere on the site.
  price: "1997",
  priceDisplay: "NZ$1,997",
  foundingPriceDisplay: "NZ$1,697",
  foundingDiscountDisplay: "NZ$300",
  currency: "NZD",
  buildDays: "7 working days",
  guaranteeDays: "90",
  planPriceDisplay: "NZ$249/month",

  // Hosting included in the build price, then the Get Found Plan takes over
  // from day 30. Confirmed by Blair 8 Aug 2026 — the site previously claimed
  // 12 months in schema/llms.txt and one month in the sales copy. State this
  // the same way everywhere; do not reintroduce a second version.
  hostingIncluded: "the first month of hosting",
  planStartsDay: "30",

  formEndpoint: "https://formspree.io/f/xbdwbgog",

  // Brand assets, used by OG tags and schema
  logo: "/assets/icons/icon-512.png",
  ogImage: "/assets/og-image.png",

  // Service-area business: based in Wellington, serving NZ-wide.
  // No street address published — that is correct for an SAB.
  addressLocality: "Wellington",
  addressCountry: "NZ",

  // Regions named in content and mirrored in the Google Business Profile
  // service area. Keep these two in sync.
  areasServed: [
    "Wellington",
    "Auckland",
    "Christchurch",
    "Hamilton",
    "Tauranga",
    "Dunedin",
  ],

  // TODO (Blair): add the real profile URLs once they exist. These feed
  // schema sameAs, which is how Google and AI engines confirm WFT is a real
  // entity rather than a lone domain. Google Business Profile, LinkedIn
  // company page and Facebook page all belong here.
  // Leave empty rather than guessing — a wrong sameAs is worse than none.
  sameAs: [],

  // Business phone. Confirmed 8 Aug 2026.
  // This must match the Google Business Profile and every directory citation
  // byte for byte — see docs/citations-and-nap.md. Change it in one place only.
  //   telephone        E.164, for schema — what Google expects
  //   telephoneDisplay NZ local format, for humans
  //   telephoneLink    for tel: hrefs, no spaces
  telephone: "+64 27 424 1214",
  telephoneDisplay: "027 424 1214",
  telephoneLink: "+64274241214",

  // Bing Webmaster Tools verification code (the value from the msvalidate.01
  // meta tag). Bing's "Import from Google Search Console" cannot see Domain
  // properties — only URL-prefix ones — so this site verifies manually.
  // Bing's index is what ChatGPT search and Copilot query, so this is a GEO
  // move as much as an SEO one. Renders nothing while null.
  bingVerification: "A744F55148D70B55B9E3E1097785071A",

  // TODO (Blair): paste the GA4 Measurement ID ("G-XXXXXXXXXX") here after
  // creating the property and linking it to Search Console. Until it is set,
  // no analytics script loads and no events fire — the site stays clean.
  // Once set, mark "generate_lead" as a key event in GA4 Admin so the audit's
  // form-submission target is actually measurable.
  ga4Id: null,
};

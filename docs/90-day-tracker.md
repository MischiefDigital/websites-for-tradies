# WFT 90-day tracker

Single source of truth for the organic growth plan. Audit roadmap items 1–25,
plus what's been done since.

**Started:** 8 August 2026
**Day 90:** 6 November 2026

---

## Account setup

| # | Task | Status | Notes |
|---|---|---|---|
| 1 | Google Search Console verified | ✅ Done | DNS domain property. Verified before this work started |
| 2 | GSC sitemap submitted | ✅ 8 Aug | 8 URLs discovered at the time, 23 now |
| 3 | GSC indexing requested | ✅ 8 Aug | 6 URLs: /, /pricing, /faq, /guarantee, /how-it-works, /about |
| 4 | Bing Webmaster Tools verified | ✅ 8 Aug | Meta tag. GSC import doesn't work for Domain properties |
| 5 | Bing sitemap submitted | ✅ 8 Aug | |
| 6 | IndexNow configured | ✅ 8 Aug | `npm run indexnow` after any content deploy |
| 7 | GA4 property created and live | ✅ 8 Aug | `G-XW4H1LWMYX`. Verified firing, cookies `_ga` + `_ga_XW4H1LWMYX` |
| 7b | **Data retention set to 14 months** | ⬜ **Blair** | Admin → Data Settings. Defaults to 2 months and discards older data permanently |
| 8 | **GA4 linked to Search Console** | ⬜ **Blair** | Admin → Product links. May need a URL-prefix GSC property — the linker often won't offer Domain properties |
| 9 | **`generate_lead` marked as key event** | ⬜ **Blair** | Admin → Key events → New key event → type `generate_lead`. Can be created before it ever fires |
| 9b | **Google Signals left OFF** | ⬜ **Blair** | Confirm it's off. The privacy policy states it is |
| 10 | Google Business Profile submitted | ✅ 8 Aug | Awaiting postcard verification, 5–12 days |
| 11 | Uptime monitor | ✅ 8 Aug | UptimeRobot. Keyword monitor on the homepage ("Websites That Get Jobs") rather than a plain ping — a failed Vercel build still returns 200 and serves the previous deploy, which a status check would miss. Plus an HTTP check on /pricing/ |
| 12 | PageSpeed Insights run | ✅ 8 Aug | Mobile: Performance 99, Accessibility 98, Best Practices 100, SEO 100. LCP 1.4s, FCP 0.9s, SI 0.9s, TBT 90ms, CLS 0 |

---

## Site build

| Task | Status |
|---|---|
| Eleventy migration, shared layout | ✅ |
| NZ geo qualifier in title and H1 | ✅ |
| `/privacy` and `/terms` | ✅ |
| OG tags, Twitter cards, favicons, share image | ✅ |
| Structured data (Organization, LocalBusiness, breadcrumbs, Service, FAQ, HowTo, Article) | ✅ |
| Auto-generating sitemap | ✅ |
| robots.txt with explicit AI crawler allows | ✅ |
| Branded 404 | ✅ |
| Self-hosted fonts, responsive hero — 111KB mobile, CLS 0 | ✅ |
| Core Web Vitals: inline critical CSS, cache headers, asset hashing, fetchpriority, deferred gtag | ✅ Perf 99, LCP 1.4s |
| WCAG AA contrast — 22 failures fixed | ✅ Accessibility 98 |
| llms.txt, auto-generated from page data | ✅ |
| Real multi-page navigation | ✅ |
| `/pricing`, `/how-it-works`, `/guarantee`, `/faq`, `/about` | ✅ |
| 4 trade pages | ✅ |
| 6 city pages | ✅ |
| Statistics page, 4 guides | ✅ |
| **5 remaining trade pages** | ⬜ roofer, drainlayer, gasfitter, tiler, landscaper |
| **`/examples` proof engine** | ⬜ Needs first founding build to launch |
| **"Wix vs done-for-you" page** | ⬜ Argument exists in the cost guide, not its own URL |

**23 URLs live**, up from 1.

---

## Corrections made

Worth keeping visible — these were live and wrong.

| What | Was | Now |
|---|---|---|
| .nz trust statistic | "74% of Kiwi **consumers**" attributed to InternetNZ | 74% of NZ **businesses** — InternetNZ 2025. Consumer figure is 67% (2022) |
| "81% research online before contact" | Live on 3 pages | Removed — untraceable to any NZ source |
| "2× faster growth with a website" | Live on homepage | Removed — same reason |
| Ahoy Studio price | NZ$1,500+ | NZ$3,395 + GST (their published price) |
| Ahoy Studio SEO | ✕ not included | ✓ included |
| Trades Online copywriting | ✕ not included | ✓ included |
| Trades Online SEO | ✕ not included | ✓ included |
| Hosting period | 12 months in schema, 1 month in copy | First month, then Get Found Plan — consistent everywhere |

---

## Off-site work

| Task | Status | Doc |
|---|---|---|
| **Google Business Profile** | ⬜ | `google-business-profile-setup.md` |
| Bing Places | ⏳ 8 Aug | Submitted, awaiting postcard verification |
| **LinkedIn company page** | ⬜ | `citations-and-nap.md` — no postal verification, can finish today |
| **Facebook business page** | ⬜ | `citations-and-nap.md` — same |
| **Citations — tier 2** (Yellow, Localist, Finda, Neighbourly, NZS) | ⬜ | `citations-and-nap.md` |
| Phone number decided and added to NAP | ✅ 8 Aug | `027 424 1214` — in site.js, schema, footer and contact section |
| **Review requests to founding clients** | ⬜ | `review-requests.md` |
| **Association outreach** | ⬜ | `outreach-and-links.md` — after 3–4 case studies |
| **PR pitch** | ⬜ | `outreach-and-links.md` — after 3–4 case studies |

---

## Weekly check — 15 minutes

| Metric | Where | 90-day target | 12-month target | Current |
|---|---|---|---|---|
| Indexed pages | GSC → Pages | 20+ | 40+ | — |
| Impressions on money keywords | GSC → Performance | Appearing for core + trade terms | Page 1 for "websites for tradies NZ" | — |
| Organic clicks | GSC / GA4 | First consistent weekly clicks | 300+ visits/mo | — |
| Kickoff-call form submits (organic) | GA4 `generate_lead` | 2–4/month | 10–15/month | — |
| Google reviews | GBP | 5–10 | 30+, 4.9 avg | 0 |
| GBP actions (calls, clicks) | GBP Insights | Profile live + first actions | Top-3 map pack, "website designer" Wellington | — |
| Referring domains | GSC → Links | 10+ | 40+ relevant NZ domains | — |
| AI answer presence | Manual, monthly | Named by 1+ engine | Named by default for the category | — |

### The monthly AI check

Ask each of these, log whether WFT is named:

> "Who builds websites for tradies in New Zealand?"

| Month | ChatGPT | Claude | Perplexity | Google AI |
|---|---|---|---|---|
| Sep 2026 | ☐ | ☐ | ☐ | ☐ |
| Oct 2026 | ☐ | ☐ | ☐ | ☐ |
| Nov 2026 | ☐ | ☐ | ☐ | ☐ |

Once WFT appears, screenshot it. That's a sales asset as much as a metric.

---

## Scheduled checks

- **15 Aug 2026** — first indexing check. GSC → Pages, Bing → URL Inspection on
  2–3 URLs. Don't check before this; indexing takes days and earlier data is noise.
- **Weekly from then** — the table above, 15 minutes.
- **Monthly** — the AI presence check.
- **After any content deploy** — `npm run indexnow`.

### Two failure modes no monitor covers

- **Domain expiry.** If the .nz registration lapses the site dies, and the
  monitor tells you after the fact. Put a calendar reminder a month before
  renewal — it is the most avoidable way to lose a website.
- **Formspree outage.** The contact form posts to a third party. If it fails,
  the site is perfectly up and enquiries silently vanish. Nothing technical is
  broken, so nothing alerts. Submit the form yourself once a month and check it
  arrives.

### What would be a red flag

- URLs excluded as *"Duplicate, Google chose different canonical"* → canonical problem
- *"Blocked by robots.txt"* → something changed robots.txt
- *"Discovered — currently not indexed"* persisting past ~3 weeks → authority
  problem, which is what the reviews and citations work addresses

---

## The honest caveat

Straight from the audit, worth re-reading when month two feels slow:

> A new domain with zero authority takes 3–6 months to move meaningfully,
> whatever any agency promises. The plan front-loads everything controllable.
> The compounding assets — reviews, client backlinks, case studies, citable
> stats — are what carry months 4–12.

The site work is largely done. **What moves the needle from here is the Google
Business Profile, reviews from the founding cohort, and case studies with real
numbers.** Those are all off-site, and all of them are Blair's.

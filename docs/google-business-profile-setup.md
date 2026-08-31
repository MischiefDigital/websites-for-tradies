# Google Business Profile — setup pack

Everything below is ready to paste. Audit roadmap item 5, and the single
highest-return unpaid thing available to WFT right now.

**Why this matters more than another page on the site:** the audit's own
timeline says a new domain takes 3–6 months to move on content alone. A Google
Business Profile can appear in local results within days. WFT also sells GBP
setup as Bonus 3 — so its own profile has to be the proof.

Set up at <https://business.google.com>.

---

## 1. Business type — read this before you start

WFT is a **service-area business (SAB)**, not a storefront. That means:

- Register from the Wellington base, then **hide the address**
- Set a service area instead
- Google will still post a verification postcard to the address

Do not skip hiding the address. An SAB showing a residential address gets
filtered out of map results and looks unprofessional to anyone who checks.

---

## 2. Business name

```
WFT - Websites for Tradies
```

**Paste that exactly.** Not "WFT - Websites for Tradies NZ | Web Design
Wellington" or any variation with keywords bolted on.

Google suspends profiles for keyword-stuffed names, the suspension is
retroactive, and getting reinstated takes weeks of back-and-forth with support.
The name must match what's on the website, which it now does.

---

## 3. Categories

| Slot | Category |
|---|---|
| **Primary** | Website designer |
| Secondary | Marketing agency |
| Secondary | Internet marketing service |

The primary category does most of the ranking work — "Website designer" is
what people searching for this actually type. Don't make Marketing agency
primary; it's a broader, more contested category where WFT would rank worse.

---

## 4. Service area

Start with regions WFT can genuinely serve and names on the site:

```
Wellington Region
Auckland Region
Canterbury
Waikato
Bay of Plenty
Otago
```

These match the six city pages, which is deliberate — Google cross-references
your profile against your website, and consistency helps.

Don't add all of New Zealand as a blanket area. Over-broad service areas get
diluted in ranking, and the site can always say "NZ-wide" in the description.

---

## 4b. Hours and phone

```
Phone:  027 424 1214
Hours:  Monday–Friday, 7:00am – 7:00pm
        Saturday, Sunday — closed
```

**These must match the website.** The site's `LocalBusiness` schema publishes
the same 07:00–19:00 weekday hours, and Google cross-references profile against
site. If you change one, change both — the site's copy comes from
`openingHours` in `src/_data/site.js`.

Why 7am–7pm rather than 9–5: tradies ring before they start and after they
knock off. Standard business hours would show "Closed" at exactly the moment
this audience is free to think about it.

**Turn messaging on** regardless, so out-of-hours contact has a path that
doesn't depend on you picking up.

**Set special hours for public holidays.** Google prompts you before each one.
Profiles showing "Open" on Christmas Day get reported by users, and Google acts
on those reports.

---

## 5. Description

750-character limit. This one is 718 — paste as-is.

```
WFT builds websites for New Zealand tradies. One flat price of NZ$1,997, live in 7 working days, with everything included: copywriting, mobile-first design, local SEO, your .nz domain, hosting setup and Google Business Profile optimisation.

We only build for trades — electricians, plumbers, builders, painters, roofers, drainlayers, gasfitters, tilers and landscapers. That focus is why we can quote a flat price and a 7-day build instead of a vague estimate and six weeks.

Backed by the Jobs In 90 Guarantee: if your website doesn't generate at least one genuine job enquiry within 90 days of going live, we rebuild it free and keep working until it does. No other NZ web company offers this.

You own your site and your domain outright. No lock-in contracts.

Based in Wellington, building for tradies across Aotearoa.
```

---

## 6. Services

Add each of these as a service. Mirrors the offer stack on the site.

| Service | Description (paste into each) |
|---|---|
| Tradie website design | A complete 5+ page website built for a New Zealand trade business. Mobile-first, fast, built to generate phone calls. Live in 7 working days. |
| Website copywriting | We interview you for 30 minutes and write every word — headlines, service pages, about page. You just approve it. |
| Local SEO setup | Suburb and service-area targeting, meta tags and structured data, set up before launch so Google knows your trade and territory from day one. |
| Google Business Profile setup | We create or fully optimise your Google Business Profile so you appear in the local map pack where tradies actually get found. |
| Website hosting | NZ hosting with SSL, security and daily backups. First month included in your build. |

---

## 7. Website link — use the tagged version

```
https://www.websitesfortradies.co.nz/?utm_source=google&utm_medium=organic&utm_campaign=gbp
```

Without the tags, GBP traffic lands in GA4 as generic organic and you can't
tell whether the profile is working. With them, it's a filterable segment.

Already verified: the apex→www redirect preserves query strings, so the tags
survive even if someone reaches the link the long way round.

---

## 8. Photos

Google weights profiles with real photos, and empty profiles look abandoned.

**Minimum before you consider this done:**

- [ ] Logo (square, the WFT mark — `src/assets/icons/wft-icon-512.png` works)
- [ ] Cover photo (landscape — `src/assets/og-image.png` is 1200×630 and on-brand)
- [ ] The five brand cards in `tools/gbp-cards/` (see below)
- [ ] A real photo of Blair. The audit is specific that real faces beat stock
      for E-E-A-T, and this is also still missing from `/about`
- [ ] Screenshots of your own site — mobile ones especially, since that's what
      tradies view on. Your product is websites and you've built one
- [ ] Screenshots of each founding build as it launches

### The brand cards

`tools/gbp-cards/` holds five 1200×1200 PNGs, brand-matched to the site:

| File | Says |
|---|---|
| `offer-price.png` | One flat price, NZ$1,997 |
| `seven-days.png` | Live in 7 working days |
| `guarantee.png` | No enquiry in 90 days, we rebuild free |
| `whats-included.png` | The six inclusions |
| `tradies-only.png` | We only build for tradies |

Upload all five under **Photos → By owner**. They also work as **GBP post**
images, which covers the weekly posting cadence the audit asks for — one card
a week gets you through the first five weeks without having to make anything.

Regenerate after any offer change:

```bash
node tools/generate-gbp-cards.js
```

Text renders with system fonts rather than Inter, so **look at the output**
after editing. The estimator catches gross overflow but not everything.

**Don't** use stock photos of generic tradies. The audience is tradies. They
can tell, and it undercuts the "no fake reviews" positioning the whole site
runs on.

---

## 9. Messaging and Q&A

**Turn messaging on.** Tradies often message rather than ring.

**Seed the Q&A yourself.** You're allowed to ask and answer your own questions,
and it's better than leaving it blank for a competitor to fill. Post these from
a personal account, then answer from the business account:

| Question | Answer |
|---|---|
| How much does a tradie website cost? | NZ$1,997 flat, one time. That covers the build, all copywriting, local SEO setup, your .nz domain and Google Business Profile setup. No add-ons, no scope creep. Full breakdown at websitesfortradies.co.nz/pricing |
| How long does it take? | 7 working days from your kickoff call. If we miss that deadline without giving you 48 hours' notice, we credit NZ$200 off your invoice. |
| What happens if the website doesn't bring in work? | We rebuild it free and keep working until it does. That's the Jobs In 90 Guarantee — conditions are published in full at websitesfortradies.co.nz/guarantee |
| Do you only work with tradies? | Yes, and only in New Zealand. Electricians, plumbers, builders, painters, roofers, drainlayers, gasfitters, tilers and landscapers. That focus is what makes the flat price and 7-day build possible. |
| Do I own the website? | Yes, outright — the site and the domain. No lock-in contracts, and you can host it anywhere you like. |

---

## 10. After it's live

- [ ] Add the profile URL to `src/_data/site.js` under `sameAs` — it's empty
      and waiting. That's how Google confirms the site and the profile are the
      same entity
- [ ] Post to the profile **weekly**. Active profiles rank; abandoned ones sink
- [ ] Reply to every review within 24 hours
- [ ] Screenshot the ranking progress. The audit's sharpest point: this is the
      Get Found Plan applied to WFT itself — run the playbook, screenshot the
      results, sell the screenshots

---

## Verification checklist

- [ ] Name is exactly `WFT - Websites for Tradies`, no keywords added
- [ ] Address hidden, service area set
- [ ] Primary category is Website designer
- [ ] Phone `027 424 1214`, formatted exactly as the NAP block
- [ ] Hours set to Mon–Fri 7:00am–7:00pm, matching the site schema
- [ ] All five services added with descriptions
- [ ] Description pasted (718 chars, under the 750 limit)
- [ ] Website link includes the UTM tags
- [ ] Logo, cover and a real founder photo uploaded
- [ ] Messaging enabled
- [ ] All five Q&As seeded and answered
- [ ] Verification postcard received and code entered
- [ ] Profile URL added to `site.js` `sameAs`

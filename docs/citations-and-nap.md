# Citations and NAP consistency

Audit roadmap item 12. Three hours of dull work that Google uses to decide
whether WFT is a real business.

**What a citation is:** any listing of your business name, address and phone
number on another website. Search engines cross-reference them. Consistent
citations across many sites say "real, established business". Inconsistent ones
say "possibly defunct, possibly two different companies", and that ambiguity
suppresses local ranking.

**The rule that matters more than which directories you pick:** the details
must be **byte-for-byte identical everywhere**. "Ltd" in one place and "Limited"
in another is a mismatch. So is "021 123 4567" versus "0211234567".

---

## The NAP block — copy this, never retype it

Confirmed 8 August 2026. **Copy and paste it. Do not retype it from memory** —
that is exactly how "027 424 1214" becomes "0274241214" on one directory and
breaks the consistency Google is checking for.

```
Name:     WFT - Websites for Tradies
Address:  Wellington, New Zealand
          (service-area business — no street address published)
Phone:    027 424 1214
Email:    info@websitesfortradies.co.nz
Website:  https://www.websitesfortradies.co.nz
Category: Website designer
```

**Phone formatting:** use `027 424 1214` — spaced, with the leading zero —
everywhere a directory shows it to humans. If a form demands international
format, use `+64 27 424 1214`. Never mix the two within a single listing.

**Short description** (for directories with a tight limit):

```
WFT builds websites for New Zealand tradies. NZ$1,997 flat, live in 7 working days, with a 90-day job enquiry guarantee. Copywriting, local SEO and Google Business Profile setup included.
```

**Long description** (250 words, for directories with room):

```
WFT builds websites exclusively for New Zealand trade businesses — electricians, plumbers, builders, painters, roofers, drainlayers, gasfitters, tilers and landscapers.

One flat price of NZ$1,997 covers everything: a 5+ page mobile-first website, all copywriting, local SEO setup, your .nz domain, hosting and SSL, and Google Business Profile optimisation. Live in 7 working days from your kickoff call.

Most web agencies build anything for anyone, which is why they take six weeks and quote four figures before they've started. We only build for trades. That focus is what makes a flat price and a 7-day build possible without cutting corners.

Every build is backed by two guarantees, both published in full on our website. The 7-Day Launch Pledge: if we miss the deadline without 48 hours' notice, you get NZ$200 credited off your invoice. The Jobs In 90 Guarantee: if your site doesn't generate at least one genuine job enquiry within 90 days of going live, we rebuild it free and keep working until it does.

You own your website and your domain outright. There are no lock-in contracts and you can host it anywhere.

WFT is based in Wellington and builds for trade businesses across Aotearoa New Zealand.
```

---

## Where to list — in this order

Work down. The first four are worth more than the rest combined.

### Tier 1 — do these first

| Directory | URL | Notes |
|---|---|---|
| **Google Business Profile** | business.google.com | See `google-business-profile-setup.md`. Nothing else comes close in value. |
| **Bing Places** | bingplaces.com | Bing feeds ChatGPT search and Copilot. Already verified in Webmaster Tools, so this is quick. |
| **LinkedIn company page** | linkedin.com/company/setup/new | Also strengthens the entity graph via Blair's personal profile. |
| **Facebook business page** | facebook.com/pages/create | Even if barely used — it's a citation and people check. |

### Tier 2 — NZ directories

| Directory | URL | Notes |
|---|---|---|
| Yellow NZ | yellow.co.nz | Free basic listing via yellow.co.nz/list-your-business — public form, no pre-existing account needed. Ignore the upsell calls. |
| Localist | localist.co.nz | NZ-owned, decent domain authority. Listing requires creating an account ("Get Started") **and a registered business — blocked for now**: WFT is a trading name of Mischief Digital (sole trader), not a registered entity. Unblock by getting a free sole-trader NZBN (nzbn.govt.nz) with WFT recorded as a trading name, or skip. **Never list as "Mischief Digital"** — a citation under a different name is worse than no citation. |
| Finda | finda.co.nz | ~~Free listing~~ — **no longer free** (checked 31 Aug 2026, Blair). Skipped: a paid tier-2 citation isn't worth it. Revisit only if it ever matters for a keyword Finda actually ranks for. |
| Neighbourly | neighbourly.co.nz | Community-focused, genuinely used in NZ. Hard sign-in wall — and **business pages aren't free either** (checked 31 Aug 2026, Blair). Skipped for the same reason as Finda. |
| ~~NZ Business Directory~~ | ~~nzs.com~~ | **Defunct — checked 31 Aug 2026.** The domain no longer serves the NZ directory (it now shows a Chinese domain-services page, and HTTPS is broken). Do not list here. |

**Recon notes, 31 Aug 2026:** Yellow's listing form was pre-filled with the NAP
block (name, phone, email, website, category "Web Site Development" — their
closest to "Website designer" — and location display set to "Do not display",
correct for an SAB). Still needed to submit: the real street address (required
by the form but hidden from the public listing), the terms tick, the reCAPTCHA
and the Create Listing click. The other three all gate listings behind account
signup, so they need the same person-with-the-password each time.

### Tier 3 — worth it once the above are done

- Yelp NZ
- Trustpilot — the audit flags that the **Australian** namesake owns Trustpilot
  results for this brand name. A WFT NZ profile helps reclaim the brand SERP
- Crunchbase (if you want the startup-press angle later)

---

## What NOT to do

- **Don't pay for bulk citation services.** They generate hundreds of listings
  on worthless directories, frequently with mangled details, and cleaning up
  inconsistent citations is harder than creating good ones.
- **Don't vary the description to "avoid duplicate content".** Directory
  listings aren't judged that way, and varying the NAP details is actively
  harmful.
- **Don't list a fake street address** to look more established. Google
  cross-references, and a mismatch between a claimed address and an SAB profile
  is a suspension risk.

---

## Tracking

Log each one as you go, so the next person to touch this knows what exists.

| Directory | Listed | URL | Details match NAP block |
|---|---|---|---|
| Google Business Profile | ☐ | | ☐ |
| Bing Places | ☐ | | ☐ |
| LinkedIn | ☑ | https://www.linkedin.com/company/wft-websites-for-tradies/ | ☐ verify against NAP block |
| Facebook | ☐ | | ☐ |
| Yellow NZ | ☑ submitted 31 Aug 2026 | listing URL pending — Yellow emails once processed (info@) | ☐ verify once live |
| Localist | ☐ | | ☐ |
| Finda | — skipped (paid) | | |
| Neighbourly | — skipped (paid) | | |
| ~~NZ Business Directory~~ | defunct | | |

**When Google, LinkedIn and Facebook are live**, add all three URLs to
`sameAs` in `src/_data/site.js`. That array is deliberately empty right now —
it's how the site tells Google and AI engines that these profiles are the same
entity as the website. A wrong URL there is worse than none, which is why it's
waiting for real ones.

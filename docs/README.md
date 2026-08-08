# WFT docs

Working documents for the organic growth plan. **Not published** — `docs/` sits
outside `src/`, so nothing here is copied into the build or the sitemap.

| File | What it's for |
|---|---|
| [`90-day-tracker.md`](90-day-tracker.md) | **Start here.** Status of every task, the weekly metrics check, and what's blocked on whom |
| [`google-business-profile-setup.md`](google-business-profile-setup.md) | Paste-ready GBP setup: name, categories, service area, description, services, seeded Q&A |
| [`citations-and-nap.md`](citations-and-nap.md) | The canonical NAP block and the directory list, in priority order |
| [`review-requests.md`](review-requests.md) | Templates for launch-day, follow-up, 90-day check-in and case-study asks, plus how to reply |
| [`outreach-and-links.md`](outreach-and-links.md) | Association and PR pitch templates, and what not to do |

## What's blocking what

Two things gate a lot of the off-site work:

1. **The phone number.** Undecided. Every citation must match it byte-for-byte,
   so listing anywhere before it's settled means redoing them.
2. **The Google Business Profile.** Gates reviews, which gate case studies,
   which gate the PR pitch.

Neither is a big job. Both are on the critical path.

## Related config

`src/_data/site.js` has three fields deliberately left empty, each with a TODO:

- `ga4Id` — no analytics script renders until it's set
- `telephone` — must match the NAP block above
- `sameAs` — GBP, LinkedIn and Facebook URLs once they exist. A wrong value
  here is worse than none, which is why it's empty rather than guessed

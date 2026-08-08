/**
 * Trade pages. One entry per trade, each holding its OWN copy.
 *
 * The audit is blunt about this: "No find-and-replace pages: Google demotes
 * doorway pages and tradies smell templated copy instantly." So the shared
 * thing here is structure, not words. Every pain point, search pattern, trust
 * signal and example headline below is specific to that trade — swap the trade
 * name into another entry and the content stops making sense, which is the
 * test this file has to keep passing.
 *
 * NZ licensing facts used below:
 *   Electricians  — Electrical Workers Registration Board (EWRB)
 *   Plumbers      — Plumbers, Gasfitters and Drainlayers Board (PGDB)
 *   Builders      — Licensed Building Practitioner (LBP) scheme
 *   Painters      — no licensing regime at all, which changes the whole pitch
 */
module.exports = [
  {
    slug: "electricians",
    trade: "Electrician",
    plural: "electricians",
    slang: "sparkie",
    order: 1,

    title: "Websites for Electricians NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ electricians that bring in jobs. EWRB registration front and centre, built for emergency searches. NZ$1,997 flat, live in 7 working days.",
    heading: "Websites for New Zealand electricians",
    intro:
      "Your customer is standing in a dark hallway with a tripped board and a phone in their hand. Whoever they find first, and trust fastest, gets the call. That's the job your website has to do.",

    howTheySearch:
      "Electrical work splits into two completely different searches. One is panicked and immediate — no power, burning smell, dead socket — typed one-handed at 9pm and decided in seconds. The other is planned and researched: an EV charger, a switchboard upgrade, a full rewire before a renovation. A site built only for the second kind loses every one of the first kind, and vice versa. Yours needs to answer both above the fold.",

    painPoints: [
      {
        title: "Emergency callers don't scroll",
        body: "Someone with no power isn't reading your company history. If your phone number isn't tappable within a second of landing, they've hit back and called the next sparkie. We put the call button where the panic is.",
      },
      {
        title: "Nobody can tell you're registered",
        body: "EWRB registration is the difference between you and the bloke doing cash jobs off Facebook Marketplace — and most electricians' websites bury it, or leave it off entirely. It belongs in the header, not the footer.",
      },
      {
        title: "EV charger work is being won by whoever shows up",
        body: "It's one of the fastest-growing electrical searches in New Zealand and most sparkies have no page for it at all. A dedicated page beats a bullet point on a services list every time.",
      },
      {
        title: "Compliance paperwork is a selling point you're not using",
        body: "Certificates of Compliance and Electrical Safety Certificates sound like admin to you. To a homeowner they're the difference between a claim being paid and an insurer pointing at uncertified work — and most people don't know that until it matters. We write them as reassurance, not jargon.",
      },
    ],

    trustSignals: [
      "EWRB registration number, displayed where people actually look",
      "Certificate of Compliance and ESC explained in plain English",
      "Public liability cover",
      "Master Electricians membership, if you have it",
    ],

    pagesYouNeed: [
      { name: "Emergency callouts", why: "Its own page, because it's its own search and its own urgency." },
      { name: "EV charger installation", why: "Growing fast, barely contested, and a higher-value job than a socket swap." },
      { name: "Switchboard upgrades and rewires", why: "The planned, researched, high-value work." },
      { name: "New builds and renovations", why: "Where the builder relationships and repeat work come from." },
      { name: "Your service area", why: "Suburb by suburb, so 'electrician [suburb]' actually finds you." },
    ],

    exampleHeadline: "No power? We'll have a registered sparkie at your door today.",
    exampleSub:
      "EWRB registered, fully insured, and we turn up when we say we will. Emergency callouts across [your area], seven days.",

    faqs: [
      {
        q: "Will the site show my EWRB registration?",
        a: "Yes, and prominently — in the header, on the about page, and near every call to action. It's the single strongest trust signal an electrician has, and it separates you from unregistered operators instantly. We'll ask for your registration number on the kickoff call.",
      },
      {
        q: "Can it handle emergency callouts differently to booked work?",
        a: "That's the main thing we design around. Emergency traffic gets a tappable phone number above the fold and a page built to convert in seconds. Planned work like EV chargers and rewires gets proper pages with detail, because that customer is comparing three quotes and reading everything.",
      },
    ],
  },

  {
    slug: "plumbers",
    trade: "Plumber",
    plural: "plumbers",
    slang: "plumber",
    order: 2,

    title: "Websites for Plumbers NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ plumbers built for emergency search. PGDB registration up front, callout terms clear, hot water and blocked drains covered. NZ$1,997 flat.",
    heading: "Websites for New Zealand plumbers",
    intro:
      "No trade gets searched in more of a hurry than plumbing. A burst pipe at 11pm is the most motivated customer in New Zealand, and they will call whoever looks trustworthy first. Your website's whole job is to be that.",

    howTheySearch:
      "Plumbing has the shortest decision window of any trade. Water is actively damaging someone's house while they search, so they're not comparing three quotes — they're calling the first plumber who looks legitimate and answers. That means your site is judged in about four seconds, on a phone, probably one-handed, often in the dark. Everything else about it matters less than that.",

    painPoints: [
      {
        title: "Hidden callout fees cost you the job before you quote",
        body: "The number one thing people fear about emergency plumbing is being gouged while panicking. Publishing your callout fee and hourly rate feels like a risk. It isn't — it's the reason people ring you instead of the plumber who won't say.",
      },
      {
        title: "Your registration is invisible",
        body: "PGDB registration is legally meaningful and most customers don't know to check for it. Put it on the page and explain what it means and you've separated yourself from every handyman who calls themselves a plumber.",
      },
      {
        title: "Hot water cylinders are a whole search you're missing",
        body: "'No hot water' and 'hot water cylinder replacement' are high-intent, high-value searches with their own page-worthy detail — sizing, electric vs gas vs heat pump, how fast you can get one in. A line on a services list won't rank for any of it.",
      },
      {
        title: "After-hours availability isn't stated",
        body: "If you take 11pm calls, that has to be the loudest thing on the page. If you don't, saying so honestly saves you being woken up — and stops a bad review from someone who expected otherwise.",
      },
    ],

    trustSignals: [
      "PGDB registration, and craftsman plumber status if you hold it",
      "Callout fee and hourly rate, stated plainly",
      "After-hours and weekend availability, or clear hours if not",
      "Public liability cover and workmanship guarantee",
    ],

    pagesYouNeed: [
      { name: "Emergency plumbing", why: "The highest-urgency, highest-converting page you'll have." },
      { name: "Blocked drains", why: "Its own search, its own equipment, its own price question." },
      { name: "Hot water cylinders", why: "High value, genuinely researched, and a page competitors rarely bother with." },
      { name: "Bathroom renovations", why: "The planned work with the biggest ticket." },
      { name: "Your service area", why: "'Emergency plumber [suburb]' is the money query. It needs a page to land on." },
    ],

    exampleHeadline: "Burst pipe? We answer the phone at 2am.",
    exampleSub:
      "PGDB registered plumbers across [your area]. $[X] callout, no surprises on the invoice, and we tell you the price before we start.",

    faqs: [
      {
        q: "Should I really publish my callout fee?",
        a: "We'd push you to, yes. The customer's biggest fear in an emergency is being taken advantage of while they're desperate. Being the plumber who says the number up front converts better than being the one who makes them ring to find out — and it filters out the price-shoppers who were never going to book you anyway. It's your call, and we'll build it either way.",
      },
      {
        q: "Can the site make it obvious I do after-hours work?",
        a: "Yes, and it should be the loudest thing on the page if you do. We'll design around it — a persistent header bar with a tappable number and your hours. If you don't take after-hours calls, we say so plainly instead, which protects you from bad reviews for calls you never agreed to take.",
      },
    ],
  },

  {
    slug: "builders",
    trade: "Builder",
    plural: "builders",
    slang: "chippie",
    order: 3,

    title: "Websites for Builders NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ builders and chippies. LBP status, real project galleries and guarantees that answer the cowboy-builder fear. NZ$1,997 flat, live in 7 days.",
    heading: "Websites for New Zealand builders",
    intro:
      "Nobody hires a builder in four seconds. They research for weeks, ask three mates, and check whether you're the sort of outfit that finishes what it starts. Your website is where that scrutiny happens, and most builders' sites fail it.",

    howTheySearch:
      "Building is the opposite of plumbing. The decision takes weeks or months, involves a partner, and often a lot of money — a renovation is the largest cheque most people write after the house itself. They'll visit your site several times, compare you against two or three others, and look hard for reasons to rule you out. That long, sceptical, repeat-visit behaviour is what the site has to be built for.",

    painPoints: [
      {
        title: "The leaky homes era is still costing you",
        body: "New Zealanders have a long memory for building that went wrong, and every homeowner has heard a horror story about a job abandoned halfway. You're being screened for that whether you like it or not. A site that addresses it directly beats one that pretends it isn't happening.",
      },
      {
        title: "Your best work is sitting on your phone",
        body: "Building is the most visual trade there is and most builders' sites have four photos, three of them of the same deck. Finished-work galleries with real projects are the single biggest lever you have, and they cost nothing but the time to send them to us.",
      },
      {
        title: "LBP means nothing if you don't explain it",
        body: "Homeowners know Restricted Building Work requires a Licensed Building Practitioner but most couldn't tell you why it matters. Explaining it turns a licence number into a reason to choose you.",
      },
      {
        title: "'How much will it cost' goes unanswered",
        body: "Nobody expects a fixed price for a renovation off a website. They do expect a range, a sense of what drives it, and how your quoting works. Silence on price reads as something to hide.",
      },
    ],

    trustSignals: [
      "LBP number and what Restricted Building Work actually means",
      "Master Builders or Certified Builders membership and the guarantee that comes with it",
      "Real project galleries with location and scope",
      "How you quote, and what a variation actually costs",
    ],

    pagesYouNeed: [
      { name: "New builds", why: "The biggest jobs and the longest research cycle." },
      { name: "Renovations and extensions", why: "The highest search volume in residential building." },
      { name: "Decks and outdoor", why: "Smaller, faster-converting work that brings in the bigger jobs later." },
      { name: "Project gallery", why: "The page that does the actual selling. Every finished job feeds it." },
      { name: "Your process and guarantees", why: "Where you answer the cowboy-builder fear before they have to ask." },
    ],

    exampleHeadline: "Renovations that finish on time, by an LBP builder who answers the phone.",
    exampleSub:
      "Licensed Building Practitioner working across [your area]. Fixed quotes, a written programme, and a Master Build guarantee on every job.",

    faqs: [
      {
        q: "I don't have professional photos of my work. Is that a problem?",
        a: "No. Phone photos of real finished jobs beat professional photos of someone else's work every single time — and homeowners can tell the difference immediately. Send us what you've got from the last couple of years. Ten to twenty good ones is plenty, and we'll build the gallery around them.",
      },
      {
        q: "Should the site show prices for renovations?",
        a: "Not fixed prices, no — that's not how building works and nobody expects it. But a range, what pushes a job to the top or bottom of it, and a clear explanation of how you quote will beat a page that says nothing. Saying nothing reads as having something to hide, which is exactly the fear you're trying to defuse.",
      },
    ],
  },

  {
    slug: "painters",
    trade: "Painter",
    plural: "painters",
    slang: "painter",
    order: 4,

    title: "Websites for Painters NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ painters and decorators. Before-and-afters that sell, prep work explained, and a way to stop competing on price alone. NZ$1,997 flat.",
    heading: "Websites for New Zealand painters and decorators",
    intro:
      "Painting has no licensing regime, no registration board and no barrier to entry. Anyone with a brush and a ute can call themselves a painter — which means your website isn't just marketing, it's the only thing separating you from them.",

    howTheySearch:
      "Painting gets price-shopped harder than almost any other trade. Homeowners ring three painters, get three numbers, and unless something makes the difference obvious, they take the cheapest. Your site's job is to make the difference obvious before the quote conversation happens — because once it's three numbers on a page, you've already lost the argument.",

    painPoints: [
      {
        title: "You're being compared on price alone",
        body: "With no licence to point to, there's nothing structural separating a fifteen-year operator from a bloke who started last month. If your site doesn't show the difference, the customer has nothing to judge on but the number at the bottom of the quote.",
      },
      {
        title: "Prep is where you win and nobody sees it",
        body: "Every painter says they prep properly. The ones who actually do can prove it — photos of the sanding, the filling, the priming, the masking. That's the content that justifies being $2,000 dearer, and almost nobody publishes it.",
      },
      {
        title: "Your before-and-afters are your whole sales pitch",
        body: "Painting is the most visually dramatic trade there is. A tired weatherboard villa next to the finished result sells better than any paragraph either of us could write. Most painters' sites have none.",
      },
      {
        title: "Cheap quotes that blow out are your best argument",
        body: "Everyone's been burned by a low quote that grew, or a paint job that failed in two winters. Explaining what a proper job actually includes turns your higher price into the safe choice rather than the expensive one.",
      },
    ],

    trustSignals: [
      "Years operating and number of homes completed",
      "The paint systems you use and why, especially for exterior work",
      "Your workmanship guarantee and what it actually covers",
      "Dulux or Resene accreditation if you hold it",
    ],

    pagesYouNeed: [
      { name: "Exterior house painting", why: "The biggest jobs and the most weather-dependent, so worth its own detail." },
      { name: "Interior painting", why: "Faster turnaround work with a different customer conversation entirely." },
      { name: "Roof painting", why: "Its own specialist search, and higher value than most realise." },
      { name: "Before and after gallery", why: "The page that closes the sale. Nothing else on the site works as hard." },
      { name: "What proper prep looks like", why: "The page that stops you competing on price alone." },
    ],

    exampleHeadline: "The paint job that still looks right in five years.",
    exampleSub:
      "Full prep, proper systems, and a written guarantee. Interior and exterior painting across [your area] since [year].",

    faqs: [
      {
        q: "How does a website stop me competing on price?",
        a: "By moving the conversation before the quote. If a homeowner has already seen your before-and-afters, read what your prep actually involves, and understood why a cheap job fails in two winters, your number arrives with context. If they meet your price cold against two others, it's just the biggest one. That shift is most of the value here.",
      },
      {
        q: "I'm not accredited with anything. Does that hurt me?",
        a: "Less than you'd think. Painting has no licensing regime, so customers aren't looking for a licence number — they're looking for evidence you do good work and won't disappear. Years operating, real photos, a written guarantee and genuine reviews do that job. Accreditation helps if you have it, but it isn't the thing that wins you the job.",
      },
    ],
  },
];

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

  {
    slug: "roofers",
    trade: "Roofer",
    plural: "roofers",
    slang: "roofer",
    order: 5,

    title: "Websites for Roofers NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ roofers. Built for storm-season urgency, insurance work and a customer who can't see the job. NZ$1,997 flat, live in 7 days.",
    heading: "Websites for New Zealand roofers",
    intro:
      "Roofing has a problem no other trade has quite so badly: your customer cannot see the work. They're standing on the ground taking your word for what's happening eight metres up. Everything about how you sell has to account for that.",

    howTheySearch:
      "Roofing demand arrives in weather. A southerly front comes through, half a suburb discovers a leak on the same night, and everyone searches at once. That means your visibility has to already be in place before the storm — you cannot build it during one. The other half of your work is the opposite: planned replacements researched over months, where the customer is comparing longrun against tile and trying to understand why quotes differ by fifteen thousand dollars.",

    painPoints: [
      {
        title: "The customer can't inspect what they paid for",
        body: "Nobody climbs up to check. That makes roofing unusually exposed to cowboys, and unusually rewarding for anyone who documents their work — drone or ladder photos of the finished job, before and after, handed over at the end. Almost nobody does it, and it converts.",
      },
      {
        title: "Storm work arrives all at once or not at all",
        body: "After a big blow you cannot answer the phone fast enough; three weeks later it's silent. A site that's already ranking captures the surge instead of losing it to whoever's ad budget is bigger that week.",
      },
      {
        title: "Insurance work is a different conversation entirely",
        body: "Storm damage claims mean assessors, scopes of work and reports. Homeowners dealing with an insurer for the first time are lost, and a roofer who explains that process plainly wins jobs before quoting on price at all.",
      },
      {
        title: "Height safety is a selling point, not just compliance",
        body: "Scaffolding and edge protection add cost, and a cheaper quote often means someone is skipping them. Saying so — and explaining what your quote includes — reframes being dearer as being legitimate.",
      },
    ],

    trustSignals: [
      "Public liability cover and the amount",
      "Height safety and scaffolding as part of your quote, not an extra",
      "Manufacturer warranties on the material you install",
      "Your own workmanship warranty and its length",
    ],

    pagesYouNeed: [
      { name: "Emergency leak repairs", why: "Storm-night searches with no patience for scrolling." },
      { name: "Roof replacement", why: "The high-value planned job with the longest research cycle." },
      { name: "Insurance and storm damage", why: "A page competitors rarely write, for a customer who badly needs it." },
      { name: "Roof types you work with", why: "Longrun, tile, membrane — people search the material, not just 'roofer'." },
      { name: "Completed jobs gallery", why: "The only way a customer sees work they physically cannot inspect." },
    ],

    exampleHeadline: "Roof leaking? We'll have it watertight before the next front hits.",
    exampleSub:
      "Emergency repairs and full replacements across [your area]. Fully insured, scaffolded properly, and you get photos of everything we did up there.",

    faqs: [
      {
        q: "Most of my work comes after storms. Is a website worth it?",
        a: "That's the strongest argument for one, not against. Storm demand is a surge you either capture or miss, and you cannot build search visibility during the week you need it — ranking takes months. A site that's already there when the front comes through picks up work that otherwise goes to whoever appears first. The quiet weeks are when it gets built.",
      },
      {
        q: "Should the site cover insurance claim work?",
        a: "Yes, and it's usually the least contested page a roofer can have. A homeowner with storm damage and an insurer they've never dealt with is anxious and searching for someone who'll handle it. Explaining how the process works — assessor, scope, what you provide — wins that job on competence rather than price.",
      },
    ],
  },

  {
    slug: "drainlayers",
    trade: "Drainlayer",
    plural: "drainlayers",
    slang: "drainlayer",
    order: 6,

    title: "Websites for Drainlayers NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ drainlayers. Built for PGDB registration, council consent work and the builders who send you jobs. NZ$1,997 flat, live in 7 working days.",
    heading: "Websites for New Zealand drainlayers",
    intro:
      "Drainlaying splits down the middle: householders in a panic about a blocked line, and builders or developers who need consented work signed off properly. Those two customers want completely different things, and most drainlayers' websites speak to neither.",

    howTheySearch:
      "The domestic side is urgent and symptom-led — people search what they can see, which is an overflowing gully trap or a toilet that won't clear, not 'drainlayer'. The commercial side barely searches at all; builders and developers find you through relationships and then check you exist. Your site has to convert a panicking homeowner in seconds and reassure a project manager who is verifying you're registered and can produce as-builts.",

    painPoints: [
      {
        title: "People search the symptom, not your trade",
        body: "'Blocked drain', 'sewage smell outside', 'gully trap overflowing'. Almost nobody types 'drainlayer' until they've already worked out that's who they need. Pages built around the symptom pick up the search your competitors' service lists miss.",
      },
      {
        title: "Registration separates you from a bloke with a jetter",
        body: "Drainlaying is PGDB-registered work for good reason, and plenty of operators offer to clear a drain without being registered to do anything more. Putting your registration up front is the whole difference on a job that needs consent.",
      },
      {
        title: "Consents and as-builts are what builders actually care about",
        body: "For developers and builders, the question isn't whether you can dig — it's whether the paperwork will be right and the inspection will pass first time. Saying you handle council consenting and provide as-built plans speaks directly to the person handing out repeat work.",
      },
      {
        title: "CCTV inspection sells itself if people know you do it",
        body: "Camera work turns an argument about what's wrong into evidence, and it's the natural upsell before any excavation. It's also a search in its own right that most drainlayers never claim.",
      },
    ],

    trustSignals: [
      "PGDB registration number for drainlaying",
      "Council consent applications handled as part of the job",
      "As-built plans provided on completion",
      "CCTV inspection equipment and what the footage gets you",
    ],

    pagesYouNeed: [
      { name: "Blocked drains", why: "Highest-urgency domestic search, and the one people actually type." },
      { name: "CCTV drain inspection", why: "Its own search, and the diagnosis that precedes the bigger job." },
      { name: "New drainage and subdivisions", why: "Speaks to builders and developers rather than homeowners." },
      { name: "Consents and council approvals", why: "The page that wins repeat commercial work." },
      { name: "Drain repairs and relining", why: "The middle-value work between a blockage and a full replacement." },
    ],

    exampleHeadline: "Blocked drain? Camera down it, and you'll see exactly what we see.",
    exampleSub:
      "PGDB registered drainlayers across [your area]. Domestic blockages, new drainage, and consented work with as-builts provided.",

    faqs: [
      {
        q: "Most of my work comes from builders. Do I need a website?",
        a: "For winning new builder relationships, yes — because that's exactly when someone checks you out. A project manager deciding whether to try you looks you up first, and finding a real site that mentions consenting, as-builts and your PGDB registration answers their actual question. It won't replace the relationships you have; it helps you start new ones.",
      },
      {
        q: "Should I write pages about blocked drains when I'd rather do new work?",
        a: "Worth thinking about carefully. Blockage pages bring volume, and volume of low-value callouts is not what everyone wants. If you'd rather focus on consented new work, we build the site around that and keep blockages as a smaller section. The site should reflect the work you want more of, not just the work that gets searched most.",
      },
    ],
  },

  {
    slug: "gasfitters",
    trade: "Gasfitter",
    plural: "gasfitters",
    slang: "gasfitter",
    order: 7,

    title: "Websites for Gasfitters NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ gasfitters. Built around PGDB registration, gas safety and certification customers don't know to ask for. NZ$1,997 flat.",
    heading: "Websites for New Zealand gasfitters",
    intro:
      "Gasfitting is the one trade where the customer's underlying worry is that someone might get hurt. That changes what the website has to do — it isn't selling convenience, it's selling the confidence that this was done by someone legally allowed to do it.",

    howTheySearch:
      "Gas searches split three ways. Something's wrong and possibly dangerous — a smell of gas, a heater behaving oddly — and that person needs a phone number immediately. Something's broken, usually a califont or hot water, and they want it working today. Or something's being installed, a hob or a fireplace, and they're comparing quotes. The first group will not read your about page. The third will read everything.",

    painPoints: [
      {
        title: "Customers don't know registration is legally required",
        body: "Most people have no idea gasfitting is restricted work, or that an unregistered person doing it is committing an offence. Explaining that, plainly and without scaremongering, immediately separates you from whoever offered to do it cheaper.",
      },
      {
        title: "The Gas Safety Certificate is proof nobody advertises",
        body: "You issue certification on certifying work. Homeowners don't know to ask for it, and insurers absolutely will if something goes wrong. Making it visible turns compliance into a reason to pick you.",
      },
      {
        title: "Califont and hot water searches are constant",
        body: "'No hot water' and 'califont not working' run all year and convert fast, because the alternative is cold showers. Most gasfitters bury this under a generic services list.",
      },
      {
        title: "LPG and natural gas are different conversations",
        body: "Bottled versus reticulated changes the install, the cost and often whether it's possible at all. Customers don't know which they have. A page that explains the difference catches people at the research stage.",
      },
    ],

    trustSignals: [
      "PGDB gasfitting registration, and certifying status if you hold it",
      "Gas Safety Certificates issued on certifying work",
      "Public liability cover",
      "Manufacturer accreditations for the brands you install",
    ],

    pagesYouNeed: [
      { name: "Gas leaks and emergencies", why: "Highest urgency there is. Needs a tappable number and nothing else in the way." },
      { name: "Califont and hot water", why: "Year-round volume and a customer who will not wait." },
      { name: "Gas hob and cooktop installation", why: "Planned, researched, and frequently tied to a kitchen renovation." },
      { name: "Gas fireplaces and heaters", why: "Strongly seasonal — worth ranking before winter rather than during it." },
      { name: "LPG vs natural gas", why: "The question people search before they know what to ask for." },
    ],

    exampleHeadline: "Smell gas? Ring now. Registered gasfitters, certified work, no shortcuts.",
    exampleSub:
      "PGDB registered gasfitting across [your area]. Califonts, hobs, fireplaces and emergency callouts — with a Gas Safety Certificate on every certifying job.",

    faqs: [
      {
        q: "Should the site lead with safety or with the service?",
        a: "Both, in different places. Emergency traffic wants a phone number and evidence you're registered, above the fold, with nothing to scroll past. Planned work — a hob, a fireplace — wants detail, options and pricing context. Leading with fear on every page is exhausting and reads as a sales tactic; leading with competence and letting the certification do the reassuring works better.",
      },
      {
        q: "I'm registered for both plumbing and gasfitting. How should that work?",
        a: "Usually as one business with both clearly represented, rather than splitting them. Dual registration is a genuine advantage — one person for the bathroom renovation and the califont — and customers like not having to coordinate two trades. We'd give each its own pages so both sets of searches land properly, with the dual registration as a selling point across the site.",
      },
    ],
  },

  {
    slug: "tilers",
    trade: "Tiler",
    plural: "tilers",
    slang: "tiler",
    order: 8,

    title: "Websites for Tilers NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ tilers. Waterproofing as the real skill, before-and-afters that sell, and a way off the per-square-metre price fight. NZ$1,997 flat.",
    heading: "Websites for New Zealand tilers",
    intro:
      "Tiling gets bought on a square metre rate, which is a terrible way to buy it. The thing that actually determines whether a bathroom is still sound in ten years is the waterproofing underneath — and that's invisible by the time anyone sees the job.",

    howTheySearch:
      "Most tiling searches start with a room, not a trade: bathroom renovation, kitchen splashback, new build floors. The customer is usually mid-project and often already talking to a builder. That means a lot of your work arrives through other trades, and a lot of the searching is people trying to work out what it should cost before they commit.",

    painPoints: [
      {
        title: "You're quoted against on rate, judged on waterproofing",
        body: "A per-square-metre comparison hides the only part that matters. Explaining what your prep and membrane work involves — and what happens to a bathroom where it was skipped — is how you stop being compared on the wrong number.",
      },
      {
        title: "Waterproofing failures are catastrophic and expensive",
        body: "A leaking shower doesn't stay a leaking shower; it becomes rotten framing and a five-figure repair. Homeowners who've had it happen, or know someone who has, will pay properly to avoid it. They just need to know you're the one who does it properly.",
      },
      {
        title: "Your best work is invisible in a photo",
        body: "A finished bathroom looks much the same whoever tiled it. Progress photos — substrate, membrane, the flood test — are what separates you visually, and almost nobody publishes them.",
      },
      {
        title: "Builders send work, but only after checking you",
        body: "A lot of tiling comes through builders and renovation companies. They look you up before the first job, and a real site with real work makes that decision easy.",
      },
    ],

    trustSignals: [
      "The waterproofing membrane systems you use and why",
      "Producer statements where the job requires one",
      "Years tiling and rough number of bathrooms completed",
      "Your workmanship guarantee, and what it covers",
    ],

    pagesYouNeed: [
      { name: "Bathroom tiling and waterproofing", why: "The highest-value work and the one with real fear attached." },
      { name: "Kitchen splashbacks", why: "Smaller, faster jobs that often lead to the bigger ones." },
      { name: "Floor tiling", why: "New builds and renovations, frequently via builders." },
      { name: "What proper waterproofing involves", why: "The page that gets you off the square metre rate." },
      { name: "Completed work gallery", why: "Finished rooms plus progress shots — the progress shots do the selling." },
    ],

    exampleHeadline: "The bathroom that's still watertight in ten years.",
    exampleSub:
      "Tiling and waterproofing across [your area]. Proper membrane systems, flood tested before we tile, and photos of every stage you'd otherwise never see.",

    faqs: [
      {
        q: "Everyone asks for a per square metre price. How do I get past that?",
        a: "By answering a question they haven't asked yet. A rate is only comparable if the work underneath is identical, and it usually isn't — the difference is substrate prep and waterproofing. If your site has already explained that before you quote, your number lands as a different product rather than a dearer version of the same one. You'll still lose some jobs on price. You'll lose fewer of the ones worth having.",
      },
      {
        q: "Most of my work comes through builders. Does a website help?",
        a: "It helps you get the next builder rather than keep the current ones. When someone new considers using you, they look you up — and a site showing real bathrooms, your waterproofing approach and a guarantee makes that an easy yes. It also picks up homeowners renovating without a main contractor, which is usually better-paid work.",
      },
    ],
  },

  {
    slug: "landscapers",
    trade: "Landscaper",
    plural: "landscapers",
    slang: "landscaper",
    order: 9,

    title: "Websites for Landscapers NZ | Live in 7 Days — WFT",
    description:
      "Websites for NZ landscapers. Separate design, build and maintenance properly, show the transformations, and stop being mistaken for a mowing service.",
    heading: "Websites for New Zealand landscapers",
    intro:
      "Landscaping covers everything from a fortnightly mow to a six-figure design-and-build, and the word means all of it. If your website doesn't make clear which end you're at, you'll spend your week quoting jobs you didn't want.",

    howTheySearch:
      "This is the most visual trade there is and the searching reflects it — people look at pictures long before they read anything, and they're often gathering ideas rather than ready to buy. It's also strongly seasonal: spring brings a surge of people who've spent winter looking at their section through the window. Ranking needs to exist before that, not during it.",

    painPoints: [
      {
        title: "Design, build and maintenance are three businesses",
        body: "A customer wanting a courtyard designed and a customer wanting hedges trimmed are not the same lead, and quoting the wrong one wastes everyone's day. Separating them on the site filters enquiries before they reach your phone.",
      },
      {
        title: "You're being mistaken for a mowing round",
        body: "Plenty of landscapers doing serious construction get rung about lawns, because the site doesn't signal otherwise. Showing built work — retaining, paving, decks, planting schemes — sets the expectation before anyone dials.",
      },
      {
        title: "Before-and-afters are the entire sales pitch",
        body: "No trade transforms a space as visibly as this one. A tired section next to the finished result sells better than anything either of us could write, and most landscaping sites have four photos of a nice lawn.",
      },
      {
        title: "The spring rush is won in winter",
        body: "Enquiries spike when the weather turns and everyone is booked within a fortnight. Search rankings take months to build, so the work that captures spring has to happen in the off season.",
      },
    ],

    trustSignals: [
      "Whether you design, build, maintain, or all three — stated plainly",
      "Consent knowledge for retaining walls and structures that need it",
      "Real project galleries with scale and location",
      "How you quote a build, and what a variation costs",
    ],

    pagesYouNeed: [
      { name: "Landscape design", why: "The highest-value entry point, and a different customer to construction." },
      { name: "Hard landscaping and construction", why: "Paving, retaining, decks — the searches with real budget attached." },
      { name: "Planting and soft landscaping", why: "Frequently the follow-on job, and its own search." },
      { name: "Garden maintenance", why: "Only if you want it. Leaving it off is a legitimate filter." },
      { name: "Before and after gallery", why: "The page that converts. Everything else supports it." },
    ],

    exampleHeadline: "The section you keep meaning to do something about.",
    exampleSub:
      "Landscape design and construction across [your area]. Retaining, paving, decks and planting — with a proper plan before anyone picks up a spade.",

    faqs: [
      {
        q: "I do everything from mowing to full builds. Should the site say that?",
        a: "It should say it in a way that sorts people, rather than presenting it as one undifferentiated list. Separate pages for design, construction and maintenance mean each customer lands somewhere written for them, and you can see from the enquiries which side is growing. If you'd rather stop doing maintenance eventually, the site is the easiest place to start steering that.",
      },
      {
        q: "When should I build the site if spring is my busy season?",
        a: "Now, or at least well before spring. A new site takes months to gain search visibility, so building it in September to catch the September rush is too late — you'd be paying for something that starts working around the time the season ends. Winter is the right time to build for the following spring.",
      },
    ],
  },
];

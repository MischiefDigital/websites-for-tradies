/**
 * Site navigation. Single source of truth for the header menu and footer
 * columns, so a new page is linked from everywhere by adding one entry.
 *
 * The audit's core finding was that anchor-only navigation (#offer, #how,
 * #contact) meant Google could only ever rank this domain for one keyword
 * cluster. These are real URLs.
 *
 * The trade and city pages are reached through /trades/ and /locations/ hubs
 * rather than being listed individually in the header. Fifteen items in a nav
 * bar is unusable, and hub pages concentrate internal link equity better than
 * a flat list — but every page still has a real navigation path, which is what
 * separates a legitimate landing page from a doorway page.
 */
module.exports = {
  // Header menu, left to right
  primary: [
    { text: "Pricing", url: "/pricing/" },
    { text: "Trades", url: "/trades/" },
    { text: "Locations", url: "/locations/" },
    { text: "How it works", url: "/how-it-works/" },
    { text: "Examples", url: "/example-builds/" },
    { text: "Guarantee", url: "/guarantee/" },
    { text: "About", url: "/about/" },
  ],

  // Footer columns
  footer: [
    {
      heading: "The offer",
      links: [
        { text: "What you get", url: "/pricing/" },
        { text: "How it works", url: "/how-it-works/" },
        { text: "Our guarantees", url: "/guarantee/" },
        { text: "Book a kickoff call", url: "/#contact" },
      ],
    },
    {
      heading: "By trade",
      links: [
        { text: "All trades", url: "/trades/" },
        { text: "Electricians", url: "/websites-for-electricians/" },
        { text: "Plumbers", url: "/websites-for-plumbers/" },
        { text: "Builders", url: "/websites-for-builders/" },
        { text: "Painters", url: "/websites-for-painters/" },
        { text: "Roofers", url: "/websites-for-roofers/" },
        { text: "Drainlayers", url: "/websites-for-drainlayers/" },
        { text: "Gasfitters", url: "/websites-for-gasfitters/" },
        { text: "Tilers", url: "/websites-for-tilers/" },
        { text: "Landscapers", url: "/websites-for-landscapers/" },
      ],
    },
    {
      heading: "By city",
      links: [
        { text: "All locations", url: "/locations/" },
        { text: "Auckland", url: "/tradie-websites-auckland/" },
        { text: "Wellington", url: "/tradie-websites-wellington/" },
        { text: "Christchurch", url: "/tradie-websites-christchurch/" },
        { text: "Hamilton", url: "/tradie-websites-hamilton/" },
        { text: "Tauranga", url: "/tradie-websites-tauranga/" },
        { text: "Dunedin", url: "/tradie-websites-dunedin/" },
      ],
    },
    {
      heading: "Company",
      links: [
        { text: "About WFT", url: "/about/" },
        { text: "Example builds", url: "/example-builds/" },
        { text: "Common questions", url: "/faq/" },
        { text: "NZ website statistics", url: "/nz-tradie-website-statistics/" },
      ],
    },
    {
      heading: "Guides",
      links: [
        { text: "What it costs in NZ", url: "/guides/tradie-website-cost-nz/" },
        { text: "Wix vs done-for-you", url: "/guides/wix-vs-done-for-you-tradie-website/" },
        { text: "Do tradies need a website?", url: "/guides/do-tradies-need-a-website/" },
        { text: "Facebook page vs website", url: "/guides/facebook-page-vs-website-for-tradies/" },
        { text: "NZ companies compared", url: "/guides/best-tradie-website-companies-nz/" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { text: "Privacy Policy", url: "/privacy/" },
        { text: "Terms of Service", url: "/terms/" },
      ],
    },
  ],
};

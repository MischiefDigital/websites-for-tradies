/**
 * Site navigation. Single source of truth for the header menu and footer
 * columns, so a new page is linked from everywhere by adding one entry.
 *
 * The audit's core finding was that anchor-only navigation (#offer, #how,
 * #contact) meant Google could only ever rank this domain for one keyword
 * cluster. These are real URLs.
 */
module.exports = {
  // Header menu, left to right
  primary: [
    { text: "Pricing", url: "/pricing/" },
    { text: "How it works", url: "/how-it-works/" },
    { text: "Guarantee", url: "/guarantee/" },
    { text: "FAQ", url: "/faq/" },
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
        { text: "Electricians", url: "/websites-for-electricians/" },
        { text: "Plumbers", url: "/websites-for-plumbers/" },
        { text: "Builders", url: "/websites-for-builders/" },
        { text: "Painters", url: "/websites-for-painters/" },
      ],
    },
    {
      heading: "By city",
      links: [
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
        { text: "Common questions", url: "/faq/" },
        { text: "NZ website statistics", url: "/nz-tradie-website-statistics/" },
      ],
    },
    {
      heading: "Guides",
      links: [
        { text: "What it costs in NZ", url: "/guides/tradie-website-cost-nz/" },
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

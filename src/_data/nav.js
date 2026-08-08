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
      heading: "Company",
      links: [
        { text: "About WFT", url: "/about/" },
        { text: "Common questions", url: "/faq/" },
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

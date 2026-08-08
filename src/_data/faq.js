/**
 * Single source of truth for the homepage FAQ.
 *
 * Both the visible accordion and the FAQPage structured data render from this
 * list. They previously drifted — the schema advertised two questions that
 * appeared nowhere on the page ("What happens after the 12 months of hosting?"
 * and "Why is WFT so much cheaper than other NZ agencies?"), which breaches
 * Google's FAQPage guidelines: the answer must be visible to the user.
 *
 * Answers are plain text. Keep them quotable — AI engines lift clean,
 * self-contained sentences and skip marketing fog.
 */
module.exports = [
  {
    q: "I'm not tech-savvy at all. Will I have to do much?",
    a: "Nope. Your entire to-do list: (1) a 30-minute kickoff call, (2) send through some photos of your work. We handle everything else — writing, designing, setting up Google, hosting. You approve the final site. That's it. Most clients say it was the easiest thing they've done for their business.",
  },
  {
    q: "What if I already have a website?",
    a: "If your current site isn't bringing in enquiries, isn't mobile-friendly, or just looks dated — we rebuild it completely. Same offer, same price, same guarantee. Live in 7 working days.",
  },
  {
    q: 'What exactly is the "Jobs In 90" guarantee?',
    a: "If your new website doesn't generate at least one genuine job enquiry within 90 days of going live, we rebuild from scratch for free and keep going until you do. Conditions: provide photos and approve copy within 5 working days, stay on the Get Found Plan for the 90-day period (a site that isn't actively managed can't be guaranteed to rank), and ask past customers for Google reviews. That's it.",
  },
  {
    q: "How can you offer a guarantee no one else does?",
    a: "We only build for tradies, so we're not reinventing the wheel every job — that focus lets us move in 7 days and stand behind the result. Every other agency takes your money and wishes you luck. We only win if you get jobs. That's why the guarantee exists, and why no one else offers it.",
  },
  {
    q: "Why does the .nz domain matter?",
    a: "InternetNZ research shows 74% of Kiwi consumers trust .nz domains more than .com. It's a small thing that makes a real difference to whether someone picks up the phone. It's included in your price.",
  },
  {
    q: "What happens with hosting after the first month?",
    a: "The first month of hosting is included in your build price. From day 30 it continues under the Get Found Plan at NZ$249/month, which also covers your Google Business Profile management, ongoing local SEO, review generation and reporting. If you'd rather not take the plan, that's fine — you own the website and the domain outright, so you can host them anywhere and we'll hand over the files. You'd be giving up the guarantee and the ongoing SEO work, not your website.",
  },
  {
    q: "Do I have to take the monthly plan?",
    a: "Your site is yours outright — you can host it anywhere. But the Get Found Plan is what keeps you ranking, managed and reviewed, and it's required to keep your Jobs In 90 Guarantee active. Most founding tradies stay on it because that's where the jobs actually come from. No lock-in — cancel any time.",
  },
];

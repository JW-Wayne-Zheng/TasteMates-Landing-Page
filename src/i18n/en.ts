/**
 * The site's English copy, and the shape every other language must match: a
 * missing or misspelled key in a translation fails the build.
 *
 * Product names, the company name and the email address stay in Latin script
 * in every language. Keystone and Nomad taglines stay deliberately vague.
 */
export const en = {
  meta: {
    title: "TasteMates Labs – Software worth opening twice",
    description:
      "TasteMates Labs builds focused, private apps for learning and everyday life, including Dev Path, interview prep that explains how things work.",
  },
  skip: "Skip to content",
  nav: {
    home: "TasteMates Labs home",
    primary: "Primary",
    apps: "Apps",
    about: "About",
    contact: "Contact",
    language: "Language",
  },
  theme: {
    label: {
      system: "Appearance: match system",
      light: "Appearance: light",
      dark: "Appearance: dark",
    },
    switchTo: {
      system: "Switch to match system.",
      light: "Switch to light.",
      dark: "Switch to dark.",
    },
  },
  store: {
    get: {
      "google-play": "Get it on Google Play",
      "app-store": "Download on the App Store",
    },
    comingSoon: {
      "google-play": "Coming soon to Google Play",
      "app-store": "Coming soon to the App Store",
    },
  },
  hero: {
    title: ["Software worth", "opening twice."],
    lede: "TasteMates Labs builds focused, private apps that are a pleasure to come back to.",
    seeApps: "See our apps",
    contact: "Contact us",
  },
  apps: {
    title: "Our apps.",
    inDevelopment: "In development",
    learnMore: (name: string) => `Learn more about ${name}`,
  },
  privacy: {
    title: "Private by design.",
    lede: "We collect only what an app needs to work, and we don't sell your data. Each app's privacy policy spells out what it stores and why.",
    promises: [
      { title: "Only what's needed", body: "Each app collects only what it needs to work." },
      { title: "Never sold", body: "We don't sell your data." },
      { title: "Clear policies", body: "Each app's privacy policy says what it stores and why." },
    ],
    policyLink: (name: string) => `${name} privacy policy`,
  },
  about: {
    title: ["About", "TasteMates Labs."],
    body: [
      "TasteMates Labs is a software company that designs and publishes apps for learning and everyday life. We keep our catalog small so that every app gets the attention it deserves: thoughtful design, careful updates and real answers when you write to us.",
      "Each app we publish follows the same principles. It does one job well, it respects your privacy, and it asks only for what it needs.",
    ],
    legal: "TasteMates Labs LLC is a limited liability company registered in Pennsylvania, United States.",
  },
  contact: {
    title: "Get in touch.",
    lede: "For app support, feedback and business inquiries, email us and we'll get back to you.",
    email: (address: string) => `Email ${address}`,
  },
  footer: {
    apps: "Apps",
    legal: "Legal",
    company: "Company",
    about: "About",
    contact: "Contact",
    policyLink: (name: string) => `${name} Privacy Policy`,
    copyright: (year: number) => `Copyright © ${year} TasteMates Labs LLC. All rights reserved.`,
    trademarks: "Google Play is a trademark of Google LLC. App Store is a service mark of Apple Inc.",
  },
  products: {
    devPath: {
      tagline: "Interview prep that explains how things work.",
      summary:
        "From a student's first technical interview to the staff-level design round. Concepts, coding patterns and worked questions, each taken one level deeper than most prep material goes.",
      // Empty in English: the note only tells other readers the app is in English.
      languageNote: "",
      privacyNote: "Dev Path has no account, no ads and no tracking. Your progress stays on your device.",
      shots: {
        trace: "Dev Path tracing a binary search step by step",
        home: "The Dev Path home screen with the career path and technical library",
        diagram: "Dev Path walking through a B-tree, one page fetch at a time",
      },
      figures: {
        lessons: "career lessons",
        topics: "technical topics",
        cards: "practice cards",
        accounts: "accounts needed",
      },
      featuresTitle: "Reading that sticks.",
      features: {
        work: {
          title: "It shows the work.",
          body: "Every coding pattern is traced over a real input, step by step, so you can see why the loop stops where it does.",
          alt: "A step-by-step trace table",
        },
        system: {
          title: "It draws the system.",
          body: "Ninety diagrams, from B-tree pages to Kafka offsets. Tap any of them to study it full screen.",
          alt: "A diagram of page fetches in a B-tree",
        },
        back: {
          title: "It asks you back.",
          body: "Spaced-repetition cards and timed mock interviews turn what you read into answers you can give out loud.",
          alt: "An exercise with a timebox and a self-check",
        },
        grows: {
          title: "It grows with you.",
          body: "Each page shows what good looks like for a student, a junior, a senior and a staff engineer.",
          alt: "The technical library organised by track",
        },
      },
    },
    keystone: { tagline: "The right hands for the job, closer than you think." },
    nomad: { tagline: "For everything you're ready to pass on." },
  },
};

export type Strings = typeof en;

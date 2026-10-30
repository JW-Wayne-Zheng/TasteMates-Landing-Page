/**
 * Every product the site shows comes from this list.
 *
 * To launch a new app, add an entry here. It appears in the Apps grid, gets
 * its own showcase section (if `showcase` is set) and its links in the footer.
 * Put its icon and screenshots under public/<id>/ and its privacy policy at
 * public/<id>/privacy.html, so every product follows the same URL pattern.
 *
 * An app still being built gets `status: "in-development"` and only a
 * codename and one line. When it launches, switch it to "available" and fill
 * in the rest; it then joins the footer and the privacy links automatically.
 */

export type StoreLink =
  | { store: "google-play" | "app-store"; url: string }
  | { store: "google-play" | "app-store"; comingSoon: true };

export type Shot = { src: string; alt: string };

export type Feature = { title: string; body: string; shot: Shot };

/**
 * A line symbol that stands in for an app icon while the app is in
 * development: SVG path data on a 24-unit grid, stroked, or filled if `fill`.
 */
export type Glyph = { d: string; fill?: boolean }[];

export type Product = {
  /** Used for the page anchor (#id) and the public/<id>/ folder. */
  id: string;
  status: "available" | "in-development";
  /** The app's name, or a codename while it is in development. */
  name: string;
  /** One line, shown on the Apps grid and under the name. */
  tagline: string;
  /** Two or three sentences for the showcase. */
  summary?: string;
  /** Omitted while in development; the card shows `glyph` instead. */
  icon?: string;
  glyph?: Glyph;
  /** Brand colour for this product's showcase. Must read well on black. */
  accent: string;
  stores: StoreLink[];
  privacyUrl?: string;
  /** Optional: a full section on the home page. */
  showcase?: {
    /** Three screenshots: left, centre, right. */
    shots: [Shot, Shot, Shot];
    figures: { value: string; label: string }[];
    featuresTitle: string;
    features: Feature[];
  };
};

export const PRODUCTS: Product[] = [
  {
    id: "dev-path",
    status: "available",
    name: "Dev Path",
    tagline: "Interview prep that explains how things work.",
    summary:
      "From a student's first technical interview to the staff-level design round. Concepts, coding patterns and worked questions, each taken one level deeper than most prep material goes.",
    icon: "/dev-path/icon.png",
    accent: "#2bb592",
    stores: [
      {
        store: "google-play",
        url: "https://play.google.com/store/apps/details?id=com.tastemates.devpath",
      },
      { store: "app-store", comingSoon: true },
    ],
    privacyUrl: "/dev-path/privacy",
    showcase: {
      shots: [
        { src: "/images/devpath-02-trace.jpg", alt: "Dev Path tracing a binary search step by step" },
        { src: "/images/devpath-01-home.jpg", alt: "The Dev Path home screen with the career path and technical library" },
        { src: "/images/devpath-03-diagram.jpg", alt: "Dev Path walking through a B-tree, one page fetch at a time" },
      ],
      figures: [
        { value: "36", label: "career lessons" },
        { value: "75", label: "technical topics" },
        { value: "580", label: "practice cards" },
        { value: "0", label: "accounts needed" },
      ],
      featuresTitle: "Reading that sticks.",
      features: [
        {
          title: "It shows the work.",
          body: "Every coding pattern is traced over a real input, step by step, so you can see why the loop stops where it does.",
          shot: { src: "/images/devpath-02-trace.jpg", alt: "A step-by-step trace table" },
        },
        {
          title: "It draws the system.",
          body: "Ninety diagrams, from B-tree pages to Kafka offsets. Tap any of them to study it full screen.",
          shot: { src: "/images/devpath-03-diagram.jpg", alt: "A diagram of page fetches in a B-tree" },
        },
        {
          title: "It asks you back.",
          body: "Spaced-repetition cards and timed mock interviews turn what you read into answers you can give out loud.",
          shot: { src: "/images/devpath-06-exercise.jpg", alt: "An exercise with a timebox and a self-check" },
        },
        {
          title: "It grows with you.",
          body: "Each page shows what good looks like for a student, a junior, a senior and a staff engineer.",
          shot: { src: "/images/devpath-07-library.jpg", alt: "The technical library organised by track" },
        },
      ],
    },
  },
  // In development. Deliberately vague until they launch.
  {
    id: "keystone",
    status: "in-development",
    name: "Keystone",
    tagline: "The right hands for the job, closer than you think.",
    // An arch, held together by its keystone.
    glyph: [
      { d: "M3.5 20.5v-7a8.5 8.5 0 0 1 17 0v7" },
      { d: "M7.5 20.5v-7a4.5 4.5 0 0 1 9 0v7" },
      { d: "M10.3 4.9h3.4l-.7 4.2h-2Z", fill: true },
    ],
    accent: "#e2852e",
    stores: [],
  },
  {
    id: "nomad",
    status: "in-development",
    name: "Nomad",
    tagline: "For everything you're ready to pass on.",
    // A path from one place to the next.
    glyph: [
      { d: "M8 18a2 2 0 1 1-4 0a2 2 0 1 1 4 0" },
      { d: "M20 6a2 2 0 1 1-4 0a2 2 0 1 1 4 0" },
      { d: "M7.5 16.5c3-3 1-6 4.5-8.5 1.5-1 3-1.5 4.5-1.6" },
    ],
    accent: "#7bc8da",
    stores: [],
  },
];

/** Apps people can download now: these get footer and privacy links. */
export const RELEASED = PRODUCTS.filter((p) => p.status === "available");

export const STORE_LABEL: Record<StoreLink["store"], string> = {
  "google-play": "Google Play",
  "app-store": "the App Store",
};

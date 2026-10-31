/**
 * Every product the site shows comes from this list.
 *
 * To launch a new app, add an entry here. It appears in the Apps grid, gets
 * its own showcase section (if `showcase` is set) and its links in the footer.
 * Put its icon and screenshots under public/<id>/ and its privacy policy at
 * public/<id>/privacy.html, so every product follows the same URL pattern.
 * Its copy goes under `products` in each language file in src/i18n/.
 *
 * An app still being built gets `status: "in-development"` and only a
 * codename and one line. When it launches, switch it to "available" and fill
 * in the rest; it then joins the footer and the privacy links automatically.
 */

import { useMemo } from "react";
import { useI18n } from "./i18n";
import type { Strings } from "./i18n/en";

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
  /** Says the app is English-only, on pages in other languages. */
  languageNote?: string;
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

function buildProducts(copy: Strings["products"]): Product[] {
  const dev = copy.devPath;
  return [
    {
      id: "dev-path",
      status: "available",
      name: "Dev Path",
      tagline: dev.tagline,
      summary: dev.summary,
      languageNote: dev.languageNote,
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
          { src: "/images/devpath-02-trace.jpg", alt: dev.shots.trace },
          { src: "/images/devpath-01-home.jpg", alt: dev.shots.home },
          { src: "/images/devpath-03-diagram.jpg", alt: dev.shots.diagram },
        ],
        figures: [
          { value: "36", label: dev.figures.lessons },
          { value: "75", label: dev.figures.topics },
          { value: "580", label: dev.figures.cards },
          { value: "0", label: dev.figures.accounts },
        ],
        featuresTitle: dev.featuresTitle,
        features: [
          {
            title: dev.features.work.title,
            body: dev.features.work.body,
            shot: { src: "/images/devpath-02-trace.jpg", alt: dev.features.work.alt },
          },
          {
            title: dev.features.system.title,
            body: dev.features.system.body,
            shot: { src: "/images/devpath-03-diagram.jpg", alt: dev.features.system.alt },
          },
          {
            title: dev.features.back.title,
            body: dev.features.back.body,
            shot: { src: "/images/devpath-06-exercise.jpg", alt: dev.features.back.alt },
          },
          {
            title: dev.features.grows.title,
            body: dev.features.grows.body,
            shot: { src: "/images/devpath-07-library.jpg", alt: dev.features.grows.alt },
          },
        ],
      },
    },
    // In development. Deliberately vague until they launch.
    {
      id: "keystone",
      status: "in-development",
      name: "Keystone",
      tagline: copy.keystone.tagline,
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
      tagline: copy.nomad.tagline,
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
}

/**
 * The list in the visitor's language. `released` is the apps people can
 * download now: these get footer and privacy links.
 */
export function useProducts() {
  const { t } = useI18n();
  return useMemo(() => {
    const products = buildProducts(t.products);
    return { products, released: products.filter((p) => p.status === "available") };
  }, [t]);
}

import type { Strings } from "./en";

export const fr: Strings = {
  meta: {
    title: "TasteMates Labs – Des logiciels qu'on rouvre avec plaisir",
    description:
      "TasteMates Labs crée des applis ciblées et respectueuses de la vie privée pour apprendre et pour le quotidien, dont Dev Path, la préparation aux entretiens qui explique comment les choses fonctionnent.",
  },
  skip: "Aller au contenu",
  nav: {
    home: "Accueil TasteMates Labs",
    primary: "Navigation principale",
    apps: "Applis",
    about: "À propos",
    contact: "Contact",
    language: "Langue",
  },
  theme: {
    label: {
      system: "Apparence : comme le système",
      light: "Apparence : claire",
      dark: "Apparence : sombre",
    },
    switchTo: {
      system: "Passer au réglage du système.",
      light: "Passer en clair.",
      dark: "Passer en sombre.",
    },
  },
  store: {
    get: {
      "google-play": "Disponible sur Google Play",
      "app-store": "Télécharger dans l'App Store",
    },
    comingSoon: {
      "google-play": "Bientôt sur Google Play",
      "app-store": "Bientôt sur l'App Store",
    },
  },
  hero: {
    title: ["Des logiciels qu'on", "rouvre avec plaisir."],
    lede: "TasteMates Labs crée des applis ciblées et respectueuses de la vie privée, qu'on a plaisir à retrouver.",
    seeApps: "Voir nos applis",
    contact: "Nous contacter",
  },
  apps: {
    title: "Nos applis.",
    inDevelopment: "En développement",
    learnMore: (name) => `En savoir plus sur ${name}`,
  },
  privacy: {
    title: "Privées dès la conception.",
    lede: "Nous ne collectons que ce dont une appli a besoin pour fonctionner, et nous ne vendons pas vos données. La politique de confidentialité de chaque appli précise ce qu'elle stocke et pourquoi.",
    promises: [
      { title: "Le strict nécessaire", body: "Chaque appli ne collecte que ce dont elle a besoin pour fonctionner." },
      { title: "Jamais vendues", body: "Nous ne vendons pas vos données." },
      { title: "Des politiques claires", body: "La politique de confidentialité de chaque appli précise ce qu'elle stocke et pourquoi." },
    ],
    policyLink: (name) => `Politique de confidentialité de ${name} (en anglais)`,
  },
  about: {
    title: ["À propos de", "TasteMates Labs."],
    body: [
      "TasteMates Labs est une société de logiciels qui conçoit et publie des applis pour apprendre et pour le quotidien. Notre catalogue reste volontairement restreint afin que chaque appli reçoive l'attention qu'elle mérite : un design réfléchi, des mises à jour soignées et de vraies réponses quand vous nous écrivez.",
      "Chaque appli que nous publions suit les mêmes principes : elle fait bien une seule chose, respecte votre vie privée et ne demande que ce dont elle a besoin.",
    ],
    legal: "TasteMates Labs LLC est une société à responsabilité limitée enregistrée en Pennsylvanie, aux États-Unis.",
  },
  contact: {
    title: "Nous contacter.",
    lede: "Pour l'assistance sur nos applis, vos commentaires et les demandes professionnelles, écrivez-nous par e-mail et nous vous répondrons.",
    email: (address) => `Écrire à ${address}`,
  },
  footer: {
    apps: "Applis",
    legal: "Mentions légales",
    company: "Société",
    about: "À propos",
    contact: "Contact",
    policyLink: (name) => `Politique de confidentialité de ${name} (en anglais)`,
    copyright: (year) => `Copyright © ${year} TasteMates Labs LLC. Tous droits réservés.`,
    trademarks: "Google Play est une marque de Google LLC. App Store est une marque de service d'Apple Inc.",
  },
  products: {
    devPath: {
      tagline: "La préparation aux entretiens qui explique comment les choses fonctionnent.",
      summary:
        "Du premier entretien technique d'un étudiant à l'épreuve de conception de niveau staff. Concepts, schémas de programmation et questions corrigées, chacun poussé un cran plus loin que la plupart des supports de préparation.",
      languageNote: "Dev Path est pour l'instant disponible uniquement en anglais.",
      privacyNote: "Dev Path fonctionne sans compte, sans publicité et sans pistage. Votre progression reste sur votre appareil.",
      shots: {
        trace: "Dev Path déroulant une recherche dichotomique étape par étape",
        home: "L'écran d'accueil de Dev Path avec le parcours de carrière et la bibliothèque technique",
        diagram: "Dev Path parcourant un arbre B, une lecture de page à la fois",
      },
      figures: {
        lessons: "leçons de carrière",
        topics: "sujets techniques",
        cards: "cartes d'entraînement",
        accounts: "compte nécessaire",
      },
      featuresTitle: "Une lecture qui reste.",
      features: {
        work: {
          title: "Il montre le raisonnement.",
          body: "Chaque schéma de programmation est déroulé étape par étape sur une vraie entrée, pour que vous voyiez pourquoi la boucle s'arrête à cet endroit.",
          alt: "Un tableau de déroulement étape par étape",
        },
        system: {
          title: "Il dessine le système.",
          body: "Quatre-vingt-dix schémas, des pages d'arbres B aux offsets Kafka. Touchez-en un pour l'étudier en plein écran.",
          alt: "Un schéma des lectures de pages dans un arbre B",
        },
        back: {
          title: "Il vous interroge à son tour.",
          body: "Les cartes de répétition espacée et les entretiens blancs chronométrés transforment vos lectures en réponses que vous pouvez donner à voix haute.",
          alt: "Un exercice avec une limite de temps et une auto-évaluation",
        },
        grows: {
          title: "Il grandit avec vous.",
          body: "Chaque page montre ce qu'on attend d'un étudiant, d'un profil junior, d'un profil senior et d'un ingénieur de niveau staff.",
          alt: "La bibliothèque technique organisée par parcours",
        },
      },
    },
    keystone: { tagline: "Les bonnes personnes pour le travail, plus près que vous ne le pensez." },
    nomad: { tagline: "Pour tout ce que vous êtes prêt à transmettre." },
  },
};

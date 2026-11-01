import type { Strings } from "./en";

export const de: Strings = {
  meta: {
    title: "TasteMates Labs – Software, die man gern wieder öffnet",
    description:
      "TasteMates Labs entwickelt fokussierte, private Apps zum Lernen und für den Alltag, darunter Dev Path, die Vorbereitung auf Bewerbungsgespräche, die erklärt, wie die Dinge funktionieren.",
  },
  skip: "Zum Inhalt springen",
  nav: {
    home: "TasteMates Labs Startseite",
    primary: "Hauptnavigation",
    apps: "Apps",
    about: "Über uns",
    contact: "Kontakt",
    language: "Sprache",
  },
  theme: {
    label: {
      system: "Darstellung: wie im System",
      light: "Darstellung: hell",
      dark: "Darstellung: dunkel",
    },
    switchTo: {
      system: "Zur Systemeinstellung wechseln.",
      light: "Zu hell wechseln.",
      dark: "Zu dunkel wechseln.",
    },
  },
  store: {
    get: {
      "google-play": "Jetzt bei Google Play",
      "app-store": "Laden im App Store",
    },
    comingSoon: {
      "google-play": "Bald bei Google Play",
      "app-store": "Bald im App Store",
    },
  },
  hero: {
    title: ["Software, die man", "gern wieder öffnet."],
    lede: "TasteMates Labs entwickelt fokussierte, private Apps, zu denen man gern zurückkehrt.",
    seeApps: "Unsere Apps ansehen",
    contact: "Kontakt aufnehmen",
  },
  apps: {
    title: "Unsere Apps.",
    inDevelopment: "In Entwicklung",
    learnMore: (name) => `Mehr über ${name} erfahren`,
  },
  privacy: {
    title: "Privat von Anfang an.",
    lede: "Wir erheben nur, was eine App zum Funktionieren braucht, und verkaufen deine Daten nicht. Die Datenschutzerklärung jeder App sagt, was sie speichert und warum.",
    promises: [
      { title: "Nur das Nötige", body: "Jede App erhebt nur, was sie zum Funktionieren braucht." },
      { title: "Kein Verkauf", body: "Wir verkaufen deine Daten nicht." },
      { title: "Klare Erklärungen", body: "Die Datenschutzerklärung jeder App sagt, was sie speichert und warum." },
    ],
    policyLink: (name) => `${name} Datenschutzerklärung (auf Englisch)`,
  },
  about: {
    title: ["Über", "TasteMates Labs."],
    body: [
      "TasteMates Labs ist ein Softwareunternehmen, das Apps zum Lernen und für den Alltag entwickelt und veröffentlicht. Wir halten unser Angebot bewusst klein, damit jede App die Aufmerksamkeit bekommt, die sie verdient: durchdachtes Design, sorgfältige Updates und echte Antworten, wenn du uns schreibst.",
      "Jede App, die wir veröffentlichen, folgt denselben Grundsätzen: Sie erledigt eine Aufgabe richtig gut, respektiert deine Privatsphäre und fragt nur nach dem, was sie braucht.",
    ],
    legal: "TasteMates Labs LLC ist eine Limited Liability Company mit Sitz in Pennsylvania, USA.",
  },
  contact: {
    title: "Kontakt.",
    lede: "Bei Fragen zum App-Support, für Feedback und geschäftliche Anfragen schreib uns eine E-Mail. Wir melden uns bei dir.",
    email: (address) => `E-Mail an ${address}`,
  },
  footer: {
    apps: "Apps",
    legal: "Rechtliches",
    company: "Unternehmen",
    about: "Über uns",
    contact: "Kontakt",
    policyLink: (name) => `${name} Datenschutzerklärung (auf Englisch)`,
    copyright: (year) => `Copyright © ${year} TasteMates Labs LLC. Alle Rechte vorbehalten.`,
    trademarks: "Google Play ist eine Marke von Google LLC. App Store ist eine Dienstleistungsmarke von Apple Inc.",
  },
  products: {
    devPath: {
      tagline: "Interviewvorbereitung, die erklärt, wie die Dinge funktionieren.",
      summary:
        "Vom ersten technischen Interview im Studium bis zur Designrunde auf Staff-Niveau. Konzepte, Programmiermuster und durchgerechnete Fragen, jeweils eine Ebene tiefer als die meisten Vorbereitungsmaterialien.",
      languageNote: "Dev Path ist derzeit nur auf Englisch verfügbar.",
      privacyNote: "Dev Path kommt ohne Konto, Werbung und Tracking aus. Dein Fortschritt bleibt auf deinem Gerät.",
      shots: {
        trace: "Dev Path verfolgt eine binäre Suche Schritt für Schritt",
        home: "Der Startbildschirm von Dev Path mit Karrierepfad und technischer Bibliothek",
        diagram: "Dev Path geht einen B-Baum durch, einen Seitenabruf nach dem anderen",
      },
      figures: {
        lessons: "Karrierelektionen",
        topics: "technische Themen",
        cards: "Übungskarten",
        accounts: "Konten erforderlich",
      },
      featuresTitle: "Lesen, das hängen bleibt.",
      features: {
        work: {
          title: "Es zeigt den Weg.",
          body: "Jedes Programmiermuster wird Schritt für Schritt an einer echten Eingabe nachverfolgt, damit du siehst, warum die Schleife genau dort endet.",
          alt: "Eine Schritt-für-Schritt-Tabelle",
        },
        system: {
          title: "Es zeichnet das System.",
          body: "Neunzig Diagramme, von B-Baum-Seiten bis zu Kafka-Offsets. Tippe auf eines, um es im Vollbild zu studieren.",
          alt: "Ein Diagramm der Seitenabrufe in einem B-Baum",
        },
        back: {
          title: "Es fragt zurück.",
          body: "Karten mit verteilter Wiederholung und Probeinterviews auf Zeit machen aus dem Gelesenen Antworten, die du laut geben kannst.",
          alt: "Eine Übung mit Zeitlimit und Selbstkontrolle",
        },
        grows: {
          title: "Es wächst mit dir.",
          body: "Jede Seite zeigt, wie gute Arbeit für Studierende sowie für Junior-, Senior- und Staff-Engineers aussieht.",
          alt: "Die technische Bibliothek, nach Bereichen geordnet",
        },
      },
    },
    keystone: { tagline: "Die richtigen Hände für die Aufgabe, näher als du denkst." },
    nomad: { tagline: "Für alles, was du weitergeben möchtest." },
  },
};

import type { Strings } from "./en";

export const es: Strings = {
  meta: {
    title: "TasteMates Labs – Software que merece abrirse dos veces",
    description:
      "TasteMates Labs crea apps centradas y privadas para aprender y para el día a día, como Dev Path, la preparación de entrevistas que explica cómo funcionan las cosas.",
  },
  skip: "Saltar al contenido",
  nav: {
    home: "Inicio de TasteMates Labs",
    primary: "Principal",
    apps: "Apps",
    about: "Empresa",
    contact: "Contacto",
    language: "Idioma",
  },
  theme: {
    label: {
      system: "Apariencia: igual que el sistema",
      light: "Apariencia: clara",
      dark: "Apariencia: oscura",
    },
    switchTo: {
      system: "Cambiar para usar la del sistema.",
      light: "Cambiar a clara.",
      dark: "Cambiar a oscura.",
    },
  },
  store: {
    get: {
      "google-play": "Disponible en Google Play",
      "app-store": "Descargar en el App Store",
    },
    comingSoon: {
      "google-play": "Próximamente en Google Play",
      "app-store": "Próximamente en el App Store",
    },
  },
  hero: {
    title: ["Software que merece", "abrirse dos veces."],
    lede: "TasteMates Labs crea apps centradas y privadas a las que da gusto volver.",
    seeApps: "Ver nuestras apps",
    contact: "Contáctanos",
  },
  apps: {
    title: "Nuestras apps.",
    inDevelopment: "En desarrollo",
    learnMore: (name) => `Más información sobre ${name}`,
  },
  privacy: {
    title: "Privadas desde el diseño.",
    lede: "Nuestras apps funcionan sin cuenta y guardan tus datos en tu dispositivo. No mostramos anuncios, no te rastreamos y no vendemos tus datos.",
    promises: [
      { title: "Sin cuenta", body: "Abre la app y empieza." },
      { title: "Sin rastreo", body: "Sin analíticas ni ID de publicidad." },
      { title: "Tus datos son tuyos", body: "Tu progreso se guarda en tu dispositivo." },
    ],
    policyLink: (name) => `Política de privacidad de ${name} (en inglés)`,
  },
  about: {
    title: ["Acerca de", "TasteMates Labs."],
    body: [
      "TasteMates Labs es una empresa de software que diseña y publica apps para aprender y para el día a día. Mantenemos un catálogo reducido para que cada app reciba la atención que merece: un diseño cuidado, actualizaciones meditadas y respuestas de verdad cuando nos escribes.",
      "Todas las apps que publicamos siguen los mismos principios: hacen bien una sola cosa, respetan tu privacidad y funcionan sin pedirte que te registres.",
    ],
    legal: "TasteMates Labs LLC es una sociedad de responsabilidad limitada registrada en Pensilvania, Estados Unidos.",
  },
  contact: {
    title: "Ponte en contacto.",
    lede: "Para soporte de las apps, comentarios y consultas comerciales, escríbenos por correo electrónico y te responderemos.",
    email: (address) => `Escribir a ${address}`,
  },
  footer: {
    apps: "Apps",
    legal: "Legal",
    company: "Empresa",
    about: "Acerca de",
    contact: "Contacto",
    policyLink: (name) => `Política de privacidad de ${name} (en inglés)`,
    copyright: (year) => `Copyright © ${year} TasteMates Labs LLC. Todos los derechos reservados.`,
    trademarks: "Google Play es una marca comercial de Google LLC. App Store es una marca de servicio de Apple Inc.",
  },
  products: {
    devPath: {
      tagline: "Preparación de entrevistas que explica cómo funcionan las cosas.",
      summary:
        "Desde la primera entrevista técnica de un estudiante hasta la ronda de diseño de nivel staff. Conceptos, patrones de programación y preguntas resueltas, cada uno un nivel más a fondo que la mayoría del material de preparación.",
      languageNote: "Dev Path está disponible por ahora solo en inglés.",
      shots: {
        trace: "Dev Path siguiendo una búsqueda binaria paso a paso",
        home: "La pantalla de inicio de Dev Path con la trayectoria profesional y la biblioteca técnica",
        diagram: "Dev Path recorriendo un árbol B, una lectura de página cada vez",
      },
      figures: {
        lessons: "lecciones de carrera",
        topics: "temas técnicos",
        cards: "tarjetas de práctica",
        accounts: "cuentas necesarias",
      },
      featuresTitle: "Lecturas que se quedan.",
      features: {
        work: {
          title: "Muestra el proceso.",
          body: "Cada patrón de programación se sigue paso a paso con una entrada real, para que veas por qué el bucle se detiene donde se detiene.",
          alt: "Una tabla de seguimiento paso a paso",
        },
        system: {
          title: "Dibuja el sistema.",
          body: "Noventa diagramas, desde páginas de árboles B hasta offsets de Kafka. Toca cualquiera para estudiarlo a pantalla completa.",
          alt: "Un diagrama de lecturas de página en un árbol B",
        },
        back: {
          title: "Te devuelve la pregunta.",
          body: "Las tarjetas de repaso espaciado y las entrevistas simuladas con tiempo convierten lo que lees en respuestas que puedes dar en voz alta.",
          alt: "Un ejercicio con límite de tiempo y autoevaluación",
        },
        grows: {
          title: "Crece contigo.",
          body: "Cada página muestra qué se espera de un estudiante, un perfil junior, un perfil senior y un ingeniero de nivel staff.",
          alt: "La biblioteca técnica organizada por áreas",
        },
      },
    },
    keystone: { tagline: "Las manos adecuadas para el trabajo, más cerca de lo que crees." },
    nomad: { tagline: "Para todo lo que ya estás listo para dejar pasar a otras manos." },
  },
};

import type { Strings } from "./en";

export const ptBR: Strings = {
  meta: {
    title: "TasteMates Labs – Software que vale abrir duas vezes",
    description:
      "A TasteMates Labs cria apps focados e privados para aprender e para o dia a dia, como o Dev Path, a preparação para entrevistas que explica como as coisas funcionam.",
  },
  skip: "Pular para o conteúdo",
  nav: {
    home: "Início da TasteMates Labs",
    primary: "Principal",
    apps: "Apps",
    about: "Sobre",
    contact: "Contato",
    language: "Idioma",
  },
  theme: {
    label: {
      system: "Aparência: igual ao sistema",
      light: "Aparência: clara",
      dark: "Aparência: escura",
    },
    switchTo: {
      system: "Mudar para igual ao sistema.",
      light: "Mudar para clara.",
      dark: "Mudar para escura.",
    },
  },
  store: {
    get: {
      "google-play": "Disponível no Google Play",
      "app-store": "Baixar na App Store",
    },
    comingSoon: {
      "google-play": "Em breve no Google Play",
      "app-store": "Em breve na App Store",
    },
  },
  hero: {
    title: ["Software que vale", "abrir duas vezes."],
    lede: "A TasteMates Labs cria apps focados e privados, aos quais dá gosto de voltar.",
    seeApps: "Ver nossos apps",
    contact: "Fale conosco",
  },
  apps: {
    title: "Nossos apps.",
    inDevelopment: "Em desenvolvimento",
    learnMore: (name) => `Saiba mais sobre o ${name}`,
  },
  privacy: {
    title: "Privados desde a concepção.",
    lede: "Coletamos apenas o que um app precisa para funcionar e não vendemos seus dados. A política de privacidade de cada app explica o que ele armazena e por quê.",
    promises: [
      { title: "Só o necessário", body: "Cada app coleta apenas o que precisa para funcionar." },
      { title: "Nunca vendidos", body: "Não vendemos seus dados." },
      { title: "Políticas claras", body: "A política de privacidade de cada app explica o que ele armazena e por quê." },
    ],
    policyLink: (name) => `Política de privacidade do ${name} (em inglês)`,
  },
  about: {
    title: ["Sobre a", "TasteMates Labs."],
    body: [
      "A TasteMates Labs é uma empresa de software que projeta e publica apps para aprender e para o dia a dia. Mantemos um catálogo pequeno para que cada app receba a atenção que merece: design cuidadoso, atualizações criteriosas e respostas de verdade quando você nos escreve.",
      "Todos os apps que publicamos seguem os mesmos princípios: fazem uma coisa bem-feita, respeitam sua privacidade e pedem apenas o que precisam.",
    ],
    legal: "A TasteMates Labs LLC é uma sociedade de responsabilidade limitada registrada na Pensilvânia, Estados Unidos.",
  },
  contact: {
    title: "Fale conosco.",
    lede: "Para suporte dos apps, comentários e assuntos comerciais, envie um e-mail e responderemos a você.",
    email: (address) => `Enviar e-mail para ${address}`,
  },
  footer: {
    apps: "Apps",
    legal: "Jurídico",
    company: "Empresa",
    about: "Sobre",
    contact: "Contato",
    policyLink: (name) => `Política de privacidade do ${name} (em inglês)`,
    copyright: (year) => `Copyright © ${year} TasteMates Labs LLC. Todos os direitos reservados.`,
    trademarks: "Google Play é uma marca comercial da Google LLC. App Store é uma marca de serviço da Apple Inc.",
  },
  products: {
    devPath: {
      tagline: "Preparação para entrevistas que explica como as coisas funcionam.",
      summary:
        "Da primeira entrevista técnica de um estudante à rodada de design de nível staff. Conceitos, padrões de programação e questões resolvidas, cada um com um nível a mais de profundidade do que a maioria dos materiais de preparação.",
      languageNote: "No momento, o Dev Path está disponível apenas em inglês.",
      privacyNote: "O Dev Path não tem conta, anúncios nem rastreamento. Seu progresso fica no seu dispositivo.",
      shots: {
        trace: "O Dev Path acompanhando uma busca binária passo a passo",
        home: "A tela inicial do Dev Path com a trilha de carreira e a biblioteca técnica",
        diagram: "O Dev Path percorrendo uma árvore B, uma leitura de página por vez",
      },
      figures: {
        lessons: "lições de carreira",
        topics: "tópicos técnicos",
        cards: "cartões de prática",
        accounts: "contas necessárias",
      },
      featuresTitle: "Leitura que fica.",
      features: {
        work: {
          title: "Mostra o raciocínio.",
          body: "Cada padrão de programação é acompanhado passo a passo com uma entrada real, para você ver por que o loop para onde para.",
          alt: "Uma tabela de acompanhamento passo a passo",
        },
        system: {
          title: "Desenha o sistema.",
          body: "Noventa diagramas, de páginas de árvore B a offsets do Kafka. Toque em qualquer um para estudá-lo em tela cheia.",
          alt: "Um diagrama de leituras de página em uma árvore B",
        },
        back: {
          title: "Pergunta de volta.",
          body: "Cartões de repetição espaçada e entrevistas simuladas com tempo transformam o que você lê em respostas que pode dar em voz alta.",
          alt: "Um exercício com limite de tempo e autoavaliação",
        },
        grows: {
          title: "Cresce com você.",
          body: "Cada página mostra o que se espera de um estudante, de um profissional júnior, de um sênior e de um engenheiro de nível staff.",
          alt: "A biblioteca técnica organizada por trilha",
        },
      },
    },
    keystone: { tagline: "As mãos certas para o trabalho, mais perto do que você imagina." },
    nomad: { tagline: "Para tudo o que você está pronto para passar adiante." },
  },
};

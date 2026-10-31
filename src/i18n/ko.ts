import type { Strings } from "./en";

export const ko: Strings = {
  meta: {
    title: "TasteMates Labs – 다시 열고 싶어지는 소프트웨어",
    description:
      "TasteMates Labs는 학습과 일상을 위해 한 가지에 집중하고 개인정보를 존중하는 앱을 만듭니다. 원리부터 설명하는 면접 준비 앱 Dev Path도 그중 하나입니다.",
  },
  skip: "본문으로 건너뛰기",
  nav: {
    home: "TasteMates Labs 홈",
    primary: "주 메뉴",
    apps: "앱",
    about: "회사 소개",
    contact: "문의",
    language: "언어",
  },
  theme: {
    label: {
      system: "화면 모드: 시스템 설정",
      light: "화면 모드: 라이트",
      dark: "화면 모드: 다크",
    },
    switchTo: {
      system: "시스템 설정으로 전환합니다.",
      light: "라이트 모드로 전환합니다.",
      dark: "다크 모드로 전환합니다.",
    },
  },
  store: {
    get: {
      "google-play": "Google Play에서 받기",
      "app-store": "App Store에서 다운로드",
    },
    comingSoon: {
      "google-play": "Google Play 출시 예정",
      "app-store": "App Store 출시 예정",
    },
  },
  hero: {
    title: ["다시 열고 싶어지는", "소프트웨어."],
    lede: "TasteMates Labs는 한 가지에 집중하고 개인정보를 존중하며, 다시 찾고 싶어지는 앱을 만듭니다.",
    seeApps: "앱 둘러보기",
    contact: "문의하기",
  },
  apps: {
    title: "우리의 앱.",
    inDevelopment: "개발 중",
    learnMore: (name) => `${name} 자세히 알아보기`,
  },
  privacy: {
    title: "설계부터 개인정보 보호.",
    lede: "저희 앱은 계정 없이 사용할 수 있으며 데이터는 사용자의 기기에 저장됩니다. 광고를 싣지 않고, 사용자를 추적하지 않으며, 데이터를 판매하지 않습니다.",
    promises: [
      { title: "계정 불필요", body: "앱을 열고 바로 시작하세요." },
      { title: "추적 없음", body: "분석 도구도, 광고 ID도 없습니다." },
      { title: "데이터는 사용자의 것", body: "진행 상황은 사용자의 기기에 저장됩니다." },
    ],
    policyLink: (name) => `${name} 개인정보 처리방침(영문)`,
  },
  about: {
    title: ["TasteMates Labs", "소개."],
    body: [
      "TasteMates Labs는 학습과 일상을 위한 앱을 설계하고 출시하는 소프트웨어 회사입니다. 모든 앱에 충분한 정성을 쏟을 수 있도록 앱의 수를 적게 유지합니다. 세심한 디자인과 신중한 업데이트, 그리고 문의에 대한 성실한 답변을 약속합니다.",
      "저희가 출시하는 모든 앱은 같은 원칙을 따릅니다. 한 가지 일을 제대로 해내고, 개인정보를 존중하며, 가입을 요구하지 않습니다.",
    ],
    legal: "TasteMates Labs LLC는 미국 펜실베이니아주에 등록된 유한책임회사입니다.",
  },
  contact: {
    title: "문의하기.",
    lede: "앱 지원, 의견 및 비즈니스 문의는 이메일로 보내 주세요. 확인 후 답변드리겠습니다.",
    email: (address) => `${address}로 이메일 보내기`,
  },
  footer: {
    apps: "앱",
    legal: "법적 고지",
    company: "회사",
    about: "회사 소개",
    contact: "문의",
    policyLink: (name) => `${name} 개인정보 처리방침(영문)`,
    copyright: (year) => `Copyright © ${year} TasteMates Labs LLC. All rights reserved.`,
    trademarks: "Google Play는 Google LLC의 상표입니다. App Store는 Apple Inc.의 서비스 마크입니다.",
  },
  products: {
    devPath: {
      tagline: "원리부터 설명하는 면접 준비.",
      summary:
        "학생의 첫 기술 면접부터 스태프 레벨 설계 면접까지. 개념, 코딩 패턴, 풀이가 담긴 문제를 대부분의 면접 자료보다 한 단계 더 깊이 다룹니다.",
      languageNote: "Dev Path는 현재 영어로만 제공됩니다.",
      shots: {
        trace: "이진 탐색을 단계별로 추적하는 Dev Path 화면",
        home: "커리어 경로와 기술 라이브러리가 표시된 Dev Path 홈 화면",
        diagram: "B-트리의 페이지 읽기 과정을 차례로 설명하는 Dev Path 화면",
      },
      figures: {
        lessons: "커리어 레슨",
        topics: "기술 주제",
        cards: "연습 카드",
        accounts: "필요한 계정",
      },
      featuresTitle: "읽은 내용이 오래 남도록.",
      features: {
        work: {
          title: "과정을 보여 줍니다.",
          body: "모든 코딩 패턴을 실제 입력으로 단계별로 추적하므로, 루프가 왜 그 지점에서 멈추는지 직접 확인할 수 있습니다.",
          alt: "단계별 추적 표",
        },
        system: {
          title: "시스템을 그려 줍니다.",
          body: "B-트리 페이지부터 Kafka 오프셋까지 90개의 다이어그램을 담았습니다. 탭하면 전체 화면으로 살펴볼 수 있습니다.",
          alt: "B-트리의 페이지 읽기 과정을 그린 다이어그램",
        },
        back: {
          title: "되물어 봅니다.",
          body: "간격 반복 카드와 시간제한 모의 면접으로, 읽은 내용을 소리 내어 답할 수 있는 실력으로 바꿔 줍니다.",
          alt: "제한 시간과 자가 점검이 있는 연습 문제",
        },
        grows: {
          title: "함께 성장합니다.",
          body: "페이지마다 학생, 주니어, 시니어, 스태프 엔지니어에게 각각 무엇이 좋은 답변인지 보여 줍니다.",
          alt: "분야별로 정리된 기술 라이브러리",
        },
      },
    },
    keystone: { tagline: "일에 꼭 맞는 손길, 생각보다 가까이에." },
    nomad: { tagline: "이제 다음으로 넘길 준비가 된 모든 것을 위해." },
  },
};

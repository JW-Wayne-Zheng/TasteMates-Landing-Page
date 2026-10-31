import type { Strings } from "./en";

export const zhHant: Strings = {
  meta: {
    title: "TasteMates Labs – 值得再次打開的好軟體",
    description:
      "TasteMates Labs 為學習和日常生活打造專注、重視隱私的應用程式,其中包括 Dev Path:一款講清楚底層原理的面試準備應用程式。",
  },
  skip: "跳至主要內容",
  nav: {
    home: "TasteMates Labs 首頁",
    primary: "主要導覽",
    apps: "應用程式",
    about: "關於",
    contact: "聯絡",
    language: "語言",
  },
  theme: {
    label: {
      system: "外觀:跟隨系統",
      light: "外觀:淺色",
      dark: "外觀:深色",
    },
    switchTo: {
      system: "切換為跟隨系統。",
      light: "切換為淺色。",
      dark: "切換為深色。",
    },
  },
  store: {
    get: {
      "google-play": "在 Google Play 上取得",
      "app-store": "在 App Store 下載",
    },
    comingSoon: {
      "google-play": "即將在 Google Play 推出",
      "app-store": "即將在 App Store 推出",
    },
  },
  hero: {
    title: ["值得再次打開的", "好軟體。"],
    lede: "TasteMates Labs 打造專注、重視隱私的應用程式,讓你每次回來都用得舒心。",
    seeApps: "查看我們的應用程式",
    contact: "聯絡我們",
  },
  apps: {
    title: "我們的應用程式。",
    inDevelopment: "開發中",
    learnMore: (name) => `進一步了解 ${name}`,
  },
  privacy: {
    title: "隱私,從設計開始。",
    lede: "我們的應用程式不需要註冊帳號,資料保存在你的裝置上。我們不投放廣告,不追蹤你,也不出售你的資料。",
    promises: [
      { title: "不需帳號", body: "打開應用程式就能開始。" },
      { title: "沒有追蹤", body: "沒有數據分析,沒有廣告識別碼。" },
      { title: "資料屬於你", body: "學習進度保存在你的裝置上。" },
    ],
    policyLink: (name) => `${name} 隱私權政策(英文)`,
  },
  about: {
    title: ["關於", "TasteMates Labs。"],
    body: [
      "TasteMates Labs 是一家軟體公司,設計並發行以學習和日常生活為主題的應用程式。我們有意讓產品線保持精簡,讓每款應用程式都得到應有的投入:用心的設計、審慎的更新,以及你來信時確實的答覆。",
      "我們發行的每款應用程式都遵循同樣的原則:把一件事做好,尊重你的隱私,不需註冊就能使用。",
    ],
    legal: "TasteMates Labs LLC 是一家在美國賓夕法尼亞州註冊的有限責任公司。",
  },
  contact: {
    title: "聯絡我們。",
    lede: "如需應用程式支援、提供意見回饋或洽談業務,請寄電子郵件給我們,我們會盡快回覆。",
    email: (address) => `寄信至 ${address}`,
  },
  footer: {
    apps: "應用程式",
    legal: "法律資訊",
    company: "公司",
    about: "關於",
    contact: "聯絡",
    policyLink: (name) => `${name} 隱私權政策(英文)`,
    copyright: (year) => `版權所有 © ${year} TasteMates Labs LLC。保留一切權利。`,
    trademarks: "Google Play 是 Google LLC 的商標。App Store 是 Apple Inc. 的服務標誌。",
  },
  products: {
    devPath: {
      tagline: "講清楚底層原理的面試準備。",
      summary:
        "從學生的第一場技術面試,到資深工程師(Staff)等級的系統設計面試。概念、程式設計模式和詳解例題,每一項都比大多數準備資料多深入一層。",
      languageNote: "Dev Path 目前僅提供英文版。",
      shots: {
        trace: "Dev Path 逐步追蹤二分搜尋的過程",
        home: "Dev Path 主畫面,顯示職涯路徑和技術資料庫",
        diagram: "Dev Path 逐頁講解 B 樹的讀取過程",
      },
      figures: {
        lessons: "職涯課程",
        topics: "技術主題",
        cards: "練習卡片",
        accounts: "必要帳號",
      },
      featuresTitle: "讀過,就記得住。",
      features: {
        work: {
          title: "展示推導過程。",
          body: "每種程式設計模式都用真實輸入逐步追蹤,讓你看清迴圈為什麼在那裡停止。",
          alt: "逐步追蹤表",
        },
        system: {
          title: "畫出整個系統。",
          body: "九十張圖解,從 B 樹的頁面到 Kafka 的偏移量。點一下任何一張,就能全螢幕細看。",
          alt: "B 樹頁面讀取過程的圖解",
        },
        back: {
          title: "反過來考考你。",
          body: "間隔重複卡片和限時模擬面試,把讀到的內容變成你能脫口而出的回答。",
          alt: "附時間限制和自我檢查的練習",
        },
        grows: {
          title: "陪你一起成長。",
          body: "每一頁都會說明,對學生、初階工程師、高階工程師和資深工程師(Staff)來說,怎樣才算做得好。",
          alt: "依方向分類的技術資料庫",
        },
      },
    },
    keystone: { tagline: "合適的人手,比你想的更近。" },
    nomad: { tagline: "獻給那些你準備交給下一位的一切。" },
  },
};

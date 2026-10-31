import type { Strings } from "./en";

export const ja: Strings = {
  meta: {
    title: "TasteMates Labs – また開きたくなるソフトウェア",
    description:
      "TasteMates Labs は、学びと日々の暮らしのために、目的を絞ったプライバシー重視のアプリをつくっています。仕組みから理解できる面接対策アプリ Dev Path もそのひとつです。",
  },
  skip: "本文へ移動",
  nav: {
    home: "TasteMates Labs ホーム",
    primary: "メインメニュー",
    apps: "アプリ",
    about: "会社概要",
    contact: "連絡先",
    language: "言語",
  },
  theme: {
    label: {
      system: "外観:システムに合わせる",
      light: "外観:ライト",
      dark: "外観:ダーク",
    },
    switchTo: {
      system: "システムに合わせる設定に切り替えます。",
      light: "ライトに切り替えます。",
      dark: "ダークに切り替えます。",
    },
  },
  store: {
    get: {
      "google-play": "Google Play で手に入れよう",
      "app-store": "App Store でダウンロード",
    },
    comingSoon: {
      "google-play": "Google Play で近日公開",
      "app-store": "App Store で近日公開",
    },
  },
  hero: {
    title: ["また開きたくなる", "ソフトウェア。"],
    lede: "TasteMates Labs は、目的を絞り、プライバシーを大切にした、何度でも戻ってきたくなるアプリをつくっています。",
    seeApps: "アプリを見る",
    contact: "お問い合わせ",
  },
  apps: {
    title: "私たちのアプリ。",
    inDevelopment: "開発中",
    learnMore: (name) => `${name} について詳しく見る`,
  },
  privacy: {
    title: "設計から、プライバシーを。",
    lede: "私たちのアプリはアカウントなしで使え、データはお使いのデバイスに保存されます。広告は表示せず、行動を追跡することも、データを販売することもありません。",
    promises: [
      { title: "アカウント不要", body: "アプリを開けば、すぐに始められます。" },
      { title: "追跡なし", body: "分析ツールも広告 ID も使いません。" },
      { title: "データはあなたのもの", body: "進捗はお使いのデバイスに保存されます。" },
    ],
    policyLink: (name) => `${name} プライバシーポリシー(英語)`,
  },
  about: {
    title: ["TasteMates Labs", "について。"],
    body: [
      "TasteMates Labs は、学びと日々の暮らしのためのアプリを設計・公開しているソフトウェア会社です。すべてのアプリに十分に手をかけられるよう、ラインナップはあえて少なくしています。丁寧なデザイン、慎重なアップデート、そしてお問い合わせへの誠実な回答を大切にしています。",
      "公開するアプリはどれも同じ方針に沿っています。ひとつの役割をしっかり果たすこと、プライバシーを尊重すること、そして登録なしで使えることです。",
    ],
    legal: "TasteMates Labs LLC は、米国ペンシルベニア州で登記された有限責任会社です。",
  },
  contact: {
    title: "お問い合わせ。",
    lede: "アプリのサポート、ご意見、ビジネスに関するお問い合わせは、メールでお寄せください。折り返しご連絡いたします。",
    email: (address) => `${address} へメール`,
  },
  footer: {
    apps: "アプリ",
    legal: "法的情報",
    company: "会社情報",
    about: "会社概要",
    contact: "お問い合わせ",
    policyLink: (name) => `${name} プライバシーポリシー(英語)`,
    copyright: (year) => `Copyright © ${year} TasteMates Labs LLC. All rights reserved.`,
    trademarks: "Google Play は Google LLC の商標です。App Store は Apple Inc. のサービスマークです。",
  },
  products: {
    devPath: {
      tagline: "仕組みから理解する面接対策。",
      summary:
        "学生にとって初めての技術面接から、スタッフレベルの設計面接まで。概念、コーディングパターン、解説付きの問題を、一般的な対策教材より一段深く掘り下げます。",
      languageNote: "Dev Path は現在、英語版のみの提供です。",
      shots: {
        trace: "二分探索を一歩ずつトレースする Dev Path の画面",
        home: "キャリアパスと技術ライブラリが並ぶ Dev Path のホーム画面",
        diagram: "B 木のページ読み込みを順に解説する Dev Path の画面",
      },
      figures: {
        lessons: "キャリアレッスン",
        topics: "技術トピック",
        cards: "練習カード",
        accounts: "必要なアカウント",
      },
      featuresTitle: "読んだことが、身につく。",
      features: {
        work: {
          title: "過程を見せる。",
          body: "すべてのコーディングパターンを実際の入力で一歩ずつトレース。ループがなぜそこで止まるのかが見えてきます。",
          alt: "ステップごとのトレース表",
        },
        system: {
          title: "システムを図で描く。",
          body: "B 木のページから Kafka のオフセットまで、90 点の図解を収録。タップすれば全画面でじっくり確認できます。",
          alt: "B 木のページ読み込みの図解",
        },
        back: {
          title: "あなたに問い返す。",
          body: "間隔反復カードと時間制限付きの模擬面接で、読んだ内容を声に出して答えられる知識に変えます。",
          alt: "制限時間とセルフチェック付きの演習",
        },
        grows: {
          title: "成長に寄り添う。",
          body: "学生、ジュニア、シニア、スタッフエンジニアのそれぞれにとって何が「よい回答」なのかを、各ページで示します。",
          alt: "分野別に整理された技術ライブラリ",
        },
      },
    },
    keystone: { tagline: "ふさわしい担い手は、思うより近くに。" },
    nomad: { tagline: "次へ手渡す準備ができた、すべてのものに。" },
  },
};

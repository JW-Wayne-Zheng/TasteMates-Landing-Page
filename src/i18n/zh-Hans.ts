import type { Strings } from "./en";

export const zhHans: Strings = {
  meta: {
    title: "TasteMates Labs – 值得再次打开的好软件",
    description:
      "TasteMates Labs 为学习和日常生活打造专注、注重隐私的应用,其中包括 Dev Path:一款讲清底层原理的面试备考应用。",
  },
  skip: "跳到正文",
  nav: {
    home: "TasteMates Labs 首页",
    primary: "主导航",
    apps: "应用",
    about: "关于",
    contact: "联系",
    language: "语言",
  },
  theme: {
    label: {
      system: "外观:跟随系统",
      light: "外观:浅色",
      dark: "外观:深色",
    },
    switchTo: {
      system: "切换为跟随系统。",
      light: "切换为浅色。",
      dark: "切换为深色。",
    },
  },
  store: {
    get: {
      "google-play": "在 Google Play 上获取",
      "app-store": "在 App Store 下载",
    },
    comingSoon: {
      "google-play": "即将登陆 Google Play",
      "app-store": "即将登陆 App Store",
    },
  },
  hero: {
    title: ["值得再次打开的", "好软件。"],
    lede: "TasteMates Labs 打造专注、注重隐私的应用,让你每次回来都用得舒心。",
    seeApps: "查看我们的应用",
    contact: "联系我们",
  },
  apps: {
    title: "我们的应用。",
    inDevelopment: "开发中",
    learnMore: (name) => `进一步了解 ${name}`,
  },
  privacy: {
    title: "隐私,从设计开始。",
    lede: "我们的应用无需注册账号,数据保存在你的设备上。我们不投放广告,不跟踪你,也不出售你的数据。",
    promises: [
      { title: "无需账号", body: "打开应用即可开始。" },
      { title: "没有跟踪", body: "没有数据分析,没有广告标识符。" },
      { title: "数据归你所有", body: "学习进度保存在你的设备上。" },
    ],
    policyLink: (name) => `${name} 隐私政策(英文)`,
  },
  about: {
    title: ["关于", "TasteMates Labs。"],
    body: [
      "TasteMates Labs 是一家软件公司,设计并发行面向学习和日常生活的应用。我们有意让产品线保持精简,让每款应用都得到应有的投入:用心的设计、审慎的更新,以及你来信时切实的答复。",
      "我们发行的每款应用都遵循同样的原则:把一件事做好,尊重你的隐私,无需注册即可使用。",
    ],
    legal: "TasteMates Labs LLC 是一家在美国宾夕法尼亚州注册的有限责任公司。",
  },
  contact: {
    title: "联系我们。",
    lede: "如需应用支持、提供反馈或洽谈业务,请给我们发送电子邮件,我们会尽快回复。",
    email: (address) => `发送邮件至 ${address}`,
  },
  footer: {
    apps: "应用",
    legal: "法律信息",
    company: "公司",
    about: "关于",
    contact: "联系",
    policyLink: (name) => `${name} 隐私政策(英文)`,
    copyright: (year) => `版权所有 © ${year} TasteMates Labs LLC。保留所有权利。`,
    trademarks: "Google Play 是 Google LLC 的商标。App Store 是 Apple Inc. 的服务标记。",
  },
  products: {
    devPath: {
      tagline: "讲清底层原理的面试备考应用。",
      summary:
        "从学生的第一场技术面试,到资深工程师(Staff)级别的系统设计面试。概念、编程模式和详解例题,每一项都比大多数备考资料多深入一层。",
      languageNote: "Dev Path 目前仅提供英文版。",
      shots: {
        trace: "Dev Path 逐步追踪二分查找的过程",
        home: "Dev Path 主屏幕,显示职业路径和技术资料库",
        diagram: "Dev Path 逐页讲解 B 树的读取过程",
      },
      figures: {
        lessons: "职业课程",
        topics: "技术主题",
        cards: "练习卡片",
        accounts: "必需账号",
      },
      featuresTitle: "读过,就记得住。",
      features: {
        work: {
          title: "展示推导过程。",
          body: "每种编程模式都用真实输入逐步追踪,让你看清循环为什么在那里停止。",
          alt: "逐步追踪表",
        },
        system: {
          title: "画出整个系统。",
          body: "九十张图解,从 B 树的页到 Kafka 的偏移量。点按任意一张,即可全屏细看。",
          alt: "B 树页面读取过程的图解",
        },
        back: {
          title: "反过来考考你。",
          body: "间隔重复卡片和限时模拟面试,把读到的内容变成你能脱口而出的回答。",
          alt: "带时间限制和自我检查的练习",
        },
        grows: {
          title: "陪你一起成长。",
          body: "每一页都会说明,对学生、初级工程师、高级工程师和资深工程师(Staff)来说,怎样才算做得好。",
          alt: "按方向分类的技术资料库",
        },
      },
    },
    keystone: { tagline: "合适的人手,比你想的更近。" },
    nomad: { tagline: "为那些你准备交给下一位的一切。" },
  },
};

export interface GuideEpisode {
  number: string;
  slug: string;
  title: string;
  description: string;
  topics: string[];
  format?: "图文" | "视频";
}

// Only published episodes belong here. Each slug has a page in pages/guides/.
export const guideEpisodes: GuideEpisode[] = [
  {
    number: "01",
    slug: "anki-setup",
    title: "Anki 入门：安装、导入与同步",
    description:
      "从下载安装到导入第一副卡牌，再同步到手机。跟着图文走一遍，把日常复习准备好。",
    topics: ["下载安装", "导入卡牌", "跨设备同步", "暂停卡牌"],
    format: "图文",
  },
  {
    number: "02",
    slug: "phonetics-practice",
    title: "美式音标：听辨与发音练习",
    description:
      "跟着视频了解如何使用音标卡牌，练习听辨与发音，为后面的单词学习打好基础。",
    topics: ["美式音标", "音标卡牌", "听辨与发音"],
    format: "视频",
  },
  {
    number: "03",
    slug: "reading-and-viewing",
    title: "从单词走向阅读与观影",
    description:
      "学完音标，积累基础词汇与语法，再把学到的内容放进阅读和观影的真实语境。",
    topics: ["基础词汇", "语法学习", "原著阅读", "影视学习"],
    format: "视频",
  },
];

export const guideDeckResources = [
  {
    label: "音标卡牌",
    file: "phonetics.apkg",
    downloadName: "英语自学指北-音标.apkg",
  },
  {
    label: "语法卡牌",
    file: "grammar.apkg",
    version: "20261104",
    downloadName: "英语自学指北-语法.apkg",
  },
  {
    label: "句子卡牌",
    file: "sentences.apkg",
    version: "20261104",
    downloadName: "英语自学指北-句子.apkg",
  },
  {
    label: "COCA30000卡牌",
    file: "coca-30000.apkg",
    downloadName: "英语自学指北-COCA30000.apkg",
  },
  {
    label: "生词卡牌",
    file: "wordbook.apkg",
    downloadName: "英语自学指北-生词本.apkg",
  },
  {
    label: "短语卡牌",
    file: "phrases.apkg",
    downloadName: "英语自学指北-短语.apkg",
  },
];

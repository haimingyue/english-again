// Learning content transcribed from the approved design reference.
export const toolsContent = {
  shots: {
    bookshelf: {
      title: "我的书架",
      alt: "读书会书架，包含最近阅读、书籍列表与阅读进度",
    },
    plan: {
      title: "阅读计划",
      alt: "小王子阅读计划，可按每日词数或章节选择阅读任务",
    },
    exams: {
      title: "考试真题",
      alt: "考试真题书目入口，在真实语篇中练习阅读",
    },
    movies: {
      title: "本地片库",
      alt: "读书会影视空间，导入本地影片并继续上次观看",
    },
    player: {
      title: "字幕学习",
      alt: "影视播放器与字幕列表，可以搜索字幕、逐句停和进入跟读",
    },
    lookup: {
      title: "语境查词",
      alt: "阅读中 sunset 的查词弹窗，包含原句、句中意思、配图和两个发送入口",
    },
    phrases: {
      title: "短语积累",
      alt: "学习侧栏显示 come to 的原句、解释与发送到 Anki 入口",
    },
    profile: {
      title: "Anki 配置入口",
      alt: "个人中心中的个人词库、Anki 配置与待发送中心入口",
    },
    "shadow-reading": {
      title: "阅读跟读",
      alt: "选中阅读原句后打开本地跟读面板，定位原音、试听候选片段与录音",
    },
    "shadow-movie": {
      title: "影视跟读",
      alt: "影视字幕的本地跟读面板，可听原声、录音与交替对比",
    },
    stats: {
      title: "阅读概览",
      alt: "阅读数据页面，显示阅读时长、活跃日、查词次数与阅读趋势",
    },
    calendar: {
      title: "日历与进度",
      alt: "阅读日历、书籍进度和常查单词统计",
    },
  },
  features: {
    reading: {
      kicker: "YOUR READING SPACE",
      title: "从你的书架，\n到今天的一小段。",
      description:
        "把想读的书放在一起，按每日词数或章节安排阅读。回到书架，接着上次的进度往前读。",
      points: [
        "书架管理与阅读进度",
        "每日词数 / 按章节的阅读计划",
        "原著与考试语篇的阅读入口",
      ],
      detail: "先选择适合自己的材料，再把一本书拆成可以持续的小步。",
      link: "/reading",
      linkText: "先了解阅读方法 ↗",
      shots: ["plan", "bookshelf", "exams"],
    },
    movies: {
      kicker: "YOUR MOVIE ROOM",
      title: "跟着字幕，\n听懂故事里的每一句。",
      description:
        "导入本地影片，添加中英文字幕。从字幕列表找到想练的对白，逐句停下，或继续观看。",
      points: [
        "本地 MP4 / MKV 影片管理",
        "字幕搜索、倍速与逐句停",
        "字幕查词与“练这一句”入口",
      ],
      detail:
        "需要自行准备影片与配套字幕。桌面与网页的播放兼容性不同，具体以发布版本为准。",
      link: "/vocabulary#capture",
      linkText: "看看怎样留下字幕中的单词 ↗",
      shots: ["player", "movies"],
    },
    words: {
      kicker: "WORDS IN CONTEXT",
      title: "把遇见的词，\n和它的原句一起留下。",
      description:
        "在阅读或观影时打开单词，结合句中意思和原文理解。再决定补充 COCA 主卡，还是加入生词本。",
      points: [
        "原句、句中意思与词典释义",
        "短语侧栏与 Anki 发送入口",
        "个人词库、连接配置与待发送中心",
      ],
      detail:
        "AI 解释用于辅助理解，重要的词义和关系仍需核对。发送到 Anki 前需要完成本地连接配置。",
      link: "/vocabulary#capture",
      linkText: "了解两种发送方式 ↗",
      shots: ["lookup", "phrases", "profile"],
    },
    shadow: {
      kicker: "LISTEN. RECORD. COMPARE.",
      title: "先听原声，\n再听听自己。",
      description:
        "从阅读原句或影视字幕进入同一个跟读面板。定位片段、试听确认，录下自己的声音，再交替对比。",
      points: [
        "阅读选句 / 影视字幕进入练习",
        "听原声、录音与交替对比",
        "原音片段微调与本地练习记录",
      ],
      detail: "跟读功能仍在完善。不提供自动发音评分；阅读配套音频需自行添加。",
      link: "/phonetics",
      linkText: "先练习发音与听辨 ↗",
      shots: ["shadow-reading", "shadow-movie"],
    },
    data: {
      kicker: "SEE YOUR READING HABIT",
      title: "看见每一次投入，\n找到自己的阅读节奏。",
      description:
        "回看阅读时长、活跃日期与查词记录，知道自己读到了哪里，也知道哪些词还值得再看一次。",
      points: [
        "阅读趋势与活跃日期",
        "书籍进度与学习日历",
        "常查单词与学习积累",
      ],
      detail:
        "截图是个人使用示例。记录展示练习的发生，理解和实际运用才是学习成效的检验。",
      link: "/about",
      linkText: "了解科学学习方法 ↗",
      shots: ["stats", "calendar"],
    },
  },
} as const;

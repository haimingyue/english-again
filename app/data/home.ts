// Learning content transcribed from the approved design reference.
export const homeContent = {
  screenshots: {
    reading: {
      src: "/assets/images/tools/overview-reading.png",
      label: "阅读空间",
      caption: "原著阅读、书籍管理与笔记入口。",
      alt: "读书会阅读空间，展示书籍与阅读分类",
    },
    film: {
      src: "/assets/images/tools/overview-movies.png",
      label: "影视练习",
      caption: "字幕搜索、逐句停播、单句练习与相邻句合练。",
      alt: "读书会影视练习界面，展示视频和可搜索的逐句字幕",
    },
    data: {
      src: "/assets/images/tools/overview-stats.png",
      label: "学习数据",
      caption: "阅读时长、查词、目标词与学习活动记录。",
      alt: "读书会学习数据界面，展示阅读时长与活动记录",
    },
  },
} as const;

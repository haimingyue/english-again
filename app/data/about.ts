// Learning content transcribed from the approved design reference.
export const aboutContent = {
  cards: {
    word: {
      kind: "真实卡片 / 单词识别",
      question: "看到 indeed，\n你能想起它的意思吗？",
      description:
        "先在心里说出意思，或想起一个见过它的句子。别急着翻面，把“好像知道”变成一次真正的回答。",
      note: "这里演示卡片翻面，不记录复习进度。单词卡练习识别；主动表达还需要另外练。",
      file: "indeed",
      name: "indeed",
      answer: "indeed：的确，确实",
      feedback:
        "核对自己想起的意思，再读一遍截图中的《小王子》例句，把这个词放回上下文。",
      frontAlt: "indeed 单词卡正面：单词、音标和词频信息，释义尚未展示",
      backAlt: "indeed 单词卡背面：中英文释义、配图和《小王子》例句",
    },
    grammar: {
      kind: "真实卡片 / 带提示练习",
      question: "从一句话，\n练一个介词搭配。",
      description:
        "这张卡片在括号里给出了 in，适合借助提示练习 interested in doing。先读完整句，再核对结构与发音。",
      note: "原始截图已包含 (in) 提示，属于带提示练习。要检查独立回忆，可在自己的卡片里隐藏这个提示。",
      file: "grammar",
      name: "interested in",
      answer: "I’m interested in hearing your perspective.",
      feedback:
        "核对 interested in doing 的搭配。再把 hearing your perspective 换成自己感兴趣的事，尝试说一个新句子。",
      frontAlt:
        "语法卡正面：I’m interested ___ hearing your perspective，括号里有 in 提示",
      backAlt: "语法卡背面：完整句子中 in 用红色标出，并附有场景配图和发音按钮",
    },
  },
  methods: {
    spacing: {
      english: "SPACED PRACTICE",
      title: "过一阵子，\n再把它想起来。",
      copy: "把练习分散到不同时间，让自己再次提取记忆。刚学会时顺利答出，不等于过几天还能做到。",
      example:
        "今天看懂一个例句，之后按 Anki 的安排回来补全句子。再次遇到困难，就核对答案、重新理解。",
      tip: "不必照搬固定的“第 1、3、7 天”。复习间隔应结合你的实际表现调整。",
      name: "间隔练习",
      alt: "用日历展示把练习分散在不同日期的手绘笔记",
    },
    interleaving: {
      english: "INTERLEAVED PRACTICE",
      title: "混合着练，\n也练习判断。",
      copy: "掌握基本做法后，把需要区分的题型交替安排。练习不仅是给出答案，也包括判断眼前的问题该用哪一种方法。",
      example:
        "学过一般现在时和现在进行时后，混合练习日常习惯与眼前正在发生的事。先判断情境，再选择表达方式，并核对理由。",
      tip: "交织练习不是把所有陌生内容随机打乱。先建立基本理解，再混合容易混淆、需要辨别的内容。",
      name: "交织练习",
      alt: "用星形、三角形、多边形与圆形的交替排列展示交织练习的手绘笔记",
    },
    variation: {
      english: "VARIED PRACTICE",
      title: "换一个场景，\n让知识跟着你走。",
      copy: "保留要学的核心，改变练习的条件。熟悉一个例子之后，尝试把同样的知识用在新的情境中。",
      example:
        "从 I’m interested in music 出发，换成人物、话题和活动：She’s interested in learning French. 再试着说一件自己感兴趣的事。",
      tip: "图片用投掷练习帮助理解“改变条件”。这里的英语示例是方法应用，不意味着两个任务具有相同的效果。",
      name: "变式练习",
      alt: "用不同距离投掷豆袋的场景解释变式练习的手绘笔记",
    },
  },
} as const;

// Learning content transcribed from the approved design reference.
export const readingContent = {
  exercises: [
    {
      kind: "语境中的词义",
      sentence: "The shop cut its prices, but sales hardly changed.",
      question: "cut 和 hardly 分别表达什么？",
      answer: "商店降价，但销售几乎没有变化。",
      why: "cut prices 是降价；hardly 表示“几乎不”。不能把后半句理解成“销售发生了很大变化”。",
    },
    {
      kind: "比较两个原因",
      sentence:
        "Lea chose the course as much because of the teacher as because of the topic.",
      question: "选择课程有哪些原因？两者是什么关系？",
      answer: "教师与主题都是原因，句子赋予两者同等分量。",
      why: "把 as much because of… as because of… 两端连起来。这里强调两者同样重要，不等于有测量数据证明各占一半。",
    },
    {
      kind: "接回主线",
      sentence: "The books that Leo borrowed last week are still on his desk.",
      question: "什么仍在桌上？",
      answer: "Leo 上周借的那些书，仍在他的桌上。",
      why: "主线是 The books → are。that 引出借书的说明，不能把 Leo 当成 are 的主语。",
    },
    {
      kind: "补明关系",
      sentence: "Nora bought a lamp, which she placed beside the sofa.",
      question: "which 指什么？谁把它放在哪里？",
      answer: "Nora 买了一盏灯，并把这盏灯放在沙发旁。",
      why: "which 指前面的 lamp，she 指 Nora。补明对象即可，不需要凭空添加原因。",
    },
    {
      kind: "保留条件",
      sentence: "You can borrow the book unless someone else has reserved it.",
      question: "什么情况下不能借？",
      answer: "如果已经有别人预约了这本书，就不能借。",
      why: "unless 表示“除非”。借书有一个例外条件，不能略过这个连接词。",
    },
  ],
} as const;

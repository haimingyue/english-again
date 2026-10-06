// Sole teaching source: Projects/03 8天教你学会像读中文那样读英文/原版书提取.
// Chapter/section/example references refer to the three local chapter extracts.
// Keep the book's methods, examples and training sequence; do not merge other curricula.
export const readingContent = {
  methods: [
    {
      title: "如何正确理解句子意思",
      source: "第二章 · 第一节",
      example: "This room will do us very nicely.",
      english: true,
      paragraphs: [
        "根据句子的整体意思和前后逻辑，确定其中单词的意思。不要先把每个单词背过的中文意思列出来，再串成整句话。",
        "书中用 do 举例：放在不同的句子里，它的意思也不同。在这句话中，do 是“适合，满足”，整句是“这间房子正合我们的意”。",
      ],
      takeaway: "由句子的语境，确定单词在这里的意思。",
    },
    {
      title: "断点",
      source: "第二章 · 第二节",
      example: "Do you remember all those years / …",
      english: true,
      paragraphs: [
        "把英文的一句长句，分成几个较短的中文句子来理解。不必只在英文标点处停顿，书中以语意是否完整作为判断断点的标准。",
        "Do you remember 只是“你还记得……”，意思还没说完；读到 all those years，成为“你还记得那些年吗？”，才可以在这里断句。",
      ],
      takeaway: "感觉一个意思说完整了，再进入下一个意思。",
    },
    {
      title: "加词",
      source: "第二章 · 第三节",
      example: "（而这个祖先是）……",
      english: false,
      paragraphs: [
        "一句英文断成几句中文后，有些部分会显得支离破碎。按照中文理解的习惯，把省略或需要承接的内容补出来，让前后意思连贯。",
        "书中例句 9 补入“（而这个祖先是）”和“（以上的这些疑问）”，使断开的内容接起来。加词的目的是在不改变原句意思的前提下，使理解完整、合理。",
      ],
      takeaway: "断开后意思不完整，就通过加词把它接起来。",
    },
    {
      title: "接受英文的语序习惯",
      source: "第二章 · 第四节",
      example: "什么东西／什么人 → 怎么样",
      english: false,
      paragraphs: [
        "按书中的思路，先接收句子谈论的事物，再接收对它的描述。只有“什么东西／什么人”和“怎么样”接上，一个意思才算说完整。",
        "如果前面的事物还没有相应描述，后面又出现了另一个事物，就带着没有完成的意思，先理解后面的内容，等相应描述出现时再接上。",
      ],
      takeaway: "带着尚未完整的意思，顺着英文继续读。",
    },
  ],
  unfamiliarWords: [
    {
      title: "名词",
      text: "书中把不认识的名词当作人或事物的代号，可以用第一个字母代替，先读出整句话的意思。",
    },
    {
      title: "动词",
      text: "对于不认识或不好翻译的动词，书中使用“做”“干什么用”等意思笼统的表达来理解。",
    },
    {
      title: "形容词",
      text: "书中建议根据句子的逻辑，推断不认识的形容词的褒贬含义。",
    },
    {
      title: "副词及其他词性",
      text: "书中将这类词作为读句子整体意思时可以不予考虑的内容。",
    },
  ],
  demonstration: {
    source: "第二章 · 第四节 · 例句 10",
    sentence:
      "What is harder to establish is whether the productivity revolution that businessmen assume they are presiding over is for real.",
    steps: [
      {
        english: "What is harder to establish is",
        meaning: "（这一点）更难确定。",
        explanation: "书中先用“这一点”承接要确定的内容，接着往下读。",
      },
      {
        english: "whether the productivity revolution",
        meaning: "这场生产力革命是否……",
        explanation:
          "关于这场革命“怎么样”的描述还没出现，带着没有完整的意思继续读。",
      },
      {
        english: "that businessmen assume they are presiding over",
        meaning: "商界人士以为他们正在主导（这场革命）。",
        explanation:
          "先理解这段内容，用“这场革命”补出所主导的事物；前面未完成的意思仍要保留。",
      },
      {
        english: "is for real.",
        meaning: "……确实存在。",
        explanation:
          "这部分接回前面的“这场生产力革命是否……”，到这里，这个意思才完整。",
      },
    ],
  },
  training: [
    {
      title: "直接读句子，进行断句",
      text: "按照第二章第二节中断点的技巧，直接阅读并断句。",
    },
    {
      title: "同时理解每个断句",
      text: "根据单词的理解方法和句子整体性，读出每个断句的意思。",
    },
    {
      title: "按照英文语序接受信息",
      text: "遇到结构复杂的复合句，按照英文的语序习惯理解句子的整体逻辑。",
    },
    {
      title: "需要时加词，使句意完整",
      text: "按照加词的方法加入适当的词，使断开的意思连贯起来。",
    },
  ],
  exercises: [
    {
      kind: "根据语境理解单词",
      source: "第二章 · 第一节 · 例句 4",
      sentence: "This room will do us very nicely.",
      question: "根据整句话的语境，理解 do 的意思。",
      answer: "这间房子正合我们的意。",
      why: "书中把这里的 do 理解为“适合，满足”，不按单词表中的“做”来串联整句。",
    },
    {
      kind: "根据语境理解单词",
      source: "第二章 · 第一节 · 例句 5",
      sentence: "This coat will do for another season.",
      question: "同一个 do 换了语境，按照句子的整体意思来理解。",
      answer: "这件外套能再用一季。",
      why: "书中把这里的 do 理解为“使用”。单词的具体意思要放在句子中确定。",
    },
    {
      kind: "带着生词读句子",
      source: "第二章 · 第一节 · 如何处理文章中不认识的单词",
      sentence:
        "The first flying vertebrates, the pterosaurs, have intrigued paleontologists for more than two centuries.",
      question: "把不认识的名词看作代号，继续理解整句话。",
      answer:
        "最早会飞的 V，叫作 pterosaurs，已经引起 P 这群人的兴趣超过两个世纪。",
      why: "书中用 V 和 P 代替不认识的名词，把注意力放在已经认识的内容上，读出句子的整体意思。",
    },
    {
      kind: "根据语意完整性断句",
      source: "第二章 · 第二节 · 例句 7",
      sentence:
        "Do you remember all those years when scientists argued that smoking would kill us but the doubters insisted that we didn’t know for sure?",
      question: "顺着句子读，感觉一个意思完整时再断句。",
      answer:
        "你还记得那些年吗？／科学家们认为吸烟会害死我们。／但怀疑者坚持认为，我们并不确信。",
      why: "书中的断点在 years 和 us 后面。“你还记得……”和“科学家们认为……”都没有说完，不能在 remember 或 argued 后把这个意思结束掉。",
    },
    {
      kind: "断句、语序与加词配合",
      source: "第三章 · 具体例句的分析过程 · 例句 1",
      sentence:
        "The Audubon Society and other conservation groups, concerned over what they perceive as the serious threat to the environment posed by the policies of the government, are preparing for a major political effort.",
      question:
        "按照书中的训练步骤，断句、理解词义、接受语序，并在需要时加词。",
      answer:
        "Audubon Society 和其他保护组织……关注它们认为对环境构成的严重威胁。（这些威胁）由政府的政策造成。……正在为一次重大的政治行动作准备。",
      why: "书中在 posed 前补出“这些威胁”；读到 are preparing 时，要接回前面的保护组织，不能理解成政府正在准备。",
    },
  ],
} as const;

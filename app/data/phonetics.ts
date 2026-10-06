// Learning content transcribed from the approved design reference.
export const phoneticsContent = {
  pairs: [
    {
      type: "单词听辨",
      options: [
        {
          word: "sheep",
          ipa: "/ʃiːp/",
          source: "google-c348773b-a2f970fa-14c342a8-e7ed9499-04572b67.mp3",
          audio: "/assets/audio/phonetics/pair-1-1.mp3",
        },
        {
          word: "ship",
          ipa: "/ʃɪp/",
          source: "google-d1fadee5-f262e995-8cd9560a-32b4b282-755fcddc.mp3",
          audio: "/assets/audio/phonetics/pair-1-2.mp3",
        },
      ],
    },
    {
      type: "单词听辨",
      options: [
        {
          word: "back",
          ipa: "/bæk/",
          source: "google-95d6b740-94bd50da-40134461-24b8fdce-0f16d849.mp3",
          audio: "/assets/audio/phonetics/pair-2-1.mp3",
        },
        {
          word: "pack",
          ipa: "/pæk/",
          source: "google-1884e4b8-ee1ce104-06b03491-4460b901-b36eb660.mp3",
          audio: "/assets/audio/phonetics/pair-2-2.mp3",
        },
      ],
    },
    {
      type: "音素听辨",
      options: [
        {
          word: "/f/",
          ipa: "清辅音",
          source: "f.MP3",
          audio: "/assets/audio/phonetics/pair-3-1.mp3",
        },
        {
          word: "/v/",
          ipa: "浊辅音",
          source: "v.MP3",
          audio: "/assets/audio/phonetics/pair-3-2.mp3",
        },
      ],
    },
  ],
  cards: [
    {
      label: "01 · 元音 IPA",
      title: "一个音，\n三条发音线索。",
      description:
        "看音标、听声音，再观察舌位高低、前后位置和圆唇度。让一个抽象的符号，对应到能感受到的发音动作。",
      clues: [
        ["舌位高低", "舌头抬到什么位置？"],
        ["舌位前后", "发音时靠前还是靠后？"],
        ["圆唇度", "嘴唇收圆，还是自然放松？"],
      ],
      tip: "先听再模仿；遇到不确定的声音，再回来看这些线索。",
      image: "vowel-card.png",
      alt: "用户自制元音卡片：ɪ 的音频按钮、舌位高低、前后和圆唇度",
    },
    {
      label: "02 · 发音图解",
      title: "让声音，\n有一个看得见的位置。",
      description:
        "卡片背面把发音示范与舌位图放在一起。对着图观察，再听声音、自己模仿，把静态的图解变成发音动作。",
      clues: [
        ["看嘴形", "留意嘴唇开合与圆唇程度"],
        ["找舌位", "结合图解理解舌位高低与前后"],
        ["听与模仿", "回到音频，比较自己的发音"],
      ],
      tip: "图解提供线索；具体音质需要结合音频一起辨别。",
      image: "articulation-card.png",
      alt: "用户自制发音图解卡片：ɪ 的嘴形示范与中文元音舌位图",
    },
    {
      label: "03 · 单词最小对立体",
      title: "back 还是 pack？\n先听，再选。",
      description:
        "两个单词只差一个声音。先听录音判断是哪一个，翻面后核对答案；选错时，再听一次并比较。",
      clues: [
        ["听问题", "暂时不看答案，听完整个词"],
        ["做选择", "判断听到的是 back 还是 pack"],
        ["核对反馈", "重听目标词，再比较易混发音"],
      ],
      tip: "截图展示已翻面的状态。实际练习时，先独立作答再看答案。",
      image: "word-pair-card.png",
      alt: "用户自制单词听辨卡片：back 与 pack 配对，背面答案为 pack",
    },
    {
      label: "04 · 音素最小对立体",
      title: "从一个声音，\n练出细微的区别。",
      description:
        "把注意力放到音素本身。比如 /f/ 与 /v/，观察相似的发音位置，并留意声带是否振动。",
      clues: [
        ["只听声音", "把注意力集中到这一对音"],
        ["判断差别", "比较气流和声带振动"],
        ["再试一次", "核对后重听，把声音与符号联系起来"],
      ],
      tip: "听辨和跟读可以交替进行；换到真实单词里，再检查一次。",
      image: "sound-pair-card.png",
      alt: "用户自制音素听辨卡片：f 与 v 配对，背面答案为 f",
    },
  ],
} as const;

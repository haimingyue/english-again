const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open');
}));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); menu.focus();
  }
});

const audio = document.getElementById('quiz-audio');
const playButton = document.getElementById('quiz-play');
const caption = document.getElementById('play-caption');
const feedback = document.getElementById('quiz-feedback');
const answers = [...document.querySelectorAll('[data-answer]')];
const quizCard = document.getElementById('listen');
let pairIndex = 0, correct = Math.floor(Math.random() * 2), heard = false, answered = false, playbackToken = 0;

function resetQuiz() {
  playbackToken++; audio.pause(); audio.removeAttribute('src'); audio.load();
  heard = false; answered = false; correct = Math.floor(Math.random() * 2);
  const pair = phoneticsPairs[pairIndex];
  document.getElementById('quiz-type').textContent = pair.type;
  document.querySelector('.listen-sub').textContent = pair.type === '单词听辨' ? '只差一个声音，意思就不一样。' : '留意气流与声带，分辨这一对声音。';
  answers.forEach((b, i) => {
    b.disabled = true; b.className = 'answer';
    b.querySelector('strong').textContent = pair.options[i].word;
    b.querySelector('.option-ipa').textContent = pair.options[i].ipa;
  });
  feedback.textContent = '先听音频，再选择答案。'; delete feedback.dataset.result;
  caption.textContent = '点击播放，听一遍'; playButton.setAttribute('aria-label', '播放本题音频');
  quizCard.classList.remove('is-playing');
}
playButton.addEventListener('click', async () => {
  const token = ++playbackToken;
  audio.pause(); audio.src = phoneticsPairs[pairIndex].options[correct].audio;
  caption.textContent = '正在加载音频…';
  try {
    await audio.play();
    if (token !== playbackToken) return;
    heard = true; quizCard.classList.add('is-playing'); caption.textContent = '正在播放…';
    if (!answered) { answers.forEach(b => b.disabled = false); feedback.textContent = '听到哪一个？选出你的答案。'; }
    playButton.setAttribute('aria-label', '重播本题音频');
  } catch (error) {
    if (token !== playbackToken || error.name === 'AbortError') return;
    caption.textContent = '播放失败，点击重试';
    feedback.textContent = '音频暂时无法播放。可以重试，或下载卡组到 Anki 练习。';
    quizCard.classList.remove('is-playing');
  }
});
audio.addEventListener('ended', () => { quizCard.classList.remove('is-playing'); caption.textContent = '点击可以再听一遍'; });
audio.addEventListener('pause', () => quizCard.classList.remove('is-playing'));
audio.addEventListener('error', () => {
  if (!audio.getAttribute('src')) return;
  caption.textContent = '播放失败，点击重试';
  feedback.textContent = '音频暂时无法播放。可以重试，或下载卡组到 Anki 练习。';
  quizCard.classList.remove('is-playing');
});
answers.forEach((button, index) => button.addEventListener('click', () => {
  if (!heard || answered) return;
  answered = true;
  const word = phoneticsPairs[pairIndex].options[correct].word;
  answers.forEach(b => b.disabled = true);
  answers[correct].classList.add('is-correct');
  if (index === correct) {
    feedback.dataset.result = 'correct'; feedback.textContent = '✓ 听对了，是 ' + word + '。可以重听一次，再换一组。';
  } else {
    button.classList.add('is-wrong'); feedback.dataset.result = 'wrong';
    feedback.textContent = '这次是 ' + word + '。再听一遍，留意它和另一项的区别。';
  }
}));
document.getElementById('next-pair').addEventListener('click', () => { pairIndex = (pairIndex + 1) % phoneticsPairs.length; resetQuiz(); });

const cardData = [
  {label:'01 · 元音 IPA',title:'一个音，<br>三条发音线索。',description:'看音标、听声音，再观察舌位高低、前后位置和圆唇度。让一个抽象的符号，对应到能感受到的发音动作。',clues:[['舌位高低','舌头抬到什么位置？'],['舌位前后','发音时靠前还是靠后？'],['圆唇度','嘴唇收圆，还是自然放松？']],tip:'先听再模仿；遇到不确定的声音，再回来看这些线索。',image:'vowel-card.png',alt:'用户自制元音卡片：ɪ 的音频按钮、舌位高低、前后和圆唇度'},
  {label:'02 · 发音图解',title:'让声音，<br>有一个看得见的位置。',description:'卡片背面把发音示范与舌位图放在一起。对着图观察，再听声音、自己模仿，把静态的图解变成发音动作。',clues:[['看嘴形','留意嘴唇开合与圆唇程度'],['找舌位','结合图解理解舌位高低与前后'],['听与模仿','回到音频，比较自己的发音']],tip:'图解提供线索；具体音质需要结合音频一起辨别。',image:'articulation-card.png',alt:'用户自制发音图解卡片：ɪ 的嘴形示范与中文元音舌位图'},
  {label:'03 · 单词最小对立体',title:'back 还是 pack？<br>先听，再选。',description:'两个单词只差一个声音。先听录音判断是哪一个，翻面后核对答案；选错时，再听一次并比较。',clues:[['听问题','暂时不看答案，听完整个词'],['做选择','判断听到的是 back 还是 pack'],['核对反馈','重听目标词，再比较易混发音']],tip:'截图展示已翻面的状态。实际练习时，先独立作答再看答案。',image:'word-pair-card.png',alt:'用户自制单词听辨卡片：back 与 pack 配对，背面答案为 pack'},
  {label:'04 · 音素最小对立体',title:'从一个声音，<br>练出细微的区别。',description:'把注意力放到音素本身。比如 /f/ 与 /v/，观察相似的发音位置，并留意声带是否振动。',clues:[['只听声音','把注意力集中到这一对音'],['判断差别','比较气流和声带振动'],['再试一次','核对后重听，把声音与符号联系起来']],tip:'听辨和跟读可以交替进行；换到真实单词里，再检查一次。',image:'sound-pair-card.png',alt:'用户自制音素听辨卡片：f 与 v 配对，背面答案为 f'}
];
let selectedCard = 0;
const cardButtons = [...document.querySelectorAll('[data-card]')];
const cardImage = document.getElementById('card-image');
function selectCard(index) {
  selectedCard = index; const card = cardData[index];
  cardButtons.forEach((b, i) => { b.setAttribute('aria-selected', String(i === index)); b.tabIndex = i === index ? 0 : -1; });
  document.getElementById('card-panel').setAttribute('aria-labelledby', 'card-tab-' + index);
  document.getElementById('card-label').textContent = card.label;
  document.getElementById('card-title').innerHTML = card.title;
  document.getElementById('card-description').textContent = card.description;
  document.getElementById('card-tip').textContent = card.tip;
  const clues = document.getElementById('card-clues'); clues.replaceChildren();
  card.clues.forEach(([label, text]) => { const row = document.createElement('div'),dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=text;row.append(dt,dd);clues.append(row); });
  cardImage.src = 'assets/images/phonetics/' + card.image; cardImage.alt = card.alt;
  cardImage.width = index < 2 ? 1098 : 1024; cardImage.height = index < 2 ? 1332 : 1420;
}
cardButtons.forEach((button, index) => {
  button.addEventListener('click', () => selectCard(index));
  button.addEventListener('keydown', e => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
    e.preventDefault(); const next = e.key === 'Home' ? 0 : e.key === 'End' ? cardButtons.length-1 : (index + (e.key === 'ArrowRight' ? 1 : -1) + cardButtons.length) % cardButtons.length;
    selectCard(next); cardButtons[next].focus();
  });
});
document.querySelectorAll('[data-show-card]').forEach(b => b.addEventListener('click', () => {
  selectCard(Number(b.dataset.showCard)); document.getElementById('cards').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});cardButtons[selectedCard].focus({preventScroll:true});
}));
const imageDialog = document.getElementById('image-dialog');
document.getElementById('enlarge-card').addEventListener('click', () => {
  const image = document.getElementById('large-card-image'); image.src=cardImage.src; image.alt=cardImage.alt;
  document.getElementById('image-dialog-title').textContent=cardData[selectedCard].label;
  imageDialog.showModal(); document.getElementById('close-image').focus();
});
document.getElementById('close-image').addEventListener('click',()=>imageDialog.close());
imageDialog.addEventListener('close',()=>document.getElementById('enlarge-card').focus());
imageDialog.addEventListener('click',e=>{if(e.target===imageDialog){const r=imageDialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)imageDialog.close();}});

'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#nav');
function closeMenu(){nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('is-open')){closeMenu();menu.focus();}});
const hints=[
'<span class="small-label">先独立理解</span><h3>是谁“回答了我的问题”？</h3><p>Maya 和 the email 都在句子里。先试着找到 answered 对应的对象，再想想后半句的 not 否定了什么。</p>',
'<span class="small-label">意群提示 / 斜线表示参考停顿</span><div class="chunk-sentence" lang="en"><span>The email</span><b>/</b><span>that Maya sent after the meeting</span><b>/</b><span>answered my question,</span><b>/</b><span>but it did not explain</span><b>/</b><span>why the schedule had changed.</span></div><p>读到 The email，先暂存“邮件”这个对象。后面交代是哪封邮件，主线仍在等待动作。停顿不等于整句结束。</p>',
'<span class="small-label">关系提示 / 把分开的信息接起来</span><div class="relation-grid"><div><span>主线 · 谁做了什么</span><strong lang="en">The email → answered</strong><p>回答问题的是邮件。Maya 发邮件的部分，是对邮件的说明。</p></div><div><span>指代 · 它指向什么</span><strong lang="en">it → the email</strong><p>it 指这封邮件；but 表示前后转折。</p></div><div><span>否定 · 什么没有发生</span><strong lang="en">did not explain → why</strong><p>没有解释的是变动的原因。不是说“日程没有变化”。</p></div></div>',
'<span class="small-label">完整理解 / 再与自己的答案核对</span><h3>Maya 在会后发来的邮件回答了我的问题，<br>但没有说明日程为什么发生了变动。</h3><p>检查三件事：answered 是否接回邮件；it 是否指邮件；not 是否只否定 explain。核对后回到原句，再顺着英文读一遍。</p>'
];
document.querySelectorAll('[data-level]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-level]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelector('#reading-hint').innerHTML=hints[Number(b.dataset.level)];}));
const exercises=[
{kind:'语境中的词义',sentence:'The shop cut its prices, but sales hardly changed.',question:'cut 和 hardly 分别表达什么？',answer:'商店降价，但销售几乎没有变化。',why:'cut prices 是降价；hardly 表示“几乎不”。不能把后半句理解成“销售发生了很大变化”。'},
{kind:'比较两个原因',sentence:'Lea chose the course as much because of the teacher as because of the topic.',question:'选择课程有哪些原因？两者是什么关系？',answer:'教师与主题都是原因，句子赋予两者同等分量。',why:'把 as much because of… as because of… 两端连起来。这里强调两者同样重要，不等于有测量数据证明各占一半。'},
{kind:'接回主线',sentence:'The books that Leo borrowed last week are still on his desk.',question:'什么仍在桌上？',answer:'Leo 上周借的那些书，仍在他的桌上。',why:'主线是 The books → are。that 引出借书的说明，不能把 Leo 当成 are 的主语。'},
{kind:'补明关系',sentence:'Nora bought a lamp, which she placed beside the sofa.',question:'which 指什么？谁把它放在哪里？',answer:'Nora 买了一盏灯，并把这盏灯放在沙发旁。',why:'which 指前面的 lamp，she 指 Nora。补明对象即可，不需要凭空添加原因。'},
{kind:'保留条件',sentence:'You can borrow the book unless someone else has reserved it.',question:'什么情况下不能借？',answer:'如果已经有别人预约了这本书，就不能借。',why:'unless 表示“除非”。借书有一个例外条件，不能略过这个连接词。'}
];
let exerciseIndex=0;
const answer=document.querySelector('#exercise-answer'),check=document.querySelector('#check-exercise'),prev=document.querySelector('#previous-exercise'),next=document.querySelector('#next-exercise');
function renderExercise(){const e=exercises[exerciseIndex];document.querySelector('#exercise-kind').textContent=(exerciseIndex+1)+' / 5 · '+e.kind;document.querySelector('#exercise-sentence').textContent=e.sentence;document.querySelector('#exercise-question').textContent=e.question;answer.querySelector('strong').textContent=e.answer;answer.querySelector('p').textContent=e.why;answer.hidden=true;check.setAttribute('aria-expanded','false');check.textContent='我想好了，核对理解 ↓';document.querySelector('#exercise-position').textContent=(exerciseIndex+1)+' / 5';prev.disabled=exerciseIndex===0;next.textContent=exerciseIndex===4?'回到第一句 ↺':'下一句 →';}
check.addEventListener('click',()=>{answer.hidden=!answer.hidden;check.setAttribute('aria-expanded',String(!answer.hidden));check.textContent=answer.hidden?'我想好了，核对理解 ↓':'收起答案，再读一次 ↑';});
prev.addEventListener('click',()=>{if(exerciseIndex>0){exerciseIndex--;renderExercise();}});
next.addEventListener('click',()=>{exerciseIndex=(exerciseIndex+1)%exercises.length;renderExercise();});
document.querySelectorAll('img[data-fallback]').forEach(img=>{function fallback(){if(img.dataset.failed)return;img.dataset.failed='true';img.src=img.dataset.fallback;img.alt=img.dataset.fallback.includes('little-prince')?'小王子共读专栏':'《8天教你像读中文一样读英文》书封';img.parentElement.classList.add('fallback','cover-thumb');}img.addEventListener('error',fallback);if(img.complete&&!img.naturalWidth)fallback();});

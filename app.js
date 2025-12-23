// Unit 1 — Egypt's Heritage (Pink Theme)
let voices=[];function loadVoices(){voices=speechSynthesis.getVoices()}window.speechSynthesis?.addEventListener('voiceschanged',loadVoices);loadVoices();
function speak(t,rate=0.85){if(!('speechSynthesis'in window)){return}const u=new SpeechSynthesisUtterance(t);const v=voices.find(v=>/en-GB/i.test(v.lang)&&/Google UK English Female|Hazel|Liberty/i.test(v.name))||voices.find(v=>/en-GB/i.test(v.lang))||voices[0];if(v)u.voice=v;u.rate=rate;u.pitch=1;speechSynthesis.cancel();speechSynthesis.speak(u)}

// Sounds
const audioCtx=new (window.AudioContext||window.webkitAudioContext)();function beep(type='ok'){const o=audioCtx.createOscillator();const g=audioCtx.createGain();o.connect(g);g.connect(audioCtx.destination);o.frequency.value=type==='ok'?860:240;g.gain.value=0.05;o.type='square';o.start();setTimeout(()=>o.stop(),170)}function cheer(){const dur=0.45;const sr=audioCtx.sampleRate;const len=sr*dur;const buffer=audioCtx.createBuffer(1,len,sr);const data=buffer.getChannelData(0);for(let i=0;i<len;i++){data[i]=(Math.random()*2-1)*Math.exp(-3*i/len);}const src=audioCtx.createBufferSource();src.buffer=buffer;const g=audioCtx.createGain();g.gain.value=0.14;src.connect(g);g.connect(audioCtx.destination);src.start();setTimeout(()=>{beep('ok');},120)}
function showToast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),1600)}

// Share buttons
document.addEventListener('DOMContentLoaded',()=>{
  const wa=document.getElementById('waShare');
  const fb=document.getElementById('fbShare');
  const cp=document.getElementById('copyShare');
  wa?.addEventListener('click',()=>{const text=encodeURIComponent(document.title+' '+location.href);window.open(`https://wa.me/?text=${text}`,'_blank')});
  fb?.addEventListener('click',()=>{const url=encodeURIComponent(location.href);window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`,'_blank')});
  cp?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);showToast('Link copied ✅')}catch(e){showToast('Clipboard not available')}});
});

// Data — Unit 1 Egypt's Heritage (simplified, teaching focus)
const data={lessons:{1:{title:"Lesson 1 — Taking Pride in Our Beloved Egypt",vocabulary:[{en:'heritage',ar:'تراث',ex:'Egypt has a rich heritage.'},{en:'civilization',ar:'حضارة',ex:'The ancient Egyptian civilization is famous.'},{en:'monument',ar:'أثر/معلم',ex:'The pyramids are great monuments.'},{en:'crossroads',ar:'مفترق طرق',ex:'Egypt was a crossroads for trade.'},{en:'hieroglyphs',ar:'الهيروغليفية',ex:'Hieroglyphs recorded history.'},{en:'library',ar:'مكتبة',ex:'The Library of Alexandria gathered knowledge.'},{en:'restore',ar:'يُرمم',ex:'We restore historical sites.'},{en:'identity',ar:'هوية',ex:'Heritage builds national identity.'}],reading:[
  'Egypt is a land where the past and present meet in harmony.',
  'Our ancestors built a great civilization that inspired the world.',
  'Hieroglyphs recorded knowledge and preserved history.',
  'Modern Egypt builds roads, bridges, and museums to progress.',
  'We protect our heritage and share our culture with the world.',
  'Pride grows when we understand our history and work for the future.'
],readingMCQ:[
  {q:'Hieroglyphs were mainly used to…',opts:['decorate temples','record history','teach maths','sell goods'],a:1},
  {q:'Modern Egypt shows progress by…',opts:['closing museums','building roads and bridges','stopping trade','ignoring history'],a:1},
  {q:'Protecting heritage helps build…',opts:['identity','traffic','weather','noise'],a:0}
]},2:{title:'Lesson 2 — Moments That Shaped Us',vocabulary:[{en:'preserve',ar:'يحافظ',ex:'We preserve important sites.'},{en:'determination',ar:'إصرار',ex:'Determination leads to progress.'},{en:'inspire',ar:'يلهم',ex:'Monuments inspire people.'},{en:'restore',ar:'يرمم',ex:'Teams restore old buildings.'},{en:'pride',ar:'فخر',ex:'People feel pride in their country.'}],reading:[
  'Preserving heritage is essential for national identity.',
  'Young people can learn and gain pride from history.',
  'Restoring monuments connects the nation to its past.',
  'Tourism grows when sites are protected and presented well.',
  'Together, we keep our culture alive while moving forward.',
  'Pride and progress go hand in hand.'
],readingMCQ:[
  {q:'Restoring historical sites helps the nation to…',opts:['forget the past','reconnect with its past','lose pride','stop tourism'],a:1},
  {q:'Preservation supports…',opts:['identity','random changes','traffic','noise'],a:0},
  {q:'Young people are inspired when they…',opts:['ignore museums','visit monuments','avoid history','hide facts'],a:1}
]},3:{title:'Lesson 3 — Past Simple & Past Continuous',vocabulary:[{en:'past simple',ar:'الماضي البسيط',ex:'We visited the museum.'},{en:'past continuous',ar:'الماضي المستمر',ex:'We were visiting the museum.'},{en:'while',ar:'بينما',ex:'While I was reading, the phone rang.'},{en:'when',ar:'عندما',ex:'I was walking when I saw a friend.'}],reading:[
  'We use the past simple for finished actions in the past.',
  'We use the past continuous for longer actions happening at a past time.',
  'Use while/when to show two actions together.',
  'Practice helps learners use tenses correctly.',
  'Examples make grammar simple and clear.',
  'Daily practice builds confidence.'
],readingMCQ:[
  {q:'Past simple is used for…',opts:['actions in progress','finished past actions','future plans','commands'],a:1},
  {q:'Past continuous is used for…',opts:['finished actions','ongoing past actions','questions','titles'],a:1},
  {q:'We often use ____ to connect two actions.',opts:['because','while/when','although','but'],a:1}
],grammarRule:'Past Simple vs. Past Continuous\n• Past simple: visited, built, wrote.\n• Past continuous: was/were + -ing (was visiting).',grammarMCQ:[
  {q:'I ____ the museum yesterday.',opts:['visit','visited','was visiting','visiting'],a:1},
  {q:'She was reading when the phone ____.',opts:['rings','rang','was ringing','ring'],a:1},
  {q:'They ____ football last weekend.',opts:['play','played','were playing','playing'],a:1},
  {q:'We were walking when we ____ an old friend.',opts:['saw','see','seeing','was seeing'],a:0},
  {q:'He ____ TV when his mother came home.',opts:['watch','watched','was watching','watching'],a:2}
]},4:{title:'Lesson 4 — Where Pride Begins',vocabulary:[{en:'achievement',ar:'إنجاز',ex:'Egyptians achieved great progress.'},{en:'traditions',ar:'تقاليد',ex:'Traditions guide our values.'},{en:'values',ar:'قِيَم',ex:'Values shape our society.'},{en:'author',ar:'مؤلف',ex:'Authors recorded knowledge.'}],reading:[
  'True pride begins when we understand our history and protect our culture.',
  'Ancient achievements inspire future generations.',
  'Egypt became a place where culture was preserved and celebrated.',
  'Authors and poets shared ideas that influenced people.',
  'We honor the past and build tomorrow with determination.',
  'Pride grows like a tree with strong roots.'
],readingMCQ:[
  {q:'The passage says pride begins when we…',opts:['forget history','understand our history','stop reading','close museums'],a:1},
  {q:'Great authors and poets help by…',opts:['hiding ideas','sharing ideas and knowledge','ignoring culture','avoiding books'],a:1},
  {q:'Ancient achievements are…',opts:['a source of pride','a problem','only decoration','useless'],a:0}
]}},exam:[
  {q:'Egypt has a rich ____ that we must protect.',opts:['heritage','future','modernity','technology'],a:0},
  {q:'The Pyramids are famous ____ in Egypt.',opts:['monuments','objects','festivals','instruments'],a:0},
  {q:'We should ____ historical buildings.',opts:['destroy','preserve','ignore','forget'],a:1},
  {q:'Archaeologists study ____.',opts:['animals','monuments','music','food'],a:1},
  {q:'We ____ the museum yesterday.',opts:['visit','visited','was visiting','visiting'],a:1},
  {q:'While I was walking, I ____ an old friend.',opts:['see','saw','seeing','was seeing'],a:1},
  {q:'Tutankhamun was an ____ Egyptian king.',opts:['ancient','modern','temporary','recent'],a:0},
  {q:'The Nile helped the growth of Egyptian ____.',opts:['civilization','disaster','animal','person'],a:0},
  {q:'The museum displayed a rare ____ from ancient times.',opts:['artifact','machine','plant','note'],a:0},
  {q:'Confidence grows with ____.',opts:['practice','posters','sleep','noise'],a:0}
]};

function $(s,r=document){return r.querySelector(s)}function $all(s,r=document){return Array.from(r.querySelectorAll(s))}
function buildTopTabs(){const w=$('.tabs');['Lesson 1','Lesson 2','Lesson 3','Lesson 4','Unit Exam'].forEach((t,i)=>{const el=document.createElement('div');el.className='tab';el.textContent=t;el.onclick=()=>activateSection(i);w.appendChild(el)})}
function activateSection(i){$all('.tab').forEach((t,idx)=>t.classList.toggle('active',idx===i));$all('.section').forEach((s,idx)=>s.classList.toggle('active',idx===i))}
function buildLesson(n){const sec=document.createElement('div');sec.className='section';const subt=document.createElement('div');subt.className='subtabs';sec.appendChild(subt);const content=document.createElement('div');content.className='lesson-content';sec.appendChild(content);const labels=['Vocabulary','Games','Reading'];if(n===3)labels.push('Grammar');labels.forEach((st,idx)=>{const s=document.createElement('div');s.className='subtab';s.textContent=st;s.onclick=()=>activateSub(content,subt,n,idx);subt.appendChild(s)});document.querySelector('.container').appendChild(sec);activateSub(content,subt,n,0)}
function activateSub(content,subtabs,n,idx){$all('.subtab',subtabs).forEach((t,i)=>t.classList.toggle('active',i===idx));content.innerHTML='';const L=data.lessons[n];if(idx===0)renderVocab(content,L.vocabulary);else if(idx===1)renderGames(content,L.vocabulary,n);else if(idx===2)renderReading(content,L.reading,L.readingMCQ);else renderGrammar(content,data.lessons[3].grammarRule,data.lessons[3].grammarMCQ)}

// Vocabulary + Listening + Written Dictation
function renderVocab(root,vocab){
  const grid=document.createElement('div');grid.className='cards';root.appendChild(grid);
  const colors=['linear-gradient(135deg,#fff0f6,#ffd6e7)','linear-gradient(135deg,#e9d8ff,#fff0f6)','linear-gradient(135deg,#fdfaff,#ffedf6)'];
  vocab.forEach((item,idx)=>{const c=document.createElement('div');c.className='card';c.style.background=colors[idx%colors.length];c.innerHTML=`<h3>${item.en}</h3><div class=\"ar\">${item.ar}</div><div class=\"ex\">Example: ${item.ex}</div>`;const btns=document.createElement('div');btns.className='btns';const b1=document.createElement('button');b1.className='btn';b1.textContent='🔊 Word';b1.onclick=()=>speak(item.en);const b2=document.createElement('button');b2.className='btn secondary';b2.textContent='🔊 Example';b2.onclick=()=>speak(item.ex);btns.appendChild(b1);btns.appendChild(b2);c.appendChild(btns);grid.appendChild(c)});

  // Listening Practice (AR -> EN)
  const tools=document.createElement('div');tools.className='qcard';tools.style.background='#fff0f6';tools.style.border='1px solid #f3cfe0';tools.style.marginTop='10px';
  tools.innerHTML=`<b>Listening Practice:</b> Show Arabic, hear English.<br>
  <div id=\"lpBox\" style=\"margin-top:8px;padding:12px;border-radius:12px;background:linear-gradient(135deg,#fff0f6,#ffd6e7);border:1px dashed #f3cfe0;text-align:center;font-size:18px;font-weight:700;color:#4e2034\">Ready?</div>
  <div class=\"btns\"><button class=\"btn small\" id=\"lpStart\">Start</button><button class=\"btn small secondary\" id=\"lpRepeat\">Repeat</button><button class=\"btn small warning\" id=\"lpNext\">Next</button></div>`;
  root.appendChild(tools);
  let order=[...vocab].sort(()=>Math.random()-0.5), idx=0; const box=tools.querySelector('#lpBox');
  function lpShow(){if(idx>=order.length){box.textContent='Great job!';cheer();return}box.textContent=order[idx].ar;speak(order[idx].en,0.85)}
  tools.querySelector('#lpStart').onclick=()=>{idx=0;lpShow()};
  tools.querySelector('#lpRepeat').onclick=()=>{if(idx<order.length){speak(order[idx].en,0.85)}};
  tools.querySelector('#lpNext').onclick=()=>{cheer();idx++;lpShow()};

  // Written Dictation — retry until correct
  const dict=document.createElement('div');dict.className='qcard';dict.style.marginTop='10px';dict.style.background='#fff0f6';dict.style.border='1px solid #f3cfe0';
  dict.innerHTML=`<b>Written Dictation:</b> Type the English word for the shown Arabic. Retries until correct.<br>
  <div id=\"dStats\" style=\"margin-top:6px;color:#4e2034\">Word <span id=\"dPos\">0</span>/<span id=\"dTotal\">0</span> · Attempts: <span id=\"dTry\">0</span></div>
  <div id=\"dArea\" style=\"margin-top:8px\"></div>
  <div class=\"btns\"><button class=\"btn small\" id=\"dStart\">Start</button> <button class=\"btn small\" id=\"dStop\">Stop</button></div>`;root.appendChild(dict);
  let dRun=false,dIndex=0,dOrder=[],attempts=0;const dArea=dict.querySelector('#dArea');
  function dUpdate(){dict.querySelector('#dPos').textContent=String(Math.min(dIndex+1,dOrder.length));dict.querySelector('#dTotal').textContent=String(dOrder.length);dict.querySelector('#dTry').textContent=String(attempts)}
  function dAsk(){if(!dRun)return;dUpdate();if(dIndex>=dOrder.length){showToast('Dictation finished ✅');dRun=false;return}const item=dOrder[dIndex];attempts=0;dUpdate();dArea.innerHTML=`<div><b>Arabic:</b> <span style=\"color:#a13e6b\">${item.ar}</span></div><input id=\"dInput\" style=\"width:100%;padding:10px;margin-top:8px;border-radius:10px;border:1px solid #f3cfe0\" placeholder=\"Type English...\"/><div class=\"btns\"><button class=\"btn\" id=\"dCheck\">Check</button> <button class=\"btn secondary\" id=\"dRepeat\">Repeat word</button></div><div id=\"dMsg\" style=\"margin-top:6px;color:#8b0000\"></div>`;speak(item.en);
    document.getElementById('dCheck').onclick=()=>{const val=document.getElementById('dInput').value.trim().toLowerCase();const target=item.en.toLowerCase();if(val===target){cheer();dIndex++;dAsk()}else{attempts++;dUpdate();beep('bad');document.getElementById('dMsg').textContent='Try again…';document.getElementById('dInput').focus()}};
    document.getElementById('dRepeat').onclick=()=>speak(item.en)}
  dict.querySelector('#dStart').onclick=()=>{dRun=true;dOrder=[...vocab].sort(()=>Math.random()-0.5);dIndex=0;attempts=0;dAsk()};
  dict.querySelector('#dStop').onclick=()=>{dRun=false;dArea.innerHTML=''}
}

// Games
function renderGames(root,vocab){const wrap=document.createElement('div');root.appendChild(wrap);wrap.innerHTML=`<h3>Card Matching (Drag & Drop or Tap)</h3>`;const board=document.createElement('div');board.className='board';wrap.appendChild(board);const left=document.createElement('div');left.className='pair';board.appendChild(left);const right=document.createElement('div');right.className='pair';board.appendChild(right);const shuffled=[...vocab].sort(()=>Math.random()-0.5).slice(0,6);shuffled.forEach(item=>{const dz=document.createElement('div');dz.className='dropzone';dz.dataset.target=item.en.toLowerCase();dz.textContent=item.ar;left.appendChild(dz)});const words=shuffled.map(i=>i.en);words.sort(()=>Math.random()-0.5).forEach(w=>{const dr=document.createElement('div');dr.className='draggable';dr.draggable=true;dr.textContent=w;dr.dataset.word=w.toLowerCase();right.appendChild(dr);dr.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',dr.dataset.word)});dr.addEventListener('touchstart',()=>{toggleSelect(dr)})});$all('.dropzone',left).forEach(dz=>{dz.addEventListener('dragover',e=>e.preventDefault());dz.addEventListener('drop',e=>{const w=e.dataTransfer.getData('text/plain');checkMatch(dz,w)});dz.addEventListener('click',()=>{const sel=$('.draggable.selected',right);if(sel)checkMatch(dz,sel.dataset.word)})});function checkMatch(dz,w){if(!w)return;if(w===dz.dataset.target){dz.style.background='#eefff3';dz.style.borderColor='#baf0d9';dz.textContent=dz.textContent+'  ✓';const sel=$('.draggable.selected',right);sel?.remove();cheer()}else{dz.style.background='#fff1f0';dz.style.borderColor='#ff9aa2';beep('bad')}}function toggleSelect(el){$all('.draggable',right).forEach(e=>e.classList.remove('selected'));el.classList.add('selected')}

  const quiz=document.createElement('div');quiz.className='quiz';wrap.appendChild(quiz);
  quiz.appendChild(buildKahoot(vocab,'AR2EN'));
  quiz.appendChild(buildKahoot(vocab,'EN2AR'));
}

function buildKahoot(vocab,mode='AR2EN'){const card=document.createElement('div');card.className='qcard';card.style.background='linear-gradient(135deg,#fff0f6,#ffd6e7)';const q=document.createElement('div');const ops=document.createElement('div');card.appendChild(document.createElement('h3')).textContent=(mode==='AR2EN'?'Kahoot: Choose the English word':'Kahoot: اختر المعنى بالعربي');card.appendChild(q);card.appendChild(ops);card.appendChild(Object.assign(document.createElement('div'),{className:'progress',innerHTML:'<div class="bar"></div>'}));const bank=[...vocab].sort(()=>Math.random()-0.5).slice(0,8);let i=0,score=0;function ask(){const it=bank[i];let correct,pool;if(mode==='AR2EN'){q.innerHTML=`Meaning: <b style="color:#4e2034">${it.ar}</b>`;correct=it.en;pool=vocab.map(v=>v.en)}else{q.innerHTML=`Word: <b style="color:#4e2034">${it.en}</b>`;correct=it.ar;pool=vocab.map(v=>v.ar)}const set=new Set([correct]);while(set.size<4){set.add(pool[Math.floor(Math.random()*pool.length)])}const arr=[...set].sort(()=>Math.random()-0.5);ops.innerHTML='';arr.forEach(opt=>{const el=document.createElement('div');el.className='option';el.textContent=opt;el.onclick=()=>{if(opt===correct){el.classList.add('correct');score++;cheer()}else{el.classList.add('wrong');beep('bad')}setTimeout(()=>{i++;card.querySelector('.bar').style.width=((i)/bank.length*100)+'%';if(i<bank.length)ask();else q.innerHTML=`Finished! Score: ${score}/${bank.length}`},450)};ops.appendChild(el)})}ask();return card}

function renderReading(root,sentences,mcq){const list=document.createElement('div');root.appendChild(list);sentences.forEach((s,i)=>{const el=document.createElement('div');el.className='sentence';el.innerHTML=`<div>${i+1}. ${s}</div><div class=\"btns\"><button class=\"btn small\">🔊 Play</button></div>`;$('button',el).onclick=()=>speak(s,0.85);list.appendChild(el)});const quiz=document.createElement('div');quiz.className='mcq';root.appendChild(quiz);quiz.innerHTML=`<h3>Vocabulary Check (MCQ)</h3>`;mcq.forEach((it,i)=>{const card=document.createElement('div');card.className='qcard';card.style.background=['#fff0f6','#e9d8ff','#ffedf6','#ffd6e7','#fdfaff'][i%5];const opts=it.opts.map((o,idx)=>`<div class=\"option\" data-i=\"${idx}\">${o}</div>`).join('');card.innerHTML=`<div>${i+1}. ${it.q}</div>${opts}`;quiz.appendChild(card);$all('.option',card).forEach(op=>op.onclick=()=>{const idx=Number(op.dataset.i);if(idx===it.a){op.classList.add('correct');cheer()}else{op.classList.add('wrong');beep('bad')}})})}

function renderGrammar(root,rule,bank){const box=document.createElement('div');box.className='rule';box.textContent=rule;root.appendChild(box);const quiz=document.createElement('div');quiz.className='mcq';root.appendChild(quiz);quiz.innerHTML=`<h3>Grammar Practice: Choose the correct form</h3>`;bank.forEach((it,i)=>{const card=document.createElement('div');card.className='qcard';card.style.background=['#fff0f6','#e9d8ff','#ffedf6','#ffd6e7','#fdfaff'][i%5];const opts=it.opts.map((o,idx)=>`<div class=\"option\" data-i=\"${idx}\">${o}</div>`).join('');card.innerHTML=`<div>${i+1}. ${it.q}</div>${opts}`;quiz.appendChild(card);$all('.option',card).forEach(op=>op.onclick=()=>{const idx=Number(op.dataset.i);if(idx===it.a){op.classList.add('correct');cheer()}else{op.classList.add('wrong');beep('bad')}})})}

function renderExam(){const sec=document.createElement('div');sec.className='section';document.querySelector('.container').appendChild(sec);const head=document.createElement('div');head.className='exam-header';head.innerHTML=`<b>Unit 1 — Egypt's Heritage</b><br>Interactive MCQ Exam (English-only instructions)`;sec.appendChild(head);const box=document.createElement('div');box.className='mcq';sec.appendChild(box);const colors=['#fff0f6','#e9d8ff','#ffedf6','#ffd6e7','#fdfaff'];let i=0,score=0;function ask(){box.innerHTML='';const it=data.exam[i];const card=document.createElement('div');card.className='qcard';card.style.background=colors[i%colors.length];card.style.border='1px solid #f3cfe0';card.innerHTML=`<div>${i+1}/${data.exam.length}. ${it.q}</div>`;it.opts.forEach((o,idx)=>{const el=document.createElement('div');el.className='option';el.textContent=o;el.onclick=()=>{if(idx===it.a){el.classList.add('correct');score++;cheer()}else{el.classList.add('wrong');beep('bad')}setTimeout(()=>{i++;$('#bar').style.width=((i)/data.exam.length*100)+'%';if(i<data.exam.length)ask();else box.innerHTML=`<div class='qcard' style='background:#fff0f6;border:1px solid #f3cfe0'><h3>Finished!</h3><p>Your score: ${score}/${data.exam.length}</p></div>`},480)};card.appendChild(el)});box.appendChild(card)}const prog=document.createElement('div');prog.className='progress';prog.innerHTML='<div id="bar" class="bar"></div>';sec.appendChild(prog);ask()}

function init(){buildTopTabs();[1,2,3,4].forEach(buildLesson);renderExam();activateSection(0)}window.addEventListener('DOMContentLoaded',init)

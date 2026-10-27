(function(){
/* =====================================================================
   КОНТАКТЫ — поменяйте значения на свои.
   Пустая строка '' = этот способ связи не показывается на сайте.
   ===================================================================== */
const CONTACTS = {
  telegram:  'Shodiev_13_01',         // ник без @
  phone:     '',                      // например '+992 90 123 4567'
  whatsapp:  '',                      // только цифры с кодом страны, например '992901234567'
  email:     '',                      // например 'name@gmail.com'
  instagram: '',                      // ник без @
  vk:        '',                      // https://vk.com/...
  linkedin:  '',                      // https://linkedin.com/in/...
  github:    'Aslamshokh'
};
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function onMQ(mq,fn){ if(mq.addEventListener) mq.addEventListener('change',fn); else if(mq.addListener) mq.addListener(fn); }

/* ---------- i18n ---------- */
const T = {
  ru:{
    'nav.about':'Обо мне','nav.services':'Услуги','nav.work':'Проекты','nav.contact':'Контакты',
    'hero.eyebrow':'Full-stack разработчик','hero.n1':'Асламшох','hero.n2':'Шодиев',
    'hero.lead':'Делаю сайты, Telegram-ботов и CMS для бизнеса, <em>от идеи до работающего продукта</em>.',
    'hero.cta1':'Смотреть проекты','hero.scroll':'Листайте вниз',
    'about.eyebrow':'Обо мне',
    'about.text':'Я пишу и фронтенд, и бэкенд сам, поэтому проект не теряется между подрядчиками. Работаю с бизнесом : архитектурные студии, салоны красоты, таксопарки. Каждому делаю то, что ему реально нужно: сайт, бота, админку или всё сразу.',
    'about.f1t':'Учёба','about.f1':'УлГТУ, Ульяновск','about.f2t':'Клиенты','about.f2':'Таджикистан и СНГ','about.f3t':'Языки сайтов',
    'svc.title':'Что я делаю','svc.sub':'Четыре направления, в которых у меня есть живые проекты и рабочий код.',
    'svc.1t':'Сайты и лендинги','svc.1d':'Многоязычные сайты с анимациями, адаптивом под телефон и формами заявок.',
    'svc.2t':'Telegram-боты','svc.2d':'Запись клиентов, уведомления админу, рассылки, Mini Apps с рейтингом и чатом.',
    'svc.3t':'CMS и админ-панели','svc.3d':'Админка, где владелец сам меняет тексты, фото, услуги и цены без программиста.',
    'svc.4t':'AI-приложения','svc.4d':'Распознавание объектов и текста, AI-переписывание контента, голосовые интерфейсы.',
    'work.eyebrow':'Избранные работы · 2026','work.title':'Проекты',
    'p.mk.k':'Архитектура и дизайн интерьера','p.mk.t':'Сайт · CMS · бот','p.mk.h':'Сайт премиальной студии с админкой и Telegram-ботом',
    'p.mk.d':'Двуязычный тёмный сайт с отдельными страницами услуг, админ-панель на PHP/MySQL для контента и бот, который передаёт заявки клиентов администратору.',
    'p.ey.k':'Ассистент для незрячих','p.ey.h':'Камера, которая говорит, что вокруг',
    'p.ey.d':'Описание сцены, чтение текста, поиск предметов, распознавание купюр и навигация голосом. Локальные модели YOLOv8 и EasyOCR, без платных API.',
    'p.dr.t':'Футбол · Mini App','p.dr.h':'Платформа для любительских матчей','p.dr.d':'Запись на игры, ELO-рейтинг игроков, чат на WebSocket и админка для матчей и рекламы. Авторизация через Telegram.',
    'p.jb.k':'Душанбе · Худжанд','p.jb.p':'Вакансии','p.jb.t':'Веб-платформа','p.jb.h':'Поиск работы в Таджикистане','p.jb.d':'Платформа вакансий с ролями соискателя и работодателя. Слоистая архитектура: роуты, контроллеры, сервисы, репозитории.',
    'p.mu.k':'Салон красоты','p.mu.t':'2 Telegram-бота','p.mu.h':'Онлайн-запись и бот для админов','p.mu.d':'Клиент записывается на услугу, админ получает заявку, утренний отчёт и статистику. Акции, отзывы и напоминания о визите.',
    'p.nw.t':'Автопостинг','p.nw.h':'Новостной канал, который ведёт себя сам','p.nw.d':'Собирает новости из RSS, переписывает и переводит их на русский с помощью AI и публикует по расписанию.',
    'p.tx.k':'Финансы таксопарка','p.tx.t':'Telegram-бот','p.tx.h':'Учёт денег парка в Telegram','p.tx.d':'Владелец видит доход парка, заработок водителей и комиссии прямо в чате, без таблиц.',
    'ct.eyebrow':'Контакты','ct.l1':'Есть идея?','ct.l2':'Давайте соберём.','ct.live':'Живой проект',
    'ct.note':'Пишите о сайте, боте или админке в любой удобный мессенджер. Отвечу, сколько это займёт и с чего начать.',
    'ft.made':'Сделано вручную: HTML, CSS, Three.js', cursorBig:'Открыть', toDark:'Тёмная тема', toLight:'Светлая тема', phone:'Телефон', copy:'Копировать', copied:'Скопировано', selected:'Выделено', 'ct.fab':'Написать'
  },
  en:{
    'nav.about':'About','nav.services':'Services','nav.work':'Work','nav.contact':'Contact',
    'hero.eyebrow':'Full-stack developer','hero.n1':'Aslamshoh','hero.n2':'Shodiev',
    'hero.lead':'I build websites, Telegram bots and CMS for businesses, <em>from idea to a working product</em>.',
    'hero.cta1':'See the work','hero.scroll':'Scroll down',
    'about.eyebrow':'About',
    'about.text':'I write both the frontend and the backend myself, so nothing gets lost between contractors. I work with businesses : architecture studios, beauty salons, taxi fleets. Each gets what it actually needs: a website, a bot, an admin panel or all of them.',
    'about.f1t':'Studies','about.f1':'UlSTU, Ulyanovsk','about.f2t':'Clients','about.f2':'Tajikistan and CIS','about.f3t':'Site languages',
    'svc.title':'What I do','svc.sub':'Four areas where I have live projects and working code.',
    'svc.1t':'Websites & landings','svc.1d':'Multilingual sites with motion, mobile-first layouts and lead forms.',
    'svc.2t':'Telegram bots','svc.2d':'Client booking, admin alerts, broadcasts, Mini Apps with ratings and chat.',
    'svc.3t':'CMS & admin panels','svc.3d':'A panel where the owner edits texts, photos, services and prices without a developer.',
    'svc.4t':'AI applications','svc.4d':'Object and text recognition, AI content rewriting, voice interfaces.',
    'work.eyebrow':'Selected work · 2026','work.title':'Projects',
    'p.mk.k':'Architecture & interior design','p.mk.t':'Site · CMS · bot','p.mk.h':'A premium studio site with an admin panel and a Telegram bot',
    'p.mk.d':'A bilingual dark site with dedicated service pages, a PHP/MySQL admin panel for content and a bot that relays client requests to the team.',
    'p.ey.k':'Assistant for the blind','p.ey.h':'A camera that tells you what is around',
    'p.ey.d':'Scene description, text reading, object finding, banknote recognition and voice navigation. Local YOLOv8 and EasyOCR models, no paid APIs.',
    'p.dr.t':'Football · Mini App','p.dr.h':'A platform for amateur matches','p.dr.d':'Game sign-ups, player ELO ratings, WebSocket chat and an admin panel for matches and ads. Sign-in via Telegram.',
    'p.jb.k':'Dushanbe · Khujand','p.jb.p':'Jobs','p.jb.t':'Web platform','p.jb.h':'Job search in Tajikistan','p.jb.d':'A job board with candidate and employer roles. Layered architecture: routes, controllers, services, repositories.',
    'p.mu.k':'Beauty salon','p.mu.t':'2 Telegram bots','p.mu.h':'Online booking and an admin bot','p.mu.d':'Clients book a service, admins get the request, a morning report and stats. Promotions, reviews and visit reminders.',
    'p.nw.t':'Autoposting','p.nw.h':'A news channel that runs itself','p.nw.d':'Pulls news from RSS, rewrites and translates it into Russian with AI and posts on a schedule.',
    'p.tx.k':'Taxi fleet finance','p.tx.t':'Telegram bot','p.tx.h':'Fleet money, tracked in Telegram','p.tx.d':'The owner sees fleet income, driver earnings and commissions right in the chat, no spreadsheets.',
    'ct.eyebrow':'Contact','ct.l1':'Got an idea?','ct.l2':'Let’s build it.','ct.live':'Live project',
    'ct.note':'Write about a website, a bot or an admin panel in any messenger you like. I will tell you how long it takes and where to start.',
    'ft.made':'Handmade: HTML, CSS, Three.js', cursorBig:'Open', toDark:'Dark theme', toLight:'Light theme', phone:'Phone', copy:'Copy', copied:'Copied', selected:'Selected', 'ct.fab':'Message me'
  }
};
let lang='ru';
try{ const s=localStorage.getItem('as-lang'); if(s==='en'||s==='ru') lang=s; }catch(e){}

function splitChars(el){
  const text=el.textContent; el.textContent='';
  [...text].forEach((c,i)=>{const s=document.createElement('span');s.className='ch';s.textContent=c===' '?' ':c;
    s.style.animationDelay=(0.15+i*0.05+(el===document.querySelectorAll('.split')[1]?0.2:0))+'s';el.appendChild(s);});
}
function splitWords(el){
  const words=el.textContent.trim().split(/\s+/); el.textContent='';
  words.forEach((w,i)=>{const s=document.createElement('span');s.className='w';s.textContent=w;el.appendChild(s);if(i<words.length-1)el.appendChild(document.createTextNode(' '));});
}
function applyLang(l){
  lang=l; document.documentElement.lang=l;
  document.querySelectorAll('[data-i18n]').forEach(el=>{const v=T[l][el.dataset.i18n]; if(v!=null) el.textContent=v;});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const v=T[l][el.dataset.i18nHtml]; if(v!=null) el.innerHTML=v;});
  document.querySelectorAll('.split').forEach(splitChars);
  splitWords(document.getElementById('statement')); updateStatement();
  document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
  try{localStorage.setItem('as-lang',l);}catch(e){}
  if(typeof paintTheme==='function') paintTheme();
  if(typeof renderContacts==='function') renderContacts();
}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.lang)));

/* ---------- statement word highlight ---------- */
function updateStatement(){
  const el=document.getElementById('statement'); if(!el) return;
  const ws=el.querySelectorAll('.w'); if(reduce){ws.forEach(w=>w.style.opacity=1);return;}
  const r=el.getBoundingClientRect(), vh=innerHeight;
  const p=Math.min(1,Math.max(0,(vh*0.85-r.top)/(r.height+vh*0.35)));
  ws.forEach((w,i)=>{const t=Math.min(1,Math.max(0,p*ws.length*1.1-i)); w.style.opacity=0.3+0.7*t;});
}


/* ---------- contacts ---------- */
const ICO={
  telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.4 4.2 2.9 11.3c-1.3.5-1.2 1.3-.2 1.6l4.7 1.5 1.8 5.6c.2.7.4.9.9.9.4 0 .6-.2.9-.5l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.3-.5-1.9-1.5-1.5ZM8.6 14l9.2-5.8c.4-.3.8-.1.5.2l-7.6 6.9-.3 3.3L8.6 14Z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z"/></svg>',
  whatsapp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1Z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a5 5 0 0 1-2.7-2.7l.8-1-1-2Z"/></svg>',
  email:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
  instagram:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".9" fill="currentColor"/></svg>',
  vk:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.8 17.5C6.9 17.5 3.5 13.4 3.4 6.6h3c.1 5 2.3 7.1 4 7.5V6.6h2.8v4.3c1.7-.2 3.5-2.2 4.1-4.3H20c-.5 2.6-2.4 4.6-3.8 5.4 1.4.7 3.6 2.4 4.5 5.5h-3.1c-.7-2.1-2.4-3.7-4.4-3.9v3.9h-.4Z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.3 9h3.4v11.5H3.3V9Zm5.6 0h3.3v1.6c.5-.9 1.6-1.9 3.4-1.9 3.5 0 4.1 2.3 4.1 5.3v6.5h-3.4v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.9H8.9V9Z"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.7c-2.7.6-3.3-1.3-3.3-1.3-.4-1.1-1-1.4-1-1.4-.9-.6 0-.6 0-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8 0-.6.3-1.1.6-1.3-2.1-.2-4.3-1.1-4.3-4.7 0-1 .4-1.9 1-2.6-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.3 2.6-1 2.6-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.5 1 2.6 0 3.7-2.2 4.5-4.3 4.7.3.3.6.9.6 1.8v2.6c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z"/></svg>'
};
const strip=v=>String(v||'').trim().replace(/^@/,'');
function contactItems(){
  const c=CONTACTS, out=[];
  if(strip(c.telegram)) out.push({k:'telegram',label:'Telegram',val:'@'+strip(c.telegram),href:'https://t.me/'+strip(c.telegram)});
  if(strip(c.whatsapp)) out.push({k:'whatsapp',label:'WhatsApp',val:'+'+strip(c.whatsapp).replace(/\D/g,''),href:'https://wa.me/'+strip(c.whatsapp).replace(/\D/g,'')});
  if(strip(c.phone)) out.push({k:'phone',label:T[lang].phone,val:c.phone.trim(),href:'tel:'+c.phone.replace(/[^\d+]/g,''),copy:c.phone.trim()});
  if(strip(c.email)) out.push({k:'email',label:'E-mail',val:c.email.trim(),href:'mailto:'+c.email.trim(),copy:c.email.trim()});
  if(strip(c.instagram)) out.push({k:'instagram',label:'Instagram',val:'@'+strip(c.instagram),href:'https://instagram.com/'+strip(c.instagram)});
  if(strip(c.vk)) out.push({k:'vk',label:'VK',val:c.vk.replace(/^https?:\/\/(www\.)?/,''),href:c.vk.trim()});
  if(strip(c.linkedin)) out.push({k:'linkedin',label:'LinkedIn',val:c.linkedin.replace(/^https?:\/\/(www\.)?/,''),href:c.linkedin.trim()});
  if(strip(c.github)) out.push({k:'github',label:'GitHub',val:strip(c.github),href:'https://github.com/'+strip(c.github)});
  return out;
}
function esc(t){const d=document.createElement('div');d.textContent=t;return d.innerHTML;}
function renderContacts(){
  const box=document.getElementById('contact-list'); if(!box) return;
  const items=contactItems();
  box.innerHTML=items.map(it=>`<div class="ci">
      <span class="ci-ico" aria-hidden="true">${ICO[it.k]}</span>
      <span class="ci-txt"><span class="ci-label">${esc(it.label)}</span><span class="ci-val">${esc(it.val)}</span></span>
      ${it.copy?`<button type="button" class="ci-copy" data-copy="${esc(it.copy)}">${T[lang].copy}</button>`:'<span class="ci-arr" aria-hidden="true">↗</span>'}
      <a class="ci-link" href="${esc(it.href)}" ${/^https?:/.test(it.href)?'target="_blank" rel="noopener"':''} data-cursor="link" aria-label="${esc(it.label)}: ${esc(it.val)}"></a>
    </div>`).join('');
  const tg=strip(CONTACTS.telegram), main=document.getElementById('ct-main'), fab=document.getElementById('fab');
  const first=items[0];
  if(main&&first){main.href=first.href;}
  if(fab){ if(tg){fab.href='https://t.me/'+tg;fab.hidden=false;} else fab.hidden=true; }
}
document.addEventListener('click',e=>{
  const b=e.target.closest('.ci-copy'); if(!b) return;
  e.preventDefault(); e.stopPropagation();
  const text=b.dataset.copy, done=()=>{b.textContent=T[lang].copied;setTimeout(()=>{b.textContent=T[lang].copy;},1600);};
  const fallback=()=>{const r=document.createRange();const v=b.parentElement.querySelector('.ci-val');r.selectNodeContents(v);const sel=getSelection();sel.removeAllRanges();sel.addRange(r);b.textContent=T[lang].selected;};
  try{navigator.clipboard.writeText(text).then(done,fallback);}catch(err){fallback();}
});

/* ---------- theme: white / black ---------- */
const root=document.documentElement, darkMQ=matchMedia('(prefers-color-scheme: dark)');
let theme=null;
try{const t=localStorage.getItem('as-theme'); if(t==='light'||t==='dark') theme=t;}catch(e){}
function isDark(){return theme?theme==='dark':darkMQ.matches;}
function paintTheme(){
  if(theme) root.setAttribute('data-theme',theme); else root.removeAttribute('data-theme');
  root.classList.toggle('is-dark',isDark());
  const b=document.getElementById('theme-toggle'); if(b) b.setAttribute('aria-label',isDark()?T[lang].toLight:T[lang].toDark);
}
document.getElementById('theme-toggle').addEventListener('click',()=>{
  theme=isDark()?'light':'dark';
  root.classList.add('theme-anim'); setTimeout(()=>root.classList.remove('theme-anim'),600);
  try{localStorage.setItem('as-theme',theme);}catch(e){}
  paintTheme();
});
onMQ(darkMQ,paintTheme);
applyLang(lang);

/* ---------- header ---------- */
const top=document.querySelector('.top');

/* ---------- reveal on scroll ---------- */
if(!reduce && 'IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){
      const el=e.target; const sib=[...el.parentElement.children].filter(c=>c.hasAttribute('data-reveal'));
      el.style.transitionDelay=(Math.max(0,sib.indexOf(el))%3*0.09)+'s';
      el.classList.remove('pre'); io.unobserve(el);
      setTimeout(()=>{el.style.transitionDelay='';},1400);
  }}),{rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('[data-reveal]').forEach(el=>{
    if(el.getBoundingClientRect().top>innerHeight*0.95){el.classList.add('pre');io.observe(el);}
  });
}

/* ---------- 3D tilt cards ---------- */
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;
if(fine && !reduce){
  document.querySelectorAll('[data-tilt]').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect(); const x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
      card.classList.add('tilting');
      card.style.setProperty('--ry',((x-.5)*10).toFixed(2)+'deg');
      card.style.setProperty('--rx',((.5-y)*8).toFixed(2)+'deg');
      card.style.setProperty('--gx',(x*100)+'%'); card.style.setProperty('--gy',(y*100)+'%');
    });
    card.addEventListener('pointerleave',()=>{card.classList.remove('tilting');card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg');});
  });
}

/* ---------- cursor + magnet ---------- */
const cur=document.querySelector('.cur'), dot=document.querySelector('.cur-dot');
let mx=innerWidth/2,my=innerHeight/2,cx=mx,cy=my, nmx=0,nmy=0;
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;nmx=mx/innerWidth*2-1;nmy=my/innerHeight*2-1;
  if(fine){dot.style.transform=`translate(${mx}px,${my}px)`;}},{passive:true});
if(fine && !reduce){
  document.body.classList.add('has-cursor');
  document.addEventListener('pointerover',e=>{
    const t=e.target.closest('[data-cursor],a,button');
    cur.classList.toggle('big',!!t&&t.dataset.cursor==='big');
    cur.classList.toggle('link',!!t&&t.dataset.cursor!=='big');
    cur.textContent=(t&&t.dataset.cursor==='big')?T[lang].cursorBig:'';
  });
  document.querySelectorAll('.magnet').forEach(b=>{
    b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();
      b.style.setProperty('--bx',((e.clientX-r.left-r.width/2)*0.25)+'px');b.style.setProperty('--by',((e.clientY-r.top-r.height/2)*0.35)+'px');});
    b.addEventListener('pointerleave',()=>{b.style.setProperty('--bx','0px');b.style.setProperty('--by','0px');});
  });
}

/* ---------- WebGL stage ---------- */
const canvas=document.getElementById('stage');
function stageFallback(){ if(canvas.isConnected) canvas.remove(); if(document.querySelector('.fallback-orb')) return;
  const o=document.createElement('div'); o.className='fallback-orb'; o.setAttribute('aria-hidden','true'); document.body.prepend(o); }
function startStage(){ try{ if(!window.THREE) throw 0; initStage(); }catch(err){ console.warn('3D off:',err); stageFallback(); } }
/* Three.js: несколько серверов по очереди — если один заблокирован, берём следующий */
const THREE_URLS=[
  'https://cdn.jsdelivr.net/npm/three@0.149.0/build/three.min.js',
  'https://unpkg.com/three@0.149.0/build/three.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
];
(function loadThree(i){
  if(window.THREE) return startStage();
  if(i>=THREE_URLS.length) return stageFallback();
  const sc=document.createElement('script'); let done=false;
  const next=()=>{ if(done) return; done=true; sc.remove(); loadThree(i+1); };
  const timer=setTimeout(next,6000);
  sc.src=THREE_URLS[i]; sc.async=true;
  sc.onload=()=>{ if(done) return; done=true; clearTimeout(timer); startStage(); };
  sc.onerror=()=>{ clearTimeout(timer); next(); };
  document.head.appendChild(sc);
})(0);

function cssColor(name){return new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue(name).trim());}

function initStage(){
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(35,1,0.1,100); camera.position.z=8;

  const noise=`
  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
  float snoise(vec3 v){
    const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
    vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
    vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
    vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
    i=mod289(i);
    vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
    float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
    vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
    vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
    vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
    vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
    vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
    vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
    vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
    vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
    return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }`;
  const uniforms={uTime:{value:0},uAmp:{value:.2},uFreq:{value:1.4},uA:{value:cssColor('--blobA')},uB:{value:cssColor('--blobB')},uC:{value:cssColor('--blobC')}};
  const mat=new THREE.ShaderMaterial({uniforms,
    vertexShader:noise+`
    uniform float uTime,uAmp,uFreq; varying vec3 vN; varying float vD; varying vec3 vView;
    float disp(vec3 n){return (snoise(n*uFreq+uTime*0.35)+snoise(n*uFreq*2.3-uTime*0.22)*0.35)*uAmp;}
    void main(){
      vec3 n=normalize(position);
      float d=disp(n); vec3 p=n*(1.0+d);
      vec3 t=normalize(cross(n,abs(n.y)<0.99?vec3(0.0,1.0,0.0):vec3(1.0,0.0,0.0))); vec3 b=normalize(cross(n,t));
      float e=0.015; vec3 nA=normalize(n+t*e), nB=normalize(n+b*e);
      vec3 pA=nA*(1.0+disp(nA)), pB=nB*(1.0+disp(nB));
      vec3 dn=normalize(cross(pA-p,pB-p)); if(dot(dn,n)<0.0) dn=-dn;
      vN=normalize(normalMatrix*dn); vD=d;
      vec4 mv=modelViewMatrix*vec4(p,1.0); vView=normalize(-mv.xyz);
      gl_Position=projectionMatrix*mv;
    }`,
    fragmentShader:`
    uniform vec3 uA,uB,uC; uniform float uTime; varying vec3 vN; varying float vD; varying vec3 vView;
    void main(){
      vec3 n=normalize(vN);
      float fr=pow(1.0-max(dot(n,vView),0.0),2.2);
      vec3 L=normalize(vec3(-0.5,0.8,0.7));
      float diff=max(dot(n,L),0.0);
      float spec=pow(max(dot(reflect(-L,n),vView),0.0),40.0);
      float band=0.5+0.5*sin(vD*10.0+n.y*3.0+n.x*2.0+uTime*0.6);
      vec3 col=mix(uA,uB,band*0.85);
      col*=0.5+0.65*diff;
      col=mix(col,uC,fr*0.9);
      col+=spec*0.55;
      gl_FragColor=vec4(col,1.0);
    }`});
  const small=innerWidth<760;
  const blob=new THREE.Mesh(new THREE.IcosahedronGeometry(1,small?28:56),mat);
  const group=new THREE.Group(); group.add(blob); scene.add(group);

  // orbit rings
  const ringMat=new THREE.LineBasicMaterial({color:cssColor('--dust'),transparent:true,opacity:.22});
  function ring(r){const pts=[];for(let i=0;i<=160;i++){const a=i/160*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*r,Math.sin(a)*r,0));}
    return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),ringMat);}
  const r1=ring(1.75), r2=ring(2.15); r1.rotation.x=1.2; r2.rotation.x=1.35; r2.rotation.y=.5;
  const rings=new THREE.Group(); rings.add(r1,r2); group.add(rings);
  const moonMat=new THREE.MeshBasicMaterial({color:cssColor('--blobA')});
  const moon=new THREE.Mesh(new THREE.SphereGeometry(.06,24,24),moonMat); r1.add(moon);

  // dust particles
  const N=small?700:1600, pos=new Float32Array(N*3);
  for(let i=0;i<N;i++){const r=3+Math.random()*7,t=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);
    pos[i*3]=r*Math.sin(p)*Math.cos(t);pos[i*3+1]=r*Math.sin(p)*Math.sin(t);pos[i*3+2]=r*Math.cos(p)-3;}
  const pg=new THREE.BufferGeometry(); pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
  const dc=document.createElement('canvas'); dc.width=dc.height=32; const g=dc.getContext('2d');
  g.beginPath();g.arc(16,16,14,0,Math.PI*2);g.fillStyle='#fff';g.fill();
  const dustMat=new THREE.PointsMaterial({size:.035,map:new THREE.CanvasTexture(dc),transparent:true,opacity:.45,depthWrite:false,color:cssColor('--dust')});
  const dust=new THREE.Points(pg,dustMat); scene.add(dust);

  function refreshColors(){uniforms.uA.value=cssColor('--blobA');uniforms.uB.value=cssColor('--blobB');uniforms.uC.value=cssColor('--blobC');
    ringMat.color=cssColor('--dust'); dustMat.color=cssColor('--dust'); moonMat.color=cssColor('--blobA');}
  onMQ(matchMedia('(prefers-color-scheme: dark)'),refreshColors);
  new MutationObserver(refreshColors).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

  // scroll choreography
  const secs=[...document.querySelectorAll('[data-blob]')];
  let keys=[];
  function measure(){
    const m=innerWidth<760;
    keys=secs.map(s=>{const v=(m?s.dataset.blobM:s.dataset.blob).split(' ').map(Number);
      const r=s.getBoundingClientRect(); return {y:r.top+scrollY+r.height/2,x:v[0],yy:v[1],s:v[2],a:v[3]};});
  }
  function target(){
    const c=scrollY+innerHeight/2;
    if(c<=keys[0].y) return keys[0]; if(c>=keys[keys.length-1].y) return keys[keys.length-1];
    for(let i=0;i<keys.length-1;i++){const a=keys[i],b=keys[i+1]; if(c>=a.y&&c<=b.y){let t=(c-a.y)/(b.y-a.y); t=t*t*(3-2*t);
      return {x:a.x+(b.x-a.x)*t,yy:a.yy+(b.yy-a.yy)*t,s:a.s+(b.s-a.s)*t,a:a.a+(b.a-a.a)*t};}}
    return keys[0];
  }
  let vw=1,vh=1;
  function resize(){renderer.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();
    vh=2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.position.z; vw=vh*camera.aspect; measure();}
  addEventListener('resize',resize); resize(); addEventListener('load',measure);
  if('ResizeObserver' in window) new ResizeObserver(measure).observe(document.body);

  let lastY=scrollY, vel=0, cur={x:0,y:0,s:1,a:.2}, t0=performance.now(), visible=true;
  document.addEventListener('visibilitychange',()=>{visible=!document.hidden;});
  function frame(now){
    requestAnimationFrame(frame); if(!visible) return;
    const dt=Math.min(.05,(now-t0)/1000); t0=now;
    const tg=target();
    const k=1-Math.pow(.02,dt);
    cur.x+=(tg.x*vw/2-cur.x)*k; cur.y+=(-tg.yy*vh/2-cur.y)*k; cur.s+=(tg.s*Math.min(1,vh/4.2)-cur.s)*k; cur.a+=(tg.a-cur.a)*k;
    const dy=scrollY-lastY; lastY=scrollY; vel+=(Math.min(1,Math.abs(dy)/60)-vel)*.08;
    group.position.set(cur.x+nmx*.15,cur.y-nmy*.12,0); group.scale.setScalar(cur.s);
    uniforms.uTime.value+=dt*(reduce?.15:1)*(1+vel*3);
    uniforms.uAmp.value=reduce?.12:cur.a+vel*.18;
    blob.rotation.y+=dt*.12; blob.rotation.x+=( nmy*.4-blob.rotation.x)*.04; blob.rotation.z+=(-nmx*.3-blob.rotation.z)*.04;
    rings.rotation.z+=dt*.25; r2.rotation.z-=dt*.4;
    dust.rotation.y+=dt*.015; dust.rotation.x=scrollY*.00015; dust.position.x=-nmx*.3; dust.position.y=nmy*.2+scrollY*.0006;
    camera.position.x+=(nmx*.25-camera.position.x)*.03; camera.lookAt(0,0,0);
    renderer.render(scene,camera);
  }
  requestAnimationFrame(frame);
  return {renderer};
}

/* ---------- main loop for DOM ---------- */
function domLoop(){
  cx+=(mx-cx)*.18; cy+=(my-cy)*.18;
  if(fine) cur.style.transform=`translate(${cx}px,${cy}px)`;
  requestAnimationFrame(domLoop);
}
requestAnimationFrame(domLoop);
const fabEl=document.getElementById('fab');
addEventListener('scroll',()=>{top.classList.toggle('scrolled',scrollY>10); updateStatement(); if(fabEl) fabEl.classList.toggle('show',scrollY>innerHeight*0.6);},{passive:true});
})();

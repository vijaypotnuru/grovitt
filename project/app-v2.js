// ===== Custom cursor =====
const cursor = document.createElement('div'); cursor.className = 'cursor';
const ring = document.createElement('div'); ring.className = 'cursor-ring';
document.body.appendChild(cursor); document.body.appendChild(ring);
let mx = window.innerWidth/2, my = window.innerHeight/2;
let rx = mx, ry = my;
window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`; });
function loop(){ rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18; ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`; requestAnimationFrame(loop); }
loop();
document.querySelectorAll('a, button, .svc-row, .proc-item, .faq-item, .work-row, .ct-ch, .post').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
});

// ===== Nav scrolled =====
const nav = document.querySelector('nav.top');
window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 20); }, {passive:true});

// ===== Reveal IO =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold: 0.15, rootMargin: '0px 0px -8% 0px'});
document.querySelectorAll('.reveal, .hero, .split').forEach(el => io.observe(el));

// ===== Counters =====
function animateCount(el) {
  const target = parseFloat(el.dataset.n);
  const dec = parseInt(el.dataset.dec || '0');
  const dur = 2200;
  const start = performance.now();
  const tick = (t) => {
    const p = Math.min(1, (t - start) / dur);
    const eased = 1 - Math.pow(1 - p, 4);
    const v = target * eased;
    el.textContent = dec ? v.toFixed(dec) : Math.floor(v).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const ioCount = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('[data-n]').forEach(animateCount); ioCount.unobserve(e.target); } });
}, {threshold: 0.4});
document.querySelectorAll('#stats').forEach(el => ioCount.observe(el));

// ===== Magnetic buttons =====
document.querySelectorAll('.btn-magnetic, .nav-cta').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top - r.height/2;
    btn.style.transform = `translate(${x*0.25}px, ${y*0.25}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

// ===== Manifesto word-by-word lighting on scroll =====
const manifestoEl = document.querySelector('.manifesto');
if (manifestoEl) {
  const text = manifestoEl.textContent;
  manifestoEl.innerHTML = '';
  const italicRanges = JSON.parse(manifestoEl.dataset.it || '[]');
  text.split(/(\s+)/).forEach((word, i) => {
    if (/^\s+$/.test(word)) { manifestoEl.appendChild(document.createTextNode(word)); return; }
    const s = document.createElement('span');
    s.className = 'word';
    if (italicRanges.includes(i)) s.classList.add('it');
    s.textContent = word;
    manifestoEl.appendChild(s);
  });
  const words = manifestoEl.querySelectorAll('.word');
  function updateManifesto(){
    const r = manifestoEl.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 0.85;
    const end = vh * 0.15;
    const total = words.length;
    const progress = (start - r.top) / (start - end);
    const litCount = Math.max(0, Math.min(total, Math.floor(progress * total)));
    words.forEach((w, i) => w.classList.toggle('lit', i < litCount));
  }
  window.addEventListener('scroll', updateManifesto, {passive:true});
  updateManifesto();
}

// ===== Process sticky list =====
const procItems = document.querySelectorAll('.proc-item');
const procStages = document.querySelectorAll('.proc-stage');
function updateProc(){
  const vh = window.innerHeight;
  let active = 0;
  procItems.forEach((it, i) => {
    const r = it.getBoundingClientRect();
    if (r.top < vh * 0.55 && r.bottom > vh * 0.2) active = i;
  });
  procItems.forEach((it, i) => it.classList.toggle('active', i === active));
  procStages.forEach((st, i) => st.classList.toggle('active', i === active));
}
window.addEventListener('scroll', updateProc, {passive:true});
updateProc();

// ===== FAQ =====
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// ===== Testimonials carousel =====
const tQuotes = document.querySelectorAll('.tst-quote');
const tDots = document.querySelectorAll('.tst-dot');
let tIdx = 0; let tTimer;
function tShow(i){
  tIdx = (i + tQuotes.length) % tQuotes.length;
  tQuotes.forEach((q, j) => q.classList.toggle('active', j === tIdx));
  tDots.forEach((d, j) => d.classList.toggle('active', j === tIdx));
  clearTimeout(tTimer);
  tTimer = setTimeout(() => tShow(tIdx + 1), 6000);
}
if (tQuotes.length) {
  tDots.forEach((d, i) => d.addEventListener('click', () => tShow(i)));
  document.querySelector('.tst-prev')?.addEventListener('click', () => tShow(tIdx - 1));
  document.querySelector('.tst-next')?.addEventListener('click', () => tShow(tIdx + 1));
  tShow(0);
}

// ===== Work hover preview =====
const wp = document.querySelector('.work-preview');
let wpVisible = false;
document.querySelectorAll('.work-row').forEach(row => {
  row.addEventListener('mouseenter', () => {
    wp.className = 'work-preview show ' + row.dataset.preview;
    wp.dataset.label = row.dataset.label || '';
    wpVisible = true;
  });
  row.addEventListener('mouseleave', () => { wp.classList.remove('show'); wpVisible = false; });
});
window.addEventListener('mousemove', (e) => {
  if (!wpVisible) return;
  wp.style.left = (e.clientX + 24) + 'px';
  wp.style.top = (e.clientY - 120) + 'px';
});

// ===== Form =====
const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-cta');
    const original = btn.innerHTML;
    btn.textContent = 'Sending…';
    setTimeout(() => {
      btn.innerHTML = '✓ Message sent';
      btn.style.background = '#1a7c3f'; btn.style.color = '#fff';
      setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; btn.style.color = ''; form.reset(); }, 2400);
    }, 900);
  });
}

// ===== Hero parallax =====
const heroDisc = document.querySelector('.hero-disc');
const heroFrags = document.querySelectorAll('.hero-frags .frag');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (heroDisc) heroDisc.style.transform = `translateY(calc(-50% + ${y*0.3}px)) rotate(${y*0.06}deg)`;
  heroFrags.forEach((f, i) => { f.style.transform = `translateY(${y * (i%2 ? -0.25 : -0.15)}px)`; });
}, {passive:true});

// ===== Tape speed-up on hover =====
document.querySelectorAll('.tape').forEach(t => {
  const track = t.querySelector('.tape-track');
  t.addEventListener('mouseenter', () => track.style.animationDuration = '20s');
  t.addEventListener('mouseleave', () => track.style.animationDuration = '50s');
});

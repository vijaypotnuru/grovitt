// Nav scroll
const nav = document.querySelector('nav.top');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, {passive:true});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, {threshold: 0.12, rootMargin: '0px 0px -8% 0px'});
document.querySelectorAll('.reveal, .hero').forEach(el => io.observe(el));

// Counters
function animateCount(el) {
  const target = parseFloat(el.dataset.n);
  const dec = parseInt(el.dataset.dec || '0');
  const dur = 1800;
  const start = performance.now();
  const tick = (t) => {
    const p = Math.min(1, (t - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    const v = target * eased;
    el.textContent = dec ? v.toFixed(dec) : Math.floor(v).toLocaleString();
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const ioCount = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-n]').forEach(animateCount);
      ioCount.unobserve(e.target);
    }
  });
}, {threshold: 0.4});
document.querySelectorAll('#stats, .hero').forEach(el => ioCount.observe(el));

// Animate hero progress bars on load
window.addEventListener('load', () => {
  document.querySelectorAll('.fc-2 .bar i').forEach((b, i) => {
    setTimeout(() => { b.style.width = b.dataset.w; }, 600 + i * 180);
  });
});

// Parallax
const px = document.querySelectorAll('[data-px]');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const y = window.scrollY;
      px.forEach(el => {
        const speed = parseFloat(el.dataset.px);
        el.style.transform = `translate3d(0, ${y * speed}px, 0) ${el.dataset.rot ? 'rotate('+ (y*0.04) +'deg)':''}`;
      });
      ticking = false;
    });
    ticking = true;
  }
}, {passive:true});

// Float cards mouse parallax
const heroVis = document.querySelector('.hero-visual');
if (heroVis) {
  heroVis.addEventListener('mousemove', (e) => {
    const r = heroVis.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    heroVis.querySelectorAll('[data-mp]').forEach(el => {
      const s = parseFloat(el.dataset.mp);
      el.style.transform = `translate(${x*s}px, ${y*s}px)`;
    });
  });
  heroVis.addEventListener('mouseleave', () => {
    heroVis.querySelectorAll('[data-mp]').forEach(el => el.style.transform = '');
  });
}

// FAQ
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// Form
const form = document.querySelector('.form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-cta');
    btn.textContent = 'Sending…';
    setTimeout(() => {
      btn.innerHTML = 'Sent ✓';
      btn.style.background = '#22c55e';
      setTimeout(() => {
        btn.innerHTML = 'Start the conversation <span>→</span>';
        btn.style.background = '';
        form.reset();
      }, 2400);
    }, 900);
  });
}

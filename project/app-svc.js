// Service-page nav + cursor (lightweight version of app-v2.js)
const cursor = document.createElement('div'); cursor.className = 'cursor';
const ring = document.createElement('div'); ring.className = 'cursor-ring';
document.body.appendChild(cursor); document.body.appendChild(ring);
let mx = innerWidth/2, my = innerHeight/2, rx = mx, ry = my;
addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; cursor.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`; });
(function loop(){ rx += (mx-rx)*0.18; ry += (my-ry)*0.18; ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`; requestAnimationFrame(loop); })();
document.querySelectorAll('a, button, .offer, .eng, .related-item, .mega-svc, .mega-card, .ct-ch').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
  el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
});

const nav = document.querySelector('nav.top');
addEventListener('scroll', () => { nav.classList.toggle('scrolled', scrollY > 20); }, {passive:true});

const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }}), {threshold:0.15, rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.btn-magnetic, .nav-cta').forEach(btn => {
  btn.addEventListener('mousemove', (e) => { const r = btn.getBoundingClientRect(); btn.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.25}px, ${(e.clientY-r.top-r.height/2)*0.25}px)`; });
  btn.addEventListener('mouseleave', () => btn.style.transform = '');
});

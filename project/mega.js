// Shared mega menu + service-page nav script (used on landing + all service pages)
(function(){
  // Build mega menu DOM if a placeholder exists or auto-attach to nav
  const navInner = document.querySelector('nav.top .nav-inner');
  if (!navInner) return;

  const backdrop = document.createElement('div');
  backdrop.className = 'mega-backdrop';
  document.body.appendChild(backdrop);

  const mega = document.createElement('div');
  mega.className = 'mega';
  mega.innerHTML = `
    <div class="mega-inner">
      <div class="mega-col mega-intro">
        <h6>(Studio)</h6>
        <h3>Two studios.<br>One <span class="it">relentless</span> outcome.</h3>
        <p>Marketing that pays for itself, software that ages well — orchestrated together when it matters.</p>
        <a href="services.html" class="ic-cta">All services →</a>
      </div>
      <div class="mega-col">
        <h6>(Capabilities)</h6>
        <div class="mega-services">
          <a class="mega-svc" href="service-performance.html"><div class="ms-num">01</div><div><div class="ms-title">Performance Marketing</div><div class="ms-desc">Search, paid social, programmatic.</div></div></a>
          <a class="mega-svc" href="service-seo.html"><div class="ms-num">02</div><div><div class="ms-title">SEO &amp; Content</div><div class="ms-desc">Authority that compounds.</div></div></a>
          <a class="mega-svc" href="service-brand.html"><div class="ms-num">03</div><div><div class="ms-title">Brand &amp; Strategy</div><div class="ms-desc">Positioning &amp; identity.</div></div></a>
          <a class="mega-svc" href="service-web.html"><div class="ms-num">04</div><div><div class="ms-title">Web Development</div><div class="ms-desc">Marketing sites &amp; platforms.</div></div></a>
          <a class="mega-svc" href="service-mobile.html"><div class="ms-num">05</div><div><div class="ms-title">Mobile Apps</div><div class="ms-desc">iOS, Android, cross-platform.</div></div></a>
          <a class="mega-svc" href="service-desktop.html"><div class="ms-num">06</div><div><div class="ms-title">Desktop Software</div><div class="ms-desc">Native &amp; cross-platform.</div></div></a>
          <a class="mega-svc" href="service-cloud.html"><div class="ms-num">07</div><div><div class="ms-title">Cloud &amp; DevOps</div><div class="ms-desc">Infra, CI/CD, observability.</div></div></a>
        </div>
      </div>
      <div class="mega-col mega-side">
        <h6>(Featured)</h6>
        <a href="service-performance.html" class="mega-card">
          <div class="mc-tag">Case Study</div>
          <h4>Lumière scaled to $1.2M MRR in 9 months.</h4>
          <div class="mc-arr">↗</div>
        </a>
        <a href="#contact" class="mega-card dark">
          <div class="mc-tag" style="color:var(--orange)">Now booking</div>
          <h4>Q3 2026 — <span class="it">limited</span> spots.</h4>
          <div class="mc-arr">↗</div>
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(mega);

  function open(){ mega.classList.add('open'); backdrop.classList.add('open'); trigger.classList.add('open'); }
  function close(){ mega.classList.remove('open'); backdrop.classList.remove('open'); trigger.classList.remove('open'); }

  const trigger = document.querySelector('[data-mega-trigger]');
  if (trigger) {
    trigger.addEventListener('click', (e) => { e.preventDefault(); mega.classList.contains('open') ? close() : open(); });
  }
  backdrop.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();

"use client";

export default function Services() {
  return (
    <section id="services" data-screen-label="03 Services">
      <div className="wrap">
        <div className="sec-num reveal">
          <span>(B) Capabilities</span>
          <span>
            <b>02</b> / 09
          </span>
        </div>
        <div className="sec-head reveal">
          <h2>
            Two studios.
            <br />
            One <span className="it">relentless</span> outcome.
          </h2>
        </div>

        <div className="svc-table" style={{ marginTop: 80 }}>
          <a href="/services/performance-marketing" className="svc-row reveal">
            <div className="svc-num">— 01</div>
            <div className="svc-title">Performance Marketing</div>
            <div className="svc-desc">
              Search, paid social, programmatic — orchestrated full-funnel and
              measured against blended CAC, not vanity clicks.
            </div>
            <div className="svc-tags">
              <span className="svc-tag">Google</span>
              <span className="svc-tag">Meta</span>
              <span className="svc-tag">LinkedIn</span>
              <span className="svc-tag">TikTok</span>
            </div>
            <div className="svc-arrow">↗</div>
          </a>

          <a href="/services/seo-content" className="svc-row reveal">
            <div className="svc-num">— 02</div>
            <div className="svc-title">SEO &amp; Content</div>
            <div className="svc-desc">
              Authority that compounds. Technical SEO, programmatic content, and
              editorial that ranks and converts.
            </div>
            <div className="svc-tags">
              <span className="svc-tag">Technical</span>
              <span className="svc-tag">Editorial</span>
              <span className="svc-tag">Programmatic</span>
            </div>
            <div className="svc-arrow">↗</div>
          </a>

          <a href="/services/brand-strategy" className="svc-row reveal">
            <div className="svc-num">— 03</div>
            <div className="svc-title">Brand &amp; Strategy</div>
            <div className="svc-desc">
              Positioning, identity, and the kind of message architecture that
              makes everything downstream cheaper to run.
            </div>
            <div className="svc-tags">
              <span className="svc-tag">Identity</span>
              <span className="svc-tag">Messaging</span>
              <span className="svc-tag">GTM</span>
            </div>
            <div className="svc-arrow">↗</div>
          </a>

          <a href="/services/web-development" className="svc-row reveal">
            <div className="svc-num">— 04</div>
            <div className="svc-title">Web Development</div>
            <div className="svc-desc">
              Marketing sites, dashboards, and full web platforms. Modern
              stacks, careful architecture, code your team can own.
            </div>
            <div className="svc-tags">
              <span className="svc-tag">React</span>
              <span className="svc-tag">Next.js</span>
              <span className="svc-tag">Node</span>
            </div>
            <div className="svc-arrow">↗</div>
          </a>

          <a href="/services/mobile-apps" className="svc-row reveal">
            <div className="svc-num">— 05</div>
            <div className="svc-title">Mobile Apps</div>
            <div className="svc-desc">
              iOS, Android, cross-platform. From MVP to flagship — shipped,
              polished, instrumented, and observable.
            </div>
            <div className="svc-tags">
              <span className="svc-tag">Swift</span>
              <span className="svc-tag">Kotlin</span>
              <span className="svc-tag">React Native</span>
              <span className="svc-tag">Flutter</span>
            </div>
            <div className="svc-arrow">↗</div>
          </a>

          <a href="/services/desktop-software" className="svc-row reveal">
            <div className="svc-num">— 06</div>
            <div className="svc-title">Desktop Software</div>
            <div className="svc-desc">
              Native macOS, Windows, and Linux apps. Internal tooling, creative
              software, and electron-when-it&apos;s-right.
            </div>
            <div className="svc-tags">
              <span className="svc-tag">Tauri</span>
              <span className="svc-tag">Electron</span>
              <span className="svc-tag">Native</span>
            </div>
            <div className="svc-arrow">↗</div>
          </a>

          <a href="/services/cloud-devops" className="svc-row reveal">
            <div className="svc-num">— 07</div>
            <div className="svc-title">Cloud &amp; DevOps</div>
            <div className="svc-desc">
              AWS, GCP, Azure. CI/CD, infrastructure-as-code, and monitoring
              that lets your team ship without fear.
            </div>
            <div className="svc-tags">
              <span className="svc-tag">AWS</span>
              <span className="svc-tag">Terraform</span>
              <span className="svc-tag">K8s</span>
            </div>
            <div className="svc-arrow">↗</div>
          </a>
        </div>
      </div>
    </section>
  );
}

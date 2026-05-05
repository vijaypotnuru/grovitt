"use client";

import { useEffect } from "react";
import { useAppContext } from "./app-wrapper";

export function MegaMenu() {
  const { megaOpen, closeMega } = useAppContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMega();
    };
    if (megaOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [megaOpen, closeMega]);

  return (
    <>
      <div
        className={`mega-backdrop${megaOpen ? " open" : ""}`}
        onClick={closeMega}
      />
      <div className={`mega${megaOpen ? " open" : ""}`}>
        <div className="mega-inner">
          <div className="mega-col mega-intro">
            <h6>(Studio)</h6>
            <h3>
              Two studios.
              <br />
              One <span className="it">relentless</span> outcome.
            </h3>
            <p>
              Marketing that pays for itself, software that ages well — orchestrated
              together when it matters.
            </p>
            <a href="#" className="ic-cta">
              All services &#x2192;
            </a>
          </div>

          <div className="mega-col">
            <h6>(Capabilities)</h6>
            <div className="mega-services">
              <a href="/services/performance-marketing" className="mega-svc">
                <span className="ms-num">01</span>
                <div>
                  <div className="ms-title">Performance Marketing</div>
                  <div className="ms-desc">Search, paid social, programmatic.</div>
                </div>
              </a>
              <a href="/services/seo-content" className="mega-svc">
                <span className="ms-num">02</span>
                <div>
                  <div className="ms-title">SEO &amp; Content</div>
                  <div className="ms-desc">Authority that compounds.</div>
                </div>
              </a>
              <a href="/services/brand-strategy" className="mega-svc">
                <span className="ms-num">03</span>
                <div>
                  <div className="ms-title">Brand &amp; Strategy</div>
                  <div className="ms-desc">Positioning &amp; identity.</div>
                </div>
              </a>
              <a href="/services/web-development" className="mega-svc">
                <span className="ms-num">04</span>
                <div>
                  <div className="ms-title">Web Development</div>
                  <div className="ms-desc">Marketing sites &amp; platforms.</div>
                </div>
              </a>
              <a href="/services/mobile-apps" className="mega-svc">
                <span className="ms-num">05</span>
                <div>
                  <div className="ms-title">Mobile Apps</div>
                  <div className="ms-desc">iOS, Android, cross-platform.</div>
                </div>
              </a>
              <a href="/services/desktop-software" className="mega-svc">
                <span className="ms-num">06</span>
                <div>
                  <div className="ms-title">Desktop Software</div>
                  <div className="ms-desc">Native &amp; cross-platform.</div>
                </div>
              </a>
              <a href="/services/cloud-devops" className="mega-svc">
                <span className="ms-num">07</span>
                <div>
                  <div className="ms-title">Cloud &amp; DevOps</div>
                  <div className="ms-desc">Infra, CI/CD, observability.</div>
                </div>
              </a>
            </div>
          </div>

          <div className="mega-col mega-side">
            <h6>(Featured)</h6>
            <a href="#" className="mega-card">
              <div className="mc-tag">Case Study</div>
              <h4>Lumi&egrave;re scaled to $1.2M MRR in 9 months.</h4>
              <div className="mc-arr">&#x2197;</div>
            </a>
            <a href="#contact" className="mega-card dark">
              <div className="mc-tag" style={{ color: "var(--orange)" }}>
                Now booking
              </div>
              <h4>
                Q3 2026 — <span className="it">limited</span> spots.
              </h4>
              <div className="mc-arr">&#x2197;</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

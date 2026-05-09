"use client";

import { useEffect } from "react";
import { useAppContext } from "./app-wrapper";

const MAIN_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "Studio" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
];

const SERVICES = [
  { href: "/services/performance-marketing", num: "01", title: "Performance Marketing" },
  { href: "/services/seo-content", num: "02", title: "SEO & Content" },
  { href: "/services/brand-strategy", num: "03", title: "Brand & Strategy" },
  { href: "/services/web-development", num: "04", title: "Web Development" },
  { href: "/services/mobile-apps", num: "05", title: "Mobile Apps" },
  { href: "/services/desktop-software", num: "06", title: "Desktop Software" },
  { href: "/services/cloud-devops", num: "07", title: "Cloud & DevOps" },
];

export function MobileNav() {
  const { mobileNavOpen, closeMobileNav } = useAppContext();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileNav();
    };
    if (mobileNavOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileNavOpen, closeMobileNav]);

  return (
    <>
      <div
        className={`mobile-nav-backdrop${mobileNavOpen ? " open" : ""}`}
        onClick={closeMobileNav}
        aria-hidden="true"
      />
      <aside
        id="mobile-nav-drawer"
        className={`mobile-nav${mobileNavOpen ? " open" : ""}`}
        aria-hidden={!mobileNavOpen}
      >
        <div className="mobile-nav-inner">
          <div className="mobile-nav-header">
            <span className="mn-eyebrow">(Menu)</span>
          </div>

          <nav className="mobile-nav-links" aria-label="Primary">
            {MAIN_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMobileNav}>
                {link.label}
                <span className="mn-arr" aria-hidden="true">&#x2197;</span>
              </a>
            ))}
          </nav>

          <div className="mobile-nav-section">
            <span className="mn-eyebrow">(Services)</span>
            <ul className="mobile-nav-svc">
              {SERVICES.map((svc) => (
                <li key={svc.href}>
                  <a href={svc.href} onClick={closeMobileNav}>
                    <span className="mn-num">{svc.num}</span>
                    <span className="mn-title">{svc.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="/contact" className="mobile-nav-cta" onClick={closeMobileNav}>
            Start a project <span className="arr">&#x2197;</span>
          </a>

          <div className="mobile-nav-foot">
            <a href="mailto:hello@grovitt.com">hello@grovitt.com</a>
            <span>Est. 2026</span>
          </div>
        </div>
      </aside>
    </>
  );
}

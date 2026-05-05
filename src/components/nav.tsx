"use client";

import { useEffect, useCallback } from "react";
import { useAppContext } from "./app-wrapper";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function Nav() {
  const { toggleMega, mobileNavOpen, toggleMobileNav } = useAppContext();

  const handleScroll = useCallback(() => {
    const nav = document.querySelector("nav.top");
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <nav className="top">
        <div className="nav-inner">
          <a href="/" className="brand" aria-label="Grovitt — home">
            <Logo width={140} height={44} />
          </a>
          <div className="nav-links">
            <button
              className="mega-trigger"
              onClick={toggleMega}
              type="button"
            >
              Services <span className="chev">&#x25BE;</span>
            </button>
            <a href="/work">Work</a>
            <a href="/about">Studio</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact">Contact</a>
          </div>
          <a href="/contact" className="nav-cta">
            Start a project <span className="arr">&#x2197;</span>
          </a>
          <button
            type="button"
            className={`nav-burger${mobileNavOpen ? " open" : ""}`}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav-drawer"
            onClick={toggleMobileNav}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <MobileNav />
    </>
  );
}

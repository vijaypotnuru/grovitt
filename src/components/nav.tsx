"use client";

import { useEffect, useCallback } from "react";
import { useAppContext } from "./app-wrapper";

export function Nav() {
  const { toggleMega } = useAppContext();

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
    <nav className="top">
      <div className="nav-inner">
        <a href="#" className="brand">
          grovitt
          <span className="tail"></span>
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
      </div>
    </nav>
  );
}

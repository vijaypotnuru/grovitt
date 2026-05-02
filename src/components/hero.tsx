"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const btnRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    // ── Magnetic buttons ──
    const attachMagnetic = (el: HTMLElement) => {
      const handleMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.25;
        const dy = (e.clientY - cy) * 0.25;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      };

      const handleLeave = () => {
        el.style.transform = "translate(0px, 0px)";
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    };

    const magneticEls = document.querySelectorAll<HTMLElement>(
      ".btn-magnetic, .nav-cta"
    );
    const cleanups: (() => void)[] = [];

    magneticEls.forEach((el) => {
      cleanups.push(attachMagnetic(el));
    });

    // ── Hero parallax on scroll ──
    const disc = document.querySelector<HTMLElement>(".hero-disc");
    const frags = document.querySelectorAll<HTMLElement>(".hero-frags .frag");

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (disc) {
        disc.style.transform = `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.06}deg)`;
      }

      frags.forEach((frag, i) => {
        const factor = i % 2 === 0 ? -0.15 : -0.25;
        frag.style.transform = `translateY(${scrollY * factor}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cleanups.forEach((fn) => fn());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div className="hero-meta-top">
          <div className="left">
            <span>
              Est. <b>2013</b>
            </span>
            <span>SF · Bengaluru</span>
          </div>
          <div className="right">
            <span>(01) Marketing studio</span>
            <span>(02) Engineering studio</span>
          </div>
        </div>

        <h1>
          <span className="row">
            <span>
              Smarter <i className="it">marketing.</i>
            </span>
          </span>
          <span className="row r2">
            <span>
              <span className="out">Cleaner</span> code.
            </span>
          </span>
          <span className="row r3">
            <span className="gold">
              <span>
                <i className="it">Real</i> growth.
              </span>
            </span>
          </span>
        </h1>

        <div className="hero-bottom">
          <div className="col-lede">
            A digital studio at the intersection of{" "}
            <em
              style={{
                fontFamily: "Fraunces",
                fontStyle: "italic",
                color: "var(--orange)",
                fontWeight: 300,
              }}
            >
              brand, performance, and product
            </em>{" "}
            — building campaigns and software for ambitious teams since 2013.
          </div>
          <div className="col-cta">
            <a href="#contact" className="btn-magnetic">
              Book intro call <span className="arr">→</span>
            </a>
            <a href="#work" className="btn-outline">
              Selected work
            </a>
          </div>
          <div className="col-marker">
            <div>(Now booking)</div>
            <div style={{ marginTop: 6 }}>Q3 · 2026 — limited</div>
          </div>
        </div>
      </div>

      <div className="hero-disc"></div>
      <div className="hero-frags">
        <div className="frag f1">↑ Scroll to explore the studio</div>
        <div className="frag f2">
          <span>Avg. ROAS</span>
          <b>6.4×</b>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="ln"></div>
      </div>
    </header>
  );
}

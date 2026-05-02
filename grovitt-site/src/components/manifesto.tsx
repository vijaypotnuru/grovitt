"use client";

import { useEffect, useRef } from "react";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  // On mount: split text content into <span className="word"> elements.
  // Words at data-it indices also get class "it".
  useEffect(() => {
    const p = pRef.current;
    if (!p) return;

    const dataIt = p.getAttribute("data-it");
    const italicIndices: Set<number> = dataIt
      ? new Set(JSON.parse(dataIt) as number[])
      : new Set();

    const raw = p.textContent ?? "";
    const tokens = raw.split(/(\s+)/);

    let wordIdx = 0;
    let html = "";

    for (const token of tokens) {
      if (/^\s+$/.test(token)) {
        html += token;
      } else {
        const cls = italicIndices.has(wordIdx) ? "word it" : "word";
        html += `<span class="${cls}">${token}</span>`;
        wordIdx++;
      }
    }

    p.innerHTML = html;
  }, []);

  // On scroll: light up words progressively
  useEffect(() => {
    const handleScroll = () => {
      const p = pRef.current;
      if (!p) return;

      const wordEls = p.querySelectorAll<HTMLElement>(".word");
      const totalWords = wordEls.length;
      if (totalWords === 0) return;

      const rect = p.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const end = vh * 0.15;
      const progress = (start - rect.top) / (start - end);
      const litCount = Math.max(
        0,
        Math.min(totalWords, Math.floor(progress * totalWords))
      );

      wordEls.forEach((el, i) => {
        if (i < litCount) {
          el.classList.add("lit");
        } else {
          el.classList.remove("lit");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call so words match starting scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="manifesto" data-screen-label="02 Manifesto" ref={sectionRef}>
      <div className="wrap">
        <div className="sec-num reveal">
          <span>(A) Manifesto</span>
          <span>
            <b>01</b> / 09
          </span>
        </div>
        <p
          className="manifesto reveal"
          data-it="[6,7,8,30,31]"
          ref={pRef}
        >
          We don&apos;t sell decks. We don&apos;t sell hours. We sell outcomes
          — the kind that compound. Marketing that pays for itself, software
          that ages well, and a studio small enough to care, sharp enough to
          ship.
        </p>
      </div>
    </section>
  );
}

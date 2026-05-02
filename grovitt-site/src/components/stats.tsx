"use client";

import { useEffect, useRef } from "react";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function animateCounter(
  el: HTMLElement,
  target: number,
  dec: number,
  duration: number
): void {
  const startTime = performance.now();

  const tick = (now: number) => {
    const elapsed = now - startTime;
    const raw = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(raw);
    const current = target * eased;

    if (dec > 0) {
      el.textContent = current.toFixed(dec);
    } else {
      el.textContent = Math.floor(current).toLocaleString();
    }

    if (raw < 1) {
      requestAnimationFrame(tick);
    } else {
      if (dec > 0) {
        el.textContent = target.toFixed(dec);
      } else {
        el.textContent = Math.floor(target).toLocaleString();
      }
    }
  };

  requestAnimationFrame(tick);
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const animating = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animating.current) {
            animating.current = true;

            const targets = section.querySelectorAll<HTMLElement>("[data-n]");

            targets.forEach((el) => {
              const target = parseFloat(el.dataset.n || "0");
              const dec = parseInt(el.dataset.dec || "0", 10);
              animateCounter(el, target, dec, 2200);
            });
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="stats" ref={sectionRef} data-screen-label="05 Stats">
      <div className="wrap">
        <div className="sec-num reveal">
          <span>(D) Numbers</span>
          <span>
            <b>04</b> / 09
          </span>
        </div>
        <div className="sec-head reveal">
          <h2>
            A decade of
            <br />
            <span className="it">compounding</span> wins.
          </h2>
        </div>

        <div className="stats-row" style={{ marginTop: 80 }}>
          <div className="stat reveal">
            <div className="label">Years in business</div>
            <div className="n">
              <span data-n="13">0</span>
              <span className="suf">+</span>
            </div>
            <div className="desc">
              Founded in 2013, working across 14 industries.
            </div>
          </div>

          <div className="stat reveal reveal-d1">
            <div className="label">Clients served</div>
            <div className="n">
              <span data-n="240">0</span>
              <span className="suf">+</span>
            </div>
            <div className="desc">
              From local startups to global enterprise teams.
            </div>
          </div>

          <div className="stat reveal reveal-d2">
            <div className="label">Campaigns delivered</div>
            <div className="n">
              <span data-n="1850">0</span>
              <span className="suf">+</span>
            </div>
            <div className="desc">
              Search, social, content, programmatic — shipped.
            </div>
          </div>

          <div className="stat reveal reveal-d3">
            <div className="label">Revenue lifted</div>
            <div className="n">
              $<span data-n="320">0</span>
              <span className="suf">M+</span>
            </div>
            <div className="desc">
              Attributable revenue generated for our clients.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

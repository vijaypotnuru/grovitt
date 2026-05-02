"use client";

import { useEffect } from "react";

export default function Process() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".proc-item");
    const stages = document.querySelectorAll<HTMLElement>(".proc-stage");

    const onScroll = () => {
      const vh = window.innerHeight;
      let activeIndex = -1;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < vh * 0.55 && rect.bottom > vh * 0.2) {
          activeIndex = i;
        }
      });

      items.forEach((item, i) => {
        if (i === activeIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      stages.forEach((stage, i) => {
        if (i === activeIndex) {
          stage.classList.add("active");
        } else {
          stage.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section id="process" className="process-section" data-screen-label="04 Process">
      <div className="wrap">
        <div className="sec-num reveal">
          <span>(C) How we work</span>
          <span>
            <b>03</b> / 09
          </span>
        </div>
        <div className="sec-head reveal">
          <h2>
            A four-step
            <br />
            <span className="it">operating</span> system.
          </h2>
        </div>

        <div className="proc-stack">
          <div className="proc-sticky">
            <div className="proc-vis">
              <div className="proc-stage active">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.6">
                  <circle cx="100" cy="100" r="80" />
                  <circle cx="100" cy="100" r="60" />
                  <circle cx="100" cy="100" r="40" />
                  <circle cx="100" cy="100" r="20" />
                  <circle cx="100" cy="100" r="4" fill="#FF6A1A" stroke="none" />
                  <line x1="100" y1="20" x2="100" y2="180" />
                  <line x1="20" y1="100" x2="180" y2="100" />
                </svg>
                <div className="label">
                  Phase 01<b>Discover</b>
                </div>
              </div>

              <div className="proc-stage">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.6">
                  <rect x="30" y="30" width="140" height="140" rx="4" />
                  <rect x="55" y="55" width="90" height="90" rx="2" />
                  <rect x="80" y="80" width="40" height="40" rx="2" />
                  <line x1="100" y1="30" x2="100" y2="170" />
                  <line x1="30" y1="100" x2="170" y2="100" />
                  <circle cx="100" cy="100" r="4" fill="#FF6A1A" stroke="none" />
                </svg>
                <div className="label">
                  Phase 02<b>Design</b>
                </div>
              </div>

              <div className="proc-stage">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.6">
                  <polygon points="100,20 20,100 180,100" />
                  <rect x="52" y="100" width="96" height="80" />
                  <rect x="70" y="120" width="28" height="28" />
                  <rect x="110" y="120" width="28" height="28" />
                  <rect x="85" y="160" width="30" height="20" rx="2" />
                  <circle cx="100" cy="100" r="3" fill="#FF6A1A" stroke="none" />
                </svg>
                <div className="label">
                  Phase 03<b>Build</b>
                </div>
              </div>

              <div className="proc-stage">
                <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.6">
                  <line x1="40" y1="170" x2="40" y2="30" />
                  <line x1="40" y1="170" x2="170" y2="170" />
                  <polyline points="55,140 85,100 115,80 145,40" strokeWidth="1.2" />
                  <circle cx="55" cy="140" r="3" fill="currentColor" />
                  <circle cx="85" cy="100" r="3" fill="currentColor" />
                  <circle cx="115" cy="80" r="3" fill="currentColor" />
                  <circle cx="145" cy="40" r="3" fill="currentColor" />
                  <line x1="145" y1="40" x2="155" y2="30" strokeWidth="0.8" strokeDasharray="2 2" />
                  <circle cx="155" cy="30" r="2.5" fill="#FF6A1A" stroke="none" />
                  <circle cx="40" cy="170" r="3" fill="#FF6A1A" stroke="none" />
                </svg>
                <div className="label">
                  Phase 04<b>Grow</b>
                </div>
              </div>
            </div>
          </div>

          <div className="proc-list">
            <div className="proc-item active reveal">
              <div className="pn">— Phase 01 / Discover</div>
              <h4>Discover</h4>
              <p>
                We audit your funnel, your stack, and your numbers. The plan we
                deliver is the plan we&apos;d run if we owned the company. Two
                weeks, every stone turned, every assumption tested.
              </p>
            </div>

            <div className="proc-item reveal">
              <div className="pn">— Phase 02 / Design</div>
              <h4>Design</h4>
              <p>
                Strategy, messaging, brand, and product design — turned into
                deliverables you can ship, not just decks you&apos;ll archive.
                Decisions, not options.
              </p>
            </div>

            <div className="proc-item reveal">
              <div className="pn">— Phase 03 / Build</div>
              <h4>Build</h4>
              <p>
                Senior engineers and marketers build in parallel. Weekly demos,
                transparent boards, real progress every Friday. We
                over-communicate so nothing surprises you in week six.
              </p>
            </div>

            <div className="proc-item reveal">
              <div className="pn">— Phase 04 / Grow</div>
              <h4>Grow</h4>
              <p>
                Once it&apos;s live, we double down. Tests, iterations, and a
                dashboard that tells you exactly where the next dollar — or
                engineering hour — should go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function Faq() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const item = target.closest(".faq-item") as HTMLElement | null;
      if (!item) return;

      const isOpen = item.classList.contains("open");

      if (isOpen) {
        // Close this item
        item.classList.remove("open");
      } else {
        // Close all other items, then open this one
        const allItems = list.querySelectorAll(".faq-item");
        allItems.forEach((el) => el.classList.remove("open"));
        item.classList.add("open");
      }
    };

    list.addEventListener("click", handleClick);
    return () => list.removeEventListener("click", handleClick);
  }, []);

  return (
    <section id="faq" data-screen-label="09 FAQ">
      <div className="wrap">
        <div className="sec-num reveal">
          <span>(H) Frequently asked</span>
          <span>
            <b>08</b> / 09
          </span>
        </div>
        <div className="faq-wrap">
          <div className="reveal">
            <h2
              className="serif"
              style={{
                fontSize: "clamp(48px,5.6vw,84px)",
                lineHeight: ".95",
                letterSpacing: "-0.04em",
                color: "var(--paper)",
              }}
            >
              Questions
              <br />
              worth{" "}
              <span className="it" style={{ color: "var(--orange)" }}>
                asking
              </span>
              .
            </h2>
            <p
              style={{
                marginTop: 32,
                color: "var(--muted)",
                maxWidth: 340,
                fontSize: 16,
                lineHeight: 1.5,
              }}
            >
              Don&apos;t see yours?{" "}
              <a
                href="#contact"
                style={{
                  color: "var(--orange)",
                  borderBottom: "1px solid var(--orange)",
                  paddingBottom: 2,
                }}
              >
                Ask us directly →
              </a>
            </p>
          </div>
          <div className="faq-list reveal reveal-d1" ref={listRef}>
            <div className="faq-item open">
              <div className="faq-q">
                <span>Do you only work with one type of business?</span>
                <span className="pm">+</span>
              </div>
              <div className="faq-a">
                <p>
                  No. Our clients range from early-stage startups to mid-market
                  and enterprise teams. The common thread is ambition — companies
                  that are ready to grow and invest seriously in the work it
                  takes.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                <span>Can I hire you for just marketing or just engineering?</span>
                <span className="pm">+</span>
              </div>
              <div className="faq-a">
                <p>
                  Absolutely. Many clients start with one and add the other
                  later. The two practices share strategy, data, and tooling —
                  so you get the integrated benefit without the integrated bill.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                <span>How long does a typical engagement run?</span>
                <span className="pm">+</span>
              </div>
              <div className="faq-a">
                <p>
                  Project work runs 6–16 weeks. Marketing retainers are
                  open-ended, reviewed quarterly. We don&apos;t lock you in — if
                  we&apos;re not driving results, you shouldn&apos;t be paying.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                <span>Who actually does the work?</span>
                <span className="pm">+</span>
              </div>
              <div className="faq-a">
                <p>
                  Senior practitioners. Every engagement is staffed with people
                  who have shipped for years — no rotating juniors, no ghost
                  teams. You meet them in the pitch and you keep them through
                  the work.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-q">
                <span>What does pricing look like?</span>
                <span className="pm">+</span>
              </div>
              <div className="faq-a">
                <p>
                  Engineering is fixed-scope or T&amp;M depending on clarity.
                  Marketing is a flat monthly retainer plus media. We send a
                  complete budget breakdown before any work begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

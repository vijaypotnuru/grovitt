"use client";

import { useEffect, useRef } from "react";

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const preview = section.querySelector(".work-preview") as HTMLElement | null;
    const rows = section.querySelectorAll(".work-row") as NodeListOf<HTMLElement>;

    if (!preview) return;

    const handleMouseEnter = (e: Event) => {
      const row = e.currentTarget as HTMLElement;
      const wp = row.dataset.preview;
      const label = row.dataset.label;
      if (wp) {
        preview.className = `work-preview show ${wp}`;
      }
      if (label) {
        preview.setAttribute("data-label", label);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      preview.style.left = `${e.clientX + 24}px`;
      preview.style.top = `${e.clientY - 120}px`;
    };

    const handleMouseLeave = () => {
      preview.classList.remove("show");
    };

    rows.forEach((row) => {
      row.addEventListener("mouseenter", handleMouseEnter);
      row.addEventListener("mouseleave", handleMouseLeave);
    });

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      rows.forEach((row) => {
        row.removeEventListener("mouseenter", handleMouseEnter);
        row.removeEventListener("mouseleave", handleMouseLeave);
      });
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work-section" data-screen-label="06 Work">
      <div className="wrap">
        <div className="sec-num reveal" style={{ borderTopColor: "rgba(10,10,11,.12)" }}>
          <span>(E) Selected work</span>
          <span>
            <b>05</b> / 09
          </span>
        </div>
        <div className="sec-head reveal">
          <h2>
            Results, not
            <br />
            <span className="it">retrospectives</span>.
          </h2>
        </div>

        <div className="work-list">
          <div className="work-row reveal" data-preview="wp-1" data-label="Lumière">
            <div className="wn">— 01</div>
            <div className="wcat">Performance · D2C</div>
            <h3>Scaled a beauty brand from $40k to $1.2M MRR.</h3>
            <div className="stat-mini">
              +217%<small>MRR · 9 mo</small>
            </div>
            <div className="year">2025</div>
          </div>

          <div className="work-row reveal" data-preview="wp-2" data-label="Forge/9">
            <div className="wn">— 02</div>
            <div className="wcat">Mobile · Fintech</div>
            <h3>Shipped a payments app, 200k MAU first quarter.</h3>
            <div className="stat-mini">
              200k<small>MAU · Q1</small>
            </div>
            <div className="year">2024</div>
          </div>

          <div className="work-row reveal" data-preview="wp-3" data-label="Northbeam">
            <div className="wn">— 03</div>
            <div className="wcat">SEO · B2B SaaS</div>
            <h3>Built an organic engine that owns 412 page-one keywords.</h3>
            <div className="stat-mini">
              +612%<small>Organic</small>
            </div>
            <div className="year">2024</div>
          </div>

          <div className="work-row reveal" data-preview="wp-4" data-label="Atlas">
            <div className="wn">— 04</div>
            <div className="wcat">Web · Logistics</div>
            <h3>Replatformed a logistics dashboard used in 11 countries.</h3>
            <div className="stat-mini">
              −72%<small>Page load</small>
            </div>
            <div className="year">2023</div>
          </div>

          <div className="work-row reveal" data-preview="wp-1" data-label="Marigold">
            <div className="wn">— 05</div>
            <div className="wcat">Brand · Hospitality</div>
            <h3>Rebranded a 24-property hotel group end to end.</h3>
            <div className="stat-mini">
              +44%<small>Direct bookings</small>
            </div>
            <div className="year">2023</div>
          </div>
        </div>
      </div>
      <div className="work-preview"></div>
    </section>
  );
}

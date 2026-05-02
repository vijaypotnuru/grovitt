"use client";

import { useEffect, useRef } from "react";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const quotes = section.querySelectorAll(".tst-quote") as NodeListOf<HTMLElement>;
    const dots = section.querySelectorAll(".tst-dot") as NodeListOf<HTMLElement>;
    const total = quotes.length;

    const showIndex = (index: number) => {
      currentRef.current = index;
      quotes.forEach((q) => q.classList.remove("active"));
      dots.forEach((d) => d.classList.remove("active"));
      quotes[index].classList.add("active");
      dots[index].classList.add("active");
    };

    const next = () => {
      const nextIndex = (currentRef.current + 1) % total;
      showIndex(nextIndex);
    };

    const prev = () => {
      const prevIndex = (currentRef.current - 1 + total) % total;
      showIndex(prevIndex);
    };

    const startTimer = () => {
      stopTimer();
      timerRef.current = setInterval(next, 6000);
    };

    const stopTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const handleDotClick = (index: number) => {
      showIndex(index);
      stopTimer();
      startTimer();
    };

    const handlePrev = () => {
      prev();
      stopTimer();
      startTimer();
    };

    const handleNext = () => {
      next();
      stopTimer();
      startTimer();
    };

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => handleDotClick(i));
    });

    const prevBtn = section.querySelector(".tst-prev") as HTMLButtonElement | null;
    const nextBtn = section.querySelector(".tst-next") as HTMLButtonElement | null;

    prevBtn?.addEventListener("click", handlePrev);
    nextBtn?.addEventListener("click", handleNext);

    // Start auto-advance timer
    startTimer();

    return () => {
      stopTimer();
      dots.forEach((dot, i) => {
        dot.removeEventListener("click", () => handleDotClick(i));
      });
      prevBtn?.removeEventListener("click", handlePrev);
      nextBtn?.removeEventListener("click", handleNext);
    };
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" data-screen-label="07 Testimonials">
      <div className="wrap">
        <div className="sec-num reveal">
          <span>(F) Voices</span>
          <span>
            <b>06</b> / 09
          </span>
        </div>
        <div className="sec-head reveal">
          <h2>
            What founders say
            <br />
            <span className="it">after</span> we ship.
          </h2>
        </div>

        <div className="tst-stage">
          <div className="tst-quote active">
            <blockquote>
              &quot;Grovitt is the first studio that <span className="it">actually</span> felt
              like an extension of our team. They rebuilt our app, then 3×&apos;d our paid
              acquisition. Rare combination.&quot;
            </blockquote>
            <div className="meta">
              <div className="av">S</div>
              <div>
                <b>Sara Malik</b>
                <span>Founder · Lumière Co.</span>
              </div>
            </div>
          </div>
          <div className="tst-quote">
            <blockquote>
              &quot;Their engineering bar is <span className="it">unreasonably</span> high.
              We&apos;ve been a client for four years and counting — they ship more in a quarter
              than most teams ship in a year.&quot;
            </blockquote>
            <div className="meta">
              <div className="av">J</div>
              <div>
                <b>James Reyes</b>
                <span>CTO · Forge/9</span>
              </div>
            </div>
          </div>
          <div className="tst-quote">
            <blockquote>
              &quot;They cut our CAC by 40% in the first quarter and{" "}
              <span className="it">never once</span> blamed the algorithm.&quot;
            </blockquote>
            <div className="meta">
              <div className="av">P</div>
              <div>
                <b>Priya Desai</b>
                <span>Head of Growth · Kindred</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tst-nav">
          <div className="tst-dots">
            <button className="tst-dot active"></button>
            <button className="tst-dot"></button>
            <button className="tst-dot"></button>
          </div>
          <div className="tst-arrows">
            <button className="tst-prev">←</button>
            <button className="tst-next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

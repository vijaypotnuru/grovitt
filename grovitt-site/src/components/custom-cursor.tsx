"use client";

import { useEffect, useRef } from "react";

const HOVER_SELECTOR =
  "a, button, .svc-row, .proc-item, .faq-item, .work-row, .ct-ch, .post";

const LERP_FACTOR = 0.18;

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Create cursor dot element
    const cursorEl = document.createElement("div");
    cursorEl.className = "cursor";
    document.body.appendChild(cursorEl);
    cursorRef.current = cursorEl;

    // Create cursor ring element
    const ringEl = document.createElement("div");
    ringEl.className = "cursor-ring";
    document.body.appendChild(ringEl);
    ringRef.current = ringEl;

    // Track mouse position
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Dot follows instantly
      cursorEl.style.transform = `translate3d(${e.clientX - 4}px, ${e.clientY - 4}px, 0)`;
    };

    // Animation loop for ring with lerp
    const animate = () => {
      const dx = mouseRef.current.x - ringPosRef.current.x;
      const dy = mouseRef.current.y - ringPosRef.current.y;

      ringPosRef.current.x += dx * LERP_FACTOR;
      ringPosRef.current.y += dy * LERP_FACTOR;

      ringEl.style.transform = `translate3d(${ringPosRef.current.x - 20}px, ${ringPosRef.current.y - 20}px, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    // Hover state management via event delegation
    const addHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const match = target.closest(HOVER_SELECTOR);
      if (match) {
        cursorEl.classList.add("hover");
        ringEl.classList.add("hover");
      }
    };

    const removeHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const match = target.closest(HOVER_SELECTOR);
      if (match) {
        cursorEl.classList.remove("hover");
        ringEl.classList.remove("hover");
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", addHover, { passive: true });
    document.addEventListener("mouseout", removeHover, { passive: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", addHover);
      document.removeEventListener("mouseout", removeHover);
      cancelAnimationFrame(rafRef.current);

      cursorEl.remove();
      ringEl.remove();
    };
  }, []);

  return null;
}

export default CustomCursor;

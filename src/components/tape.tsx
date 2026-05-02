"use client";

import { useEffect, useRef } from "react";

const TAPE_ITEMS = [
  "Performance Marketing",
  "Web Development",
  "Mobile Apps",
  "SEO & Content",
  "Cloud & DevOps",
  "Brand Strategy",
];

function TapeItems() {
  return (
    <>
      {TAPE_ITEMS.map((label) => (
        <span className="tape-item" key={label}>
          {label}
          <span className="star">✦</span>
        </span>
      ))}
      {TAPE_ITEMS.map((label) => (
        <span className="tape-item" key={`${label}-dup`}>
          {label}
          <span className="star">✦</span>
        </span>
      ))}
    </>
  );
}

export default function Tape() {
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const handleEnter = () => {
      track.style.animationDuration = "20s";
    };

    const handleLeave = () => {
      track.style.animationDuration = "50s";
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="tape" ref={containerRef}>
      <div className="tape-track" ref={trackRef}>
        <TapeItems />
      </div>
    </div>
  );
}

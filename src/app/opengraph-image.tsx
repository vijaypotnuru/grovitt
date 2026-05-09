import { ImageResponse } from "next/og";

export const alt = "Grovitt — Studio for Smarter Marketing & Real Growth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a0a0b 0%, #1b2a6b 60%, #ff6a1a 130%)",
          color: "#f5f1ea",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#ff6a1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 800,
              color: "#0a0a0b",
            }}
          >
            G
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            grovitt.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            Studio for smarter marketing &amp; real growth.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(245, 241, 234, 0.75)",
              maxWidth: 880,
              lineHeight: 1.3,
            }}
          >
            Brand, performance, and product — for ambitious teams since 2026.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(245, 241, 234, 0.6)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>Grovitt Studio</span>
          <span>est. 2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

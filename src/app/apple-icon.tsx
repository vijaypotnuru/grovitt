import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #ff6a1a 0%, #c4400a 60%, #1b2a6b 130%)",
          color: "#0a0a0b",
          fontSize: 124,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          fontFamily: "sans-serif",
          borderRadius: 36,
        }}
      >
        G
      </div>
    ),
    { ...size }
  );
}

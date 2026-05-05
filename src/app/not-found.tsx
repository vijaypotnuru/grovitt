import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has been moved.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="svc-page" style={{ display: "flex", alignItems: "center", minHeight: "80vh" }}>
      <div className="wrap" style={{ textAlign: "center", width: "100%" }}>
        <div className="sec-num">
          <span className="mono">404</span>
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(32px, 5vw, 64px)", marginBottom: 24 }}>
          Page <span className="it">not found</span>.
        </h1>
        <p style={{ color: "var(--ink-muted)", marginBottom: 40, fontSize: "clamp(16px, 2vw, 20px)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-magnetic">
          Back to home <span className="arr">&#x2197;</span>
        </Link>
      </div>
    </main>
  );
}

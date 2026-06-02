import type { Metadata } from "next";
import Link from "next/link";
import UnsubscribeForm from "./unsubscribe-form";

export const metadata: Metadata = {
  title: "Unsubscribe — Grovitt Studio",
  description: "Stop receiving emails from Grovitt Studio.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{ email?: string }>;
};

export default async function UnsubscribePage({ searchParams }: Props) {
  const { email = "" } = await searchParams;

  return (
    <main style={{ maxWidth: 520, margin: "0 auto", padding: "80px 24px 120px" }}>
      <div style={{ marginBottom: 48 }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 14, textDecoration: "none" }}>
          ← Back to home
        </Link>
      </div>

      <h1 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginBottom: 16 }}>
        Unsubscribe
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: 40, lineHeight: 1.6 }}>
        Confirm below to stop receiving emails from Grovitt Studio. We&apos;ll process your
        request immediately.
      </p>

      <UnsubscribeForm email={email} />

      <p style={{ marginTop: 32, color: "var(--muted)", fontSize: 13 }}>
        Questions? Email us at{" "}
        <a href="mailto:veera@grovitt.com" style={{ color: "inherit" }}>
          veera@grovitt.com
        </a>
        .
      </p>
    </main>
  );
}

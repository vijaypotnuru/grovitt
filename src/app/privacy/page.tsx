import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Grovitt Studio",
  description: "How Grovitt Studio collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
      <div style={{ marginBottom: 48 }}>
        <Link href="/" style={{ color: "var(--muted)", fontSize: 14, textDecoration: "none" }}>
          ← Back to home
        </Link>
      </div>

      <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, marginBottom: 8 }}>
        Privacy Policy
      </h1>
      <p style={{ color: "var(--muted)", marginBottom: 48 }}>
        Last updated: 1 June 2026
      </p>

      <Section title="Who we are">
        <p>
          Grovitt Studio is a digital studio based in Rajamahendravaram, Andhra Pradesh, India.
          We provide digital marketing, web development, mobile app development, and related
          technology services. You can reach us at{" "}
          <a href="mailto:veera@grovitt.com">veera@grovitt.com</a> or{" "}
          <a href="mailto:hello@grovitt.com">hello@grovitt.com</a>.
        </p>
      </Section>

      <Section title="What data we collect">
        <p>When you submit our contact form, we collect:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your company name (optional)</li>
          <li>Your message or project description</li>
        </ul>
        <p>
          We do not use tracking pixels, behavioural analytics, or third-party advertising
          scripts on this website.
        </p>
      </Section>

      <Section title="How we use your data">
        <p>
          The information you submit is used solely to respond to your enquiry and, if you
          become a client, to manage our working relationship. We will never use your email
          address for unsolicited marketing without your explicit consent.
        </p>
      </Section>

      <Section title="Third-party sharing">
        <p>
          We do not sell, rent, or share your personal data with third parties for their own
          marketing purposes. We may use transactional email infrastructure to deliver replies
          to your enquiry; those providers process email on our behalf and are not permitted to
          use your data for any other purpose.
        </p>
      </Section>

      <Section title="Data retention">
        <p>
          Enquiry data is retained for up to 24 months from the date of contact, or for the
          duration of a client engagement plus 12 months, whichever is longer. You may request
          deletion at any time (see below).
        </p>
      </Section>

      <Section title="Your rights">
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent for communications at any time</li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href="mailto:veera@grovitt.com">veera@grovitt.com</a> with the subject line
          &ldquo;Data Request&rdquo;. We will respond within 30 days.
        </p>
      </Section>

      <Section title="Unsubscribe">
        <p>
          To stop receiving emails from us, use our{" "}
          <Link href="/unsubscribe">unsubscribe page</Link> or reply to any email with
          &ldquo;unsubscribe&rdquo; in the subject line.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this policy? Write to us at{" "}
          <a href="mailto:veera@grovitt.com">veera@grovitt.com</a> or{" "}
          <a href="mailto:hello@grovitt.com">hello@grovitt.com</a>.
        </p>
      </Section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40, borderTop: "1px solid var(--line)", paddingTop: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>{title}</h2>
      <div style={{ color: "var(--muted)", lineHeight: 1.7, display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </section>
  );
}

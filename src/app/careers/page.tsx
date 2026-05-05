import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Grovitt Studio. We're hiring thoughtful engineers, marketers, and strategists who want ownership, craft, and real impact.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers — Grovitt Studio",
    description:
      "Join Grovitt Studio. We're hiring thoughtful engineers, marketers, and strategists who want ownership, craft, and real impact.",
    url: "/careers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — Grovitt Studio",
    description:
      "Join Grovitt Studio. We're hiring thoughtful engineers, marketers, and strategists who want ownership, craft, and real impact.",
  },
};

const openRoles = [
  {
    id: "sr-frontend",
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    location: "London / Remote",
    type: "Full-time",
    desc: "Build performant, accessible UIs in Next.js and React for client products and internal tools. You care about Core Web Vitals as much as component APIs.",
  },
  {
    id: "growth-strategist",
    title: "Growth Strategist",
    dept: "Marketing",
    location: "London / Hybrid",
    type: "Full-time",
    desc: "Own full-funnel strategy for a portfolio of 4–6 clients. Comfortable with attribution modelling, creative briefs, and a spreadsheet at the same time.",
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    desc: "Node.js, PostgreSQL, and cloud infrastructure. You design APIs that are a pleasure to consume and lose sleep over N+1 queries and missing indexes.",
  },
  {
    id: "paid-media",
    title: "Paid Media Manager",
    dept: "Marketing",
    location: "London / Remote",
    type: "Full-time",
    desc: "Run paid social and search campaigns across a range of client verticals. You know the difference between a good ROAS and a sustainable CAC.",
  },
];

const perks = [
  { icon: "◎", title: "Remote-first", body: "Work from anywhere. Core overlap hours of 10am–4pm GMT. We care about output, not your timezone." },
  { icon: "⊕", title: "Real ownership", body: "Carry work from brief to delivery. No handoff-heavy silos. You'll be in the room when decisions are made." },
  { icon: "◫", title: "£2k learning budget", body: "Courses, conferences, and books — no approval process required below that threshold." },
  { icon: "⬡", title: "Transparent pay", body: "Salary bands are public internally. We benchmark against the 75th percentile of London market rates." },
  { icon: "◷", title: "Flexible hours", body: "Four-day week available after probation. We trust you to manage your time like the professional you are." },
  { icon: "◈", title: "EMI equity options", body: "Available from day one for all permanent roles. Your success and Grovitt's success are aligned." },
];

export default function CareersPage() {
  return (
    <AppWrapper>
      <Nav />
      <MegaMenu />
      <CustomCursor />
      <ScrollReveal />
      <main className="svc-page">

        {/* ── Hero ── */}
        <section className="svc-hero">
          <div className="svc-hero-glow" />
          <div className="wrap">
            <div className="svc-breadcrumb reveal">
              <Link href="/">Home</Link>
              <span>/</span>
              <span style={{ color: "var(--paper)" }}>Careers</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">
                Build things<br />
                that <em>matter</em>.
              </h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  We&apos;re a small team with high standards. If you want ownership,
                  craft, and work that ships — we might be a fit.
                </p>
                <div className="svc-hero-tags">
                  {["Remote-first", "4-day week option", "EMI equity", "Transparent pay"].map((t) => (
                    <span key={t} className="svc-tag">{t}</span>
                  ))}
                </div>
                <Link href="/contact" className="btn-magnetic">
                  Send an application <span className="arr">&#x2197;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Perks ── */}
        <section className="careers-perks">
          <div className="wrap">
            <div className="sec-num reveal"><span>(01) Why Grovitt</span></div>
            <div className="svc-approach-grid">
              <div className="svc-approach-intro reveal">
                <div className="sec-head">
                  <h2>What you<br /><span className="it">actually get</span>.</h2>
                </div>
                <p>Most studios talk about culture. We put structure behind it — policies, salaries, and working patterns that match the words.</p>
              </div>
              <div className="careers-perks-grid">
                {perks.map((p) => (
                  <div key={p.title} className="careers-perk reveal">
                    <div className="careers-perk-icon">{p.icon}</div>
                    <div className="careers-perk-title">{p.title}</div>
                    <div className="careers-perk-body">{p.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Open roles ── */}
        <section className="careers-roles">
          <div className="wrap">
            <div className="sec-num reveal"><span>(02) Open roles</span></div>
            <div className="svc-faq-grid">
              <div className="svc-faq-intro reveal">
                <div className="sec-head">
                  <h2>We&apos;re currently<br /><span className="it">hiring</span>.</h2>
                </div>
                <p>{openRoles.length} open positions across engineering and marketing.</p>
                <Link href="/contact" className="ic-cta" style={{ marginTop: 32, display: "inline-flex" }}>
                  Send speculative application &#x2192;
                </Link>
              </div>
              <div className="svc-faq-list">
                {openRoles.map((r) => (
                  <div key={r.id} className="careers-role-item reveal">
                    <div className="careers-role-header">
                      <div className="svc-faq-q">{r.title}</div>
                      <div className="careers-role-tags">
                        <span className="svc-tag">{r.dept}</span>
                        <span className="svc-tag">{r.location}</span>
                        <span className="svc-tag">{r.type}</span>
                      </div>
                    </div>
                    <div className="svc-faq-a">
                      <p>{r.desc}</p>
                    </div>
                    <Link href="/contact" className="ic-cta">Apply now &#x2192;</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="svc-cta">
          <div className="wrap">
            <h2 className="reveal">Don&apos;t see<br />your <em>role</em>?</h2>
            <p className="reveal reveal-d1">
              If you&apos;re exceptional at what you do and genuinely excited about
              working across marketing and engineering, send us a note.
            </p>
            <div className="svc-cta-btns reveal reveal-d2">
              <Link href="/contact" className="btn-magnetic">Send a speculative application <span className="arr">&#x2197;</span></Link>
              <Link href="/about" className="btn-outline">About the studio</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </AppWrapper>
  );
}

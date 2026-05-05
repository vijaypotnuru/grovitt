import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Two studios, one outcome. We combine growth marketing and software engineering to help ambitious companies scale without compromise.",
  keywords: [
    "about grovitt",
    "digital studio",
    "growth marketing studio",
    "software engineering studio",
    "brand and performance agency",
    "London digital agency",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Grovitt Studio",
    description:
      "Two studios, one outcome. We combine growth marketing and software engineering to help ambitious companies scale without compromise.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@grovittstudio",
    title: "About — Grovitt Studio",
    description:
      "Two studios, one outcome. We combine growth marketing and software engineering to help ambitious companies scale without compromise.",
  },
};

const values = [
  {
    num: "01",
    title: "Outcomes over output",
    body: "Reports, meetings, and deliverables are means to an end. The end is measurable business impact. We hold ourselves accountable to that, not to the volume of work produced.",
  },
  {
    num: "02",
    title: "Honest scope, always",
    body: "We don't write proposals designed to win and renegotiate later. If something is uncertain, we say so. If a budget won't support the goal, we say that too — before the contract is signed.",
  },
  {
    num: "03",
    title: "Built to be owned",
    body: "Every campaign, codebase, and strategy we deliver should be transferable. You shouldn't need us to keep the lights on. Dependency is a failure mode, not a business model.",
  },
  {
    num: "04",
    title: "Craft at every level",
    body: "The copy on a paid ad. The variable names in an API. The spacing in a dashboard chart. Details accumulate into perception, and perception drives conversion.",
  },
];

const milestones = [
  { year: "2013", label: "Founded in London as a performance marketing consultancy" },
  { year: "2016", label: "Opened software studio to serve clients requesting custom tooling" },
  { year: "2019", label: "Expanded to New York — team grew to 24 full-time specialists" },
  { year: "2022", label: "Merged marketing and engineering into a single integrated studio" },
  { year: "2024", label: "Crossed 180 completed client engagements across 14 countries" },
];

const team = [
  { name: "Arjun Mehra", role: "Co-founder & CEO", dept: "Studio", cls: "m1" },
  { name: "Sofia Laurent", role: "Co-founder & CTO", dept: "Engineering", cls: "m2" },
  { name: "Marcus Reid", role: "Head of Growth", dept: "Marketing", cls: "m3" },
  { name: "Yuki Tanaka", role: "Head of Design", dept: "Design", cls: "m4" },
  { name: "Elena Popescu", role: "Head of Engineering", dept: "Engineering", cls: "m2" },
  { name: "James Okafor", role: "Strategy Director", dept: "Marketing", cls: "m1" },
];

export default function AboutPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);

  return (
    <AppWrapper>
      <Nav />
      <MegaMenu />
      <CustomCursor />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <main className="svc-page">

        {/* ── Hero ── */}
        <section className="svc-hero">
          <div className="svc-hero-glow" />
          <div className="wrap">
            <div className="svc-breadcrumb reveal">
              <Link href="/">Home</Link>
              <span>/</span>
              <span style={{ color: "var(--paper)" }}>About</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">
                Two<br />
                <em>studios</em>.<br />
                One outcome.
              </h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  Grovitt was built on a simple thesis: growth marketing and software
                  engineering are stronger together than apart. Since 2013 we&apos;ve
                  helped ambitious companies prove it.
                </p>
                <div className="svc-hero-tags">
                  {["Founded 2013", "London & New York", "180+ Clients", "14 Countries"].map((t) => (
                    <span key={t} className="svc-tag">{t}</span>
                  ))}
                </div>
                <Link href="/contact" className="btn-magnetic">
                  Start a conversation <span className="arr">&#x2197;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Story ── */}
        <section className="about-story">
          <div className="wrap">
            <div className="sec-num reveal"><span>(01) Our story</span></div>
            <div className="about-story-grid">
              <div className="sec-head reveal">
                <h2>Built from<br /><span className="it">frustration</span>.</h2>
              </div>
              <div className="about-prose reveal reveal-d1">
                <p>
                  We started as a performance marketing consultancy in 2013, frustrated by a
                  consistent pattern: great campaigns undermined by weak product experiences.
                  Traffic that converted nowhere. Landing pages that loaded in four seconds.
                  Dashboards that gave clients no visibility into what was actually working.
                </p>
                <p>
                  Rather than pass the problem to a third-party dev shop and watch the handoff
                  fail, we built an engineering capability in-house. By 2016 we were delivering
                  software alongside marketing — and the results for clients improved measurably.
                </p>
                <p>
                  In 2022 we formalised what had been true in practice for years: Grovitt is
                  one studio, two disciplines, a single point of accountability. No
                  finger-pointing between agencies. No translation layer between strategists
                  and engineers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Milestones ── */}
        <section className="about-milestones">
          <div className="wrap">
            <div className="sec-num reveal"><span>(02) Timeline</span></div>
            <div className="about-mile-grid">
              {milestones.map((m, i) => (
                <div key={m.year} className={`about-mile-item reveal${i % 2 === 1 ? " reveal-d1" : ""}`}>
                  <div className="about-mile-year">{m.year}</div>
                  <div className="about-mile-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="about-values">
          <div className="wrap">
            <div className="sec-num reveal"><span>(03) How we operate</span></div>
            <div className="about-val-head">
              <div className="sec-head reveal">
                <h2>Principles we<br /><span className="it">don&apos;t negotiate</span>.</h2>
              </div>
            </div>
            <div className="about-val-grid">
              {values.map((v) => (
                <div key={v.num} className="about-val-item reveal">
                  <div className="about-val-num">{v.num}</div>
                  <div className="about-val-title">{v.title}</div>
                  <div className="about-val-body">{v.body}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="about-team">
          <div className="wrap">
            <div className="sec-num reveal"><span>(04) The team</span></div>
            <div className="sec-head reveal">
              <h2>People who<br /><span className="it">own the outcome</span>.</h2>
            </div>
            <div className="about-team-grid">
              {team.map((t) => (
                <div key={t.name} className={`member ${t.cls} reveal`}>
                  <div className="ph">
                    <span className="av-big">{t.name[0]}</span>
                  </div>
                  <div className="member-meta">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="svc-cta">
          <div className="wrap">
            <h2 className="reveal">Ready to work<br />with a studio that <em>gives a damn</em>?</h2>
            <p className="reveal reveal-d1">
              We take on a limited number of new clients each quarter. Tell us what you&apos;re building.
            </p>
            <div className="svc-cta-btns reveal reveal-d2">
              <Link href="/contact" className="btn-magnetic">Start a conversation <span className="arr">&#x2197;</span></Link>
              <Link href="/work" className="btn-outline">See our work</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </AppWrapper>
  );
}

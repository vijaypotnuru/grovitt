import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Grovitt Studio — marketing campaigns, web platforms, and software products built for ambitious companies.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work — Grovitt Studio",
    description:
      "Case studies from Grovitt Studio — marketing campaigns, web platforms, and software products built for ambitious companies.",
    url: "/work",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Work — Grovitt Studio",
    description:
      "Case studies from Grovitt Studio — marketing campaigns, web platforms, and software products built for ambitious companies.",
  },
};

const cases = [
  {
    slug: "lumiere",
    tag: "Performance Marketing · SaaS",
    title: "Lumière scaled to $1.2M MRR in 9 months",
    result: "+$1.2M",
    label: "MRR growth",
    cls: "wp-1",
  },
  {
    slug: "vantage",
    tag: "Web Development · FinTech",
    title: "Vantage investor portal rebuilt for scale",
    result: "98",
    label: "Lighthouse score",
    cls: "wp-2",
  },
  {
    slug: "tropic",
    tag: "SEO & Content · eCommerce",
    title: "Tropic grew organic revenue 340% in 12 months",
    result: "340%",
    label: "Organic revenue",
    cls: "wp-4",
  },
  {
    slug: "fieldwork",
    tag: "Mobile App · AgriTech",
    title: "Fieldwork — crop monitoring app for 12,000 farmers",
    result: "12k",
    label: "Active users",
    cls: "wp-1",
  },
  {
    slug: "corex",
    tag: "Cloud & DevOps · HealthTech",
    title: "CoreX — from deployment chaos to zero-downtime CI/CD",
    result: "99.97%",
    label: "Uptime post-migration",
    cls: "wp-2",
  },
  {
    slug: "beacon",
    tag: "Brand & Strategy · B2B",
    title: "Beacon repositioned for enterprise in 6 weeks",
    result: "3×",
    label: "Avg deal size increase",
    cls: "wp-4",
  },
];

export default function WorkPage() {
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
              <span style={{ color: "var(--paper)" }}>Work</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">
                Results<br />
                <em>worth</em><br />
                showing.
              </h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  Selected case studies from campaigns, platforms, and products
                  we&apos;ve built with ambitious clients across marketing and engineering.
                </p>
                <div className="svc-hero-tags">
                  {["180+ Projects", "14 Countries", "£240M+ Influenced", "93% Retained"].map((t) => (
                    <span key={t} className="svc-tag">{t}</span>
                  ))}
                </div>
                <Link href="/contact" className="btn-magnetic">
                  Start a project <span className="arr">&#x2197;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <div className="stats-row">
          {[
            { n: "180", suf: "+", label: "Completed engagements across all disciplines" },
            { n: "14", suf: "", label: "Countries where clients operate and scale" },
            { n: "93", suf: "%", label: "Client retention rate year-over-year" },
            { n: "£240", suf: "M+", label: "Revenue directly influenced for clients" },
          ].map((s) => (
            <div key={s.label} className="stat">
              <div className="label">{s.label}</div>
              <div className="n">{s.n}<span className="suf">{s.suf}</span></div>
            </div>
          ))}
        </div>

        {/* ── Case studies ── */}
        <section className="work-cases">
          <div className="wrap">
            <div className="sec-num reveal"><span>(Case studies)</span></div>
            <div className="sec-head reveal">
              <h2>Every number<br /><span className="it">has a story</span>.</h2>
            </div>
            <div className="work-list" style={{ marginTop: 80 }}>
              {cases.map((c, i) => (
                <div key={c.slug} className={`work-row reveal${i % 2 === 1 ? " reveal-d1" : ""}`}>
                  <div className="wn">0{i + 1}</div>
                  <div>
                    <div className="wcat">{c.tag}</div>
                  </div>
                  <h3>{c.title}</h3>
                  <div className="stat-mini">
                    {c.result}
                    <small>{c.label}</small>
                  </div>
                  <div className="year">&#x2197;</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="svc-cta">
          <div className="wrap">
            <h2 className="reveal">Want results<br />like <em>these</em>?</h2>
            <p className="reveal reveal-d1">
              We&apos;re selective about the clients we take on — so we can be exceptional for the ones we do.
            </p>
            <div className="svc-cta-btns reveal reveal-d2">
              <Link href="/contact" className="btn-magnetic">Start a project <span className="arr">&#x2197;</span></Link>
              <Link href="/about" className="btn-outline">About the studio</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </AppWrapper>
  );
}

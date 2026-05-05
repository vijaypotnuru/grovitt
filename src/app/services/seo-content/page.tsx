import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SEO & Content — Grovitt Studio",
  description:
    "Technical SEO, topical authority, and editorial content that ranks, converts, and compounds over time. Authority that pays for itself.",
};

const problems = [
  {
    tag: "Pain 01",
    title: "You&apos;re ranking but not converting",
    body: "Traffic is up. Organic sessions are a nice slide in the board deck. But pipeline contribution is flat. The content is attracting the wrong intent at the wrong stage of the funnel.",
    fix: "We build content around commercial intent, not just search volume — and set up attribution so you can see which articles contribute to pipeline.",
  },
  {
    tag: "Pain 02",
    title: "Technical debt is quietly throttling growth",
    body: "Crawl errors, duplicate content, poor Core Web Vitals, and missing structured data are eating your potential before a single article goes live. Most content teams don't see this.",
    fix: "Technical SEO is always our first deliverable. We fix the foundation before producing a word of content.",
  },
  {
    tag: "Pain 03",
    title: "Content feels like a cost centre you can't justify",
    body: "When leadership can't tie content spend to revenue, it's the first budget cut. That happens because the attribution model was never set up — not because the content doesn't work.",
    fix: "We build the reporting infrastructure alongside the content programme, so the value is visible and defensible from month one.",
  },
];

const deliverables = [
  {
    title: "Technical SEO",
    desc: "Core Web Vitals, crawlability, indexation, structured data, and site architecture — the foundation everything else is built on.",
  },
  {
    title: "Keyword & Topic Research",
    desc: "Cluster-first architecture built to own entire verticals, not just rank for a single keyword and hope.",
  },
  {
    title: "Content Strategy",
    desc: "Pillar-and-cluster editorial calendars, topical authority maps, and content audits that identify what to keep, improve, or kill.",
  },
  {
    title: "Editorial Production",
    desc: "Long-form, short-form, thought leadership, and product SEO content written by people who understand the topic — not generalists.",
  },
  {
    title: "Programmatic Content",
    desc: "Template-driven pages at scale for geographic, product, or use-case variants — structured data, automated, indexed correctly.",
  },
  {
    title: "Link Building",
    desc: "HARO pitching, digital PR, and resource-page outreach — links that move domain authority and don't get you penalised.",
  },
];

const results = [
  { num: "62%", label: "Average organic traffic lift in 6 months" },
  { num: "3.2×", label: "Average increase in organic pipeline contribution" },
  { num: "840+", label: "Ranking pages built and maintained for clients" },
];

const steps = [
  {
    title: "Technical Audit",
    desc: "Crawl the full site. Identify speed issues, crawl errors, duplicate content, indexation gaps, and structural problems holding back potential.",
  },
  {
    title: "Opportunity Mapping",
    desc: "Keyword clustering, competitor gap analysis, and topical authority scoring to prioritise where you can win — and how quickly.",
  },
  {
    title: "Content Plan",
    desc: "A 90-day editorial calendar matched to business goals, search demand, and your team's actual production capacity.",
  },
  {
    title: "Production & Publishing",
    desc: "Writing, editing, internal linking, on-page optimisation, and CMS publishing — one workflow, no handoff chaos.",
  },
  {
    title: "Authority Building",
    desc: "Ongoing link acquisition, brand mention tracking, and authority signals that compound month over month.",
  },
];

const why = [
  {
    icon: "◈",
    title: "Strategy before a single word is written",
    body: "We don't produce content until the topical map, technical foundation, and attribution model are agreed. Production without strategy is expensive noise — we refuse to generate it.",
  },
  {
    icon: "✦",
    title: "Domain expertise in the room",
    body: "Our content team includes people with genuine subject-matter knowledge, not generalists who research for 20 minutes and produce 2,000 words. It shows in the ranking signals.",
  },
  {
    icon: "⊞",
    title: "Attribution that's defensible",
    body: "UTM hygiene, GA4 configuration, and conversion tracking are set up so content contribution to pipeline is visible, measurable, and hard to dismiss at budget reviews.",
  },
];

const faqs = [
  {
    q: "How long does SEO take to show results?",
    a: "Technical fixes can show measurable improvement in 4–8 weeks. Content authority typically builds over 6–12 months — this is an investment channel, not a paid one. We set realistic milestones, not vanity promises, from the start.",
  },
  {
    q: "Do you write the content or just provide the strategy?",
    a: "Both. We can own the full production cycle — strategy, brief, writing, editing, and publishing — or operate as a strategic layer above your in-house team. Most clients start with the former and transition over time.",
  },
  {
    q: "Can you audit our existing content library?",
    a: "Yes — and we usually recommend this as the first engagement. A content audit identifies what to improve, what to consolidate, and what to remove. It often unlocks quick wins before any new content is produced.",
  },
  {
    q: "Do you handle link building?",
    a: "Yes. Outreach, HARO pitching, digital PR campaigns, and resource-page link reclamation. We don't buy links or use link schemes — the risks aren't worth it and the results don't last.",
  },
];

export default function SeoContentPage() {
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
              <span>Services</span>
              <span>/</span>
              <span style={{ color: "var(--paper)" }}>SEO &amp; Content</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">
                SEO &amp;
                <br />
                <em>Content</em>
              </h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  Authority that compounds. Technical SEO, programmatic content,
                  and editorial that ranks, converts, and pays for itself.
                </p>
                <div className="svc-hero-tags">
                  {["Technical SEO", "Editorial", "Programmatic", "Link Building", "CWV", "Schema"].map((t) => (
                    <span key={t} className="svc-tag">{t}</span>
                  ))}
                </div>
                <Link href="/#contact" className="btn-magnetic">
                  Start a project <span className="arr">&#x2197;</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Problems ── */}
        <section className="svc-problems">
          <div className="wrap">
            <div className="sec-num reveal"><span>(01) The problem</span></div>
            <div className="sec-head reveal">
              <h2>Sound <span className="it">familiar</span>?</h2>
            </div>
            <div className="svc-problem-grid">
              {problems.map((p) => (
                <div key={p.tag} className="svc-problem-item reveal">
                  <span className="svc-problem-tag">{p.tag}</span>
                  <div className="svc-problem-title" dangerouslySetInnerHTML={{ __html: p.title }} />
                  <div className="svc-problem-body">{p.body}</div>
                  <div className="svc-problem-fix"><strong>Our fix — </strong>{p.fix}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section className="svc-deliverables">
          <div className="wrap">
            <div className="sec-num reveal"><span>(02) What we deliver</span></div>
            <div className="sec-head reveal">
              <h2>Organic that<br /><span className="it">compounds</span>.</h2>
            </div>
            <div className="svc-del-grid">
              {deliverables.map((d, i) => (
                <div key={d.title} className="svc-del-item reveal">
                  <div className="svc-del-num">0{i + 1}</div>
                  <div className="svc-del-title">{d.title}</div>
                  <div className="svc-del-desc">{d.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Results ── */}
        <section className="svc-results">
          <div className="wrap">
            <div className="svc-results-row">
              {results.map((r) => (
                <div key={r.num} className="svc-result-item">
                  <div className="svc-result-num">{r.num}</div>
                  <div className="svc-result-label">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approach ── */}
        <section className="svc-approach">
          <div className="wrap">
            <div className="sec-num reveal"><span>(03) How we work</span></div>
            <div className="svc-approach-grid">
              <div className="svc-approach-intro reveal">
                <div className="sec-head">
                  <h2>Built for<br /><span className="it">the long game</span>.</h2>
                </div>
                <p>SEO is the only channel where work you do today pays dividends years from now. We build the foundation right — so the compounding actually happens.</p>
                <div className="svc-stat">
                  <div className="svc-stat-num">62%</div>
                  <div className="svc-stat-label">Average organic traffic lift in 6 months</div>
                </div>
              </div>
              <div className="svc-steps">
                {steps.map((s, i) => (
                  <div key={s.title} className="svc-step reveal">
                    <div className="svc-step-num">0{i + 1}</div>
                    <div>
                      <div className="svc-step-title">{s.title}</div>
                      <div className="svc-step-desc">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Why ── */}
        <section className="svc-why">
          <div className="wrap">
            <div className="sec-num reveal"><span>(04) Why Grovitt</span></div>
            <div className="svc-why-grid">
              <div className="svc-why-intro reveal">
                <div className="sec-head">
                  <h2>Different<br />by <span className="it">design</span>.</h2>
                </div>
                <p>Most SEO agencies produce content and hope the rankings follow. We engineer authority — systematically.</p>
              </div>
              <div className="svc-why-items">
                {why.map((w) => (
                  <div key={w.title} className="svc-why-item reveal">
                    <div className="svc-why-icon">{w.icon}</div>
                    <div>
                      <div className="svc-why-title">{w.title}</div>
                      <div className="svc-why-body">{w.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="svc-faq">
          <div className="wrap">
            <div className="sec-num reveal"><span>(05) Common questions</span></div>
            <div className="svc-faq-grid">
              <div className="svc-faq-intro reveal">
                <div className="sec-head">
                  <h2>Questions<br /><span className="it">answered</span>.</h2>
                </div>
                <p>Not finding what you need? We&apos;re direct about what fits and what doesn&apos;t — no sales spin.</p>
                <Link href="/#contact" className="ic-cta">Ask us anything &#x2192;</Link>
              </div>
              <div className="svc-faq-list">
                {faqs.map((f) => (
                  <div key={f.q} className="svc-faq-item reveal">
                    <div className="svc-faq-q">{f.q}</div>
                    <div className="svc-faq-a">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="svc-cta">
          <div className="wrap">
            <h2 className="reveal">Ready to own<br />your <em>search presence</em>?</h2>
            <p className="reveal reveal-d1">Tell us your current organic footprint. We&apos;ll show you what&apos;s reachable and how long it takes to get there.</p>
            <div className="svc-cta-btns reveal reveal-d2">
              <Link href="/#contact" className="btn-magnetic">Start a project <span className="arr">&#x2197;</span></Link>
              <Link href="/#work" className="btn-outline">See our work</Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </AppWrapper>
  );
}

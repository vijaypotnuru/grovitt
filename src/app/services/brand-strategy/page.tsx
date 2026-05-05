import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Brand & Strategy",
  description:
    "Positioning, identity, and message architecture that makes everything downstream cheaper to run. Brand strategy for ambitious teams.",
  alternates: { canonical: "/services/brand-strategy" },
  openGraph: {
    title: "Brand & Strategy — Grovitt Studio",
    description:
      "Positioning, identity, and message architecture that makes everything downstream cheaper to run. Brand strategy for ambitious teams.",
    url: "/services/brand-strategy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand & Strategy — Grovitt Studio",
    description:
      "Positioning, identity, and message architecture that makes everything downstream cheaper to run. Brand strategy for ambitious teams.",
  },
};

const problems = [
  {
    tag: "Pain 01",
    title: "You're confusing people, not converting them",
    body: "When a prospect visits your site and can't explain what you do in one sentence, you have a positioning problem. Price comparisons and feature lists are symptoms — unclear differentiation is the disease.",
    fix: "We define the territory you own and the message that makes it legible — in one sentence that holds up under pressure.",
  },
  {
    tag: "Pain 02",
    title: "Your brand can't scale with you",
    body: "A logo and a style guide aren't a brand system. As you hire, partner, and grow, visual and verbal consistency breaks down without proper architecture, governance, and tooling.",
    fix: "We build systems, not deliverables — Figma component libraries, living Notion docs, and governance rules your team can actually follow.",
  },
  {
    tag: "Pain 03",
    title: "You're competing on features, not category",
    body: "Feature comparisons are a race to the bottom. The companies that win their categories don't have better features — they have a clearer narrative that makes the comparison irrelevant.",
    fix: "We help you define and name the category you compete in, then build the messaging that makes you the obvious leader of it.",
  },
];

const deliverables = [
  {
    title: "Brand Audit",
    desc: "Competitive landscape review, audience perception research, and messaging gap analysis — where you stand vs. where you could.",
  },
  {
    title: "Positioning",
    desc: "The single sentence that makes everything downstream cheaper to run. Distinct, defensible, and true to what you actually deliver.",
  },
  {
    title: "Messaging Architecture",
    desc: "Tone, key messages, proof points, and objection handling for each audience segment and channel — a verbal system, not a tagline.",
  },
  {
    title: "Visual Identity",
    desc: "Logo, colour, typography, motion, and iconography — a cohesive system, not a logo file. Built to scale across every touchpoint.",
  },
  {
    title: "Brand Guidelines",
    desc: "Living rules that keep the brand consistent as you hire, partner, and grow. Delivered in Figma, PDF, and Notion — all three.",
  },
  {
    title: "Go-to-Market Strategy",
    desc: "Launch strategy, channel sequencing, and messaging playbooks for GTM moments — new products, repositioning, or market entry.",
  },
];

const results = [
  { num: "4–8w", label: "From kick-off to delivered brand guidelines" },
  { num: "38%", label: "Average uplift in brand awareness metrics post-refresh" },
  { num: "17", label: "Brand systems built for Series A–C companies" },
];

const steps = [
  {
    title: "Discovery",
    desc: "Stakeholder interviews, competitor audit, customer research, and category mapping. We listen before we prescribe — always.",
  },
  {
    title: "Positioning Workshop",
    desc: "A collaborative session — async or in-person — to define your distinct territory, core message, and brand personality with the key decision-makers in the room.",
  },
  {
    title: "Identity Development",
    desc: "Visual and verbal system creation: logo, type, colour, tone of voice, and sample executions across key formats — each iteration reviewed and refined.",
  },
  {
    title: "Guidelines & Handoff",
    desc: "A living brand document your team can actually use — component library in Figma, usage rules, and do/don't examples that make the right choice the easy one.",
  },
  {
    title: "Activation",
    desc: "GTM playbook, launch assets, and a prioritised roadmap of brand expressions to build authority in market from week one.",
  },
];

const why = [
  {
    icon: "◉",
    title: "We listen before we prescribe",
    body: "Every engagement starts with discovery — stakeholder interviews, customer research, competitor analysis. We don't arrive with a template waiting to be filled in with your name.",
  },
  {
    icon: "▲",
    title: "Verbal and visual under one roof",
    body: "Positioning, messaging, and visual identity are designed together by a team that's in the same room. No strategy handed to a designer who wasn't in the positioning workshop.",
  },
  {
    icon: "⬡",
    title: "Built for handoff, not dependency",
    body: "We build brand docs your team can use without us. Figma libraries, Notion wikis, usage examples, and governance rules — so the brand stays consistent as you grow and hire.",
  },
];

const faqs = [
  {
    q: "What's the difference between a brand refresh and a full rebrand?",
    a: "A refresh refines and modernises an existing identity — evolving the logo, updating the palette, sharpening the tone. A rebrand typically starts from positioning and may include a new name, visual system, and messaging architecture. We scope the right approach after an initial audit.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes. Brand work at seed or Series A often pays the highest long-term dividend — it shapes hiring, fundraising narratives, and GTM before habits and inconsistencies form. We have scaled engagements designed for earlier-stage budgets.",
  },
  {
    q: "Can we get just the visual identity without going through strategy?",
    a: "We can, but we rarely recommend it. Visual identity without a positioning foundation often needs to be revisited when the positioning is eventually clarified — which usually costs more than doing it right the first time.",
  },
  {
    q: "How do we maintain brand consistency after delivery?",
    a: "We build governance into the guidelines and offer quarterly brand reviews. We also train your team on the system — brand management shouldn't require us to be on a retainer forever.",
  },
];

export default function BrandStrategyPage() {
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
              <span style={{ color: "var(--paper)" }}>Brand &amp; Strategy</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">Brand &amp;<br /><em>Strategy</em></h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  Positioning and identity that makes everything downstream cheaper
                  to run — the message architecture that earns attention.
                </p>
                <div className="svc-hero-tags">
                  {["Positioning", "Identity", "Messaging", "GTM", "Visual System", "Naming"].map((t) => (
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
            <div className="sec-head reveal"><h2>Sound <span className="it">familiar</span>?</h2></div>
            <div className="svc-problem-grid">
              {problems.map((p) => (
                <div key={p.tag} className="svc-problem-item reveal">
                  <span className="svc-problem-tag">{p.tag}</span>
                  <div className="svc-problem-title">{p.title}</div>
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
              <h2>Clarity that<br /><span className="it">pays forward</span>.</h2>
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
                  <h2>Listen first,<br /><span className="it">prescribe second</span>.</h2>
                </div>
                <p>Good brand work is mostly listening. We don&apos;t arrive with answers — we arrive with the right questions and the rigour to synthesise what we hear into something useful.</p>
                <div className="svc-stat">
                  <div className="svc-stat-num">4–8w</div>
                  <div className="svc-stat-label">Kick-off to brand guidelines</div>
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
                <p>Brand agencies are everywhere. The ones that produce work that actually moves numbers are rarer. Here&apos;s what separates how we do it.</p>
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
                <p>Not finding what you need? We&apos;re direct about what fits — no vague proposals, no scope surprises.</p>
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
            <h2 className="reveal">Ready to find<br />your <em>distinct territory</em>?</h2>
            <p className="reveal reveal-d1">Tell us where you are and where you want to be. We&apos;ll map the gap and build the brand that closes it.</p>
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

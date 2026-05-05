import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Performance Marketing — Grovitt Studio",
  description:
    "Search, paid social, and programmatic advertising orchestrated full-funnel and measured against blended CAC. Google, Meta, LinkedIn, TikTok, and more.",
};

const problems = [
  {
    tag: "Pain 01",
    title: "Your CAC is climbing and nobody can explain why",
    body: "Spend is up, the reports are green, but the CFO's dashboard tells a different story. Attribution breaks in ways that are hard to diagnose from inside the account.",
    fix: "We map every touchpoint to revenue — not just the last click — and rebuild attribution from the ground up.",
  },
  {
    tag: "Pain 02",
    title: "Agencies optimise for their metrics, not yours",
    body: "Click-through rates look excellent in monthly decks. Blended CAC and payback period are harder to fake — so most agencies don't report them.",
    fix: "We build every campaign around the numbers that matter to your CFO, not the ones that look good in a deck.",
  },
  {
    tag: "Pain 03",
    title: "Creative is the bottleneck nobody's fixing",
    body: "Targeting is a commodity. The message is the lever. When creative is produced separately from the media strategy, performance suffers — and it's always the other team's fault.",
    fix: "We own creative strategy alongside media buying. One team, one brief, one accountability chain.",
  },
];

const deliverables = [
  {
    title: "Paid Search",
    desc: "Google & Bing campaigns structured around intent layers, negative sculpting, and blended CAC — not last-click fluff.",
  },
  {
    title: "Paid Social",
    desc: "Meta, LinkedIn, TikTok, Pinterest. Funnelled creative matched to audience intent and sequenced through awareness to action.",
  },
  {
    title: "Programmatic Display",
    desc: "Real-time bidding, audience extension, and retargeting at scale across the open web and connected TV.",
  },
  {
    title: "Retargeting & CRM",
    desc: "First-party data activation, CRM audience matching, and suppression lists that protect margin while lifting LTV.",
  },
  {
    title: "Attribution & Reporting",
    desc: "Multi-touch models, incrementality testing, and unified dashboards so you know what's actually working.",
  },
  {
    title: "CRO & Landing Pages",
    desc: "A/B tests, heatmap analysis, and offer sequencing that converts the traffic you're already paying for.",
  },
];

const results = [
  { num: "3.8×", label: "Average ROAS improvement in year one" },
  { num: "62%", label: "Average CAC reduction across 12-month engagements" },
  { num: "14 days", label: "Average time from audit to first live campaign" },
];

const steps = [
  {
    title: "Audit & Baseline",
    desc: "We crawl your accounts, benchmark competitors, and map audience data to identify the highest-leverage gaps before a single pound of budget moves.",
  },
  {
    title: "Channel Strategy",
    desc: "A written media plan that maps spend to the highest-leverage moments in your funnel — with forecasted CPAs, volumes, and risk.",
  },
  {
    title: "Creative & Copy",
    desc: "Ad variants built around jobs-to-be-done messaging, not gut feel. We test headlines, offers, and formats systematically.",
  },
  {
    title: "Launch & Optimise",
    desc: "Deploy, learn, refine. Bid adjustments, audience pruning, and creative rotation happen weekly — not quarterly.",
  },
  {
    title: "Report & Scale",
    desc: "Blended CAC dashboards, incrementality signals, and board-ready decks. You always know why a number moved.",
  },
];

const why = [
  {
    icon: "⟳",
    title: "Full-funnel ownership",
    body: "We manage creative, copy, media buying, and landing pages. There's no handoff gap where performance falls through — one team owns the entire chain from impression to conversion.",
  },
  {
    icon: "◎",
    title: "CAC-first modelling",
    body: "Before we touch a campaign, we model what a customer is worth to you. Every channel recommendation, bid strategy, and creative decision is measured against that number.",
  },
  {
    icon: "▦",
    title: "Radical transparency",
    body: "Live dashboards updated daily, weekly calls, and monthly incrementality tests. You never wait until end of month to find out whether something's working.",
  },
];

const faqs = [
  {
    q: "What's the minimum ad spend you work with?",
    a: "We work with brands spending £10k/month and up on paid media. Below that threshold, the economics of proper strategy, creative, and management rarely make sense for either party.",
  },
  {
    q: "How long before we see results?",
    a: "Paid search can show meaningful movement in 2–4 weeks. Paid social typically takes 6–10 weeks as algorithms train on your audience data and creative signals. We set realistic expectations — not promises — at the start of every engagement.",
  },
  {
    q: "Do you charge a percentage of ad spend or a flat retainer?",
    a: "A monthly retainer that covers strategy, creative, and media management. We don't charge a percentage of spend — that model directly incentivises the wrong behaviour (spending more, not spending better).",
  },
  {
    q: "Can you work alongside our existing agency or in-house team?",
    a: "Yes. We often start with an account audit and can operate as a specialist layer alongside a generalist agency or support an in-house team that needs senior performance expertise.",
  },
];

export default function PerformanceMarketingPage() {
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
              <span style={{ color: "var(--paper)" }}>Performance Marketing</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">
                Performance
                <br />
                <em>Marketing</em>
              </h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  Search, paid social, and programmatic — orchestrated full-funnel
                  and measured against blended CAC, not vanity clicks.
                </p>
                <div className="svc-hero-tags">
                  {["Google Ads", "Meta Ads", "LinkedIn", "TikTok", "Programmatic", "Attribution"].map((t) => (
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
            <div className="sec-num reveal">
              <span>(01) The problem</span>
            </div>
            <div className="sec-head reveal">
              <h2>
                Sound <span className="it">familiar</span>?
              </h2>
            </div>
            <div className="svc-problem-grid">
              {problems.map((p) => (
                <div key={p.tag} className="svc-problem-item reveal">
                  <span className="svc-problem-tag">{p.tag}</span>
                  <div className="svc-problem-title">{p.title}</div>
                  <div className="svc-problem-body">{p.body}</div>
                  <div className="svc-problem-fix">
                    <strong>Our fix — </strong>{p.fix}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Deliverables ── */}
        <section className="svc-deliverables">
          <div className="wrap">
            <div className="sec-num reveal">
              <span>(02) What we deliver</span>
            </div>
            <div className="sec-head reveal">
              <h2>
                Every channel.
                <br />
                One <span className="it">outcome</span>.
              </h2>
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

        {/* ── Results strip ── */}
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
            <div className="sec-num reveal">
              <span>(03) How we work</span>
            </div>
            <div className="svc-approach-grid">
              <div className="svc-approach-intro reveal">
                <div className="sec-head">
                  <h2>
                    Rigour over
                    <br />
                    <span className="it">ritual</span>.
                  </h2>
                </div>
                <p>
                  Most agencies optimise for the appearance of activity. We
                  optimise for outcomes. Every step ties to a number you care about.
                </p>
                <div className="svc-stat">
                  <div className="svc-stat-num">3.8×</div>
                  <div className="svc-stat-label">Average ROAS improvement in year one</div>
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

        {/* ── Why Grovitt ── */}
        <section className="svc-why">
          <div className="wrap">
            <div className="sec-num reveal">
              <span>(04) Why Grovitt</span>
            </div>
            <div className="svc-why-grid">
              <div className="svc-why-intro reveal">
                <div className="sec-head">
                  <h2>
                    Different
                    <br />
                    by <span className="it">design</span>.
                  </h2>
                </div>
                <p>
                  Performance marketing is crowded with agencies that look identical.
                  Here&apos;s what actually separates the work.
                </p>
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
            <div className="sec-num reveal">
              <span>(05) Common questions</span>
            </div>
            <div className="svc-faq-grid">
              <div className="svc-faq-intro reveal">
                <div className="sec-head">
                  <h2>
                    Questions
                    <br />
                    <span className="it">answered</span>.
                  </h2>
                </div>
                <p>
                  Not finding what you need? Reach out directly — we&apos;re
                  straightforward about what fits and what doesn&apos;t.
                </p>
                <Link href="/#contact" className="ic-cta">
                  Ask us anything &#x2192;
                </Link>
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
            <h2 className="reveal">
              Ready to make
              <br />
              your spend <em>work</em>?
            </h2>
            <p className="reveal reveal-d1">
              Tell us your current CAC and where you want it. We&apos;ll build a
              plan around the gap.
            </p>
            <div className="svc-cta-btns reveal reveal-d2">
              <Link href="/#contact" className="btn-magnetic">
                Start a project <span className="arr">&#x2197;</span>
              </Link>
              <Link href="/#work" className="btn-outline">
                See our work
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </AppWrapper>
  );
}

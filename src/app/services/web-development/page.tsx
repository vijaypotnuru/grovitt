import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Web Development",
  description:
    "Marketing sites, dashboards, and full web platforms. Modern stacks, careful architecture, and code your team can actually own.",
  alternates: { canonical: "/services/web-development" },
  openGraph: {
    title: "Web Development — Grovitt Studio",
    description:
      "Marketing sites, dashboards, and full web platforms. Modern stacks, careful architecture, and code your team can actually own.",
    url: "/services/web-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development — Grovitt Studio",
    description:
      "Marketing sites, dashboards, and full web platforms. Modern stacks, careful architecture, and code your team can actually own.",
  },
};

const problems = [
  {
    tag: "Pain 01",
    title: "Your site doesn't reflect the quality of what you sell",
    body: "A slow, generic site signals a slow, generic company — even if the product is exceptional. Prospects make judgments in under a second. Most websites fail that test.",
    fix: "We build the web presence your product deserves — performant, distinctive, and designed to convert the traffic you're paying to acquire.",
  },
  {
    tag: "Pain 02",
    title: "The tech debt is slowing everything down",
    body: "Legacy stacks, tangled codebases, and missing documentation make every new feature a negotiation. Deploys get scary. Engineers dread touching certain files. Velocity drops.",
    fix: "We build to be owned — tested, documented, and structured so your team can move fast without fear of breaking things.",
  },
  {
    tag: "Pain 03",
    title: "You can't update the site without the agency",
    body: "CMS integrations that require a developer for every text change are a design failure. If your marketing team is blocked by a ticket queue, the integration wasn't done properly.",
    fix: "We build editorial workflows that give your marketing team genuine independence — while keeping structural changes gated appropriately.",
  },
];

const deliverables = [
  {
    title: "Marketing Sites",
    desc: "Fast, conversion-optimised sites in Next.js — designed to perform on Core Web Vitals, rank organically, and convert the traffic you're paying to acquire.",
  },
  {
    title: "Web Applications",
    desc: "Full-stack SaaS dashboards, customer portals, and admin tools — built with real architecture, tested, and ready to scale.",
  },
  {
    title: "CMS Integration",
    desc: "Sanity, Contentful, Payload — editorial workflows that give your marketing team independence without sacrificing structural control.",
  },
  {
    title: "API & Backend",
    desc: "Node.js, REST and GraphQL APIs, authentication, third-party integrations — the backend infrastructure done properly from the start.",
  },
  {
    title: "Performance & SEO",
    desc: "Core Web Vitals, server-side rendering, image optimisation, and technical SEO are baked into the architecture — not retrofitted.",
  },
  {
    title: "Handoff & Support",
    desc: "Code your team can read, extend, and own. Documented, tested, deployed with CI/CD, and handed over with proper onboarding.",
  },
];

const results = [
  { num: "98+", label: "Average Lighthouse performance score on launch" },
  { num: "140%", label: "Average conversion rate improvement on relaunched sites" },
  { num: "6 weeks", label: "Average kick-off to live marketing site" },
];

const steps = [
  {
    title: "Discovery & Architecture",
    desc: "Tech audit, stack selection, information architecture, and component spec agreed before a line of code is written. Decisions made upstream are cheap. Decisions made in QA are expensive.",
  },
  {
    title: "Design System",
    desc: "Tokens, components, and patterns in Figma first. Development moves faster and with fewer reworks when the design decisions are finalised before build starts.",
  },
  {
    title: "Development",
    desc: "Component-first, test-integrated, CI/CD from sprint one. A preview environment is live from day one — you see the work every week, not just at launch.",
  },
  {
    title: "QA & Performance",
    desc: "Cross-browser, cross-device testing matrix. Lighthouse CI gates, accessibility audits, and load testing before any code reaches production.",
  },
  {
    title: "Launch & Handoff",
    desc: "Deployment, DNS configuration, monitoring setup, and team onboarding. 30 days of post-launch support included. We don't disappear when the site goes live.",
  },
];

const why = [
  {
    icon: "⚡",
    title: "Performance is non-negotiable",
    body: "Core Web Vitals, server-side rendering, image optimisation, and edge caching are in scope by default — not upsells. Every site we launch targets 95+ on Lighthouse before it touches production.",
  },
  {
    icon: "⊕",
    title: "Code written to be owned",
    body: "We write with your long-term ownership in mind. Comments, tests, and documentation are part of the deliverable. You should be able to hire a developer in 12 months who can understand the codebase from day one.",
  },
  {
    icon: "◫",
    title: "Design and engineering in the same team",
    body: "Design decisions made without engineering context create expensive rework. We do both — which means trade-offs are made by people who understand the actual cost of each option.",
  },
];

const faqs = [
  {
    q: "What tech stack do you use?",
    a: "Primarily Next.js, React, and TypeScript for the frontend. PostgreSQL, Prisma, and Node.js for backend work. We'll use what fits the brief — not what's currently fashionable on Twitter.",
  },
  {
    q: "Can you work with an existing design, or do you start from scratch?",
    a: "Either. We can build from a Figma file, evolve and extend an existing design system, or own the design from the ground up. We'll scope based on what actually needs to happen.",
  },
  {
    q: "How do handoffs work?",
    a: "We deliver with full documentation, a recorded codebase walkthrough, and 30 days of post-launch support included as standard. The code is yours — not locked to our infrastructure or dependent on our continued involvement.",
  },
  {
    q: "Do you offer ongoing maintenance and development?",
    a: "Yes. Monthly retainers cover planned feature development, dependency updates, performance monitoring, and priority bug fixes. Most clients move to a retainer after the initial build.",
  },
];

export default function WebDevelopmentPage() {
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
              <span style={{ color: "var(--paper)" }}>Web Development</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">Web<br /><em>Development</em></h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  Marketing sites, dashboards, and full web platforms — modern stacks,
                  careful architecture, and code your team can own.
                </p>
                <div className="svc-hero-tags">
                  {["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Tailwind"].map((t) => (
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
              <h2>Code that<br /><span className="it">ages well</span>.</h2>
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
                  <h2>Ship fast.<br /><span className="it">Break nothing</span>.</h2>
                </div>
                <p>We build in the open — preview environments, weekly demos, and CI/CD from sprint one. No big-bang launches, no end-of-project surprises.</p>
                <div className="svc-stat">
                  <div className="svc-stat-num">98+</div>
                  <div className="svc-stat-label">Average Lighthouse score on launch</div>
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
                <p>Web development shops are everywhere. The ones that build things that are still fast, maintainable, and owned by the client 3 years later are much rarer.</p>
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
                <p>Not finding what you need? We scope transparently — no vague proposals, no scope creep surprises.</p>
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
            <h2 className="reveal">Ready to build<br />something <em>that lasts</em>?</h2>
            <p className="reveal reveal-d1">Tell us what you&apos;re building and who it&apos;s for. We&apos;ll propose a stack, a scope, and a realistic timeline.</p>
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

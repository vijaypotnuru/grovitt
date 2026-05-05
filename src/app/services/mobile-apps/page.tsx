import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Mobile Apps — Grovitt Studio",
  description:
    "iOS, Android, and cross-platform mobile apps. From MVP to flagship — shipped, polished, instrumented, and observable.",
};

const problems = [
  {
    tag: "Pain 01",
    title: "Your MVP is holding you back from scaling",
    body: "The app you shipped to validate the idea was built for speed, not scale. Now every new feature is a negotiation with the original architecture. The debt is compounding.",
    fix: "We audit what you have, identify what can be evolved vs. what needs to be rebuilt, and create a phased plan that doesn't require a six-month freeze.",
  },
  {
    tag: "Pain 02",
    title: "You shipped, but users aren't staying",
    body: "Acquisition is working. Retention isn't. The assumption is always that it's a marketing problem — but retention starts in the UX, the onboarding flow, and the habit architecture of the product itself.",
    fix: "We build with engagement and retention patterns embedded from the first sprint — not added as a growth hack after launch.",
  },
  {
    tag: "Pain 03",
    title: "Cross-platform was supposed to save money",
    body: "Choosing the wrong cross-platform framework for the wrong use case doesn't save time or money — it creates performance compromises that frustrate users and platform compromises that frustrate developers.",
    fix: "We help you choose the right approach for your specific constraints, then build to the platform's standards — whatever the framework.",
  },
];

const deliverables = [
  {
    title: "iOS (Swift / SwiftUI)",
    desc: "Native iPhone and iPad apps built to pass App Store review first time — fast, accessible, and platform-native in every detail.",
  },
  {
    title: "Android (Kotlin)",
    desc: "Native Android apps tuned for the full device ecosystem, from flagship to mid-range. Material You and adaptive layouts done properly.",
  },
  {
    title: "React Native",
    desc: "Single codebase, near-native performance, and shared logic with your web stack. The right choice more often than people assume.",
  },
  {
    title: "Flutter",
    desc: "Pixel-perfect UI across iOS, Android, and web from one codebase — ideal when design fidelity and cross-platform parity are both non-negotiable.",
  },
  {
    title: "UX & UI Design",
    desc: "Product-first design systems, accessibility audits, dark mode, haptic feedback, and the micro-interactions that separate good apps from great ones.",
  },
  {
    title: "QA, ASO & Post-launch",
    desc: "Crash reporting, analytics instrumentation, App Store Optimisation, and structured iteration after the launch high fades.",
  },
];

const results = [
  { num: "4.8★", label: "Average App Store rating across launched products" },
  { num: "78%", label: "Average 30-day retention for apps with our UX layer" },
  { num: "12 weeks", label: "Average kick-off to App Store submission" },
];

const steps = [
  {
    title: "Product Discovery",
    desc: "Jobs-to-be-done interviews, user flow mapping, platform constraints analysis, and technical feasibility review before a wireframe is drawn.",
  },
  {
    title: "UX Design",
    desc: "Wireframes, interactive prototypes, and a platform-native design system — tested with real users and iterated before development begins.",
  },
  {
    title: "Development",
    desc: "Sprint-based delivery with a TestFlight or Play beta you can use every week. We demo, you feedback, we iterate — no end-of-project surprises.",
  },
  {
    title: "QA & Beta",
    desc: "Device matrix testing, Xcode Instruments / Android Profiler runs, crash monitoring, and a structured beta programme before any public release.",
  },
  {
    title: "Launch & Growth",
    desc: "Store listing copy, screenshots, ASO keyword research, and a post-launch analytics dashboard to guide the iteration cadence after release.",
  },
];

const why = [
  {
    icon: "◐",
    title: "Platform-native mindset, whatever the framework",
    body: "Whether it's React Native or Swift, we build to the platform's conventions — gestures, navigation patterns, typography scaling, dark mode. Users shouldn't know or care what framework was used.",
  },
  {
    icon: "◷",
    title: "Weekly betas, no surprises",
    body: "You have a usable build on your phone every sprint. Feedback loops are short, course-corrections are cheap, and there's no end-of-project moment where you see the full product for the first time.",
  },
  {
    icon: "◈",
    title: "Post-launch is in scope from day one",
    body: "Analytics, crash reporting, and ASO are set up before launch day — not after you notice the ratings are dropping. The data you need to improve the product is live from the moment it ships.",
  },
];

const faqs = [
  {
    q: "Should we build native or cross-platform?",
    a: "It depends on your performance requirements, whether you need simultaneous iOS/Android feature parity, your team's existing skills, and your timeline. We'll give you a direct recommendation after a 30-minute discovery call — no agenda either way.",
  },
  {
    q: "Can you take over and improve an existing app?",
    a: "Yes. We do codebase audits and can take over maintenance, add new features, or plan and execute a phased rebuild — structured around what you can afford to pause and what you can't.",
  },
  {
    q: "How do you handle App Store and Play Store review?",
    a: "We've shipped dozens of apps and know the common rejection patterns well. App Store and Play Store review compliance is built into the process — it's not the panic phase at the end.",
  },
  {
    q: "What's included after launch?",
    a: "60 days of post-launch support, crash monitoring, and a performance and retention review at week 4 are included in every engagement. Most clients continue on a feature retainer after that.",
  },
];

export default function MobileAppsPage() {
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
              <span style={{ color: "var(--paper)" }}>Mobile Apps</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">Mobile<br /><em>Apps</em></h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  iOS, Android, cross-platform. From MVP to flagship — shipped,
                  polished, instrumented, and observable.
                </p>
                <div className="svc-hero-tags">
                  {["Swift", "Kotlin", "React Native", "Flutter", "SwiftUI", "Jetpack Compose"].map((t) => (
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
              <h2>Apps people<br /><span className="it">actually use</span>.</h2>
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
                  <h2>Weekly betas,<br /><span className="it">no surprises</span>.</h2>
                </div>
                <p>You should be able to use your app every sprint — not just at a final demo. We build in the open and ship to TestFlight or Play beta every week without exception.</p>
                <div className="svc-stat">
                  <div className="svc-stat-num">4.8★</div>
                  <div className="svc-stat-label">Average App Store rating across launched products</div>
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
                <p>Mobile development studios are common. The ones that produce apps that feel genuinely native, retain users, and ship without the drama are much rarer.</p>
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
                <p>Not finding what you need? We&apos;re direct about scope, timeline, and fit — no vague estimates.</p>
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
            <h2 className="reveal">Ready to ship<br />your <em>mobile product</em>?</h2>
            <p className="reveal reveal-d1">Tell us your platform, your users, and your timeline. We&apos;ll recommend the right approach and a realistic scope.</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";
import { breadcrumbJsonLd, faqJsonLd, jsonLdScript, serviceJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Desktop Software",
  description:
    "Native macOS, Windows, and Linux apps. Internal tooling, creative software, and cross-platform apps that feel at home on every OS.",
  keywords: [
    "desktop software development",
    "macOS development",
    "Windows app development",
    "Linux development",
    "Tauri development",
    "Electron development",
    "Swift development",
    "WinUI development",
    "cross-platform desktop apps",
  ],
  alternates: { canonical: "/services/desktop-software" },
  openGraph: {
    title: "Desktop Software — Grovitt Studio",
    description:
      "Native macOS, Windows, and Linux apps. Internal tooling, creative software, and cross-platform apps that feel at home on every OS.",
    url: "/services/desktop-software",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@grovittstudio",
    title: "Desktop Software — Grovitt Studio",
    description:
      "Native macOS, Windows, and Linux apps. Internal tooling, creative software, and cross-platform apps that feel at home on every OS.",
  },
};

const problems = [
  {
    tag: "Pain 01",
    title: "Your Electron app embarrasses the brand",
    body: "An app that takes 8 seconds to launch, eats 1.5 GB of RAM, and doesn't support the system dark mode isn't a desktop app — it's a web app in a trench coat. Users notice.",
    fix: "We choose the right framework for your actual requirements — Tauri for performance-critical apps, Electron only when the ecosystem genuinely justifies the trade-offs.",
  },
  {
    tag: "Pain 02",
    title: "Internal tooling is built on spreadsheets and prayers",
    body: "When your ops team has twelve browser tabs open, two Zapier automations that break monthly, and a shared spreadsheet that's no longer shared correctly — the answer is proper software.",
    fix: "Internal tools deserve real engineering. We build them with the same rigour we apply to customer-facing products.",
  },
  {
    tag: "Pain 03",
    title: "Platform-specific features are being skipped entirely",
    body: "Notifications, file associations, system menu integration, Touch Bar, keyboard shortcuts, auto-update — the features that make software feel native on each OS are being deprioritised because they're hard.",
    fix: "We build native integration properly — because these features are the difference between software people tolerate and software they recommend.",
  },
];

const deliverables = [
  {
    title: "macOS (Swift / SwiftUI)",
    desc: "Native Mac apps that respect Human Interface Guidelines, integrate with the OS properly, and feel completely at home in the dock and menu bar.",
  },
  {
    title: "Windows Apps",
    desc: "WinUI, Win32, or cross-platform depending on the brief. From enterprise internal tooling to polished consumer software.",
  },
  {
    title: "Linux Tooling",
    desc: "CLI tools, GTK/Qt GUI apps, and daemon services for Linux environments — packaged for deb, rpm, and AppImage distributions.",
  },
  {
    title: "Tauri",
    desc: "Rust-powered desktop shells with a web-stack UI — tiny binaries, fast startup, and a security model that doesn't apologise for itself.",
  },
  {
    title: "Electron",
    desc: "When ecosystem reach matters more than binary size — done right. Optimised for startup time, memory footprint, and auto-update reliability.",
  },
  {
    title: "Internal Tools",
    desc: "Ops tooling, creative software, workflow automation, and data applications for internal teams who deserve good software too.",
  },
];

const results = [
  { num: "3", label: "Platforms supported — one consistent quality bar" },
  { num: "60%", label: "Average startup time reduction vs. prior Electron implementations" },
  { num: "18", label: "Desktop products shipped across macOS, Windows, and Linux" },
];

const steps = [
  {
    title: "Requirements & Constraints",
    desc: "Platform targets, distribution model (store vs. direct install), update strategy, licensing, and hardware requirements before any technical decisions are made.",
  },
  {
    title: "Architecture",
    desc: "Native vs. cross-platform framework decision, updater mechanism, crash reporter, telemetry, and build pipeline design — documented and agreed before a line of code.",
  },
  {
    title: "UI Design",
    desc: "Platform HIG compliance, custom design system if needed, keyboard-first interaction design, accessibility, and dark mode from the start — not at the end.",
  },
  {
    title: "Development",
    desc: "Staged release builds, crash reporting active from day one, auto-update infrastructure in place before beta, and CI/CD for every target platform.",
  },
  {
    title: "Testing & Release",
    desc: "macOS notarisation, Windows code signing, cross-platform smoke tests on real hardware, and a repeatable release pipeline that removes the human error.",
  },
];

const why = [
  {
    icon: "⬟",
    title: "We pick the right tool, not the fashionable one",
    body: "Tauri for performance-sensitive apps, Electron when the ecosystem justifies it, native Swift for apps that need to feel like macOS. The framework recommendation follows the requirements — not the other way around.",
  },
  {
    icon: "▲",
    title: "Distribution is infrastructure we build in",
    body: "Auto-update, code signing, notarisation, and crash reporting are set up before the first beta — not added in a rush before launch. Your update pipeline should be as reliable as the app itself.",
  },
  {
    icon: "⊙",
    title: "Internal tools get the same engineering bar",
    body: "The ops team using your internal tooling every day deserves software that works. We apply the same architecture, testing, and quality standards to internal tools as to customer-facing products.",
  },
];

const faqs = [
  {
    q: "Electron vs. Tauri — which do you recommend?",
    a: "Tauri for performance-sensitive applications, smaller binary sizes, and when security posture matters. Electron when plugin ecosystem availability, team familiarity, or the JavaScript tooling story outweighs the performance cost. We'll make the case for each given your specific constraints.",
  },
  {
    q: "Do you handle code signing and notarisation?",
    a: "Yes. macOS notarisation, Windows Authenticode signing, and Linux packaging are part of every desktop engagement — not extras you discover you need the week before launch.",
  },
  {
    q: "Can you implement auto-update infrastructure?",
    a: "Yes. We implement Sparkle for native macOS apps, built-in updaters for Tauri, and Squirrel or custom update servers for Electron applications — with staged rollouts and rollback capability.",
  },
  {
    q: "Do you build for Mac App Store or Microsoft Store?",
    a: "We can. Sandboxed store distributions have meaningful constraints — entitlement restrictions, no JIT, review timelines. We'll advise on what direct distribution vs. store distribution means for your specific application before you commit to either.",
  },
];

export default function DesktopSoftwarePage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/desktop-software" },
    { name: "Desktop Software", path: "/services/desktop-software" },
  ]);
  const faqSchema = faqJsonLd(faqs);
  const serviceSchema = serviceJsonLd({
    name: "Desktop Software",
    description:
      "Native macOS, Windows, and Linux apps. Internal tooling, creative software, and cross-platform apps that feel at home on every OS.",
    path: "/services/desktop-software",
    category: "Engineering",
  });

  return (
    <AppWrapper>
      <Nav />
      <MegaMenu />
      <CustomCursor />
      <ScrollReveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqSchema)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceSchema)} />
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
              <span style={{ color: "var(--paper)" }}>Desktop Software</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">Desktop<br /><em>Software</em></h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  Native macOS, Windows, and Linux apps — internal tooling, creative
                  software, and cross-platform apps that feel right on every OS.
                </p>
                <div className="svc-hero-tags">
                  {["Tauri", "Electron", "Swift", "SwiftUI", "WinUI", "Rust"].map((t) => (
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
              <h2>Software that<br /><span className="it">feels native</span>.</h2>
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
                  <h2>Platform-first,<br /><span className="it">not platform-agnostic</span>.</h2>
                </div>
                <p>Cross-platform doesn&apos;t have to mean lowest-common-denominator. We match the toolchain to the platform&apos;s expectations and respect the OS your users live in daily.</p>
                <div className="svc-stat">
                  <div className="svc-stat-num">3</div>
                  <div className="svc-stat-label">Platforms — one consistent quality bar</div>
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
                <p>Desktop development is the engineering discipline most web-first studios quietly avoid. We don&apos;t — and the difference shows in the output.</p>
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
                <p>Not finding what you need? We&apos;re direct about scope, platform constraints, and fit.</p>
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
            <h2 className="reveal">Ready to ship<br />a <em>desktop product</em>?</h2>
            <p className="reveal reveal-d1">Tell us the platform, the use case, and the distribution model. We&apos;ll recommend the right stack and a realistic timeline.</p>
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

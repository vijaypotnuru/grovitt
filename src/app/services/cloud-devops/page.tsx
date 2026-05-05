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
  title: "Cloud & DevOps",
  description:
    "AWS, GCP, Azure. CI/CD, infrastructure-as-code, and monitoring that lets your team ship without fear.",
  keywords: [
    "cloud DevOps",
    "AWS consulting",
    "GCP services",
    "Azure DevOps",
    "CI/CD pipelines",
    "infrastructure as code",
    "Terraform",
    "Kubernetes",
    "cloud infrastructure",
    "DevOps consulting",
  ],
  alternates: { canonical: "/services/cloud-devops" },
  openGraph: {
    title: "Cloud & DevOps — Grovitt Studio",
    description:
      "AWS, GCP, Azure. CI/CD, infrastructure-as-code, and monitoring that lets your team ship without fear.",
    url: "/services/cloud-devops",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@grovittstudio",
    title: "Cloud & DevOps — Grovitt Studio",
    description:
      "AWS, GCP, Azure. CI/CD, infrastructure-as-code, and monitoring that lets your team ship without fear.",
  },
};

const problems = [
  {
    tag: "Pain 01",
    title: "Your cloud bill is growing faster than revenue",
    body: "Unused resources, over-provisioned instances, no tagging strategy, and dev environments that run 24/7 add up. The engineering team knows it's wrong but doesn't have the mandate to fix it.",
    fix: "A cost audit is usually our first deliverable — identifying rightsizing opportunities, reserved instance savings, and unused resources typically yields 20–40% reduction.",
  },
  {
    tag: "Pain 02",
    title: "Deployments are manual, infrequent, and scary",
    body: "If deploying to production requires a specific person, a specific time of day, and a Slack message to everyone saying 'deploying now' — the process is the risk, not the code.",
    fix: "We build CI/CD pipelines that make deploying boring: automated, tested, observable, and reversible without drama.",
  },
  {
    tag: "Pain 03",
    title: "Incidents are long, opaque, and repeat themselves",
    body: "Without structured observability, incidents become blame sessions with no root cause, no SLO, and no confidence the same thing won't happen next month. The post-mortem is just a document nobody reads.",
    fix: "We set up monitoring, alerting, and runbooks that make incidents shorter, clearer, and genuinely educational — not just stressful.",
  },
];

const deliverables = [
  {
    title: "Cloud Architecture",
    desc: "Right-sized, cost-aware infrastructure on AWS, GCP, or Azure — designed for your actual scale, not the next unicorn's hypothetical traffic spike.",
  },
  {
    title: "Infrastructure as Code",
    desc: "Terraform and Pulumi stacks your team can read, review in PRs, and change with confidence — with remote state, workspaces, and reusable modules.",
  },
  {
    title: "CI/CD Pipelines",
    desc: "GitHub Actions, GitLab CI, or Buildkite — deploy to production with confidence, multiple times a day, with automated rollback when something goes wrong.",
  },
  {
    title: "Container Orchestration",
    desc: "Kubernetes, ECS, or simpler — matched to your actual traffic, team size, and operational maturity. Not to a résumé.",
  },
  {
    title: "Monitoring & Alerting",
    desc: "Datadog, Grafana, PagerDuty — observe everything, alert on signal, silence noise. On-call should be boring. We make it boring.",
  },
  {
    title: "Security & Compliance",
    desc: "IAM least-privilege, VPC hardening, secrets management, audit logging, and SOC 2 readiness — security as infrastructure, not afterthought.",
  },
];

const results = [
  { num: "99.9%", label: "Uptime SLO maintained across managed accounts" },
  { num: "41%", label: "Average cloud cost reduction post-optimisation" },
  { num: "6×", label: "Average increase in deployment frequency in 6 months" },
];

const steps = [
  {
    title: "Audit",
    desc: "Current state review: cloud spend, security posture, incident response capability, deployment frequency, and mean time to recover. We start with data, not assumptions.",
  },
  {
    title: "Architecture Design",
    desc: "Target state diagram, migration path, cost model, and a written decision record for every major trade-off — agreed before any infrastructure changes are made.",
  },
  {
    title: "IaC Build",
    desc: "Terraform modules, environment parity across dev/staging/prod, remote state management, and a PR-based change workflow enforced from day one.",
  },
  {
    title: "CI/CD",
    desc: "Pipeline templates, preview environments, secrets injection, automated rollback playbooks, and deployment frequency targets with measurement.",
  },
  {
    title: "Observability",
    desc: "Dashboards, SLOs, on-call runbooks, and a post-incident review template — so the next incident is shorter and better understood than the last.",
  },
];

const why = [
  {
    icon: "△",
    title: "Right-sized, not over-engineered",
    body: "We don't pitch Kubernetes to a team of five. We recommend the simplest infrastructure that meets your reliability and growth goals — then build in upgrade paths as you scale, not before you need to.",
  },
  {
    icon: "⊞",
    title: "Infrastructure as code from day one",
    body: "Every resource is defined in version-controlled code, reviewed in PRs, and applied through automation. No snowflakes, no tribal knowledge, no 'ask Sarah — she set that up' infrastructure.",
  },
  {
    icon: "◈",
    title: "We hand over capability, not dependency",
    body: "We document everything and train your team. The goal is an engineering organisation that's independent, capable, and confident in their infrastructure — not one that needs us to answer every ops question.",
  },
];

const faqs = [
  {
    q: "Which cloud provider do you recommend?",
    a: "We're provider-agnostic and work across all three major clouds. AWS for ecosystem maturity and breadth, GCP for data and ML workloads, Azure for organisations already in the Microsoft stack. We'll recommend based on your actual use case and team familiarity.",
  },
  {
    q: "Can you reduce our existing cloud bill without disrupting the application?",
    a: "Usually yes. A cost audit is often our first deliverable — identifying rightsizing opportunities, reserved instance and savings plan opportunities, and unused resources. Typical reduction is 20–40% without a single application change.",
  },
  {
    q: "Do you offer ongoing managed infrastructure support?",
    a: "Yes. Monthly retainers cover monitoring, incident response, planned maintenance windows, cost reviews, and security patching. Most clients move to a retainer after the initial infrastructure build.",
  },
  {
    q: "How do you handle security and compliance requirements?",
    a: "IAM least-privilege, VPC design, secrets management, and audit logging are in scope by default on every engagement. SOC 2 readiness, GDPR-aligned data architecture, and specific compliance frameworks (PCI, HIPAA) can be scoped separately.",
  },
];

export default function CloudDevOpsPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/cloud-devops" },
    { name: "Cloud & DevOps", path: "/services/cloud-devops" },
  ]);
  const faqSchema = faqJsonLd(faqs);
  const serviceSchema = serviceJsonLd({
    name: "Cloud & DevOps",
    description:
      "AWS, GCP, Azure. CI/CD, infrastructure-as-code, and monitoring that lets your team ship without fear.",
    path: "/services/cloud-devops",
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
              <span style={{ color: "var(--paper)" }}>Cloud &amp; DevOps</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">Cloud &amp;<br /><em>DevOps</em></h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  AWS, GCP, Azure. CI/CD, infrastructure-as-code, and monitoring
                  that lets your team ship without fear.
                </p>
                <div className="svc-hero-tags">
                  {["AWS", "Terraform", "Kubernetes", "GitHub Actions", "Datadog", "Pulumi"].map((t) => (
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
              <h2>Ship fast.<br /><span className="it">Sleep soundly</span>.</h2>
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
                  <h2>Observe first,<br /><span className="it">build second</span>.</h2>
                </div>
                <p>We don&apos;t arrive with a services pitch. We audit what you have, understand your team&apos;s operational maturity, and recommend the simplest infrastructure that meets your actual reliability goals.</p>
                <div className="svc-stat">
                  <div className="svc-stat-num">99.9%</div>
                  <div className="svc-stat-label">Uptime SLO maintained across managed accounts</div>
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
                <p>DevOps consultancies often leave you more dependent than when you started. We don&apos;t — because our measure of success is the day you don&apos;t need to call us.</p>
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
                <p>Not finding what you need? We scope transparently — no vague statements of work, no surprise dependencies.</p>
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
            <h2 className="reveal">Ready to make<br />on-call <em>boring</em>?</h2>
            <p className="reveal reveal-d1">Tell us your current cloud spend and your worst incident from last quarter. We&apos;ll show you what changes first.</p>
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

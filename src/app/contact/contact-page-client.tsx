"use client";

import { useState } from "react";
import Link from "next/link";
import { AppWrapper } from "@/components/app-wrapper";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollReveal } from "@/components/scroll-reveal";
import Footer from "@/components/footer";

const services = [
  "Performance Marketing",
  "SEO & Content",
  "Brand & Strategy",
  "Web Development",
  "Mobile Apps",
  "Desktop Software",
  "Cloud & DevOps",
  "Not sure yet",
];

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPageClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setState("success");
      setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" });
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

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
              <span style={{ color: "var(--paper)" }}>Contact</span>
            </div>
            <div className="svc-hero-inner">
              <h1 className="reveal">
                Let&apos;s talk<br />
                about your<br />
                <em>project</em>.
              </h1>
              <div className="svc-hero-right reveal reveal-d1">
                <p className="svc-hero-sub">
                  We scope transparently, move quickly, and only take work we can do
                  exceptionally. Tell us what you&apos;re building — we respond to every
                  enquiry within one business day.
                </p>
                <div className="svc-hero-tags">
                  {["Q3 2026 open", "1-day response", "No sales calls", "Fixed-price scopes"].map((t) => (
                    <span key={t} className="svc-tag">{t}</span>
                  ))}
                </div>
                <div className="ct-avail-pill">
                  <span className="ct-avail-dot-inline" />
                  Now taking Q3 2026 projects — limited spots
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Google Meet scheduling ── */}
        {process.env.NEXT_PUBLIC_GCAL_MEET_URL ? (
          <section className="contact-section" style={{ paddingBottom: 0 }}>
            <div className="wrap">
              <div className="contact-layout">
                <div className="contact-info reveal">
                  <div className="sec-num"><span>(Meet)</span></div>
                  <div className="contact-info-list">
                    <div className="contact-info-item" style={{ borderTop: "1px solid var(--line)" }}>
                      <div className="contact-info-label">Video call</div>
                      <div className="contact-info-value">Google Meet</div>
                    </div>
                    <div className="contact-info-item">
                      <div className="contact-info-label">Duration</div>
                      <div className="contact-info-value">30 minutes</div>
                    </div>
                  </div>
                  <div className="contact-reassure">
                    <p>
                      Pick a slot that works for you. You&apos;ll get a Google Meet link
                      instantly — no back-and-forth emails.
                    </p>
                  </div>
                </div>
                <div className="contact-form-wrap reveal reveal-d1">
                  <div className="svc-faq-q" style={{ marginBottom: 32, fontStyle: "normal", fontSize: "clamp(24px, 3vw, 40px)" }}>
                    Or schedule a call directly
                  </div>
                  <iframe
                    src={process.env.NEXT_PUBLIC_GCAL_MEET_URL}
                    style={{
                      width: "100%",
                      height: 520,
                      border: "1px solid var(--line-strong)",
                      borderRadius: 12,
                      background: "var(--bg)",
                    }}
                    scrolling="no"
                    title="Schedule a Google Meet"
                  />
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* ── Form section ── */}
        <section className="contact-section">
          <div className="wrap">
            <div className="contact-layout">

              {/* ── Left info panel ── */}
              <div className="contact-info reveal">
                <div className="sec-num"><span>(Info)</span></div>

                <div className="contact-info-list">
                  {[
                    { label: "Primary", value: "veera@grovitt.com", href: "mailto:veera@grovitt.com" },
                    { label: "Email", value: "contact@grovitt.com", href: "mailto:contact@grovitt.com" },
                    { label: "Hyderabad", value: "H. No. 16, 9th Phase Rd, Kukatpally, 500072" },
                    { label: "Mobile", value: "+91 93986 76662", href: "tel:+919398676662" },
                    { label: "Phone", value: "+91 86394 44404", href: "tel:+918639444404" },
                  ].map((item) => (
                    <div key={item.label} className="contact-info-item">
                      <div className="contact-info-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="contact-info-value contact-info-link">{item.value}</a>
                      ) : (
                        <div className="contact-info-value">{item.value}</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="contact-reassure">
                  <p>
                    No automated replies, no sales calls — a real person from the team
                    responds to every enquiry.
                  </p>
                </div>
              </div>

              {/* ── Form ── */}
              <div className="contact-form-wrap reveal reveal-d1">
                {state === "success" ? (
                  <div className="contact-success">
                    <div className="contact-success-icon">✓</div>
                    <h3>Message received.</h3>
                    <p>We&apos;ll be back to you within one business day. Check your inbox.</p>
                    <button className="btn-magnetic" onClick={() => setState("idle")} type="button">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="svc-faq-q" style={{ marginBottom: 40, fontStyle: "normal", fontSize: "clamp(24px, 3vw, 40px)" }}>
                      Tell us about your project
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label htmlFor="name" className="contact-label">Full name *</label>
                        <input id="name" name="name" type="text" className="contact-input"
                          placeholder="Jane Smith" value={form.name} onChange={handleChange} required />
                      </div>
                      <div className="contact-field">
                        <label htmlFor="email" className="contact-label">Work email *</label>
                        <input id="email" name="email" type="email" className="contact-input"
                          placeholder="jane@company.com" value={form.email} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="contact-field">
                        <label htmlFor="company" className="contact-label">Company</label>
                        <input id="company" name="company" type="text" className="contact-input"
                          placeholder="Acme Inc." value={form.company} onChange={handleChange} />
                      </div>
                      <div className="contact-field">
                        <label htmlFor="service" className="contact-label">Service of interest</label>
                        <select id="service" name="service" className="contact-input contact-select"
                          value={form.service} onChange={handleChange}>
                          <option value="">Select a service…</option>
                          {services.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="budget" className="contact-label">Approximate budget</label>
                      <select id="budget" name="budget" className="contact-input contact-select"
                        value={form.budget} onChange={handleChange}>
                        <option value="">Prefer not to say</option>
                        <option value="Under £10k">Under £10k</option>
                        <option value="£10k – £25k">£10k – £25k</option>
                        <option value="£25k – £50k">£25k – £50k</option>
                        <option value="£50k – £100k">£50k – £100k</option>
                        <option value="£100k+">£100k+</option>
                      </select>
                    </div>

                    <div className="contact-field">
                      <label htmlFor="message" className="contact-label">Tell us about the project *</label>
                      <textarea id="message" name="message" className="contact-input contact-textarea"
                        placeholder="What are you building, who is it for, and what's the outcome you're driving towards?"
                        rows={6} value={form.message} onChange={handleChange} required />
                    </div>

                    {state === "error" && (
                      <div className="contact-error">{errorMsg}</div>
                    )}

                    <button type="submit" className="btn-magnetic contact-submit" disabled={state === "sending"}>
                      {state === "sending" ? "Sending…" : <>Send message <span className="arr">&#x2197;</span></>}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </AppWrapper>
  );
}

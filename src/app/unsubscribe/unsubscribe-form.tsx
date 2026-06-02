"use client";

import { useState } from "react";

export default function UnsubscribeForm({ email: initialEmail }: { email: string }) {
  const [email, setEmail] = useState(initialEmail);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div style={{ padding: "32px 0", borderTop: "1px solid var(--line)" }}>
        <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
        <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>You&apos;re unsubscribed.</h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
          We&apos;ve removed <strong>{email}</strong> from our mailing list. You won&apos;t
          receive further marketing emails from us.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ borderTop: "1px solid var(--line)", paddingTop: 32 }}>
      <div style={{ marginBottom: 24 }}>
        <label
          htmlFor="unsub-email"
          style={{ display: "block", marginBottom: 8, fontSize: 14, color: "var(--muted)" }}
        >
          Email address
        </label>
        <input
          id="unsub-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="contact-input"
          style={{ width: "100%", boxSizing: "border-box" }}
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <div className="contact-error" style={{ marginBottom: 16 }}>
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        className="btn-magnetic contact-submit"
        disabled={status === "loading"}
        style={{ width: "100%" }}
      >
        {status === "loading" ? "Processing…" : "Confirm unsubscribe"}
      </button>
    </form>
  );
}

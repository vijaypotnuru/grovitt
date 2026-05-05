"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Wrong password. Try again.");
      } else {
        router.push("/admin/blogs");
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-page">
      <form className="admin-login-card" onSubmit={handleSubmit}>
        <div className="al-brand">
          <Logo width={120} height={37} />
          <span className="al-tag mono">Admin</span>
        </div>
        <h1 className="al-title">Sign in</h1>
        <p className="al-sub">Enter your admin password to continue.</p>

        <label className="admin-field">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••••"
            autoFocus
            required
          />
        </label>

        {error && <p className="al-error">{error}</p>}

        <button type="submit" className="admin-btn-primary" disabled={loading}>
          {loading ? "Signing in…" : "Sign in →"}
        </button>
      </form>
    </div>
  );
}

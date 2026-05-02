"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  coverColor: string;
  published: boolean;
  publishedAt: string;
}

const COVER_PRESETS = [
  { label: "Orange Flame", value: "linear-gradient(135deg,#ff8a3d,#c4400a)" },
  { label: "Navy Night", value: "linear-gradient(135deg,#1b2a6b,#0a0a0b)" },
  { label: "Cream Navy", value: "linear-gradient(135deg,#f5f1ea 30%,#1b2a6b)" },
  { label: "Orange Navy", value: "linear-gradient(135deg,#ff6a1a,#1b2a6b)" },
  { label: "Bright Orange", value: "linear-gradient(135deg,#ffb988,#ff6a1a)" },
  { label: "Soft Cream", value: "linear-gradient(135deg,#f5f1ea,#e8e2d6)" },
];

const CATEGORY_SUGGESTIONS = [
  "Marketing", "Strategy", "Brand", "SEO", "Product", "Engineering",
  "Design", "Growth", "Case Study", "News",
];

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

interface BlogFormProps {
  initial?: Partial<BlogFormData>;
  onSubmit: (data: BlogFormData) => Promise<void>;
  loading: boolean;
  submitLabel: string;
  backHref: string;
}

export function BlogForm({ initial, onSubmit, loading, submitLabel, backHref }: BlogFormProps) {
  const now = new Date().toISOString().slice(0, 16);
  const [form, setForm] = useState<BlogFormData>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    readTime: "",
    coverColor: COVER_PRESETS[0].value,
    published: false,
    publishedAt: now,
    ...initial,
  });
  const [slugManual, setSlugManual] = useState(!!initial?.slug);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"write" | "preview">("write");

  useEffect(() => {
    if (!slugManual && form.title) {
      setForm((f) => ({ ...f, slug: slugify(f.title) }));
    }
  }, [form.title, slugManual]);

  function set(key: keyof BlogFormData, value: string | boolean) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.title.trim()) { setError("Title is required."); return; }
    if (!form.slug.trim()) { setError("Slug is required."); return; }
    if (!form.content.trim()) { setError("Content is required."); return; }
    try {
      await onSubmit(form);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-inner">
          <div className="admin-brand">
            <span className="serif admin-logo">grovitt</span>
            <span className="admin-badge mono">Admin</span>
          </div>
          <nav className="admin-nav">
            <Link href="/admin/blogs" className="admin-nav-link">← All Posts</Link>
            <Link href="/" className="admin-nav-link" target="_blank">View site ↗</Link>
          </nav>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-page-head">
          <div>
            <Link href={backHref} className="admin-back">← Back</Link>
            <h1 className="admin-title">{submitLabel}</h1>
          </div>
          <div className="admin-form-actions-top">
            <label className="admin-publish-toggle">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => set("published", e.target.checked)}
              />
              <span className={`toggle-track ${form.published ? "on" : ""}`}>
                <span className="toggle-thumb" />
              </span>
              <span className="mono">{form.published ? "Published" : "Draft"}</span>
            </label>
            <button
              form="blog-form"
              type="submit"
              className="admin-btn-primary"
              disabled={loading}
            >
              {loading ? "Saving…" : "Save Post"}
            </button>
          </div>
        </div>

        {error && <div className="admin-error-banner">{error}</div>}

        <form id="blog-form" className="admin-form-grid" onSubmit={handleSubmit}>
          {/* LEFT — main content */}
          <div className="admin-form-main">
            <div className="admin-field">
              <label>Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => set("title", e.target.value)}
                placeholder="Your post title"
                className="admin-input admin-input-xl"
              />
            </div>

            <div className="admin-field">
              <label>Slug *</label>
              <div className="admin-slug-row">
                <span className="admin-slug-prefix">/blogs/</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => { setSlugManual(true); set("slug", slugify(e.target.value)); }}
                  placeholder="my-post-title"
                  className="admin-input"
                />
              </div>
            </div>

            <div className="admin-field">
              <label>Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => set("excerpt", e.target.value)}
                placeholder="Short summary shown on the blog list…"
                rows={3}
                className="admin-textarea"
              />
            </div>

            <div className="admin-field">
              <div className="admin-content-tabs">
                <label>Content * <span className="admin-muted">(HTML)</span></label>
                <div className="admin-tab-btns">
                  <button type="button" className={`admin-tab ${activeTab === "write" ? "active" : ""}`} onClick={() => setActiveTab("write")}>Write</button>
                  <button type="button" className={`admin-tab ${activeTab === "preview" ? "active" : ""}`} onClick={() => setActiveTab("preview")}>Preview</button>
                </div>
              </div>
              <div className="admin-toolbar">
                {[
                  ["B", "<strong>text</strong>"],
                  ["I", "<em>text</em>"],
                  ["H2", "<h2>Heading</h2>"],
                  ["H3", "<h3>Heading</h3>"],
                  ["P", "<p>Paragraph</p>"],
                  ["Q", "<blockquote>Quote</blockquote>"],
                  ["UL", "<ul>\n  <li>Item</li>\n</ul>"],
                  ["code", "<code>code</code>"],
                  ["a", '<a href="#">Link</a>'],
                ].map(([label, snippet]) => (
                  <button
                    key={label}
                    type="button"
                    className="admin-toolbar-btn mono"
                    title={snippet}
                    onClick={() => set("content", form.content + (form.content && !form.content.endsWith("\n") ? "\n" : "") + snippet)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {activeTab === "write" ? (
                <textarea
                  value={form.content}
                  onChange={(e) => set("content", e.target.value)}
                  placeholder="<p>Start writing your article in HTML…</p>"
                  rows={22}
                  className="admin-textarea admin-content-area"
                />
              ) : (
                <div
                  className="admin-preview bd-content"
                  dangerouslySetInnerHTML={{ __html: form.content || "<p class='admin-muted'>Nothing to preview yet.</p>" }}
                />
              )}
            </div>
          </div>

          {/* RIGHT — sidebar */}
          <aside className="admin-form-sidebar">
            <div className="admin-sidebar-card">
              <h3 className="admin-sidebar-title">Publish settings</h3>

              <div className="admin-field">
                <label>Publish date</label>
                <input
                  type="datetime-local"
                  value={form.publishedAt}
                  onChange={(e) => set("publishedAt", e.target.value)}
                  className="admin-input"
                />
              </div>
            </div>

            <div className="admin-sidebar-card">
              <h3 className="admin-sidebar-title">Post details</h3>

              <div className="admin-field">
                <label>Category</label>
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) => set("category", e.target.value)}
                  placeholder="e.g. Marketing"
                  className="admin-input"
                  list="cat-suggestions"
                />
                <datalist id="cat-suggestions">
                  {CATEGORY_SUGGESTIONS.map((c) => <option key={c} value={c} />)}
                </datalist>
              </div>

              <div className="admin-field">
                <label>Read time (minutes)</label>
                <input
                  type="number"
                  value={form.readTime}
                  onChange={(e) => set("readTime", e.target.value)}
                  placeholder="5"
                  min={1}
                  max={120}
                  className="admin-input"
                />
              </div>
            </div>

            <div className="admin-sidebar-card">
              <h3 className="admin-sidebar-title">Cover</h3>
              <div className="admin-cover-grid">
                {COVER_PRESETS.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    title={p.label}
                    className={`admin-cover-swatch ${form.coverColor === p.value ? "selected" : ""}`}
                    style={{ background: p.value }}
                    onClick={() => set("coverColor", p.value)}
                  />
                ))}
              </div>
              <div className="admin-cover-preview" style={{ background: form.coverColor }}>
                <span className="serif" style={{ fontStyle: "italic", fontSize: 48, color: "rgba(245,241,234,0.2)" }}>
                  {form.title?.[0] ?? "G"}
                </span>
              </div>
            </div>
          </aside>
        </form>
      </main>
    </div>
  );
}

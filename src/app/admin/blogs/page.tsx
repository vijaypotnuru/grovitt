"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

interface AdminPost {
  id: number;
  title: string;
  slug: string;
  category: string | null;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
}

async function fetchAdminPosts(): Promise<AdminPost[]> {
  const res = await fetch("/api/admin/blogs");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default function AdminBlogsPage() {
  const router = useRouter();
  const qc = useQueryClient();
  const { data: posts, isLoading } = useQuery({ queryKey: ["admin-posts"], queryFn: fetchAdminPosts });

  const deleteMut = useMutation({
    mutationFn: (id: number) =>
      fetch(`/api/admin/blogs/${id}`, { method: "DELETE" }).then((r) => r.json()),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-posts"] }),
  });

  const toggleMut = useMutation({
    mutationFn: ({ id, published }: { id: number; published: boolean }) =>
      fetch(`/api/admin/blogs/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published }),
      }).then((r) => r.json()),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin-posts"] }),
  });

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  function confirmDelete(id: number, title: string) {
    if (confirm(`Delete "${title}"? This cannot be undone.`)) {
      deleteMut.mutate(id);
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
            <Link href="/admin/blogs" className="admin-nav-link active">Posts</Link>
            <Link href="/" className="admin-nav-link" target="_blank">View site ↗</Link>
            <button className="admin-nav-link" onClick={handleLogout}>Sign out</button>
          </nav>
        </div>
      </header>

      <main className="admin-main">
        <div className="admin-page-head">
          <div>
            <h1 className="admin-title">Blog Posts</h1>
            <p className="admin-sub">{posts?.length ?? 0} article{posts?.length !== 1 ? "s" : ""} total</p>
          </div>
          <Link href="/admin/blogs/new" className="admin-btn-primary">
            + New Post
          </Link>
        </div>

        {isLoading && (
          <div className="admin-loading">
            {[1, 2, 3].map((i) => <div key={i} className="admin-skeleton" />)}
          </div>
        )}

        {posts && posts.length === 0 && (
          <div className="admin-empty">
            <p>No posts yet.</p>
            <Link href="/admin/blogs/new" className="admin-btn-primary">Create your first post →</Link>
          </div>
        )}

        {posts && posts.length > 0 && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      <Link href={`/admin/blogs/${post.id}/edit`} className="admin-post-title">
                        {post.title}
                      </Link>
                      <span className="admin-post-slug">/{post.slug}</span>
                    </td>
                    <td>
                      {post.category
                        ? <span className="admin-tag">{post.category}</span>
                        : <span className="admin-muted">—</span>}
                    </td>
                    <td>
                      <button
                        className={`admin-status ${post.published ? "published" : "draft"}`}
                        onClick={() => toggleMut.mutate({ id: post.id, published: !post.published })}
                        title="Click to toggle"
                      >
                        {post.published ? "Published" : "Draft"}
                      </button>
                    </td>
                    <td className="admin-muted admin-mono">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short", day: "numeric", year: "numeric",
                      })}
                    </td>
                    <td>
                      <div className="admin-actions">
                        <Link href={`/admin/blogs/${post.id}/edit`} className="admin-action-btn">
                          Edit
                        </Link>
                        {post.published && (
                          <Link href={`/blogs/${post.slug}`} target="_blank" className="admin-action-btn">
                            View ↗
                          </Link>
                        )}
                        <button
                          className="admin-action-btn danger"
                          onClick={() => confirmDelete(post.id, post.title)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

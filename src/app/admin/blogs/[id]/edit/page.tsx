"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BlogForm, type BlogFormData } from "@/components/admin/blog-form";

async function fetchAdminPost(id: string) {
  const res = await fetch(`/api/admin/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to load post");
  return res.json();
}

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const qc = useQueryClient();
  const [loading, setLoading] = useState(false);

  const { data: post, isLoading } = useQuery({
    queryKey: ["admin-post", id],
    queryFn: () => fetchAdminPost(id),
  });

  async function handleSubmit(data: BlogFormData) {
    setLoading(true);
    const res = await fetch(`/api/admin/blogs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        readTime: data.readTime ? Number(data.readTime) : null,
      }),
    });
    const json = await res.json();
    setLoading(false);
    if (!res.ok) throw new Error(json.error ?? "Failed to update post");
    qc.invalidateQueries({ queryKey: ["admin-posts"] });
    qc.invalidateQueries({ queryKey: ["admin-post", id] });
    router.push("/admin/blogs");
  }

  if (isLoading) {
    return (
      <div className="admin-page">
        <div className="admin-main">
          <div className="admin-loading">
            {[1, 2, 3].map((i) => <div key={i} className="admin-skeleton" />)}
          </div>
        </div>
      </div>
    );
  }

  if (!post) return null;

  const initial: Partial<BlogFormData> = {
    title: post.title ?? "",
    slug: post.slug ?? "",
    excerpt: post.excerpt ?? "",
    content: post.content ?? "",
    category: post.category ?? "",
    readTime: post.readTime ? String(post.readTime) : "",
    coverColor: post.coverColor ?? "",
    published: post.published ?? false,
    publishedAt: post.publishedAt
      ? new Date(post.publishedAt).toISOString().slice(0, 16)
      : new Date().toISOString().slice(0, 16),
  };

  return (
    <BlogForm
      initial={initial}
      onSubmit={handleSubmit}
      loading={loading}
      submitLabel="Edit Post"
      backHref="/admin/blogs"
    />
  );
}

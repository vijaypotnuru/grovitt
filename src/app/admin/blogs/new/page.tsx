"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { BlogForm, type BlogFormData } from "@/components/admin/blog-form";

export default function NewPostPage() {
  const router = useRouter();
  const qc = useQueryClient();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data: BlogFormData) {
    setLoading(true);
    const res = await fetch("/api/admin/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        readTime: data.readTime ? Number(data.readTime) : null,
      }),
    });
    const json = await res.json();
    setLoading(false);
    if (!res.ok) throw new Error(json.error ?? "Failed to create post");
    qc.invalidateQueries({ queryKey: ["admin-posts"] });
    router.push("/admin/blogs");
  }

  return (
    <BlogForm
      onSubmit={handleSubmit}
      loading={loading}
      submitLabel="New Post"
      backHref="/admin/blogs"
    />
  );
}

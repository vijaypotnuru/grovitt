import { useQuery } from "@tanstack/react-query";

export interface PostSummary {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverColor: string | null;
  category: string | null;
  readTime: number | null;
  publishedAt: string | null;
}

export interface PostDetail extends PostSummary {
  content: string;
  createdAt: string;
  updatedAt: string;
}

async function fetchPosts(): Promise<PostSummary[]> {
  const res = await fetch("/api/blogs");
  if (!res.ok) throw new Error("Failed to load posts");
  return res.json();
}

async function fetchPost(slug: string): Promise<PostDetail> {
  const res = await fetch(`/api/blogs/${slug}`);
  if (!res.ok) throw new Error("Post not found");
  return res.json();
}

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["posts", slug],
    queryFn: () => fetchPost(slug),
    enabled: !!slug,
  });
}

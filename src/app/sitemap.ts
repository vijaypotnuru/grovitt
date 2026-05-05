import type { MetadataRoute } from "next";
import { prisma } from "@/lib/prisma";
import { siteConfig, absoluteUrl } from "@/lib/site";

const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/work", changeFrequency: "monthly", priority: 0.8 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/blogs", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services/performance-marketing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/seo-content", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/brand-strategy", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/web-development", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/mobile-apps", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/desktop-software", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/cloud-devops", changeFrequency: "monthly", priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true, publishedAt: true },
    });
    postEntries = posts.map((post) => ({
      url: `${siteConfig.url}/blogs/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt ?? now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    postEntries = [];
  }

  return [...staticEntries, ...postEntries];
}

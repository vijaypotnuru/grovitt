import { ImageResponse } from "next/og";
import { prisma } from "@/lib/prisma";

export const alt = "Grovitt blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogOpenGraphImage({ params }: Props) {
  const { slug } = await params;

  let post: { title: string; excerpt: string | null; category: string | null } | null = null;
  try {
    post = await prisma.post.findUnique({
      where: { slug, published: true },
      select: { title: true, excerpt: true, category: true },
    });
  } catch {
    post = null;
  }

  const title = post?.title ?? "Grovitt Blog";
  const excerpt = post?.excerpt ?? "Insights on growth, brand, and product.";
  const category = post?.category ?? "Article";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a0a0b 0%, #1b2a6b 70%, #ff6a1a 140%)",
          color: "#f5f1ea",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "monospace",
            color: "rgba(245, 241, 234, 0.7)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "#ff6a1a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 800,
                color: "#0a0a0b",
              }}
            >
              G
            </div>
            <span>grovitt.com / blog</span>
          </div>
          <span
            style={{
              padding: "8px 14px",
              border: "1px solid rgba(245, 241, 234, 0.25)",
              borderRadius: 999,
              fontSize: 18,
            }}
          >
            {category}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: title.length > 60 ? 60 : 78,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 1040,
            }}
          >
            {title}
          </div>
          {excerpt && (
            <div
              style={{
                fontSize: 28,
                color: "rgba(245, 241, 234, 0.7)",
                maxWidth: 980,
                lineHeight: 1.35,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {excerpt}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(245, 241, 234, 0.55)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          <span>Grovitt Studio</span>
          <span>Read on grovitt.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

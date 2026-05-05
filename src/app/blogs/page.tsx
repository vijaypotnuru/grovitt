import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { AppWrapper } from "@/components/app-wrapper";
import { CustomCursor } from "@/components/custom-cursor";
import Footer from "@/components/footer";
import { prisma } from "@/lib/prisma";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — Insights on growth, brand, and product",
  description:
    "Insights on marketing, brand strategy, product, and the craft of building things that last. Articles from the Grovitt studio team.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: `Blog — ${siteConfig.fullName}`,
    description:
      "Insights on marketing, brand strategy, product, and the craft of building things that last.",
    type: "website",
    url: "/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog — ${siteConfig.fullName}`,
    description:
      "Insights on marketing, brand strategy, product, and the craft of building things that last.",
  },
};

const COVER_GRADIENTS = [
  "linear-gradient(135deg,#ff8a3d,#c4400a)",
  "linear-gradient(135deg,#1b2a6b,#0a0a0b)",
  "linear-gradient(135deg,#f5f1ea 30%,#1b2a6b)",
  "linear-gradient(135deg,#ff6a1a,#1b2a6b)",
];

interface PostSummary {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  coverColor: string | null;
  category: string | null;
  readTime: number | null;
  publishedAt: Date | null;
}

function PostCard({ post, index }: { post: PostSummary; index: number }) {
  const gradient = post.coverColor ?? COVER_GRADIENTS[index % COVER_GRADIENTS.length];
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <Link href={`/blogs/${post.slug}`} className={`blog-card blog-card-${(index % 4) + 1}`}>
      <div className="blog-card-cover" style={{ background: gradient }}>
        <span className="blog-card-deco">{post.title[0]}</span>
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          {post.category && <span className="blog-cat">{post.category}</span>}
          {date && <span>{date}</span>}
          {post.readTime && <span>{post.readTime} min read</span>}
        </div>
        <h3 className="blog-card-title sf-pro">{post.title}</h3>
        {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
        <span className="blog-card-link">
          Read article <span className="arr">&#x2197;</span>
        </span>
      </div>
    </Link>
  );
}

async function getPosts(): Promise<PostSummary[]> {
  try {
    return await prisma.post.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverColor: true,
        category: true,
        readTime: true,
        publishedAt: true,
      },
      orderBy: { publishedAt: "desc" },
    });
  } catch {
    return [];
  }
}

export default async function BlogsPage() {
  const posts = await getPosts();

  return (
    <AppWrapper>
      <Nav />
      <MegaMenu />
      <CustomCursor />
      <main className="blogs-page">
        <section className="blogs-hero">
          <div className="wrap">
            <div className="sec-num">
              <span className="mono">Grovitt</span>
              <b>BLOG</b>
            </div>
            <div className="blogs-hero-head">
              <h1 className="serif">
                Ideas that <span className="it">drive</span>
                <br />
                real growth
              </h1>
              <p className="blogs-hero-sub">
                Insights on marketing, brand strategy, product, and the craft of building things that last.
              </p>
            </div>
          </div>
        </section>

        <section className="blogs-list">
          <div className="wrap">
            {posts.length === 0 ? (
              <div className="blogs-empty">
                <p className="serif">
                  No articles yet — <span className="it">check back soon.</span>
                </p>
              </div>
            ) : (
              <>
                {posts[0] && (
                  <div className="blog-feature-wrap">
                    <PostCard post={posts[0]} index={0} />
                  </div>
                )}
                {posts.length > 1 && (
                  <div className="blog-grid">
                    {posts.slice(1).map((post, i) => (
                      <PostCard key={post.id} post={post} index={i + 1} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </AppWrapper>
  );
}

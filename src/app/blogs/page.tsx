"use client";

import Link from "next/link";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { AppWrapper } from "@/components/app-wrapper";
import { CustomCursor } from "@/components/custom-cursor";
import Footer from "@/components/footer";
import { usePosts, type PostSummary } from "@/hooks/use-blogs";

const COVER_GRADIENTS = [
  "linear-gradient(135deg,#ff8a3d,#c4400a)",
  "linear-gradient(135deg,#1b2a6b,#0a0a0b)",
  "linear-gradient(135deg,#f5f1ea 30%,#1b2a6b)",
  "linear-gradient(135deg,#ff6a1a,#1b2a6b)",
];

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
        <h3 className="blog-card-title">{post.title}</h3>
        {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
        <span className="blog-card-link">
          Read article <span className="arr">&#x2197;</span>
        </span>
      </div>
    </Link>
  );
}

function BlogsContent() {
  const { data: posts, isLoading, isError } = usePosts();

  return (
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
          {isLoading && (
            <div className="blogs-loading">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="blog-skeleton" />
              ))}
            </div>
          )}

          {isError && (
            <div className="blogs-empty">
              <p>Could not load articles. Please try again later.</p>
            </div>
          )}

          {posts && posts.length === 0 && (
            <div className="blogs-empty">
              <p className="serif">No articles yet — <span className="it">check back soon.</span></p>
            </div>
          )}

          {posts && posts.length > 0 && (
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
  );
}

export default function BlogsPage() {
  return (
    <AppWrapper>
      <Nav />
      <MegaMenu />
      <CustomCursor />
      <BlogsContent />
      <Footer />
    </AppWrapper>
  );
}

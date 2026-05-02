"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { AppWrapper } from "@/components/app-wrapper";
import { CustomCursor } from "@/components/custom-cursor";
import Footer from "@/components/footer";
import { usePost } from "@/hooks/use-blogs";

function BlogDetailContent() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = usePost(slug);

  if (isLoading) {
    return (
      <main className="blog-detail-page">
        <div className="wrap blog-detail-loading">
          <div className="bd-skeleton-title" />
          <div className="bd-skeleton-meta" />
          <div className="bd-skeleton-cover" />
          <div className="bd-skeleton-body" />
        </div>
      </main>
    );
  }

  if (isError || !post) {
    return (
      <main className="blog-detail-page">
        <div className="wrap">
          <div className="bd-not-found">
            <p className="serif">
              Article <span className="it">not found.</span>
            </p>
            <Link href="/blogs" className="bd-back">
              &#x2190; Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <main className="blog-detail-page">
      <article>
        <header className="bd-header">
          <div className="wrap">
            <Link href="/blogs" className="bd-back">
              &#x2190; All Articles
            </Link>
            <div className="bd-meta">
              {post.category && <span className="blog-cat">{post.category}</span>}
              {date && <span>{date}</span>}
              {post.readTime && <span>{post.readTime} min read</span>}
            </div>
            <h1 className="bd-title serif">{post.title}</h1>
            {post.excerpt && <p className="bd-excerpt">{post.excerpt}</p>}
          </div>
        </header>

        <div
          className="bd-cover"
          style={{ background: post.coverColor ?? "linear-gradient(135deg,#ff8a3d,#c4400a)" }}
        >
          <span className="bd-cover-deco">{post.title[0]}</span>
        </div>

        <div className="wrap">
          <div
            className="bd-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <footer className="bd-footer">
          <div className="wrap">
            <div className="bd-footer-inner">
              <Link href="/blogs" className="btn-outline">
                &#x2190; Back to Blog
              </Link>
              <a href="#contact" className="btn-magnetic">
                Start a project <span className="arr">&#x2197;</span>
              </a>
            </div>
          </div>
        </footer>
      </article>
    </main>
  );
}

export default function BlogDetailPage() {
  return (
    <AppWrapper>
      <Nav />
      <MegaMenu />
      <CustomCursor />
      <BlogDetailContent />
      <Footer />
    </AppWrapper>
  );
}

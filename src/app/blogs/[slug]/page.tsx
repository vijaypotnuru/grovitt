import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { MegaMenu } from "@/components/mega-menu";
import { AppWrapper } from "@/components/app-wrapper";
import { CustomCursor } from "@/components/custom-cursor";
import Footer from "@/components/footer";
import { prisma } from "@/lib/prisma";
import { siteConfig, absoluteUrl } from "@/lib/site";
import { breadcrumbJsonLd, jsonLdScript } from "@/lib/jsonld";

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string) {
  try {
    return await prisma.post.findUnique({
      where: { slug, published: true },
    });
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { slug: true },
    });
    return posts.map((p) => ({ slug: p.slug }));
  } catch {
    return [];
  }
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Article not found",
      robots: { index: false, follow: false },
    };
  }

  const url = `/blogs/${post.slug}`;
  const description =
    post.excerpt ?? `${post.title} — an article from the ${siteConfig.fullName} team.`;
  const published = post.publishedAt?.toISOString();
  const modified = post.updatedAt.toISOString();

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description,
      siteName: siteConfig.fullName,
      publishedTime: published,
      modifiedTime: modified,
      authors: [siteConfig.fullName],
      section: post.category ?? undefined,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@grovittstudio",
      title: post.title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt ?? undefined,
    articleSection: post.category ?? undefined,
    datePublished: post.publishedAt?.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blogs/${post.slug}`),
    },
    author: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon.svg"),
      },
    },
    image: [absoluteUrl("/opengraph-image")],
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blogs" },
    { name: post.title, path: `/blogs/${post.slug}` },
  ]);

  return (
    <AppWrapper>
      <Nav />
      <MegaMenu />
      <CustomCursor />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)} />
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
              <h1 className="bd-title sf-pro">{post.title}</h1>
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
                <a href="/contact" className="btn-magnetic">
                  Start a project <span className="arr">&#x2197;</span>
                </a>
              </div>
            </div>
          </footer>
        </article>
      </main>
      <Footer />
    </AppWrapper>
  );
}

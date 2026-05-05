import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article not found",
  robots: { index: false, follow: false },
};

export default function BlogNotFound() {
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

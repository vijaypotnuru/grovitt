import type { Metadata, Viewport } from "next";
import { QueryProvider } from "@/components/query-provider";
import { siteConfig, absoluteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Studio for Smarter Marketing & Real Growth`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  keywords: [
    "performance marketing",
    "brand strategy",
    "SEO and content",
    "web development",
    "mobile apps",
    "cloud and DevOps",
    "growth marketing studio",
    "digital studio",
    "Grovitt",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.name} — Studio for Smarter Marketing & Real Growth`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: `${siteConfig.name} — Studio for Smarter Marketing & Real Growth`,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/icon.svg"),
  email: siteConfig.email,
  foundingDate: siteConfig.founded,
  description: siteConfig.description,
  sameAs: [
    "https://x.com/grovitt",
    "https://www.facebook.com/Grovitt",
    "http://linkedin.com/company/grovitt",
    "https://www.youtube.com/@Grovitt",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.fullName,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.fullName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

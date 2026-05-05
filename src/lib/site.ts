export const siteConfig = {
  name: "Grovitt",
  fullName: "Grovitt Studio",
  url: "https://grovitt.com",
  ogImage: "/opengraph-image",
  description:
    "A digital studio at the intersection of brand, performance, and product — building campaigns and software for ambitious teams since 2013.",
  twitter: "@grovittstudio",
  email: "hello@grovitt.com",
  founded: "2013",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "",
} as const;

export function absoluteUrl(path = ""): string {
  if (!path) return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

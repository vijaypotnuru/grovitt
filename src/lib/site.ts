export const siteConfig = {
  name: "Grovitt",
  fullName: "Grovitt Studio",
  url: "https://grovitt.com",
  ogImage: "/opengraph-image",
  description:
    "A digital studio at the intersection of brand, performance, and product — building campaigns and software for ambitious teams since 2024.",
  twitter: "@grovittstudio",
  email: "hello@grovitt.com",
  founded: "2024",
  telephone: "+91-8639444404",
  address: {
    streetAddress: "D.no: 29-12-6, Devi Chowk Circle, Lakshmivarapu Pet",
    addressLocality: "Rajamahendravaram",
    addressRegion: "AP",
    postalCode: "533101",
    addressCountry: "IN",
  },
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "",
} as const;

export function absoluteUrl(path = ""): string {
  if (!path) return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

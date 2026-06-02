export const siteConfig = {
  name: "Grovitt",
  fullName: "Grovitt Studio",
  url: "https://grovitt.com",
  ogImage: "/opengraph-image",
  description:
    "A digital studio at the intersection of brand, performance, and product — building campaigns and software for ambitious teams since 2024.",
  twitter: "@grovittstudio",
  email: "contact@grovitt.com",
  founded: "2024",
  telephone: ["+91-8639444404", "+91-9398676662"],
  address: {
    streetAddress: "H. No. 16, 9th Phase Rd, Kukatpally Housing Board Colony, K P H B Phase 9",
    addressLocality: "Hyderabad",
    addressRegion: "TS",
    postalCode: "500072",
    addressCountry: "IN",
  },
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "",
} as const;

export function absoluteUrl(path = ""): string {
  if (!path) return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

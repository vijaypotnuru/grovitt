import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";
import { siteConfig } from "@/lib/site";

const description =
  "Get in touch with Grovitt Studio. Tell us about your project — we respond to every enquiry within one business day.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  keywords: [
    "contact grovitt",
    "get in touch",
    "digital agency contact",
    "start a project",
    "marketing agency enquiry",
    "software development enquiry",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${siteConfig.fullName}`,
    description,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@grovittstudio",
    title: `Contact — ${siteConfig.fullName}`,
    description,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

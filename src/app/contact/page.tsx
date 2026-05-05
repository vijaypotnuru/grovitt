import type { Metadata } from "next";
import ContactPageClient from "./contact-page-client";
import { siteConfig } from "@/lib/site";

const description =
  "Get in touch with Grovitt Studio. Tell us about your project — we respond to every enquiry within one business day.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${siteConfig.fullName}`,
    description,
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact — ${siteConfig.fullName}`,
    description,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

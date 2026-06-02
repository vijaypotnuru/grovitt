import { absoluteUrl } from "@/lib/site";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface FaqItem {
  q: string;
  a: string;
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  category: string;
}

export function serviceJsonLd(s: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    description: s.description,
    provider: {
      "@type": "Organization",
      name: "Grovitt Studio",
      url: "https://grovitt.com",
    },
    category: s.category,
    url: absoluteUrl(s.path),
    serviceType: s.name,
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Grovitt Studio",
    url: "https://grovitt.com",
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    description:
      "A digital studio at the intersection of brand, performance, and product — building campaigns and software for ambitious teams since 2024.",
    email: "hello@grovitt.com",
    telephone: ["+91-8639444404", "+91-9398676662"],
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      streetAddress: "H. No. 16, 9th Phase Rd, Kukatpally Housing Board Colony, K P H B Phase 9",
      addressLocality: "Hyderabad",
      addressRegion: "TS",
      postalCode: "500072",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-18:00",
    priceRange: "₹1L – ₹1Cr+",
    sameAs: [] as string[],
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}

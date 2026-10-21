import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";
import faqData from "../content/faq.json";

export const SITE_URL = "https://voltride-ebikes.com";
export const DEFAULT_LOCALE = "gu";

type SeoArgs = {
  locale: string;
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function buildMetadata({
  locale,
  title,
  description,
  path = "",
  keywords = [],
}: SeoArgs): Metadata {
  const url = `${SITE_URL}/${locale}${path}`;
  return {
    title,
    description,
    keywords: keywords.length ? keywords.join(", ") : undefined,
    alternates: {
      canonical: url,
      languages: {
        gu: `${SITE_URL}/gu${path}`,
        en: `${SITE_URL}/en${path}`,
        "x-default": `${SITE_URL}/gu${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: locale === "gu" ? "gu_IN" : "en_IN",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function localBusinessSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.nameGu,
    image: `${SITE_URL}/images/hero/hero-ebike.svg`,
    url: `${SITE_URL}/${locale}`,
    telephone: `+91${siteConfig.phone1}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Shop No. 4A, Sukhsagar Complex, Bhagwati Circle, Kaliyabid",
      addressLocality: "Bhavnagar",
      addressRegion: "Gujarat",
      postalCode: "364002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.7575,
      longitude: 72.1397,
    },
    openingHours: "Mo-Su 10:00-20:00",
    areaServed: ["Talaja", "Bhavnagar"],
    award: `${siteConfig.award}, presented by ${siteConfig.awardBy}`,
    founder: [
      { "@type": "Person", name: siteConfig.founder.name },
      { "@type": "Person", name: siteConfig.coFounder.name },
    ],
    makesOffer: {
      "@type": "Offer",
      name: "VoltRide Electric Bikes",
      description:
        "Electric bikes, test rides, easy finance, exchange and after-sales service.",
    },
  };
}

export function faqSchema(locale: string) {
  const items = faqData.faq as {
    q: string;
    a: string;
    qGu: string;
    aGu: string;
  }[];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: locale === "gu" ? f.qGu : f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: locale === "gu" ? f.aGu : f.a,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo.svg`,
    sameAs: [`https://wa.me/${siteConfig.whatsappNumber}`],
  };
}

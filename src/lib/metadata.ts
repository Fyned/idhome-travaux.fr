// ─────────────────────────────────────────────
// ID Home — Helpers metadata SEO
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, COMPANY } from "./constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  noIndex?: boolean;
}

/**
 * Génère les métadonnées Next.js pour une page
 */
export function createPageMetadata({
  title,
  description,
  keywords = [],
  path = "",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      ...keywords,
      "rénovation",
      "dépannage",
      "dépannage urgence",
      "ID Home",
      "travaux",
      "Levallois-Perret",
      "Île-de-France",
      "Hauts-de-Seine",
    ],
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    other: {
      "geo.region": "FR-IDF",
      "geo.placename": "Levallois-Perret, Île-de-France",
      "geo.position": "48.8942;2.2878",
      "ICBM": "48.8942, 2.2878",
      "contact:phone_number": COMPANY.phone,
      "contact:email": COMPANY.email,
    },
  };
}

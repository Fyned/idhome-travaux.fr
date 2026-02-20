// ─────────────────────────────────────────────
// ID Home — Générateurs de schémas JSON-LD
// ─────────────────────────────────────────────

import { SITE_URL, COMPANY, CREATOR } from "@/lib/constants";
import type { ServiceData } from "@/lib/services-data";

/**
 * Schema LocalBusiness (HomeAndConstructionBusiness)
 * Utilisé dans le layout principal
 */
export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.website,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    image: `${SITE_URL}/images/og-image.jpg`,
    logo: `${SITE_URL}/idhome-logo-black-orange.svg`,
    openingHours: ["Mo-Sa 09:00-18:00"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "00:00",
        closes: "23:59",
        description: "Service d'urgence dépannage 7J/7",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      postalCode: COMPANY.address.postalCode,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.region,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.8942,
      longitude: 2.2878,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Levallois-Perret",
        sameAs: "https://fr.wikipedia.org/wiki/Levallois-Perret",
      },
      {
        "@type": "AdministrativeArea",
        name: "Hauts-de-Seine (92)",
      },
      {
        "@type": "State",
        name: "Île-de-France",
      },
      {
        "@type": "City",
        name: "Paris",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    slogan: "Rénovation & Dépannage d'urgence 7J/7",
    knowsAbout: [
      "Plomberie",
      "Électricité",
      "Serrurerie",
      "Rénovation intérieure",
      "Peinture",
      "Isolation thermique et phonique",
      "Dépannage d'urgence",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services de rénovation et dépannage",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Dépannage d'urgence 7J/7",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plomberie d'urgence", description: "Réparation de fuites, débouchage, installation sanitaire — intervention rapide 7J/7" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Électricité d'urgence", description: "Dépannage pannes électriques, mise aux normes — intervention rapide 7J/7" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Serrurerie d'urgence", description: "Ouverture de porte, changement de serrure — intervention rapide 7J/7" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Rénovation complète",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rénovation Complète" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Peinture" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Isolation" } },
          ],
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
  };
}

/**
 * Schema WebPage
 */
export function createWebPageSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: COMPANY.name,
      url: COMPANY.website,
    },
    creator: {
      "@type": "Organization",
      name: CREATOR.name,
      url: CREATOR.url,
    },
  };
}

/**
 * Schema BreadcrumbList
 */
export function createBreadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/**
 * Schema Service (pour les pages de service individuelles)
 */
export function createServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.fullDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY.name,
      telephone: COMPANY.phone,
      url: COMPANY.website,
      address: {
        "@type": "PostalAddress",
        streetAddress: COMPANY.address.street,
        postalCode: COMPANY.address.postalCode,
        addressLocality: COMPANY.address.city,
        addressRegion: COMPANY.address.region,
        addressCountry: "FR",
      },
    },
    areaServed: [
      { "@type": "City", name: "Levallois-Perret" },
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Hauts-de-Seine (92)" },
      { "@type": "State", name: "Île-de-France" },
    ],
    ...(service.urgent && {
      availableChannel: {
        "@type": "ServiceChannel",
        serviceType: "Urgence 7J/7",
        availableLanguage: "Français",
      },
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "00:00",
        closes: "23:59",
      },
      termsOfService: "Intervention rapide, devis gratuit, prix transparents",
    }),
  };
}

/**
 * Schema FAQPage
 */
export function createFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Schema Article (pour le blog)
 */
export function createArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
  };
}

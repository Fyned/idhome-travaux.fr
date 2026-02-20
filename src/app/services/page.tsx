// ─────────────────────────────────────────────
// ID Home — Hub des services (enrichi)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { AlertTriangle, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema } from "@/components/seo/schemas";
import { services } from "@/lib/services-data";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL, COMPANY } from "@/lib/constants";
import ServiceComparisonTable from "@/components/sections/ServiceComparisonTable";
import MiniProcess from "@/components/sections/MiniProcess";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";

export const metadata: Metadata = createPageMetadata({
  title: "Nos Services de Rénovation & Dépannage — Levallois-Perret",
  description:
    "Découvrez tous nos services : plomberie, électricité, serrurerie, rénovation, peinture et isolation à Levallois-Perret et Île-de-France. Intervention rapide 7J/7, devis gratuit. ID Home.",
  keywords: [
    "services rénovation",
    "dépannage",
    "plomberie",
    "électricité",
    "serrurerie",
    "peinture",
    "isolation",
    "Levallois-Perret",
  ],
  path: "/services",
});

const whyUs = [
  "Artisans qualifiés et expérimentés",
  "Devis gratuit et sans engagement",
  "Prix transparents, pas de mauvaises surprises",
  "Garantie sur toutes nos interventions",
  "Intervention rapide, même en urgence",
  "Service client réactif et à l'écoute",
];

export default function ServicesPage() {
  const urgentServices = services.filter((s) => s.urgent);
  const otherServices = services.filter((s) => !s.urgent);

  return (
    <>
      <JsonLd
        data={createWebPageSchema(
          "Nos Services",
          "Services de rénovation et dépannage d'urgence — ID Home",
          `${SITE_URL}/services`
        )}
      />

      <Breadcrumb items={[{ label: "Services", href: "/services" }]} />

      {/* Bande d'urgence */}
      <div className="bg-red-600 text-white py-3">
        <div className="container-wide flex items-center justify-center gap-3 text-sm md:text-base">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <span className="font-heading font-semibold">
            Urgence 7J/7 — Appelez le{" "}
            <a href={COMPANY.phoneHref} className="underline hover:no-underline">
              {COMPANY.phone}
            </a>
          </span>
        </div>
      </div>

      {/* En-tête décoratif */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-id-orange/5 via-white to-id-cream/50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-id-orange/3 rounded-full blur-2xl translate-y-1/2 translate-x-1/2" />

        <div className="relative container-wide py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">
              Nos <span className="text-id-orange">Services</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Du dépannage d&apos;urgence à la rénovation complète, nous
              intervenons pour tous vos besoins avec professionnalisme et
              transparence.
            </p>
          </div>
        </div>
      </section>

      {/* Services d'urgence */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8">
            <span className="text-id-orange">Dépannage d&apos;urgence</span> — 7J/7
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {urgentServices.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services/${service.slug}`}
                urgent
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services de rénovation */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8">
            <span className="text-id-orange">Rénovation</span> &amp; Aménagement
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((service) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <ServiceComparisonTable />

      <MiniProcess />

      {/* Pourquoi nous choisir */}
      <section className="section-padding-sm bg-id-cream/30">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-4">
              Pourquoi choisir <span className="text-id-orange">ID Home</span> ?
            </h2>
            <p className="font-body text-gray-500 max-w-2xl mx-auto">
              Des artisans de confiance pour tous vos travaux de rénovation et
              dépannage en Île-de-France.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {whyUs.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-id-orange flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-id-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <CTASection />
    </>
  );
}

// ─────────────────────────────────────────────
// ID Home — Page Réalisations (enrichie)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { Camera, CheckCircle, Phone, FileText, Wrench, MapPin, Ruler, Clock } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import MiniProcess from "@/components/sections/MiniProcess";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import RelatedServices from "@/components/sections/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema } from "@/components/seo/schemas";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL, STATS } from "@/lib/constants";
import { projects, projectCategories } from "@/lib/realisations-data";

export const metadata: Metadata = createPageMetadata({
  title: "Nos Réalisations — Rénovation & Dépannage Levallois-Perret",
  description:
    "Découvrez nos réalisations : rénovation de cuisines, salles de bain, aménagements intérieurs et travaux de dépannage à Levallois-Perret. Photos avant/après. ID Home.",
  keywords: [
    "réalisations",
    "portfolio",
    "travaux",
    "avant après",
    "rénovation cuisine",
    "rénovation salle de bain",
    "Levallois-Perret",
  ],
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema(
          "Nos Réalisations — ID Home",
          "Découvrez nos réalisations en rénovation et dépannage",
          `${SITE_URL}/realisations`
        )}
      />

      <Breadcrumb items={[{ label: "Réalisations", href: "/realisations" }]} />

      {/* En-tête décoratif */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-id-cream/50 via-white to-id-orange/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-id-orange/3 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative container-wide py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">
              Nos <span className="text-id-orange">Réalisations</span>
            </h1>
            <p className="section-subtitle mx-auto mb-8">
              Découvrez quelques-uns de nos projets récents. Chaque réalisation
              est le fruit d&apos;un savoir-faire et d&apos;un engagement qualité.
            </p>

            {/* Compteur projets */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <Camera className="w-4 h-4 text-id-orange" />
                <span className="font-body font-medium text-sm text-id-charcoal">
                  {projects.length} projets
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <CheckCircle className="w-4 h-4 text-id-orange" />
                <span className="font-body font-medium text-sm text-id-charcoal">
                  100% satisfaction
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-6">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3">
            {projectCategories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full font-heading font-semibold text-sm transition-colors cursor-default ${
                  cat === "Tout"
                    ? "bg-id-orange text-white"
                    : "bg-white border border-gray-200 text-id-charcoal hover:border-id-orange/30"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="glass-card overflow-hidden group">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/images/realisations/${project.imageSlug}.jpg`}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-2.5 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-id-charcoal mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  {/* Badges surface / durée / localisation */}
                  {(project.surface || project.duration || project.location) && (
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                      {project.surface && (
                        <span className="inline-flex items-center gap-1 text-xs font-body text-gray-500 bg-gray-50 px-2 py-1 rounded">
                          <Ruler className="w-3 h-3 text-id-orange" />
                          {project.surface}
                        </span>
                      )}
                      {project.duration && (
                        <span className="inline-flex items-center gap-1 text-xs font-body text-gray-500 bg-gray-50 px-2 py-1 rounded">
                          <Clock className="w-3 h-3 text-id-orange" />
                          {project.duration}
                        </span>
                      )}
                      {project.location && (
                        <span className="inline-flex items-center gap-1 text-xs font-body text-gray-500 bg-gray-50 px-2 py-1 rounded">
                          <MapPin className="w-3 h-3 text-id-orange" />
                          {project.location}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de réalisation */}
      <MiniProcess
        title="Notre processus de réalisation"
        steps={[
          { icon: Phone, title: "Contactez-nous", description: "Décrivez votre projet par téléphone ou en ligne" },
          { icon: FileText, title: "Étude & Devis", description: "Visite sur place et devis détaillé gratuit" },
          { icon: Wrench, title: "Réalisation", description: "Nos artisans interviennent selon le planning" },
          { icon: CheckCircle, title: "Livraison", description: "Vérification finale et remise des clés" },
        ]}
      />

      {/* Témoignages clients */}
      <TestimonialCarousel title="Nos clients témoignent" />

      {/* Chiffres clés */}
      <section className="section-padding-sm bg-id-cream/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-black text-5xl md:text-6xl text-id-orange mb-2">
                  {stat.value}
                </div>
                <p className="font-body text-base text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services liés */}
      <RelatedServices max={3} title="Vous aussi, lancez votre projet" />

      <CTASection />
    </>
  );
}

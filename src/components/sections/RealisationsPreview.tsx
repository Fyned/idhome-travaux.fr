"use client";

// ─────────────────────────────────────────────
// ID Home — Aperçu des réalisations (Animated)
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/motion";

const FEATURED_PROJECTS = [
  {
    title: "Rénovation de salle de bain",
    category: "Rénovation",
    imageSlug: "salle-de-bain",
    description:
      "Transformation complète avec douche à l'italienne et carrelage moderne.",
  },
  {
    title: "Rénovation de cuisine",
    category: "Rénovation",
    imageSlug: "cuisine",
    description:
      "Cuisine ouverte fonctionnelle avec plan de travail en quartz.",
  },
  {
    title: "Peinture intérieure complète",
    category: "Peinture",
    imageSlug: "peinture",
    description:
      "Remise en peinture complète d'un appartement avec finitions soignées.",
  },
];

export default function RealisationsPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* En-tête */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="section-title mb-4">
            Nos <span className="text-id-orange">Réalisations</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Découvrez quelques-uns de nos projets récents réalisés avec soin et
            professionnalisme.
          </p>
        </AnimatedSection>

        {/* Grille de projets */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.12}
        >
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.imageSlug}
              className="glass-card group overflow-hidden"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`/images/realisations/${project.imageSlug}.jpg`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-2.5 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-id-charcoal mb-1">
                  {project.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </StaggerChildren>

        {/* Lien vers la page complète */}
        <AnimatedSection delay={0.4} className="text-center mt-10">
          <Link
            href="/realisations"
            className="link-underline inline-flex items-center gap-2 font-heading font-semibold text-id-orange hover:gap-3 transition-all"
          >
            Voir toutes nos réalisations
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

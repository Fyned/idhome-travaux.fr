"use client";

// ─────────────────────────────────────────────
// ID Home — Section « Pourquoi nous choisir » (Animated)
// ─────────────────────────────────────────────

import { Clock, Banknote, Award, HeadphonesIcon } from "lucide-react";
import { AnimatedSection, StaggerChildren } from "@/components/motion";

const advantages = [
  {
    icon: Clock,
    title: "Intervention rapide",
    description:
      "Disponibles 7J/7, nous intervenons dans les plus brefs délais pour vos urgences de plomberie, électricité et serrurerie.",
  },
  {
    icon: Banknote,
    title: "Prix transparents",
    description:
      "Devis gratuit et détaillé avant chaque intervention. Aucune surprise, aucun frais caché.",
  },
  {
    icon: Award,
    title: "Artisans qualifiés",
    description:
      "Notre équipe est composée de professionnels expérimentés, formés aux dernières normes et techniques.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suivi personnalisé",
    description:
      "Un interlocuteur unique du début à la fin de votre projet. Nous vous accompagnons à chaque étape.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-id-cream/30 relative overflow-hidden">
      {/* Subtle gradient mesh background */}
      <div className="gradient-mesh absolute inset-0 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* En-tête de section */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">
            Pourquoi choisir <span className="text-id-orange">ID Home</span> ?
          </h2>
          <p className="section-subtitle mx-auto">
            Plus de 10 ans d&apos;expérience au service de votre habitat.
          </p>
        </AnimatedSection>

        {/* Grille des avantages */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          stagger={0.12}
        >
          {advantages.map((item) => (
            <div key={item.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-id-orange/10 mb-5 group-hover:scale-110 group-hover:bg-id-orange/15 transition-all duration-300">
                <item.icon className="w-8 h-8 text-id-orange" />
              </div>
              <h3 className="font-heading font-bold text-lg text-id-charcoal mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

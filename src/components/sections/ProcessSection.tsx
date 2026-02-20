"use client";

// ─────────────────────────────────────────────
// ID Home — Comment ça marche ? (Animated)
// ─────────────────────────────────────────────

import { Phone, ClipboardCheck, Wrench, ThumbsUp } from "lucide-react";
import { AnimatedSection, StaggerChildren, FloatingOrbs } from "@/components/motion";

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "Appelez-nous",
    description: "Contactez-nous par téléphone ou demandez un devis en ligne. Nous sommes disponibles 7J/7.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Diagnostic gratuit",
    description: "Un technicien se déplace chez vous pour évaluer la situation et vous remettre un devis transparent.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Intervention rapide",
    description: "Nos artisans qualifiés réalisent les travaux avec rigueur et professionnalisme.",
  },
  {
    number: "04",
    icon: ThumbsUp,
    title: "Satisfaction garantie",
    description: "Nous vérifions chaque détail avec vous. Votre satisfaction est notre priorité absolue.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-id-dark text-white relative overflow-hidden">
      {/* Animated dot grid background */}
      <div className="dot-grid-animated absolute inset-0" />

      {/* Floating orbs */}
      <FloatingOrbs count={3} />

      <div className="container-wide relative z-10">
        {/* En-tête */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/15 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Notre processus
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Comment ça <span className="text-id-orange">marche</span> ?
          </h2>
          <p className="font-body text-gray-400 max-w-2xl mx-auto">
            De votre premier appel à la réception des travaux, nous vous
            accompagnons à chaque étape.
          </p>
        </AnimatedSection>

        {/* 4 étapes */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          stagger={0.15}
        >
          {STEPS.map((step, index) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line (desktop only) */}
              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-id-orange/40 to-transparent" />
              )}

              {/* Number badge */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-id-orange/10 border border-id-orange/20 mb-6 group-hover:bg-id-orange/20 group-hover:scale-105 transition-all duration-300">
                <step.icon className="w-8 h-8 text-id-orange" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-id-orange text-white text-xs font-heading font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

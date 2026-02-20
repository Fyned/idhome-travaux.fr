"use client";

// ─────────────────────────────────────────────
// ID Home — Aperçu FAQ (Animated)
// ─────────────────────────────────────────────

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { faqData } from "@/lib/faq-data";
import { AnimatedSection, StaggerChildren } from "@/components/motion";

// Sélectionner les 4 questions les plus pertinentes
const FEATURED_FAQ = faqData.slice(0, 4);

export default function FAQPreview() {
  return (
    <section className="section-padding bg-id-cream/30">
      <div className="container-tight">
        {/* En-tête */}
        <AnimatedSection className="text-center mb-10">
          <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="section-title mb-4">
            Questions <span className="text-id-orange">fréquentes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Les réponses aux questions les plus posées par nos clients.
          </p>
        </AnimatedSection>

        {/* Accordéon FAQ */}
        <StaggerChildren className="space-y-3" stagger={0.1}>
          {FEATURED_FAQ.map((item) => (
            <details
              key={item.question}
              className="glass-card p-5 cursor-pointer group"
            >
              <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none text-sm md:text-base">
                {item.question}
                <span className="ml-4 text-id-orange text-xl flex-shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 font-body text-sm text-gray-500 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </StaggerChildren>

        {/* Lien vers la FAQ complète */}
        <AnimatedSection delay={0.4} className="text-center mt-8">
          <Link
            href="/faq"
            className="link-underline inline-flex items-center gap-2 font-heading font-semibold text-id-orange hover:gap-3 transition-all"
          >
            Voir toutes les questions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

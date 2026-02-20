// ─────────────────────────────────────────────
// ID Home — Page FAQ (enrichie)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { HelpCircle, MessageSquare } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import ContactCTA from "@/components/sections/ContactCTA";
import RelatedServices from "@/components/sections/RelatedServices";
import StatsBar from "@/components/sections/StatsBar";
import JsonLd from "@/components/seo/JsonLd";
import { createFAQSchema, createWebPageSchema } from "@/components/seo/schemas";
import { faqData, faqCategories } from "@/lib/faq-data";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Questions Fréquentes (FAQ) — ID Home Levallois-Perret",
  description:
    "Trouvez les réponses à vos questions sur nos services de rénovation et dépannage à Levallois-Perret : tarifs, délais, garanties, urgences. ID Home.",
  keywords: [
    "FAQ",
    "questions fréquentes",
    "aide",
    "rénovation",
    "dépannage",
    "devis",
    "garantie",
    "Levallois-Perret",
  ],
  path: "/faq",
});

export default function FAQPage() {
  const totalQuestions = faqData.length;
  const totalCategories = faqCategories.length;

  return (
    <>
      <JsonLd
        data={createWebPageSchema(
          "FAQ — ID Home",
          "Questions fréquentes sur nos services",
          `${SITE_URL}/faq`
        )}
      />
      <JsonLd data={createFAQSchema(faqData)} />

      <Breadcrumb items={[{ label: "FAQ", href: "/faq" }]} />

      {/* En-tête décoratif */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-id-cream/50 via-white to-id-orange/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-id-orange/3 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative container-wide py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">
              Questions <span className="text-id-orange">Fréquentes</span>
            </h1>
            <p className="section-subtitle mx-auto mb-8">
              Retrouvez les réponses aux questions les plus posées par nos
              clients sur nos services de rénovation et dépannage.
            </p>

            {/* Compteurs questions / catégories */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <HelpCircle className="w-4 h-4 text-id-orange" />
                <span className="font-body font-medium text-sm text-id-charcoal">
                  {totalQuestions} questions
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <MessageSquare className="w-4 h-4 text-id-orange" />
                <span className="font-body font-medium text-sm text-id-charcoal">
                  {totalCategories} catégories
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Question en vedette */}
      <section className="section-padding-sm">
        <div className="container-tight">
          <div className="glass-card p-6 md:p-8 border-l-4 border-l-id-orange">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-id-orange/10 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-6 h-6 text-id-orange" />
              </div>
              <div>
                <p className="font-body text-sm text-id-orange font-semibold mb-1">
                  Question en vedette
                </p>
                <h2 className="font-heading font-bold text-xl md:text-2xl text-id-charcoal mb-3">
                  Quelles sont vos garanties sur les travaux ?
                </h2>
                <p className="font-body text-gray-500 leading-relaxed">
                  Toutes nos interventions sont couvertes par une garantie de satisfaction. Nous disposons d&apos;une assurance décennale et nous utilisons uniquement des matériaux de qualité supérieure certifiés. En cas de problème, nous revenons gratuitement pour corriger le moindre défaut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordéon FAQ */}
      <section className="section-padding-sm">
        <div className="container-tight">
          <FAQAccordion items={faqData} categories={faqCategories} />
        </div>
      </section>

      {/* Bloc CTA contact */}
      <ContactCTA
        title="Vous n'avez pas trouvé votre réponse ?"
        subtitle="Notre équipe est à votre disposition pour répondre à toutes vos questions."
      />

      {/* Chiffres clés */}
      <StatsBar title="ID Home en chiffres" />

      {/* Services les plus demandés */}
      <RelatedServices
        max={3}
        title="Nos services les plus demandés"
      />

      <CTASection />
    </>
  );
}

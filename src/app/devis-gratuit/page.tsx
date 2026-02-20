// ─────────────────────────────────────────────
// ID Home — Page de devis gratuit (enrichie)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { CheckCircle, Phone, FileText, PhoneCall, ClipboardCheck, Star, Shield, Clock, HelpCircle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import DevisForm from "@/components/forms/DevisForm";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import StatsBar from "@/components/sections/StatsBar";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema } from "@/components/seo/schemas";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL, COMPANY, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Devis Gratuit — Rénovation & Dépannage Levallois-Perret",
  description:
    "Demandez votre devis gratuit et sans engagement pour vos travaux de rénovation ou dépannage à Levallois-Perret et Île-de-France. Réponse sous 24h. ID Home.",
  keywords: ["devis gratuit", "devis travaux", "estimation", "prix rénovation", "devis Levallois-Perret"],
  path: "/devis-gratuit",
});

const processSteps = [
  {
    icon: FileText,
    title: "Remplissez le formulaire",
    description: "Décrivez votre projet en quelques clics",
  },
  {
    icon: PhoneCall,
    title: "Nous vous rappelons",
    description: "Un expert vous contacte sous 24h",
  },
  {
    icon: ClipboardCheck,
    title: "Recevez votre devis",
    description: "Devis détaillé, clair et sans engagement",
  },
];

const guarantees = [
  "Devis 100% gratuit",
  "Sans engagement",
  "Réponse sous 24h",
  "Prix transparents",
];

const sidebarFeatures = [
  {
    icon: Shield,
    title: "Pourquoi demander un devis ?",
    items: [
      "Connaître le coût exact de vos travaux",
      "Comparer les solutions proposées",
      "Planifier votre budget sereinement",
    ],
  },
  {
    icon: CheckCircle,
    title: "Ce qui est inclus",
    items: [
      "Visite sur place si nécessaire",
      "Détail des matériaux et main d'œuvre",
      "Planning prévisionnel des travaux",
    ],
  },
];

export default function DevisPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema(
          "Devis Gratuit — ID Home",
          "Demandez votre devis gratuit et sans engagement",
          `${SITE_URL}/devis-gratuit`
        )}
      />

      <Breadcrumb items={[{ label: "Devis gratuit", href: "/devis-gratuit" }]} />

      {/* En-tête décoratif */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-id-orange/5 via-white to-id-cream/50" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-id-orange/3 rounded-full blur-2xl translate-y-1/2 translate-x-1/2" />

        <div className="relative container-wide py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">
              Devis <span className="text-id-orange">Gratuit</span>
            </h1>
            <p className="section-subtitle mx-auto mb-8">
              Décrivez votre projet en quelques étapes et recevez un devis
              personnalisé sous 24 heures. Sans engagement.
            </p>

            {/* Garanties */}
            <div className="flex flex-wrap justify-center gap-4">
              {guarantees.map((g) => (
                <div
                  key={g}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 text-id-orange" />
                  <span className="font-body font-medium text-sm text-id-charcoal">{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Étapes du processus */}
      <section className="py-8 md:py-12">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-100">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-id-orange/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-id-orange" />
                  </div>
                  <span className="absolute -top-2 -left-2 w-6 h-6 bg-id-orange text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-id-charcoal mb-1">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire + Sidebar */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Formulaire (2/3) */}
            <div className="lg:col-span-2">
              <DevisForm />
            </div>

            {/* Sidebar (1/3) */}
            <div className="space-y-6">
              {/* Cartes informatives */}
              {sidebarFeatures.map((feature) => (
                <div key={feature.title} className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-id-orange/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-id-orange" />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-id-charcoal">
                      {feature.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-id-orange flex-shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-gray-500">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* CTA téléphone */}
              <div className="glass-card p-6 bg-id-orange/5 border-id-orange/15">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-id-orange" />
                  <h3 className="font-heading font-bold text-sm text-id-charcoal">
                    Besoin d&apos;un devis immédiat ?
                  </h3>
                </div>
                <p className="font-body text-sm text-gray-500 mb-4">
                  Appelez-nous directement, un conseiller vous établit un devis par téléphone.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 bg-id-orange text-white font-heading font-semibold rounded-full cta-glow hover:bg-id-orange-dark transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
              </div>

              {/* Mini témoignage */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-id-orange fill-id-orange" />
                  ))}
                </div>
                <blockquote className="font-body text-sm text-gray-600 leading-relaxed italic mb-3">
                  &ldquo;{TESTIMONIALS[1].text}&rdquo;
                </blockquote>
                <p className="font-heading font-semibold text-xs text-id-charcoal">
                  {TESTIMONIALS[1].name} — {TESTIMONIALS[1].location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <TestimonialCarousel title="Ce que disent nos clients" max={3} />

      {/* Mini FAQ — Questions sur les devis */}
      <section className="section-padding-sm">
        <div className="container-tight">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
            Questions sur les <span className="text-id-orange">devis</span>
          </h2>
          <div className="space-y-4">
            <details className="group glass-card p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-id-orange flex-shrink-0" />
                  Combien coûte un devis ?
                </span>
                <span className="ml-4 text-id-orange text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 font-body text-gray-500 leading-relaxed pl-8">
                Tous nos devis sont 100% gratuits et sans engagement. Vous ne payez rien tant que vous n&apos;avez pas accepté notre proposition.
              </p>
            </details>

            <details className="group glass-card p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-id-orange flex-shrink-0" />
                  En combien de temps reçoit-on le devis ?
                </span>
                <span className="ml-4 text-id-orange text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 font-body text-gray-500 leading-relaxed pl-8">
                Nous établissons votre devis sous 24 à 48 heures après réception de votre demande ou visite sur place.
              </p>
            </details>

            <details className="group glass-card p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-id-orange flex-shrink-0" />
                  Le devis est-il détaillé ?
                </span>
                <span className="ml-4 text-id-orange text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 font-body text-gray-500 leading-relaxed pl-8">
                Oui, nos devis détaillent chaque poste : main d&apos;œuvre, matériaux, délais et conditions. Transparence totale, aucun coût caché.
              </p>
            </details>

            <details className="group glass-card p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-id-orange flex-shrink-0" />
                  Puis-je modifier ma demande après envoi ?
                </span>
                <span className="ml-4 text-id-orange text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 font-body text-gray-500 leading-relaxed pl-8">
                Bien sûr ! Contactez-nous par téléphone ou email pour ajuster votre demande à tout moment.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <StatsBar />

      {/* CTA final */}
      <CTASection />
    </>
  );
}

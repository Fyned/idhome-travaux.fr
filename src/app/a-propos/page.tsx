// ─────────────────────────────────────────────
// ID Home — Page À propos (enrichie)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { Award, Users, Clock, Shield, CheckCircle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import TeamMembers from "@/components/sections/TeamMembers";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema } from "@/components/seo/schemas";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL, STATS, COMPANY, TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";

export const metadata: Metadata = createPageMetadata({
  title: "À propos — ID Home Levallois-Perret",
  description:
    "Découvrez ID Home, votre partenaire de confiance pour la rénovation et le dépannage d'urgence à Levallois-Perret et Île-de-France. Plus de 10 ans d'expérience, artisans qualifiés.",
  keywords: [
    "à propos",
    "ID Home",
    "entreprise rénovation",
    "artisans qualifiés",
    "expérience",
    "Levallois-Perret",
  ],
  path: "/a-propos",
});

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "Nous visons l'excellence dans chaque intervention, qu'il s'agisse d'un simple dépannage ou d'une rénovation complète.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description:
      "Ponctualité, respect des engagements et transparence totale sur les prix. Votre confiance est notre priorité.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Un interlocuteur unique et un accompagnement personnalisé du début à la fin de chaque projet.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description:
      "Disponibles 7J/7 pour les urgences, nous intervenons rapidement pour résoudre vos problèmes.",
  },
];

const timeline = [
  {
    year: "2013",
    title: "Création d'ID Home",
    description:
      "Lancement de l'entreprise à Levallois-Perret, spécialisée dans le dépannage d'urgence en plomberie et serrurerie.",
  },
  {
    year: "2017",
    title: "Expansion des services",
    description:
      "Ajout des services de rénovation complète : électricité, peinture et isolation pour répondre à une demande croissante.",
  },
  {
    year: "2021",
    title: "Couverture Île-de-France",
    description:
      "Extension de notre zone d'intervention à l'ensemble de l'Île-de-France avec une équipe renforcée d'artisans qualifiés.",
  },
  {
    year: "2024",
    title: "Aujourd'hui",
    description:
      "Plus de 500 clients satisfaits, une équipe de confiance et toujours le même engagement qualité et réactivité.",
  },
];

const certifications = [
  "Artisans certifiés et qualifiés",
  "Assurance décennale",
  "Garantie de satisfaction",
  "Matériaux de qualité supérieure",
  "Respect des normes en vigueur",
  "Devis gratuit et transparent",
];

const engagements = [
  { icon: CheckCircle, title: "Qualité", description: "Des matériaux premium et un travail soigné pour des résultats durables." },
  { icon: Clock, title: "Ponctualité", description: "Respect des délais convenus, nous nous engageons sur un planning précis." },
  { icon: Shield, title: "Transparence", description: "Des prix clairs, un devis détaillé et aucune mauvaise surprise à la fin." },
  { icon: Users, title: "Écoute", description: "Un interlocuteur unique qui vous accompagne et répond à toutes vos questions." },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema(
          "À propos — ID Home",
          "Découvrez ID Home, votre partenaire rénovation et dépannage",
          `${SITE_URL}/a-propos`
        )}
      />

      <Breadcrumb items={[{ label: "À propos", href: "/a-propos" }]} />

      {/* En-tête décoratif */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-id-cream/50 via-white to-id-orange/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

        <div className="relative container-wide py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">
              Votre partenaire{" "}
              <span className="text-id-orange">de confiance</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Depuis plus de 10 ans, ID Home accompagne les particuliers dans
              tous leurs projets de rénovation et de dépannage d&apos;urgence.
            </p>
          </div>
        </div>
      </section>

      {/* Section principale */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-6">
                Qui sommes-<span className="text-id-orange">nous</span> ?
              </h2>
              <div className="space-y-4 font-body text-gray-500 leading-relaxed">
                <p>
                  <strong className="text-id-charcoal">ID Home</strong> est une
                  entreprise de rénovation et dépannage basée à Levallois-Perret,
                  au service des particuliers en Île-de-France.
                </p>
                <p>
                  Notre équipe d&apos;artisans qualifiés intervient avec
                  professionnalisme et rigueur pour transformer votre habitat et
                  résoudre rapidement vos problèmes du quotidien.
                </p>
                <p>
                  De la plomberie à la rénovation complète, en passant par
                  l&apos;électricité et la serrurerie, nous mettons notre
                  expertise au service de votre confort et de votre sécurité.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/team.jpg"
                alt="L'équipe ID Home — Artisans qualifiés"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Notre parcours (Timeline) */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-4">
              Notre <span className="text-id-orange">parcours</span>
            </h2>
            <p className="font-body text-gray-500 max-w-xl mx-auto">
              Retour sur les étapes clés qui ont forgé l&apos;identité d&apos;ID Home.
            </p>
          </div>

          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-id-orange/20 -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-10 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Point sur la ligne */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-id-orange rounded-full border-4 border-white shadow -translate-x-1/2 mt-1 z-10" />

                  {/* Contenu */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="inline-block font-heading font-black text-id-orange text-lg mb-1">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-bold text-id-charcoal mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <TeamMembers />

      {/* Nos valeurs */}
      <section className="section-padding bg-id-cream/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">
              Nos <span className="text-id-orange">valeurs</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Les principes qui guident notre travail au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item) => (
              <div key={item.title} className="glass-card p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-id-orange/10 mb-4">
                  <item.icon className="w-7 h-7 text-id-orange" />
                </div>
                <h3 className="font-heading font-bold text-lg text-id-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Garanties */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-4">
              Nos <span className="text-id-orange">garanties</span>
            </h2>
            <p className="font-body text-gray-500 max-w-2xl mx-auto">
              Nous nous engageons à vous fournir un service irréprochable,
              de la prise de contact à la livraison de vos travaux.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-id-orange flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-id-charcoal">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos engagements */}
      <section className="section-padding-sm bg-id-cream/30">
        <div className="container-wide">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-4">
              Nos <span className="text-id-orange">engagements</span>
            </h2>
            <p className="font-body text-gray-500 max-w-2xl mx-auto">
              Des engagements concrets pour une relation de confiance durable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((item) => (
              <div
                key={item.title}
                className="bg-id-orange/5 border border-id-orange/10 rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm mb-4">
                  <item.icon className="w-7 h-7 text-id-orange" />
                </div>
                <h3 className="font-heading font-bold text-lg text-id-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="section-padding-sm">
        <div className="container-tight">
          <div className="glass-card p-8 md:p-10 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-id-orange fill-id-orange" />
              ))}
            </div>
            <blockquote className="font-body text-lg text-gray-600 leading-relaxed mb-4 italic max-w-2xl mx-auto">
              &ldquo;{TESTIMONIALS[0].text}&rdquo;
            </blockquote>
            <p className="font-heading font-semibold text-id-charcoal">
              {TESTIMONIALS[0].name}
            </p>
            <p className="font-body text-sm text-gray-400">
              {TESTIMONIALS[0].location} — {TESTIMONIALS[0].service}
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

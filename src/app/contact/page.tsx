// ─────────────────────────────────────────────
// ID Home — Page de contact (enrichie)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, Star, ArrowRight, HelpCircle } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import ContactForm from "@/components/forms/ContactForm";
import TrustIndicators from "@/components/ui/TrustIndicators";
import ZonesIntervention from "@/components/sections/ZonesIntervention";
import StatsBar from "@/components/sections/StatsBar";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema } from "@/components/seo/schemas";
import { createPageMetadata } from "@/lib/metadata";
import { COMPANY, SITE_URL, TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Contact — Dépannage & Rénovation Levallois-Perret",
  description:
    "Contactez ID Home à Levallois-Perret pour vos travaux de rénovation ou dépannage d'urgence en Île-de-France. Appelez le 06 58 97 14 39 ou remplissez notre formulaire. Devis gratuit.",
  keywords: ["contact", "devis", "téléphone", "dépannage Levallois-Perret", "rénovation Île-de-France"],
  path: "/contact",
});

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    highlight: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: COMPANY.emailHref,
    highlight: false,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: COMPANY.hours,
    sub: COMPANY.hoursUrgency,
    highlight: false,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: COMPANY.address.full,
    sub: "Île-de-France & alentours",
    highlight: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema(
          "Contact — ID Home",
          "Contactez ID Home pour vos travaux de rénovation ou dépannage",
          `${SITE_URL}/contact`
        )}
      />

      <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

      {/* En-tête décoratif */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-id-cream/50 via-white to-id-orange/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-id-orange/3 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative container-wide py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">
              Contactez-<span className="text-id-orange">nous</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Une question, un projet ou une urgence ? Nous sommes à votre
              écoute et nous vous répondons sous 24 heures.
            </p>
          </div>
        </div>
      </section>

      {/* Barre de confiance */}
      <section className="py-6">
        <div className="container-wide">
          <TrustIndicators />
        </div>
      </section>

      {/* Contenu principal : Infos + Formulaire */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Informations de contact */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-2xl text-id-charcoal mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-id-orange/20 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-id-orange/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-id-orange" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm text-id-gray mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`font-body text-base ${
                            item.highlight
                              ? "text-id-orange font-semibold text-lg"
                              : "text-id-charcoal hover:text-id-orange"
                          } transition-colors`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-base text-id-charcoal">
                          {item.value}
                        </p>
                      )}
                      {item.sub && (
                        <p className="font-body text-sm text-id-orange font-medium mt-0.5">
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini carte CTA urgence */}
              <div className="mt-6 p-5 rounded-xl bg-id-orange/5 border border-id-orange/15">
                <p className="font-heading font-bold text-sm text-id-charcoal mb-1">
                  Besoin d&apos;une intervention urgente ?
                </p>
                <p className="font-body text-sm text-gray-500 mb-3">
                  Nos artisans sont disponibles 7J/7.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-2 text-id-orange font-heading font-semibold text-sm hover:gap-3 transition-all"
                >
                  Appeler maintenant <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <div className="glass-card p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-body text-sm text-gray-500">
                    Réponse garantie sous 24h
                  </span>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="section-padding-sm bg-id-cream/30">
        <div className="container-wide">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
            Notre <span className="text-id-orange">localisation</span>
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100" style={{ height: 400 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.5!2d2.2878!3d48.8942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUzJzM5LjEiTiAywrAxNycxNi4xIkU!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ID Home — Levallois-Perret"
            />
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <ZonesIntervention />

      {/* Mini FAQ — Questions sur le contact */}
      <section className="section-padding-sm">
        <div className="container-tight">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
            Questions sur le <span className="text-id-orange">contact</span>
          </h2>
          <div className="space-y-4">
            <details className="group glass-card p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-id-orange flex-shrink-0" />
                  Sous quel délai recevrai-je une réponse ?
                </span>
                <span className="ml-4 text-id-orange text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 font-body text-gray-500 leading-relaxed pl-8">
                Nous nous engageons à répondre à toutes les demandes sous 24 heures ouvrées. Pour les urgences, appelez directement notre numéro.
              </p>
            </details>

            <details className="group glass-card p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-id-orange flex-shrink-0" />
                  Proposez-vous des devis gratuits ?
                </span>
                <span className="ml-4 text-id-orange text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 font-body text-gray-500 leading-relaxed pl-8">
                Oui, tous nos devis sont 100% gratuits et sans engagement. Remplissez le formulaire ou appelez-nous pour en bénéficier.
              </p>
            </details>

            <details className="group glass-card p-6 cursor-pointer">
              <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none">
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-id-orange flex-shrink-0" />
                  Intervenez-vous le week-end ?
                </span>
                <span className="ml-4 text-id-orange text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 font-body text-gray-500 leading-relaxed pl-8">
                Oui, nos artisans sont disponibles 7J/7 pour les dépannages d&apos;urgence (plomberie, électricité, serrurerie).
              </p>
            </details>
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

      {/* Chiffres clés */}
      <StatsBar />

      {/* Mini CTA bande */}
      <section className="cta-band py-10">
        <div className="container-wide text-center">
          <h2 className="font-heading font-bold text-2xl text-white mb-3">
            Pas encore convaincu ? Appelez-nous !
          </h2>
          <p className="font-body text-white/80 mb-6">
            Un conseiller vous répond immédiatement pour vous orienter.
          </p>
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-id-orange font-heading font-bold text-lg rounded-full hover:bg-gray-50 transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            {COMPANY.phone}
          </a>
        </div>
      </section>
    </>
  );
}

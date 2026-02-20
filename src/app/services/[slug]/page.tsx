// ─────────────────────────────────────────────
// ID Home — Page de service dynamique (enrichie)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  Phone,
  FileText,
  PhoneCall,
  ClipboardCheck,
  Star,
  Shield,
  Euro,
  Timer,
  Quote,
  Clock,
  Wrench,
} from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Button from "@/components/ui/Button";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import RelatedServices from "@/components/sections/RelatedServices";
import ZonesIntervention from "@/components/sections/ZonesIntervention";
import JsonLd from "@/components/seo/JsonLd";
import { createServiceSchema, createFAQSchema } from "@/components/seo/schemas";
import { services, getServiceBySlug } from "@/lib/services-data";
import { COMPANY } from "@/lib/constants";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { blogPosts } from "@/lib/blog-data";

// Génération statique pour tous les slugs
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Métadonnées dynamiques
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Service introuvable" };

    return {
      title: service.seo.title,
      description: service.seo.description,
      keywords: service.seo.keywords,
      openGraph: {
        title: service.seo.title,
        description: service.seo.description,
        locale: "fr_FR",
        type: "website",
      },
    };
  });
}

const processSteps = [
  {
    icon: FileText,
    title: "Demande de devis",
    description: "Décrivez votre besoin en ligne ou par téléphone",
  },
  {
    icon: PhoneCall,
    title: "Prise de contact",
    description: "Un expert vous rappelle sous 24h",
  },
  {
    icon: ClipboardCheck,
    title: "Intervention",
    description: "Nous intervenons rapidement et efficacement",
  },
];

const advantageIcons = [Shield, Clock, FileText, CheckCircle, Wrench];

const categoryMap: Record<string, string> = {
  plomberie: "Plomberie",
  electricite: "Électricité",
  serrurerie: "Serrurerie",
  peinture: "Peinture",
  isolation: "Isolation",
  "renovation-complete": "Rénovation",
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedPosts = blogPosts
    .filter((p) => p.category === categoryMap[service.slug])
    .slice(0, 2);

  return (
    <>
      {/* ───── 1. Schemas JSON-LD ───── */}
      <JsonLd data={createServiceSchema(service)} />
      <JsonLd data={createFAQSchema(service.faq)} />

      {/* ───── 2. Breadcrumb ───── */}
      <Breadcrumb
        items={[
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />

      {/* ───── 3. En-tête du service avec fond décoratif ───── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-id-cream/50 via-white to-id-orange/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative section-padding-sm">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Contenu */}
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-id-orange/10 mb-6">
                  <Icon className="w-8 h-8 text-id-orange" />
                </div>

                {service.urgent && (
                  <span className="inline-block text-xs text-id-orange font-semibold bg-id-orange/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                    Urgence 7J/7
                  </span>
                )}

                <h1 className="section-title mb-6">{service.name}</h1>
                <p className="font-body text-lg text-gray-500 leading-relaxed mb-8">
                  {service.fullDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    as="anchor"
                    href={COMPANY.phoneHref}
                    variant="primary"
                    size="lg"
                    icon={<Phone className="w-5 h-5" />}
                  >
                    {COMPANY.phone}
                  </Button>
                  <Button as="link" href="/devis-gratuit" variant="outline" size="lg">
                    Devis gratuit
                  </Button>
                </div>
              </div>

              {/* Image du service */}
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={`/images/services/${service.slug}.jpg`}
                  alt={`${service.name} — ID Home`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 4. Étapes du processus ───── */}
      <section className="py-8 md:py-12">
        <div className="container-wide">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
            Comment ça <span className="text-id-orange">marche</span> ?
          </h2>
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

      {/* ───── 5. Nos avantages ───── */}
      <section className="section-padding-sm bg-id-cream/30">
        <div className="container-wide">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
            Nos <span className="text-id-orange">avantages</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.advantages.map((advantage, index) => {
              const AdvIcon = advantageIcons[index % advantageIcons.length];
              return (
                <div
                  key={advantage}
                  className="glass-card p-6 flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-id-orange/10 flex items-center justify-center">
                    <AdvIcon className="w-6 h-6 text-id-orange" />
                  </div>
                  <p className="font-body text-sm md:text-base text-id-charcoal leading-relaxed">
                    {advantage}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── 6. Tarifs & Durée estimée ───── */}
      <section className="section-padding-sm">
        <div className="container-tight">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Tarifs */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-id-orange/10 mb-4">
                <Euro className="w-7 h-7 text-id-orange" />
              </div>
              <h3 className="font-heading font-bold text-lg text-id-charcoal mb-2">
                Tarif indicatif
              </h3>
              <p className="font-heading font-bold text-2xl text-id-orange mb-2">
                {service.priceRange}
              </p>
              <p className="font-body text-sm text-gray-500">
                Devis gratuit et sans engagement
              </p>
            </div>

            {/* Durée estimée */}
            <div className="glass-card p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-id-orange/10 mb-4">
                <Timer className="w-7 h-7 text-id-orange" />
              </div>
              <h3 className="font-heading font-bold text-lg text-id-charcoal mb-2">
                Durée estimée
              </h3>
              <p className="font-heading font-bold text-2xl text-id-orange mb-2">
                {service.estimatedTime}
              </p>
              <p className="font-body text-sm text-gray-500">
                Selon la complexité de l&apos;intervention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── 7. Liste des prestations ───── */}
      <section className="section-padding bg-id-cream/30">
        <div className="container-wide">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8">
            Nos prestations en <span className="text-id-orange">{service.name.toLowerCase()}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-id-orange flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm md:text-base text-id-charcoal">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 8. Galerie d'images ───── */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`/images/services/${service.slug}-detail-1.jpg`}
                alt={`${service.name} — Réalisation ID Home`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={`/images/services/${service.slug}-detail-2.jpg`}
                alt={`${service.name} — Détail intervention ID Home`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── 9. Témoignage client ───── */}
      <section className="section-padding-sm bg-id-cream/30">
        <div className="container-tight">
          <div className="glass-card p-8 md:p-10 text-center relative">
            <Quote className="w-10 h-10 text-id-orange/20 mx-auto mb-4" />

            {/* Étoiles */}
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < service.testimonial.rating
                      ? "text-id-orange fill-id-orange"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <blockquote className="font-body text-lg md:text-xl text-id-charcoal leading-relaxed mb-6 italic">
              &ldquo;{service.testimonial.text}&rdquo;
            </blockquote>

            <p className="font-heading font-semibold text-id-charcoal">
              {service.testimonial.name}
            </p>
          </div>
        </div>
      </section>

      {/* ───── 10. Zones d'intervention ───── */}
      <ZonesIntervention zones={service.zones} />

      {/* ───── 11. FAQ du service ───── */}
      <section className="section-padding bg-id-cream/30">
        <div className="container-tight">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
            Questions fréquentes — <span className="text-id-orange">{service.name}</span>
          </h2>
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details
                key={item.question}
                className="group glass-card p-6 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-heading font-semibold text-id-charcoal list-none">
                  {item.question}
                  <span className="ml-4 text-id-orange text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 font-body text-gray-500 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 12. Articles utiles (blog posts liés) ───── */}
      {relatedPosts.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
              Articles <span className="text-id-orange">utiles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {relatedPosts.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  datePublished={post.datePublished}
                  readTime={post.readTime}
                  image={post.image}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── 13. Services associés ───── */}
      <RelatedServices
        excludeSlug={service.slug}
        max={3}
        title="Nos autres services"
      />

      {/* ───── 14. CTA final ───── */}
      <CTASection />
    </>
  );
}

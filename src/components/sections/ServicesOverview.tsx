"use client";

// ─────────────────────────────────────────────
// ID Home — Grille des services (Animated)
// ─────────────────────────────────────────────

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/services-data";
import { AnimatedSection, StaggerChildren } from "@/components/motion";

export default function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* En-tête de section */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">
            Nos <span className="text-id-orange">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Du dépannage d&apos;urgence à la rénovation complète, nous intervenons
            pour tous vos besoins.
          </p>
        </AnimatedSection>

        {/* Grille des services */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.1}
        >
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services/${service.slug}`}
              urgent={service.urgent}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

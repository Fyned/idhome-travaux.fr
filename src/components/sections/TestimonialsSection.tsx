"use client";

// ─────────────────────────────────────────────
// ID Home — Section témoignages (Animated)
// ─────────────────────────────────────────────

import TestimonialCard from "@/components/ui/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";
import { AnimatedSection, StaggerChildren } from "@/components/motion";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-id-cream/30 relative overflow-hidden">
      {/* Subtle gradient mesh */}
      <div className="gradient-mesh absolute inset-0 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* En-tête de section */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="section-title mb-4">
            Ce que disent nos <span className="text-id-orange">clients</span>
          </h2>
          <p className="section-subtitle mx-auto">
            La satisfaction de nos clients est notre plus belle récompense.
          </p>
        </AnimatedSection>

        {/* Grille des témoignages */}
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          stagger={0.12}
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              text={testimonial.text}
              service={testimonial.service}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

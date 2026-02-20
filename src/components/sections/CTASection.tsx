"use client";

// ─────────────────────────────────────────────
// ID Home — Bande CTA orange (Animated)
// ─────────────────────────────────────────────

import { Phone, FileText } from "lucide-react";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { AnimatedSection, MagneticButton } from "@/components/motion";

export default function CTASection() {
  return (
    <section className="cta-band py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Subtle radial shine */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container-wide text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Un projet ? Une urgence ?
          </h2>
          <p className="font-body text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8">
            Contactez-nous dès maintenant pour un devis gratuit et sans engagement.
            Intervention rapide garantie.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Button
                as="anchor"
                href={COMPANY.phoneHref}
                variant="white"
                size="lg"
                icon={<Phone className="w-5 h-5" />}
              >
                {COMPANY.phone}
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                as="link"
                href="/devis-gratuit"
                variant="outline"
                size="lg"
                icon={<FileText className="w-5 h-5" />}
                className="border-white text-white hover:bg-white hover:text-id-orange"
              >
                Devis gratuit
              </Button>
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

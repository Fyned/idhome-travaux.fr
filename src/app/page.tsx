// ─────────────────────────────────────────────
// ID Home — Page d'accueil
// ─────────────────────────────────────────────

import Hero from "@/components/sections/Hero";
import TrustBadgeBar from "@/components/sections/TrustBadgeBar";
import ServicesOverview from "@/components/sections/ServicesOverview";
import RealisationsPreview from "@/components/sections/RealisationsPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import StatsCounter from "@/components/sections/StatsCounter";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQPreview from "@/components/sections/FAQPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema } from "@/components/seo/schemas";
import { SITE_URL, COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema(
          "ID Home — Rénovation & Dépannage d'urgence 7J/7",
          COMPANY.description,
          SITE_URL
        )}
      />
      <Hero />
      <TrustBadgeBar />
      <ServicesOverview />
      <RealisationsPreview />
      <WhyChooseUs />
      <StatsCounter />
      <ProcessSection />
      <TestimonialsSection />
      <BlogPreview />
      <FAQPreview />
      <AboutPreview />
      <CTASection />
    </>
  );
}

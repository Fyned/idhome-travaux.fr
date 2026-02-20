"use client";

// ─────────────────────────────────────────────
// ID Home — Hero plein écran avec slider + animations
// ─────────────────────────────────────────────

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Phone, FileText, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import { MagneticButton, FloatingOrbs } from "@/components/motion";

const HERO_SLIDES = [
  {
    id: 1,
    src: "/images/hero/slide-1.png",
    alt: "Rénovation intérieure moderne — ID Home",
  },
  {
    id: 2,
    src: "/images/hero/slide-2.png",
    alt: "Plombier professionnel au travail — ID Home",
  },
  {
    id: 3,
    src: "/images/hero/slide-3.png",
    alt: "Peinture intérieure professionnelle — ID Home",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // Auto-play toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-screen overflow-hidden -mt-[80px] lg:-mt-[104px]">
      {/* ── Slides d'arrière-plan ─── */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        const isPrev = index === (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;
        if (!isActive && !isPrev) return null;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? "hero-slide-active" : "hero-slide-inactive"}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
          </div>
        );
      })}

      {/* ── Overlay gradient sombre ─── */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* ── Floating orbs decoration ─── */}
      <div className="absolute inset-0 z-10">
        <FloatingOrbs count={3} color="bg-id-orange" maxOpacity={0.08} />
      </div>

      {/* ── Contenu overlay ─── */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container-wide pt-32 lg:pt-40 pb-20">
          <div className="max-w-4xl">
            {/* Badge urgence */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="w-2 h-2 rounded-full bg-id-orange animate-pulse" />
              <span className="text-sm text-white font-body font-medium tracking-wide uppercase">
                Dépannage d&apos;urgence 7J/7
              </span>
            </motion.div>

            {/* Titre principal — staggered reveal */}
            <h1>
              <motion.span
                className="block font-heading font-black text-display text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Intervention
              </motion.span>
              <motion.span
                className="block font-heading font-black text-display text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Rapide{" "}
                <span className="text-id-orange">7J/7</span>
              </motion.span>
            </h1>

            {/* Sous-titre */}
            <motion.p
              className="mt-6 md:mt-8 font-body text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Rénovation &amp; Dépannage d&apos;urgence pour votre habitation.
              Plomberie, électricité, serrurerie.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <MagneticButton strength={25}>
                <Button
                  as="anchor"
                  href={COMPANY.phoneHref}
                  variant="primary"
                  size="lg"
                  icon={<Phone className="w-5 h-5" />}
                  className="animate-pulse-glow"
                >
                  Appeler maintenant
                </Button>
              </MagneticButton>
              <MagneticButton strength={20}>
                <Button
                  as="link"
                  href="/devis-gratuit"
                  variant="outline-white"
                  size="lg"
                  icon={<FileText className="w-5 h-5" />}
                >
                  Devis gratuit
                </Button>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Indicateurs de slide (dots) ─── */}
      <motion.div
        className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-id-orange w-8"
                : "bg-white/50 hover:bg-white/80 w-3"
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* ── Indicateur de scroll ─── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block animate-scroll-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <ArrowDown className="w-5 h-5 text-white/50" />
      </motion.div>
    </section>
  );
}

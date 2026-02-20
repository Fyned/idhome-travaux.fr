"use client";

// ─────────────────────────────────────────────
// ID Home — Aperçu À propos (Animated)
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Shield, Clock } from "lucide-react";
import { STATS } from "@/lib/constants";
import { AnimatedSection, StaggerChildren } from "@/components/motion";

const HIGHLIGHTS = [
  { icon: Award, text: "Artisans qualifiés et expérimentés" },
  { icon: Shield, text: "Garantie décennale sur tous nos travaux" },
  { icon: Clock, text: "Intervention rapide 7J/7" },
];

export default function AboutPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left" className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/team.jpg"
                alt="L'équipe ID Home — Artisans qualifiés"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl shadow-lg p-4 sm:p-5 border border-gray-100">
              <div className="flex items-center gap-4">
                {STATS.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-heading font-black text-2xl sm:text-3xl text-id-orange">
                      {stat.value}
                    </div>
                    <p className="font-body text-xs text-gray-500 whitespace-nowrap">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Contenu */}
          <AnimatedSection direction="right" className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              À propos
            </span>
            <h2 className="section-title mb-6">
              Votre partenaire{" "}
              <span className="text-id-orange">de confiance</span>
            </h2>
            <p className="font-body text-gray-500 leading-relaxed mb-4">
              Depuis plus de 10 ans,{" "}
              <strong className="text-id-charcoal">ID Home</strong> accompagne
              les particuliers dans tous leurs projets de rénovation et de
              dépannage d&apos;urgence en Île-de-France.
            </p>
            <p className="font-body text-gray-500 leading-relaxed mb-8">
              Notre équipe d&apos;artisans qualifiés intervient avec rigueur et
              professionnalisme pour transformer votre habitat et résoudre
              rapidement vos problèmes du quotidien.
            </p>

            {/* Points forts */}
            <StaggerChildren className="space-y-3 mb-8" stagger={0.1}>
              {HIGHLIGHTS.map((item) => (
                <div key={item.text} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-id-orange/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-id-orange/15 transition-all duration-300">
                    <item.icon className="w-4.5 h-4.5 text-id-orange" />
                  </div>
                  <span className="font-body text-sm text-id-charcoal font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </StaggerChildren>

            <Link
              href="/a-propos"
              className="link-underline inline-flex items-center gap-2 font-heading font-semibold text-id-orange hover:gap-3 transition-all"
            >
              En savoir plus sur ID Home
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

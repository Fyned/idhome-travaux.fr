"use client";

// ─────────────────────────────────────────────
// ID Home — Barre de badges de confiance (Animated)
// ─────────────────────────────────────────────

import { ClipboardCheck, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { StaggerChildren } from "@/components/motion";

const badges = [
  { text: "Devis gratuit", Icon: ClipboardCheck },
  { text: "Prix transparents", Icon: ShieldCheck },
  { text: "Intervention 7J/7", Icon: Clock },
  { text: "Artisans qualifiés", Icon: BadgeCheck },
];

export default function TrustBadgeBar() {
  return (
    <section className="bg-id-cream/50 border-y border-gray-100">
      <div className="container-wide py-6 md:py-8">
        <StaggerChildren
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          direction="scale"
          stagger={0.08}
        >
          {badges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center justify-center gap-3"
            >
              <badge.Icon className="w-5 h-5 text-id-orange flex-shrink-0" />
              <span className="font-heading font-semibold text-sm md:text-base text-id-charcoal">
                {badge.text}
              </span>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

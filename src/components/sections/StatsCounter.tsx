"use client";

// ─────────────────────────────────────────────
// ID Home — Compteurs animés (Spring Physics)
// ─────────────────────────────────────────────

import { STATS } from "@/lib/constants";
import { CounterSpring, StaggerChildren, FloatingOrbs } from "@/components/motion";

export default function StatsCounter() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Floating background decoration */}
      <FloatingOrbs count={3} />

      <div className="container-wide relative z-10">
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          stagger={0.15}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-id-orange mb-2">
                <CounterSpring value={stat.value} />
              </div>
              <p className="font-body text-base md:text-lg text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

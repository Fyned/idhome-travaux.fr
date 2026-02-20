// ─────────────────────────────────────────────
// ID Home — Barre de statistiques compacte
// ─────────────────────────────────────────────

import { STATS } from "@/lib/constants";

interface StatsBarProps {
  title?: string;
  className?: string;
}

export default function StatsBar({ title, className = "" }: StatsBarProps) {
  return (
    <section className={`section-padding-sm bg-id-cream/30 ${className}`}>
      <div className="container-wide">
        {title && (
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-black text-5xl md:text-6xl text-id-orange mb-2">
                {stat.value}
              </div>
              <p className="font-body text-base text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

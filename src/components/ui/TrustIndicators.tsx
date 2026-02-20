// ─────────────────────────────────────────────
// ID Home — Barre de confiance (3 garanties)
// ─────────────────────────────────────────────

import { FileCheck, Clock, Ban } from "lucide-react";

const indicators = [
  {
    icon: FileCheck,
    text: "Devis gratuit",
    sub: "Sans surprise",
  },
  {
    icon: Clock,
    text: "Réponse rapide",
    sub: "Sous 24 heures",
  },
  {
    icon: Ban,
    text: "Sans engagement",
    sub: "Zéro obligation",
  },
];

export default function TrustIndicators() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {indicators.map((item) => (
        <div
          key={item.text}
          className="flex items-center gap-3 p-4 rounded-xl bg-id-orange/5 border border-id-orange/10"
        >
          <div className="w-10 h-10 rounded-lg bg-id-orange/10 flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5 text-id-orange" />
          </div>
          <div>
            <p className="font-heading font-semibold text-sm text-id-charcoal">
              {item.text}
            </p>
            <p className="font-body text-xs text-gray-400">{item.sub}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

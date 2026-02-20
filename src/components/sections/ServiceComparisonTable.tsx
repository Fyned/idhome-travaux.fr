// ─────────────────────────────────────────────
// ID Home — Tableau comparatif Urgence vs Rénovation
// ─────────────────────────────────────────────

import { AlertTriangle, Home, Clock, Euro, Shield, Calendar } from "lucide-react";

const comparisons = [
  {
    label: "Disponibilité",
    icon: Clock,
    urgence: "7J/7, jours fériés inclus",
    renovation: "Du lundi au samedi, 9h–18h",
  },
  {
    label: "Délai d'intervention",
    icon: Calendar,
    urgence: "30 min à 2h",
    renovation: "Sous 48h après devis",
  },
  {
    label: "Tarification",
    icon: Euro,
    urgence: "À partir de 80€",
    renovation: "Sur devis personnalisé",
  },
  {
    label: "Garantie",
    icon: Shield,
    urgence: "Garantie sur la réparation",
    renovation: "Garantie décennale",
  },
];

export default function ServiceComparisonTable() {
  return (
    <section className="section-padding-sm">
      <div className="container-wide">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
          Urgence ou <span className="text-id-orange">Rénovation</span> ?
        </h2>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-100">
          {/* En-tête du tableau */}
          <div className="grid grid-cols-3 bg-id-cream/50">
            <div className="p-4" />
            <div className="p-4 text-center border-l border-gray-100">
              <div className="inline-flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <span className="font-heading font-bold text-sm text-id-charcoal">
                  Dépannage d&apos;urgence
                </span>
              </div>
            </div>
            <div className="p-4 text-center border-l border-gray-100">
              <div className="inline-flex items-center gap-2">
                <Home className="w-5 h-5 text-id-orange" />
                <span className="font-heading font-bold text-sm text-id-charcoal">
                  Rénovation
                </span>
              </div>
            </div>
          </div>
          {/* Lignes */}
          {comparisons.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-3 border-t border-gray-100"
            >
              <div className="p-4 flex items-center gap-2">
                <row.icon className="w-4 h-4 text-id-orange flex-shrink-0" />
                <span className="font-heading font-semibold text-sm text-id-charcoal">
                  {row.label}
                </span>
              </div>
              <div className="p-4 text-center border-l border-gray-100">
                <span className="font-body text-sm text-gray-600">
                  {row.urgence}
                </span>
              </div>
              <div className="p-4 text-center border-l border-gray-100">
                <span className="font-body text-sm text-gray-600">
                  {row.renovation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

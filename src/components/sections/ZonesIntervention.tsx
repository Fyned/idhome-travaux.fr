// ─────────────────────────────────────────────
// ID Home — Zones d'intervention
// ─────────────────────────────────────────────

import { MapPin } from "lucide-react";

interface ZonesInterventionProps {
  zones?: string[];
  title?: string;
}

const defaultZones = [
  "Levallois-Perret",
  "Neuilly-sur-Seine",
  "Paris",
  "Courbevoie",
  "Boulogne-Billancourt",
  "Clichy",
  "Asnières-sur-Seine",
  "Puteaux",
  "Suresnes",
  "La Défense",
  "Nanterre",
  "Colombes",
  "Rueil-Malmaison",
  "Saint-Cloud",
  "Issy-les-Moulineaux",
];

export default function ZonesIntervention({
  zones = defaultZones,
  title = "Nos zones d'intervention",
}: ZonesInterventionProps) {
  return (
    <section className="section-padding-sm">
      <div className="container-wide">
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-3">
            {title}
          </h2>
          <p className="font-body text-gray-500 max-w-2xl mx-auto">
            Nous intervenons dans tout l&apos;ouest parisien et les Hauts-de-Seine.
            Contactez-nous pour vérifier la disponibilité dans votre secteur.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {zones.map((zone) => (
            <span
              key={zone}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-gray-100 font-body text-sm text-id-charcoal shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-id-orange" />
              {zone}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

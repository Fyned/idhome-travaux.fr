// ─────────────────────────────────────────────
// ID Home — Carte de témoignage (Enhanced with shine)
// ─────────────────────────────────────────────

import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  service,
}: TestimonialCardProps) {
  return (
    <div className="glass-card shine-sweep p-6 md:p-8 flex flex-col">
      {/* Icône citation */}
      <Quote className="w-8 h-8 text-id-orange/20 mb-4" />

      {/* Étoiles */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-id-orange fill-id-orange"
                : "text-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Texte du témoignage */}
      <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed flex-1 mb-6">
        &ldquo;{text}&rdquo;
      </p>

      {/* Auteur */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <div>
          <p className="font-heading font-semibold text-sm text-id-charcoal">
            {name}
          </p>
          <p className="font-body text-xs text-gray-400">{location}</p>
        </div>
        <span className="text-xs font-medium text-id-orange bg-id-orange/10 px-2.5 py-1 rounded-full">
          {service}
        </span>
      </div>
    </div>
  );
}

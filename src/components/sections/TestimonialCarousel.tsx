// ─────────────────────────────────────────────
// ID Home — Section témoignages clients
// ─────────────────────────────────────────────

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

interface TestimonialCarouselProps {
  title?: string;
  max?: number;
}

export default function TestimonialCarousel({
  title = "Ce que disent nos clients",
  max = 3,
}: TestimonialCarouselProps) {
  const displayed = TESTIMONIALS.slice(0, max);

  return (
    <section className="section-padding-sm">
      <div className="container-wide">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayed.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-id-orange/10" />
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-id-orange fill-id-orange"
                  />
                ))}
              </div>
              <p className="font-body text-sm text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-3">
                <p className="font-heading font-semibold text-sm text-id-charcoal">
                  {testimonial.name}
                </p>
                <p className="font-body text-xs text-gray-400">
                  {testimonial.location} — {testimonial.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

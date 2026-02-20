// ─────────────────────────────────────────────
// ID Home — Section "Nos autres services"
// ─────────────────────────────────────────────

import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/services-data";

interface RelatedServicesProps {
  excludeSlug?: string;
  max?: number;
  title?: string;
}

export default function RelatedServices({
  excludeSlug,
  max = 3,
  title = "Nos autres services",
}: RelatedServicesProps) {
  const filtered = excludeSlug
    ? services.filter((s) => s.slug !== excludeSlug)
    : services;

  const displayed = filtered.slice(0, max);

  return (
    <section className="section-padding-sm bg-id-cream/30">
      <div className="container-wide">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              description={service.shortDescription}
              icon={service.icon}
              href={`/services/${service.slug}`}
              urgent={service.urgent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

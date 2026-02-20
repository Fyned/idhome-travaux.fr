// ─────────────────────────────────────────────
// ID Home — En-tête de page réutilisable
// ─────────────────────────────────────────────

interface PageHeaderProps {
  title: string;
  titleHighlight: string;
  subtitle: string;
  centered?: boolean;
}

export default function PageHeader({
  title,
  titleHighlight,
  subtitle,
  centered = true,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Fond décoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-id-cream/50 via-white to-id-orange/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-id-orange/3 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative container-wide py-12 md:py-16 lg:py-20">
        <div className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
          <h1 className="section-title mb-4">
            {title} <span className="text-id-orange">{titleHighlight}</span>
          </h1>
          <p className="section-subtitle mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

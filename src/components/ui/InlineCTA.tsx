// ─────────────────────────────────────────────
// ID Home — CTA inline pour articles de blog
// ─────────────────────────────────────────────

import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

interface InlineCTAProps {
  title?: string;
  description?: string;
}

export default function InlineCTA({
  title = "Besoin d'aide ?",
  description = "Nos artisans sont disponibles 7J/7 pour vos urgences et projets de rénovation.",
}: InlineCTAProps) {
  return (
    <div className="my-10 p-6 rounded-2xl bg-gradient-to-r from-id-orange/5 to-id-cream/50 border border-id-orange/10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <h4 className="font-heading font-bold text-id-charcoal mb-1">
            {title}
          </h4>
          <p className="font-body text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-id-orange text-white font-heading font-semibold text-sm rounded-full hover:bg-id-orange-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
          <Link
            href="/devis-gratuit"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-id-charcoal text-id-charcoal font-heading font-semibold text-sm rounded-full hover:bg-id-charcoal hover:text-white transition-colors"
          >
            Devis gratuit
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

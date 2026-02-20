// ─────────────────────────────────────────────
// ID Home — Barre d'action fixe en bas (mobile)
// ─────────────────────────────────────────────

import { Phone, FileText } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-2 divide-x divide-gray-100">
        {/* Appeler */}
        <a
          href={COMPANY.phoneHref}
          className="flex items-center justify-center gap-2 py-3.5 text-white bg-id-orange font-heading font-semibold text-sm active:bg-id-orange-dark transition-colors"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>

        {/* Devis gratuit */}
        <a
          href="/devis-gratuit"
          className="flex items-center justify-center gap-2 py-3.5 text-id-charcoal font-heading font-semibold text-sm hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <FileText className="w-4 h-4" />
          Devis gratuit
        </a>
      </div>
    </div>
  );
}

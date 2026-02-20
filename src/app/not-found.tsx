// ─────────────────────────────────────────────
// ID Home — Page 404
// ─────────────────────────────────────────────

import { Home } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="container-tight text-center">
        {/* Gros 404 */}
        <div className="font-heading font-black text-[120px] sm:text-[160px] md:text-[200px] leading-none text-id-orange/10 mb-4 select-none">
          404
        </div>

        <h1 className="font-heading font-bold text-3xl md:text-4xl text-id-charcoal mb-4 -mt-12">
          Page introuvable
        </h1>
        <p className="font-body text-lg text-gray-500 max-w-md mx-auto mb-8">
          Désolé, la page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>

        <Button
          as="link"
          href="/"
          variant="primary"
          size="lg"
          icon={<Home className="w-5 h-5" />}
        >
          Retour à l&apos;accueil
        </Button>
      </div>
    </section>
  );
}

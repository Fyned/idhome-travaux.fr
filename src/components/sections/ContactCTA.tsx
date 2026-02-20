// ─────────────────────────────────────────────
// ID Home — Bloc CTA contact "Encore des questions?"
// ─────────────────────────────────────────────

import { Phone, Mail, MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
}

export default function ContactCTA({
  title = "Vous n'avez pas trouvé votre réponse ?",
  subtitle = "Notre équipe est à votre disposition pour répondre à toutes vos questions.",
}: ContactCTAProps) {
  return (
    <section className="section-padding-sm">
      <div className="container-tight">
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          {/* Fond décoratif */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-id-orange/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-id-orange/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-3">
              {title}
            </h2>
            <p className="font-body text-gray-500 mb-8 max-w-lg mx-auto">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-id-orange text-white font-heading font-semibold rounded-full cta-glow hover:bg-id-orange-dark transition-all"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.emailHref}
                className="inline-flex items-center gap-2.5 px-6 py-3 border-2 border-id-charcoal text-id-charcoal font-heading font-semibold rounded-full hover:bg-id-charcoal hover:text-white transition-all"
              >
                <Mail className="w-5 h-5" />
                Envoyer un email
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-green-500 text-white font-heading font-semibold rounded-full hover:bg-green-600 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

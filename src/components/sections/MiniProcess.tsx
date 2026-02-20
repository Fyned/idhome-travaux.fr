// ─────────────────────────────────────────────
// ID Home — Section mini processus (3-4 étapes)
// ─────────────────────────────────────────────

import { Phone, FileText, Wrench, CheckCircle, type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MiniProcessProps {
  title?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    icon: Phone,
    title: "Contactez-nous",
    description: "Par téléphone ou via le formulaire en ligne",
  },
  {
    icon: FileText,
    title: "Devis gratuit",
    description: "Nous étudions votre projet et établissons un devis détaillé",
  },
  {
    icon: Wrench,
    title: "Réalisation",
    description: "Nos artisans interviennent avec professionnalisme",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction",
    description: "Vérification finale et garantie sur nos travaux",
  },
];

export default function MiniProcess({
  title = "Comment ça marche ?",
  steps = defaultSteps,
}: MiniProcessProps) {
  return (
    <section className="section-padding-sm bg-id-cream/30">
      <div className="container-wide">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-id-orange" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-id-orange text-white text-xs font-bold rounded-full flex items-center justify-center shadow">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-heading font-bold text-sm text-id-charcoal mb-1">
                {step.title}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

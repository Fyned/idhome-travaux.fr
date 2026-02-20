// ─────────────────────────────────────────────
// ID Home — Carte de service (Enhanced with shine)
// ─────────────────────────────────────────────

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import clsx from "clsx";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  urgent?: boolean;
  className?: string;
}

export default function ServiceCard({
  name,
  description,
  icon: Icon,
  href,
  urgent = false,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={clsx("glass-card shine-sweep group block p-6 md:p-8", className)}
    >
      {/* Icône */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-id-orange/10 mb-5 group-hover:bg-id-orange/15 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-7 h-7 text-id-orange" />
      </div>

      {/* Titre + badge urgence */}
      <div className="flex items-start gap-2 mb-2">
        <h3 className="font-heading font-bold text-xl text-id-charcoal group-hover:text-id-orange transition-colors">
          {name}
        </h3>
        {urgent && (
          <span className="flex-shrink-0 mt-1 inline-block text-[10px] text-id-orange font-semibold bg-id-orange/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
            7J/7
          </span>
        )}
      </div>

      {/* Description */}
      <p className="font-body text-sm text-gray-500 leading-relaxed mb-4">
        {description}
      </p>

      {/* Lien */}
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-id-orange opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300">
        En savoir plus
        <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}

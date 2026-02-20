// ─────────────────────────────────────────────
// ID Home — Mega-footer sombre (Server Component)
// ─────────────────────────────────────────────

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { COMPANY, LOGOS, CREATOR } from "@/lib/constants";

const serviceLinks = [
  { label: "Plomberie", href: "/services/plomberie" },
  { label: "Électricité", href: "/services/electricite" },
  { label: "Serrurerie", href: "/services/serrurerie" },
  { label: "Rénovation", href: "/services/renovation" },
  { label: "Peinture", href: "/services/peinture" },
  { label: "Isolation", href: "/services/isolation" },
];

const pageLinks = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Devis gratuit", href: "/devis-gratuit" },
  { label: "FAQ", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="footer-dark">
      {/* Contenu principal du footer */}
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Colonne 1 : Logo + Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={LOGOS.smallDark}
              alt="ID Home"
              width={200}
              height={70}
              className="h-12 w-auto mb-4"
            />
            <p className="font-body text-sm text-gray-400 leading-relaxed mb-4">
              {COMPANY.description}
            </p>
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-id-orange flex-shrink-0 mt-0.5" />
              <span>{COMPANY.address.full}</span>
            </div>
          </div>

          {/* Colonne 2 : Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Nos Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-id-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Pages */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-id-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2.5 font-body text-sm text-gray-400 hover:text-id-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-id-orange flex-shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.emailHref}
                  className="flex items-center gap-2.5 font-body text-sm text-gray-400 hover:text-id-orange transition-colors"
                >
                  <Mail className="w-4 h-4 text-id-orange flex-shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 font-body text-sm text-gray-400">
                <Clock className="w-4 h-4 text-id-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p>{COMPANY.hours}</p>
                  <p className="text-id-orange font-medium">{COMPANY.hoursUrgency}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {COMPANY.name} — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="font-body text-xs text-gray-500 hover:text-gray-400 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="font-body text-xs text-gray-500 hover:text-gray-400 transition-colors"
            >
              Confidentialité
            </Link>
            <a
              href={CREATOR.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[10px] text-gray-600 hover:text-gray-400 transition-colors"
            >
              Créé par {CREATOR.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

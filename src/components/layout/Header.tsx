"use client";

// ─────────────────────────────────────────────
// ID Home — Header transparent → orange on scroll
// ─────────────────────────────────────────────

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Menu, X, ChevronDown, ChevronRight, Facebook, Instagram } from "lucide-react";
import clsx from "clsx";
import { COMPANY, LOGOS, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { services } from "@/lib/services-data";
import Button from "@/components/ui/Button";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={clsx("fill-current", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: Facebook,
  instagram: Instagram,
  whatsapp: WhatsAppIcon,
};

export default function Header() {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Three-state header logic
  const showTransparent = isHomepage && !scrolled;
  const headerState: "transparent" | "scrolled" | "inner" = showTransparent
    ? "transparent"
    : isHomepage
      ? "scrolled"
      : "inner";
  const isDarkHeader = headerState !== "inner";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* ── Top Bar (desktop uniquement — collapse au scroll) ─── */}
        <div
          className={clsx(
            "hidden lg:block transition-all duration-300 overflow-hidden",
            showTransparent
              ? "header-top-bar max-h-12 opacity-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="container-wide flex items-center justify-between py-2">
            {/* Contact info */}
            <div className="flex items-center gap-6 text-sm text-white/80">
              <a
                href={COMPANY.phoneHref}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.emailHref}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                {COMPANY.email}
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Navigation principale ─── */}
        <div
          className={clsx(
            "transition-all duration-300",
            headerState === "transparent" && "header-nav-transparent",
            headerState === "scrolled" && "header-nav-scrolled",
            headerState === "inner" && "header-nav-inner"
          )}
        >
          <div className="container-wide">
            <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo — container sabit boyut, sadece opacity geçişi */}
            <Link
              href="/"
              className="flex-shrink-0 relative h-12 sm:h-14 lg:h-16 w-[180px] sm:w-[200px] lg:w-[240px]"
              aria-label="ID Home — Accueil"
            >
              {/* Logo blanc+orange (visible quand header transparent) */}
              <Image
                src={LOGOS.headerDark}
                alt="ID Home — Rénovation & Dépannage"
                fill
                priority
                className={clsx(
                  "object-contain object-left transition-opacity duration-300",
                  headerState === "transparent"
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                )}
              />
              {/* Logo tout blanc (visible quand header scrolled/orange) */}
              <Image
                src={LOGOS.headerWhite}
                alt="ID Home — Rénovation & Dépannage"
                fill
                className={clsx(
                  "object-contain object-left transition-opacity duration-300",
                  headerState === "scrolled"
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                )}
              />
              {/* Logo noir+orange (visible quand header inner/white) */}
              <Image
                src={LOGOS.headerLight}
                alt="ID Home — Rénovation & Dépannage"
                fill
                className={clsx(
                  "object-contain object-left transition-opacity duration-300",
                  headerState === "inner"
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                )}
              />
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <>
                      <Link
                        href={link.href}
                        className={clsx(
                          "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                          isDarkHeader
                            ? "text-white/90 hover:text-white"
                            : "text-id-charcoal hover:text-id-orange"
                        )}
                      >
                        {link.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </Link>
                      {/* Mega-menu services */}
                      <div className="mega-menu-wrapper before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-6">
                        <div className="mega-menu-panel">
                          <div className="container-wide py-6">
                            <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                              {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="flex items-start gap-3.5 p-3 -mx-3 rounded-xl hover:bg-gray-50 transition-colors group/card"
                                  >
                                    <div className="w-10 h-10 rounded-xl bg-id-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/card:bg-id-orange/20 transition-colors">
                                      <Icon className="w-5 h-5 text-id-orange" />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="flex items-center gap-2">
                                        <h4 className="font-heading font-semibold text-sm text-id-charcoal group-hover/card:text-id-orange transition-colors">
                                          {service.name}
                                        </h4>
                                        {service.urgent && (
                                          <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-id-orange/10 text-id-orange rounded-full">
                                            7J/7
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                                        {service.shortDescription}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Footer du mega-menu */}
                            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                              <Link
                                href="/services"
                                className="flex items-center gap-1.5 text-sm font-medium text-id-orange hover:text-id-orange-dark transition-colors"
                              >
                                Tous nos services
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Phone className="w-3.5 h-3.5 text-id-orange" />
                                <span>Urgence ?</span>
                                <a
                                  href={COMPANY.phoneHref}
                                  className="font-semibold text-id-orange hover:text-id-orange-dark transition-colors"
                                >
                                  {COMPANY.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={clsx(
                        "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                        isDarkHeader
                          ? "text-white/90 hover:text-white"
                          : "text-id-charcoal hover:text-id-orange"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA téléphone (desktop) */}
            <div className="hidden lg:block">
              <Button
                as="anchor"
                href={COMPANY.phoneHref}
                variant={isDarkHeader ? "outline-white" : "primary"}
                size="sm"
                icon={<Phone className="w-4 h-4" />}
              >
                {COMPANY.phone}
              </Button>
            </div>

            {/* Bouton hamburger (mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={clsx(
                "lg:hidden p-2 transition-colors",
                isDarkHeader
                  ? "text-white hover:text-id-orange"
                  : "text-id-charcoal hover:text-id-orange"
              )}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Menu mobile overlay ─── */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden",
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between py-3 text-lg font-heading font-semibold text-id-charcoal hover:text-id-orange transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={clsx(
                          "w-5 h-5 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={clsx(
                        "overflow-hidden transition-all duration-300",
                        servicesOpen ? "max-h-96" : "max-h-0"
                      )}
                    >
                      <div className="pl-2 pb-3 flex flex-col gap-1">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 py-2.5 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="w-9 h-9 rounded-lg bg-id-orange/10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-4.5 h-4.5 text-id-orange" />
                              </div>
                              <div className="min-w-0">
                                <span className="block text-sm font-semibold text-id-charcoal">
                                  {service.name}
                                </span>
                                <span className="block text-xs text-gray-400 truncate">
                                  {service.shortDescription}
                                </span>
                              </div>
                              {service.urgent && (
                                <span className="ml-auto px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-id-orange/10 text-id-orange rounded-full flex-shrink-0">
                                  7J/7
                                </span>
                              )}
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-2 mt-1 py-2 px-2 text-sm font-medium text-id-orange hover:text-id-orange-dark transition-colors"
                        >
                          Voir tous les services
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-heading font-semibold text-id-charcoal hover:text-id-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA mobile */}
          <div className="mt-auto pt-8 flex flex-col gap-4">
            <Button
              as="anchor"
              href={COMPANY.phoneHref}
              variant="primary"
              size="lg"
              icon={<Phone className="w-5 h-5" />}
              className="w-full"
            >
              {COMPANY.phone}
            </Button>
            <Button
              as="link"
              href="/devis-gratuit"
              variant="outline"
              size="lg"
              className="w-full"
            >
              Devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

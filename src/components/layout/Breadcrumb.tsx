// ─────────────────────────────────────────────
// ID Home — Fil d'Ariane + JSON-LD (Server Component)
// ─────────────────────────────────────────────

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/components/seo/schemas";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const schemaItems = [{ name: "Accueil", href: "/" }, ...items.map((i) => ({ name: i.label, href: i.href }))];

  return (
    <>
      <JsonLd data={createBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Fil d'Ariane" className="bg-gray-50/80 border-b border-gray-100">
        <ol className="container-wide flex items-center flex-wrap gap-1 text-sm font-body text-gray-400 py-3">
          <li>
            <Link
              href="/"
              className="hover:text-id-orange transition-colors"
            >
              Accueil
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                {isLast ? (
                  <span className="text-id-charcoal font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-id-orange transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

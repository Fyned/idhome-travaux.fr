"use client";

// ─────────────────────────────────────────────
// ID Home — Accordéon FAQ (Client Component)
// ─────────────────────────────────────────────

import { useState } from "react";
import clsx from "clsx";
import type { FAQItem } from "@/lib/faq-data";

interface FAQAccordionProps {
  items: FAQItem[];
  categories: string[];
}

export default function FAQAccordion({ items, categories }: FAQAccordionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filtres par catégorie */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => {
            setActiveCategory("all");
            setOpenIndex(null);
          }}
          className={clsx(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            activeCategory === "all"
              ? "bg-id-orange text-white"
              : "bg-gray-100 text-id-gray hover:bg-gray-200"
          )}
        >
          Toutes
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
            }}
            className={clsx(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeCategory === cat
                ? "bg-id-orange text-white"
                : "bg-gray-100 text-id-gray hover:bg-gray-200"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Liste des questions */}
      <div className="space-y-3">
        {filtered.map((item, index) => (
          <div
            key={item.question}
            className="glass-card overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              aria-expanded={openIndex === index}
            >
              <span className="font-heading font-semibold text-id-charcoal pr-4">
                {item.question}
              </span>
              <span
                className={clsx(
                  "text-id-orange text-xl flex-shrink-0 transition-transform duration-300",
                  openIndex === index && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            <div
              className={clsx(
                "overflow-hidden transition-all duration-300",
                openIndex === index ? "max-h-96 pb-5 md:pb-6" : "max-h-0"
              )}
            >
              <p className="px-5 md:px-6 font-body text-gray-500 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

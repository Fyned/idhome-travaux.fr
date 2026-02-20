// ─────────────────────────────────────────────
// ID Home — Navigation article précédent/suivant
// ─────────────────────────────────────────────

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

interface PrevNextPostProps {
  currentSlug: string;
}

export default function PrevNextPost({ currentSlug }: PrevNextPostProps) {
  const currentIndex = blogPosts.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const next =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-id-orange/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-id-orange flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
          <div className="min-w-0">
            <span className="font-body text-xs text-gray-400">
              Article précédent
            </span>
            <p className="font-heading font-semibold text-sm text-id-charcoal truncate">
              {prev.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-id-orange/30 transition-colors text-right sm:justify-end"
        >
          <div className="min-w-0">
            <span className="font-body text-xs text-gray-400">
              Article suivant
            </span>
            <p className="font-heading font-semibold text-sm text-id-charcoal truncate">
              {next.title}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-id-orange flex-shrink-0 group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

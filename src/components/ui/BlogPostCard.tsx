// ─────────────────────────────────────────────
// ID Home — Carte d'article de blog (Server Component)
// ─────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  datePublished: string;
  readTime: string;
  image: string;
}

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  category,
  datePublished,
  readTime,
  image,
}: BlogPostCardProps) {
  const formattedDate = new Date(datePublished).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${slug}`} className="glass-card group block overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        {/* Catégorie */}
        <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-2.5 py-1 rounded-full mb-3">
          {category}
        </span>

        {/* Titre */}
        <h3 className="font-heading font-bold text-lg text-id-charcoal group-hover:text-id-orange transition-colors mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Extrait */}
        <p className="font-body text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Métadonnées */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {readTime}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-id-orange opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────
// ID Home — Article de blog en vedette
// ─────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

export default function FeaturedBlogPost() {
  const featured = blogPosts[blogPosts.length - 1]; // Dernier article publié

  const formattedDate = new Date(featured.datePublished).toLocaleDateString(
    "fr-FR",
    { day: "numeric", month: "long", year: "numeric" }
  );

  return (
    <section className="section-padding-sm">
      <div className="container-wide">
        <Link
          href={`/blog/${featured.slug}`}
          className="group block glass-card overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-video lg:aspect-auto lg:min-h-[320px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-none" />
            </div>
            {/* Contenu */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-3 py-1 rounded-full mb-4 w-fit">
                Article en vedette — {featured.category}
              </span>
              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-id-charcoal group-hover:text-id-orange transition-colors mb-4">
                {featured.title}
              </h3>
              <p className="font-body text-gray-500 leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-id-orange font-heading font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Lire l&apos;article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

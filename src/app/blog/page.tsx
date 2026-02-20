// ─────────────────────────────────────────────
// ID Home — Page Blog (enrichie)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { BookOpen, Newspaper } from "lucide-react";
import Breadcrumb from "@/components/layout/Breadcrumb";
import BlogPostCard from "@/components/ui/BlogPostCard";
import CTASection from "@/components/sections/CTASection";
import FeaturedBlogPost from "@/components/sections/FeaturedBlogPost";
import RelatedServices from "@/components/sections/RelatedServices";
import JsonLd from "@/components/seo/JsonLd";
import { createWebPageSchema } from "@/components/seo/schemas";
import { blogPosts } from "@/lib/blog-data";
import { createPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — Conseils Rénovation & Dépannage Levallois-Perret",
  description:
    "Retrouvez nos articles et conseils pratiques pour l'entretien de votre maison : plomberie, électricité, serrurerie, rénovation. ID Home Levallois-Perret.",
  keywords: [
    "blog rénovation",
    "conseils travaux",
    "astuces maison",
    "entretien habitat",
    "Levallois-Perret",
  ],
  path: "/blog",
});

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <>
      <JsonLd
        data={createWebPageSchema(
          "Blog — ID Home",
          "Conseils et actualités rénovation et dépannage",
          `${SITE_URL}/blog`
        )}
      />

      <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

      {/* En-tête décoratif */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-id-cream/50 via-white to-id-orange/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-id-orange/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-id-orange/3 rounded-full blur-2xl translate-y-1/2 translate-x-1/2" />

        <div className="relative container-wide py-12 md:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title mb-4">
              Notre <span className="text-id-orange">Blog</span>
            </h1>
            <p className="section-subtitle mx-auto mb-8">
              Conseils pratiques, guides et actualités pour entretenir et
              améliorer votre habitat.
            </p>

            {/* Compteurs */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <Newspaper className="w-4 h-4 text-id-orange" />
                <span className="font-body font-medium text-sm text-id-charcoal">
                  {blogPosts.length} articles
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <BookOpen className="w-4 h-4 text-id-orange" />
                <span className="font-body font-medium text-sm text-id-charcoal">
                  {categories.length} catégories
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-6">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 rounded-full font-heading font-semibold text-sm bg-id-orange text-white">
              Tout
            </span>
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full font-heading font-semibold text-sm bg-white border border-gray-200 text-id-charcoal hover:border-id-orange/30 cursor-default transition-colors"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Article en vedette */}
      <FeaturedBlogPost />

      {/* Grille des articles */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                datePublished={post.datePublished}
                readTime={post.readTime}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding-sm bg-id-cream/30">
        <div className="container-tight text-center">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-4">
            Restez <span className="text-id-orange">informé</span>
          </h2>
          <p className="font-body text-gray-500 mb-6 max-w-xl mx-auto">
            Recevez nos derniers conseils et actualités directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 font-body text-sm focus:outline-none focus:border-id-orange/50 transition-colors"
              disabled
            />
            <button
              type="button"
              className="px-6 py-3 bg-id-orange text-white font-heading font-semibold text-sm rounded-full hover:bg-id-orange-dark transition-colors"
              disabled
            >
              S&apos;inscrire
            </button>
          </div>
          <p className="font-body text-xs text-gray-400 mt-3">
            Bientôt disponible — Pas de spam, désinscription en un clic.
          </p>
        </div>
      </section>

      {/* Services associés */}
      <RelatedServices max={3} title="Découvrez nos services" />

      <CTASection />
    </>
  );
}

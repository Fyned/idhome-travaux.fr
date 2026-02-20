"use client";

// ─────────────────────────────────────────────
// ID Home — Aperçu du blog (Animated)
// ─────────────────────────────────────────────

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogPostCard from "@/components/ui/BlogPostCard";
import { blogPosts } from "@/lib/blog-data";
import { AnimatedSection, StaggerChildren } from "@/components/motion";

export default function BlogPreview() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* En-tête */}
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            Blog
          </span>
          <h2 className="section-title mb-4">
            Nos <span className="text-id-orange">Conseils</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Articles pratiques et guides pour entretenir et améliorer votre
            habitat au quotidien.
          </p>
        </AnimatedSection>

        {/* Cartes de blog */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.12}
        >
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
        </StaggerChildren>

        {/* Lien vers le blog */}
        <AnimatedSection delay={0.4} className="text-center mt-10">
          <Link
            href="/blog"
            className="link-underline inline-flex items-center gap-2 font-heading font-semibold text-id-orange hover:gap-3 transition-all"
          >
            Lire tous nos articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

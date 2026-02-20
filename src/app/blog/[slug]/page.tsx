// ─────────────────────────────────────────────
// ID Home — Page d'article de blog (enrichie)
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import RelatedPosts from "@/components/sections/RelatedPosts";
import RelatedServices from "@/components/sections/RelatedServices";
import InlineCTA from "@/components/ui/InlineCTA";
import PrevNextPost from "@/components/ui/PrevNextPost";
import ReadingProgressBar from "@/components/ui/ReadingProgressBar";
import ShareButtons from "@/components/ui/ShareButtons";
import JsonLd from "@/components/seo/JsonLd";
import { createArticleSchema } from "@/components/seo/schemas";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";
import { SITE_URL, COMPANY } from "@/lib/constants";

// Génération statique pour tous les slugs
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Métadonnées dynamiques
export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getBlogPostBySlug(slug);
    if (!post) return { title: "Article introuvable" };

    return {
      title: `${post.title} — ID Home Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: "article",
        locale: "fr_FR",
        publishedTime: post.datePublished,
        images: [{ url: `${SITE_URL}${post.image}`, width: 1200, height: 630 }],
      },
    };
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.datePublished).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const articleUrl = `${SITE_URL}/blog/${post.slug}`;

  // Convertir le markdown basique en HTML
  const contentHtml = post.content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2 class="font-heading font-bold text-2xl text-id-charcoal mt-10 mb-4">${block.replace("## ", "")}</h2>`;
      }
      if (block.match(/^\d\./)) {
        const items = block
          .split("\n")
          .map((line) => `<li>${line.replace(/^\d\.\s/, "")}</li>`)
          .join("");
        return `<ol class="list-decimal list-inside space-y-2 font-body text-gray-600 leading-relaxed my-4 pl-4">${items}</ol>`;
      }
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .map((line) => `<li>${line.replace(/^-\s/, "")}</li>`)
          .join("");
        return `<ul class="list-disc list-inside space-y-2 font-body text-gray-600 leading-relaxed my-4 pl-4">${items}</ul>`;
      }
      return `<p class="font-body text-lg text-gray-600 leading-relaxed mb-4">${block}</p>`;
    })
    .join("");

  return (
    <>
      <ReadingProgressBar />

      <JsonLd
        data={createArticleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          datePublished: post.datePublished,
        })}
      />

      <Breadcrumb
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="section-padding-sm">
        <div className="container-tight">
          {/* En-tête enrichi de l'article */}
          <div className="mb-8">
            <span className="inline-block text-xs font-semibold text-id-orange bg-id-orange/10 px-3 py-1.5 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-id-charcoal leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                ID Home
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} de lecture
              </span>
            </div>
          </div>

          {/* Image à la une */}
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>

          {/* Contenu de l'article */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* CTA inline */}
          <InlineCTA />

          {/* Boutons de partage */}
          <div className="mt-10 pt-8 border-t border-gray-100">
            <ShareButtons url={articleUrl} title={post.title} />
          </div>

          {/* Bio auteur */}
          <div className="mt-8 p-6 rounded-2xl bg-id-cream/50 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-id-orange/10 flex items-center justify-center flex-shrink-0">
                <User className="w-7 h-7 text-id-orange" />
              </div>
              <div>
                <p className="font-heading font-bold text-id-charcoal mb-1">
                  ID Home — Rénovation & Dépannage
                </p>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  Expert en rénovation et dépannage à Levallois-Perret et en
                  Île-de-France. Plomberie, électricité, serrurerie, peinture,
                  isolation — intervention rapide 7J/7.
                </p>
                <a
                  href={COMPANY.phoneHref}
                  className="inline-flex items-center gap-1.5 mt-2 text-id-orange font-heading font-semibold text-sm hover:underline"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Retour au blog */}
          <div className="mt-8 pt-8 border-t border-gray-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-id-orange font-heading font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
          </div>

          {/* Navigation article précédent/suivant */}
          <PrevNextPost currentSlug={post.slug} />
        </div>
      </article>

      {/* Articles similaires */}
      <RelatedPosts excludeSlug={post.slug} max={2} />

      {/* Services associés */}
      <RelatedServices
        max={3}
        title="Services associés"
      />

      <CTASection />
    </>
  );
}

// ─────────────────────────────────────────────
// ID Home — Section "Articles similaires"
// ─────────────────────────────────────────────

import BlogPostCard from "@/components/ui/BlogPostCard";
import { blogPosts } from "@/lib/blog-data";

interface RelatedPostsProps {
  excludeSlug?: string;
  max?: number;
}

export default function RelatedPosts({
  excludeSlug,
  max = 2,
}: RelatedPostsProps) {
  const filtered = excludeSlug
    ? blogPosts.filter((p) => p.slug !== excludeSlug)
    : blogPosts;

  const displayed = filtered.slice(0, max);

  if (displayed.length === 0) return null;

  return (
    <section className="section-padding-sm bg-id-cream/30">
      <div className="container-wide">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-id-charcoal mb-8 text-center">
          Articles <span className="text-id-orange">similaires</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {displayed.map((post) => (
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
  );
}

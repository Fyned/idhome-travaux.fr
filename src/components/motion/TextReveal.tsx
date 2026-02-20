"use client";

// ─────────────────────────────────────────────
// ID Home — Text reveal animation (word-by-word, framer-motion)
// ─────────────────────────────────────────────

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
  children: string;
  className?: string;
  /** Delay before animation starts */
  delay?: number;
  /** HTML tag */
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function TextReveal({
  children,
  className,
  delay = 0,
  as: Tag = "h2",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const words = children.split(" ");

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : undefined}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

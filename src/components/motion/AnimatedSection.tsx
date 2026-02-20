"use client";

// ─────────────────────────────────────────────
// ID Home — Scroll-triggered section reveal (framer-motion)
// ─────────────────────────────────────────────

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Animation direction */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Delay in seconds */
  delay?: number;
  /** Distance in px */
  distance?: number;
  /** IntersectionObserver threshold (0-1) */
  threshold?: number;
  /** HTML tag to render */
  as?: "div" | "section" | "header" | "article";
}

const directionMap = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

export default function AnimatedSection({
  children,
  className,
  direction = "up",
  delay = 0,
  distance = 40,
  threshold = 0.15,
  as = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: "0px 0px -60px 0px",
  });

  const d = directionMap[direction];
  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: d.x * distance, y: d.y * distance }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : undefined}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </Component>
  );
}

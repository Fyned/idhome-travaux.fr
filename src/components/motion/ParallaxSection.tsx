"use client";

// ─────────────────────────────────────────────
// ID Home — Parallax scroll section (framer-motion)
// ─────────────────────────────────────────────

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  /** Parallax offset range in pixels [start, end] */
  offset?: [number, number];
}

export default function ParallaxSection({
  children,
  className,
  offset = [0, -50],
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], offset);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

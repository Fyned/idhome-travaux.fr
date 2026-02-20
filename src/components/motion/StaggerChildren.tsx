"use client";

// ─────────────────────────────────────────────
// ID Home — Staggered children reveal (framer-motion)
// ─────────────────────────────────────────────

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child (seconds) */
  stagger?: number;
  /** Initial delay before first child */
  delay?: number;
  /** Animation type for each child */
  direction?: "up" | "down" | "left" | "right" | "scale";
  /** Distance in px (ignored for scale) */
  distance?: number;
  /** IntersectionObserver threshold */
  threshold?: number;
}

export default function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  direction = "up",
  distance = 30,
  threshold = 0.1,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: "0px 0px -40px 0px",
  });

  const getChildVariants = () => {
    if (direction === "scale") {
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    }
    const d = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    }[direction];
    return {
      hidden: { opacity: 0, ...d },
      visible: { opacity: 1, x: 0, y: 0 },
    };
  };

  const childVariants = getChildVariants();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={childVariants}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

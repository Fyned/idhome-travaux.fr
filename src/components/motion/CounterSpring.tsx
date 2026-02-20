"use client";

// ─────────────────────────────────────────────
// ID Home — Spring-physics number counter (framer-motion)
// ─────────────────────────────────────────────

import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface CounterSpringProps {
  value: string;
  className?: string;
}

export default function CounterSpring({ value, className }: CounterSpringProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    duration: 2,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  );
}

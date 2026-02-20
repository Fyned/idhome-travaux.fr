"use client";

// ─────────────────────────────────────────────
// ID Home — Animation au scroll (Intersection Observer)
// ─────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = "fade-in-up",
  delay = 0,
  className,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animationClass = `animate-${animation}`;

  return (
    <div
      ref={ref}
      className={clsx(
        isVisible ? animationClass : "opacity-0",
        className
      )}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

"use client";

// ─────────────────────────────────────────────
// ID Home — Magnetic button effect (desktop only, framer-motion)
// ─────────────────────────────────────────────

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /** Magnetic pull strength in pixels */
  strength?: number;
}

export default function MagneticButton({
  children,
  className,
  strength = 30,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: hover) and (min-width: 1024px)").matches);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current || !isDesktop) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * (strength / 100));
    y.set((e.clientY - centerY) * (strength / 100));
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  if (!isDesktop) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

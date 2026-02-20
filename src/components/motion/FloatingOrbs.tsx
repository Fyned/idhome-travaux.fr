// ─────────────────────────────────────────────
// ID Home — Decorative floating orbs (CSS-only, no JS overhead)
// ─────────────────────────────────────────────

interface FloatingOrbsProps {
  /** Number of orbs */
  count?: number;
  /** Orb color class (Tailwind) */
  color?: string;
  /** Max opacity (0-1) */
  maxOpacity?: number;
}

interface OrbConfig {
  size: number;
  top: string;
  left?: string;
  right?: string;
  delay: string;
  duration: string;
}

const ORB_CONFIGS: OrbConfig[] = [
  { size: 200, top: "10%", left: "5%", delay: "0s", duration: "8s" },
  { size: 150, top: "60%", right: "8%", delay: "2s", duration: "10s" },
  { size: 100, top: "30%", left: "70%", delay: "4s", duration: "7s" },
  { size: 180, top: "75%", left: "20%", delay: "1s", duration: "9s" },
  { size: 120, top: "15%", right: "25%", delay: "3s", duration: "11s" },
];

export default function FloatingOrbs({
  count = 3,
  color = "bg-id-orange",
  maxOpacity = 0.06,
}: FloatingOrbsProps) {
  const orbs = ORB_CONFIGS.slice(0, count);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${color} animate-float blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            opacity: maxOpacity,
            animationDelay: orb.delay,
            animationDuration: orb.duration,
          }}
        />
      ))}
    </div>
  );
}

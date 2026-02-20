import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "id-orange": "#E8882D",
        "id-orange-light": "#F5A623",
        "id-orange-dark": "#D47520",
        "id-charcoal": "#2D2D2D",
        "id-dark": "#1A1A1A",
        "id-gray": "#4A4A4A",
        "id-light": "#F5F1EC",
        "id-cream": "#FAF7F2",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(3rem, 8vw, 6.25rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "count-up": "fadeInUp 0.4s ease-out forwards",
        "hero-fade-in": "heroFadeIn 1s ease-in-out forwards",
        "hero-fade-out": "heroFadeOut 1s ease-in-out forwards",
        "float": "float 6s ease-in-out infinite",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "shine-sweep": "shineSweep 2s ease-in-out",
        "dot-pulse": "dotPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(232, 136, 45, 0.25)" },
          "50%": {
            boxShadow:
              "0 0 30px rgba(232, 136, 45, 0.5), 0 0 50px rgba(232, 136, 45, 0.2)",
          },
        },
        heroFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        heroFadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shineSweep: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        dotPulse: {
          "0%, 100%": { opacity: "0.04" },
          "50%": { opacity: "0.08" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

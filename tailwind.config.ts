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
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
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
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(232, 136, 45, 0.3)" },
          "50%": {
            boxShadow:
              "0 0 40px rgba(232, 136, 45, 0.6), 0 0 60px rgba(232, 136, 45, 0.3)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;

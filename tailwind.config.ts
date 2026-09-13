import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: "#0F4C81",
          light: "#1D6BA8",
          dark: "#0A3A63",
        },
        sand: {
          DEFAULT: "#E8D9C5",
          light: "#F4ECE1",
          dark: "#D8C3A5",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E4C766",
          dark: "#A9862B",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2B2B2B",
        },
        ivory: "#FFFFFF",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        driftSlow: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(6px)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 2.5s linear infinite",
        driftSlow: "driftSlow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

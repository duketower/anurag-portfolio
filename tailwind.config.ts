import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        void: "#030712",
        surface: "#0f1729",
        card: "#111827",
        "card-hover": "#161f35",
        cyan: {
          DEFAULT: "#06b6d4",
          dim: "#0891b2",
          glow: "rgba(6,182,212,0.15)",
          pulse: "rgba(6,182,212,0.08)",
        },
        violet: {
          DEFAULT: "#8b5cf6",
          dim: "#7c3aed",
          glow: "rgba(139,92,246,0.15)",
        },
        amber: { DEFAULT: "#f59e0b", glow: "rgba(245,158,11,0.15)" },
        slate: {
          850: "#0f172a",
          950: "#020617",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "scan-line": "scanLine 2s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "counter-up": "counterUp 0.4s ease forwards",
        float: "float 6s ease-in-out infinite",
        "border-flow": "borderFlow 3s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanLine: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        counterUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "grid-void":
          "linear-gradient(rgba(6,182,212,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.04) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;

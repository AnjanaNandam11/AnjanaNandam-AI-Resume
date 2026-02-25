import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "#111118",
        "surface-light": "#1a1a24",
        accent: {
          DEFAULT: "#db2777",
          light: "#ec4899",
          dark: "#be185d",
        },
        muted: "#9ca3af",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 80%, 100%": { opacity: "0.4" },
          "40%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fairy-float": {
          "0%":   { transform: "translate(0px, 0px) rotate(-4deg) scale(1)" },
          "20%":  { transform: "translate(2px, -8px) rotate(0deg) scale(1.05)" },
          "45%":  { transform: "translate(4px, -14px) rotate(5deg) scale(1)" },
          "65%":  { transform: "translate(2px, -9px) rotate(3deg) scale(1.04)" },
          "85%":  { transform: "translate(-1px, -3px) rotate(-1deg) scale(1)" },
          "100%": { transform: "translate(0px, 0px) rotate(-4deg) scale(1)" },
        },
        "fairy-sparkle": {
          "0%, 100%": { opacity: "0", transform: "scale(0) rotate(0deg)" },
          "45%, 55%": { opacity: "1", transform: "scale(1) rotate(180deg)" },
        },
      },
      animation: {
        "slide-in-right":
          "slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-out-right":
          "slide-out-right 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.4s ease-out forwards",
        pulse: "pulse 1.4s infinite ease-in-out",
        "scale-in": "scale-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fairy-float": "fairy-float 3.2s ease-in-out infinite",
        "fairy-sparkle": "fairy-sparkle 2.6s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 20px rgba(219, 39, 119, 0.15)",
        "glow-lg": "0 0 40px rgba(219, 39, 119, 0.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

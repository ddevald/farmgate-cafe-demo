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
        linen: {
          DEFAULT: "#FAF6F0",
          dark: "#F1EAE0",
        },
        espresso: {
          DEFAULT: "#1B1816",
          light: "#2B2622",
        },
        strawberry: {
          DEFAULT: "#FF8A9A",
          dark: "#E86F80",
          light: "#FFD3D9",
        },
        matcha: {
          DEFAULT: "#6E8E59",
          dark: "#57703F",
          light: "#DCE7D2",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(27, 24, 22, 0.15)",
        card: "0 4px 20px -4px rgba(27, 24, 22, 0.08)",
        glass: "0 8px 32px 0 rgba(27, 24, 22, 0.1)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

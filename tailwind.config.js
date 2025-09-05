/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Colores esotéricos personalizados
        mystic: {
          black: "#0a0a0a",
          purple: "#4a1a4a",
          gold: "#d4af37",
          dark: "#1a1a1a",
          white: "#ffffff",
          red: "#8b0000",
        },
      },
      fontFamily: {
        // Space Grotesk como fuente principal
        sans: [
          "Space Grotesk",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #d4af37, 0 0 10px #d4af37" },
          "100%": { boxShadow: "0 0 10px #d4af37, 0 0 20px #d4af37" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-mystic": "linear-gradient(135deg, #0a0a0a 0%, #4a1a4a 50%, #1a1a1a 100%)",
        "gradient-gold": "linear-gradient(135deg, #d4af37 0%, #b8941f 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

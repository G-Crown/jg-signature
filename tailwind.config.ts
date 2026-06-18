import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],

  theme: {
    extend: {
      colors: {
        ivory: "#F9F6F0",
        beige: "#E8E0D5",
        charcoal: "#1A1A1A",
        black: "#0D0D0D",
        gold: "#C9A96E",
        goldLight: "#E2C99A"
      },

      fontFamily: {
        heading: [
          "Cormorant Garamond",
          "serif"
        ],

        body: [
          "Inter",
          "sans-serif"
        ]
      },

      maxWidth: {
        container: "1400px"
      },

      boxShadow: {
        luxury:
          "0 20px 60px rgba(0,0,0,0.12)"
      }
    }
  },

  plugins: []
};

export default config;

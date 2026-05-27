import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b102b",
        midnight: "#050816",
        viz: {
          50: "#f4f1ff",
          100: "#ebe5ff",
          200: "#d8ccff",
          300: "#bba3ff",
          400: "#966cff",
          500: "#6d3bff",
          600: "#4d20f5",
          700: "#3814c6",
          800: "#28108f",
          900: "#17083f"
        },
        signal: "#068804"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(77, 32, 245, 0.2)",
        soft: "0 18px 60px rgba(11, 16, 43, 0.1)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

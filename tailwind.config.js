/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF",
        secondary: "#00C2FF",
        dark: "#0a0a0f",
        card: "#111118",
        border: "#1e1e2e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #6C63FF, #00C2FF)",
      },
    },
  },
  plugins: [],
};

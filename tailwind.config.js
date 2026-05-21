/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#06111f",
          900: "#0a1830",
          800: "#0f2544",
          700: "#17365d"
        },
        ivory: "#f7f0df",
        champagne: "#d8b76c",
        gold: "#c9a24c"
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "Times New Roman", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(0, 0, 0, 0.28)",
        gold: "0 0 0 1px rgba(216, 183, 108, 0.35), 0 18px 50px rgba(0, 0, 0, 0.22)"
      }
    }
  },
  plugins: []
};

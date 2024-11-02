/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        visby: ['VisbyRound', 'sans-serif'],
      },
      colors: {
        "azul-claro": "#0353B3",
        "azul-medio": "#262D47",
        "azul-escure": "#1B213B",
      },
    },
  },
  plugins: [],
};

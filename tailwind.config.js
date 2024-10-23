/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azul-claro": "#0353B3",
        "azul-medio": "#262D47",
        "azul-escuro": "#1B213B",
      },
    },
  },
  plugins: [],
};

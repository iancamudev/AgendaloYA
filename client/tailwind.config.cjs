/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        salmon: "#FF9A9A",
        gris: "#E9E9E9",
      },
    },
  },
  plugins: [],
};

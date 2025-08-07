/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        accent: "#f6f6f6;",
        text: {
          DEFAULT: "#2d3441",
        },
        dark: "#242934",
      },
    },
  },
  plugins: [],
};

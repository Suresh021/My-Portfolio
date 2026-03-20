/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1337ec",
        "background-light": "#f6f6f8",
        "background-dark": "#101322",
      },
    },
  },
  plugins: [],
};
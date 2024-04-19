/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bgCol": "#0e0e16",
      },
      fontFamily: {
        ubuntu: ['" Ubuntu"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
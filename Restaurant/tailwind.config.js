/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#3B393A",
        mainText: "#FAF9F8",
        secondary: "#F4BF1E",
      },
      fontFamily: {
        inika: ['Inika', 'serif'],
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
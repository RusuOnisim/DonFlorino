/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F1E3",
        mainText: "#3A2E2A",
        secondary: "#6C5B3B",
      },
      fontFamily: {
        inika: ['Inika', 'serif'],
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
}
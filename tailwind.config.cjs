/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
    fontFamily: {
      Lora: ['"Lora","sans-serif"'],
      Lobster: ['"Lobster Two","cursive"'],
      Handlee: ['"Handlee", "cursive"']
    },
    extend: {},
  },
  plugins: [],
}

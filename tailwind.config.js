/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdf4',
          600: '#16a34a',
          700: '#15803d',
          900: '#14532d',
        }
      }
    },
  },
  plugins: [],
}

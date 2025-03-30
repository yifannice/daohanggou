/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'apple-blue': '#007AFF',
        'apple-gray': '#1D1D1F',
        'apple-light-gray': '#86868B',
        'apple-bg': '#F5F5F7'
      }
    }
  },
  plugins: []
} 
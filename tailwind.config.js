/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'genesis-navy': '#1B3A5C',
        'genesis-blue': '#2E75B6',
        'genesis-light': '#E8F0FE',
      },
    },
  },
  plugins: [],
}
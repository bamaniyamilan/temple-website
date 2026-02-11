/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'temple-gold': '#D4AF37',
        'temple-red': '#8B0000',
        'temple-saffron': '#FF9933',
        'temple-green': '#138808',
        'temple-bronze': '#CD7F32',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
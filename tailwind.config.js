/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Open Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-med.jpg')",
      },
    },
  },
  plugins: [],
}

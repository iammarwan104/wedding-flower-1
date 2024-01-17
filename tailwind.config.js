/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Tenor-Sans' : ['Tenor Sans', 'sans-serif'],
        'MonteCarlo' : ['MonteCarlo', 'cursive'],
        'Arapey' : ['Arapey', 'serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', 'sans-serif']
      },      
      colors: {
        'very-dark-blue': 'hsl(216, 12%, 8%)',
        'Light-Grey': 'hsl(217, 12%, 63%)',
        'Medium-Grey': 'hsl(216, 12%, 54%)',
        'Dark-Blue': 'hsl(213, 19%, 18%)',
        'cardblue': '#1F2631',
        'orange': 'hsl(25, 97%, 53%)',
      },
      screens: {
        'lg': '376px',
      },
    },
  },
  plugins: [],
}
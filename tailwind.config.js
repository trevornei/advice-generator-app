/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'manrope': ['Manrope'],
      'hedvig': ['Hedvig Letters Serif'],
    },
    colors: {
      'lightCyan': '#cee3e9',
      'neonGreen': '#52ffa8',
      'grayishBlue': '#4e5d73',
      'darkishBlue': '#323a49',
      'darkBlue': '#1f2632',
    },
    extend: {},
  },
  plugins: [],
}


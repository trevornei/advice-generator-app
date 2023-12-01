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
    letterSpacing: {
      extraWide: '.22em'
    }
    ,
    extend: {
      width: {
        '33.75': '33.75rem',
      }, 
      height: {
        '22.75': '22.75rem', 
        '25': '25rem'
      }, 
      boxShadow: {
        '3xl': '0 0px 100px 10px',
      }
    },
  },
  plugins: [],
}


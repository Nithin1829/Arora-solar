/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./card2.html'],
  theme: {
    extend: {
      colors: {
        'primary':'#20691B',
        'cgreen': '#50FC0F',
        'blueback': '#0b1420',

      },
      fontFamily:{
        'logoheading':['Martian Mono','sans-serif'],
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif'],
        'navtext':['Ubuntu','sans-serif'],
        'boxtext':['Teko','sans-serif'],
        'difftext':['Nabla','sans-serif'],

      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./about2.html','./projects.html','./sample.html','./contact.html'],
  theme: {
    extend: {
      colors: {
        'primary':'#20691B',
        'cgreen': '#50FC0F'
        

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


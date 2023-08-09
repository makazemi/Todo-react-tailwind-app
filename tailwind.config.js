/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        brightBlue: 'hsl(220, 98%, 61%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
        lightLightGrayishBlue: 'hsl(233, 11%, 84%)',
        lightDarkGrayishBlue: 'hsl(236, 9%, 61%)',
        lightVeryDarkGrayishBlue: 'hsl(235, 19%, 35%)',

        veryDarkBlue: 'hsl(235, 21%, 11%)',
        veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
        darkLightGrayishBlue1: 'hsl(234, 39%, 85%)',
        darkLightGrayishBlue2: 'hsl(236, 33%, 92%)',
        darkDarkGrayishBlue: 'hsl(234, 11%, 52%)',
        darkVeryDarkGrayishBlue1: 'hsl(233, 14%, 35%)',
        darkVeryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',

        fromGradient:'hsl(192, 100%, 67%)',
        toGradient:'hsl(280, 87%, 65%)'
      },
      backgroundImage: {
        'checked-state': "url('../public/images/icon-check.svg'')",
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


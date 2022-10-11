/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/index.js",
    'node_modules/daisyui/dist/**/*.js', 'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '639px'},
      },
      borderRadius: {
        'pill': '100px',
      },
      fontFamily: {
        'gemunu': ['"Gemunu Libre"', 'serif'],
        'albert': ['"Albert Sans"', 'serif'],
      },
      transitionDuration: {
        '3000': '3000ms',
      }
    },
  },
  plugins: [require("daisyui")],
}

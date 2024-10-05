/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    backgroundImage:{
      'createproduct' : "url('/public/createproduct.png')",
      'home': "url('/public/bg-33972.jpg')",
      'login': "url('/public/Login.png')"
    },
    fontFamily:{
      'sans' : ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

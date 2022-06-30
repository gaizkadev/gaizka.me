//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], 
  
  theme: {
    colors: {
      body: '#420fe7',
      intro: '#EEA1BE',
      white: '#fff',
      cream: '#fffde9',
      hero: '#bdafb0',
      red: '#dd3752',
      green: '#3bdd37',
      blue: {
        50: "#F2F8FE",
        100: "#E6F1FE",
        200: "#BFDBFC",
        300: "#99C6FA",
        400: "#4D9BF7",
        500: "#0070F3",
        600: "#0065DB",
        700: "#004392",
        800: "#00326D",
        900: "#002249",
      },

    },

    fontFamily: {
      'mont': ['Montserrat'],
      'robo': ['Roboto Mono'],
      'joan': ['Joan'],
    },
    extend: {},
  },
  plugins: [],
}
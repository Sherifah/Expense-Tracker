/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     colors: {
      100: '#4b4b4b',
      200: '#40005d',
      border: '#ececec',
      formborder: '#ccc',
      datebg: '#2a2a2a',
      cardbg: 'rgb(31, 31, 31)',
      formbg: '#a892ee',
      btnstate: '#510674',
     },
     boxShadow: {
      card: '0 1px 8px rgba(0, 0, 0, 0.25)',
     }
    },
  },
  plugins: [],
}

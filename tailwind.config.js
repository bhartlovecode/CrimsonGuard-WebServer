/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      'OpenSans': ['"Open Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
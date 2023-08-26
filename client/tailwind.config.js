/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8EF3C3',
        gray100: '#D9D9D9',
        gray600: '#2F2F2F',
        orange: '#FF9574',
        blue: '#61E2FF',
        darkGray: '#939393',
        lightGray: '#EEE',
        darkCharcoal: '#2F2F2F',
        green: '#24D6AB',
      },
      fontFamily: {
        inter: 'Inter',
      },
    },
  },
  plugins: [],
};

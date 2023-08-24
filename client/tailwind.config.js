/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8EF3C3',
        gray100: '#D9D9D9',
        gray600: '#2F2F2F',
        gray400: '#808080',
        orange: '#FF9574',
        pink300: '#FF6B6B',
        'accent-100': '#FB6F6C',
      },
    },
  },
  plugins: [],
};

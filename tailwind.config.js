/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f1',
          100: '#daf0db',
          200: '#b6e0ba',
          300: '#8cc993',
          400: '#5eac6d',
          500: '#3d8f4e',
          600: '#1E3A29', // Main primary color
          700: '#1a3124',
          800: '#17291e',
          900: '#102017',
          950: '#081109',
        },
        secondary: {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9e9e',
          400: '#ff6868',
          500: '#fc3a3a',
          600: '#E63946', // Main secondary color
          700: '#c91d2b',
          800: '#a61b27',
          900: '#8a1c26',
          950: '#4c0a10',
        },
        accent: {
          50: '#fffaeb',
          100: '#fff1c6',
          200: '#ffe589',
          300: '#ffd04d',
          400: '#FFB703', // Main accent color
          500: '#f99707',
          600: '#dd7203',
          700: '#b75106',
          800: '#94400c',
          900: '#7a360e',
          950: '#461b04',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
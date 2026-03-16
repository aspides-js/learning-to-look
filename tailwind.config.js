const { preinitModule } = require('react-dom');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'text-primary':  '#FFF5EE',
            'text-secondary': '#F8F5F6',
            'text-tertiary': '#941112',
            'text-quaternary': '#860920',
            // 'primary': '#B60037',
            'primary': '#941112',
            'secondary': '#F8F5F6',
        },
    },
    fontFamily: {
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
        cursive: ['Pinyon Script', 'cursive'],
    },
  },
  plugins: [],
}
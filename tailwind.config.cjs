/** @type {import('tailwindcss').Config} */
module.exports = {
  /**
   * FD content
   * **/
  content: ['./src/**/*.{html,js}'],

  /**
   * SD content
   * **/
  // content: ['./app/modules/**/*.php', './app/modules/!panel/**', './app/public/js/*.js'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#161616',
      'bg-second': '#343434',
      'main': '#3cc5fb',
      'white': '#ffffff',
      'grey': '#a0a0a0',
      'yellow': '#fdcc05',
      'green': '#13c330',
      'cyan': '#24ebcd',
      'blue': '#0089C6',
      'pink': '#ed145b',
      'orange': '#FF8C00',
    },
    screens: {
      '2k': {'min': '1921px', 'max': '2561px'},
      // => @media (min-width: 1921px and max-width: 2561px) { ... }

      'fhd': {'min': '1819px'},
      // => @media (min-width: 1819px) { ... }

      '2xl': {'min': '1619px'},
      // => @media (min-width: 1619px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1025px'},
      // => @media (max-width: 1025px) { ... }

      'md': {'max': '769px'},
      // => @media (max-width: 769px) { ... }

      'sm': {'max': '650px'},
      // => @media (max-width: 650px) { ... }

      'xs': {'max': '421px'},
      // => @media (max-width: 421px) { ... }

      'se': {'max': '361px'}
      // => @media (max-width: 361px) { ... }
    }
  },
  plugins: [],
}

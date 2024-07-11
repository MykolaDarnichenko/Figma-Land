/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Graphik-Regular', 'sans-serif'],
        second: ['Graphik-Medium', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '549px',
      // 'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1579px',
      // '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      '4xl': '2140px'
    }
  },
  plugins: [],
}


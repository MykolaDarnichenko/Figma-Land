/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Graphik-Regular', 'sans-serif'],
        second: ['Graphik-Medium', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'avatar1': "url('/src/images/Avatar1.png')",
        'avatar2': "url('/src/images/avatar2.png')",
        'avatar3': "url('/src/images/avatar3.png')",
        'avatar4': "url('/src/images/avatar4.png')",
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


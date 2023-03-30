/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    './features/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        
      }
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover', 'hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      display: ['hover', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bgColor: 'hsl(248.57,17.07%,8.04%)',
        boxCl: 'hsl(247.5,10.53%,14.9%)',
        inpCl: 'hsl(127, 100%, 82%)',
        tooWeak: 'rgb(247, 75, 75)',
        weak: 'rgb(251, 122, 86)',
        medium: 'rgb(248, 203, 99)',
        strong: 'rgb(163, 255, 174)',
        second: 'hsl(248, 15%, 11%)'
      },
      fontFamily: {
        jetBrains: ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [],
}

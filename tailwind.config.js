/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          '50': '#f7f3ec',
          '100': '#e2d3be',
          '200': '#c2ab8f',
          '300': '#a28360',
          '350': '#564B4B',
          '400': '#825a31',
          '500': '#633203',
          '600': '#512702',
          '700': '#3f1e02',
          '800': '#2e1501',
          '900': '#2C2424',
        },
      },
      spacing: {
        'banner': '37rem',
        'banner-regular': '35rem',
        'space-header': '8.5rem'
      },
    },
  },
  plugins: [],
}

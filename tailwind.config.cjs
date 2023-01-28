/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'gilroy': ['Gilroy', 'sans-serif']
    },
    colors: {
      "primary": "#FF385C",
      "white": '#FFFFFF',
      'black': '#000000',
      'grey': '#A5B0B7',
      'soft-stroke': '#EEEEEE',
      'property-stroke': '#D3D3D3',
      'border-grey': '#DDDDDD',
      'amenity-green': '#1CC64B',
      'title-text': '#383838',
      'paragraph': '#797979',
      'errors': '#EF1313',
    },
    container: {
      center: true,
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}

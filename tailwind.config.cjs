/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xlMax': {'max': '1535px'},
        'xlMax': {'max': '1279px'},
        'lgMax': {'max': '1023px'},
        'mdMax': {'max': '767px'},
        'smMax': {'max': '639px'},
        'xsMax': {'max': '399px'},
      }},
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
  },
  plugins: [],
}

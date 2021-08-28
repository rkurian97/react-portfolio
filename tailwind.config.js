module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors:{
          'gray': {
            DEFAULT: '#7A7A7A',
            '50': '#F9F9F9',
            '100': '#EBEBEB',
            '200': '#CFCFCF',
            '300': '#B3B3B3',
            '400': '#969696',
            '500': '#7A7A7A',
            '600': '#595959',
            '700': '#383838',
            '800': '#1F1F1F',
            '900': '#121212'
          },
          'bright-turquoise': {
            DEFAULT: '#15CDFC',
            '50': '#F8FDFF',
            '100': '#DEF8FF',
            '200': '#ACEDFE',
            '300': '#7AE3FD',
            '400': '#47D8FD',
            '500': '#15CDFC',
            '600': '#03AFDB',
            '700': '#0287A9',
            '800': '#025F76',
            '900': '#013644'
          }
        }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}

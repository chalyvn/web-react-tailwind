/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      theme: {
        extend: {
          spacing: {
            '13': '3.25rem',
            '15': '3.75rem',
            '128': '32rem',
            '144': '36rem',
          },
          colors: {
            primary: 'primary',
            danger: 'danger',
            'test': {
              100: '#cffafe',
              200: '#a5f3fc',
              300: '#67e8f9',
              400: '#22d3ee',
              500: '#06b6d4',
              600: '#0891b2',
              700: '#0e7490',
              800: '#155e75',
              900: '#164e63',
            },
          }
        }
      }
    },
  },
  plugins: [],
}


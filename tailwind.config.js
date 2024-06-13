/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js,php}'],
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      colors:{
        primary: '#ea580c',
        secondary:'#075985',
        basic: '#64748b',
        dark: '#0f172a'
      },
      screens:{
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}


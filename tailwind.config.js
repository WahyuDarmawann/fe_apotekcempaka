const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    colors: {
      'primari': '#3161A3',
      'sekunder': '#EBFFFB'
    },

    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

      backgroundImage: {
        'landing-background': "url('/src/assets/bg-landing_page.svg')",
        'footer-background': "url('/src/assets/bg-footer.svg')"
      }
    },
  },
  plugins: [
    
  ]
}


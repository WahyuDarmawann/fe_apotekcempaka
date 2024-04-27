const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primari': '#3161A3',
        'sekunder': '#EBFFFB'
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


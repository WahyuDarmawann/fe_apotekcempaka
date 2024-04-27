const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'landing-background': "url('/src/assets/bg-landing_page.svg')"
      }
    },
  },
  plugins: [
    
  ]
}


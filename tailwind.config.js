module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        db: ["db", "sans-serif"]
      },
      colors: {
        'db-red': '#f01414',
        'db-red-dark': '#cc0000',
        'db-red-hover': '#c00',
        'db-button-blue': '#515968',
        'db-button-blue2': '#2D364A'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],}

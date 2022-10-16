/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
    
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        overpass:['Overpass', 'sans-serif'],
        varela:['Varela', 'sans-serif'],
        biz:['BIZ UDPGothic','sans-serif'],
        poppins:['Poppins'],
     },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

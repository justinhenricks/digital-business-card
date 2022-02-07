module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      sans: ['Inter', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

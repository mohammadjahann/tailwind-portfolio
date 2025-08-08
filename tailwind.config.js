 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'lateef-regular':'lateef-regular',
      'lateef-bold': 'lateef-bold',
      'Caprasimo-Regular' : 'Caprasimo-Regular'
    },
    screens : {
      'sm':'480px',
      'lg': '1024px',
      'md': '768px'
    },
    extend: {},
  },
  plugins: [],
}
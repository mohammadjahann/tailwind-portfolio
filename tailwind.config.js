/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    container: {
      center: true, // وسط‌چین شدن کانتینر
      padding: {
        DEFAULT: '1rem', // پدینگ پیش‌فرض
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        'lateef-regular': 'lateef-regular',
        'lateef-bold': 'lateef-bold',
        'Caprasimo-Regular': 'Caprasimo-Regular'
      },
      screens: {
        'sm': '480px',
        'lg': '1024px',
        'md': '768px'
      },
      spacing: {
        'big': '38rem'
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "logoColor": "#072B0B",
      "white": "#ffffff",
      "btnColor": "#857450",
      "btnColor2": "#876e3a",
      "txtColor": "#3F392D",
      "txtHead": "#867450",
      "black": "#000000",
      "icon-bg": "#E8D8B7",
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif'],
    },
    fontWeight: {
      'thin': '100',
      'hairline': '100',
      'extralight': '200',
      'light': '300',
      'normal': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700',
      'extra-bold': '800',
      'logo-bold': '900'
    },
    extend: {},
  },
  plugins: [],
}


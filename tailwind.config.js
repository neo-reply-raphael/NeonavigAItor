/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'myBg':'#950EBA',
        'myPrimary':'#fff',
        'mySecondary':'#A7C7E7',

      },
    },
  },
  plugins: [],
}

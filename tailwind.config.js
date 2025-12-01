/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#ffedbf',
          200: '#ffe099',
          300: '#ffce4d',
          400: '#ffbf00',
          500: '#e6ac00',
          600: '#b38600',
          700: '#806000',
          800: '#4d3900',
          900: '#1a1300',
        },
        slate: {
          850: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
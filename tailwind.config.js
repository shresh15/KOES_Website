/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fe',
          100: '#dde6fc',
          200: '#c2d3fa',
          300: '#98b5f6',
          400: '#678df0',
          500: '#4268e8',
          600: '#2c4cdd',
          700: '#2439cb',
          800: '#2230a5',
          900: '#212e82',
          950: '#181e50',
        },
        gold: {
          400: '#f5c842',
          500: '#e6b425',
          600: '#c99a10',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

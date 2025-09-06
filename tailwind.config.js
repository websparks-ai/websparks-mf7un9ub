/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#dc2626',
          600: '#b91c1c',
          900: '#7f1d1d'
        },
        secondary: {
          500: '#64748b',
          600: '#475569'
        },
        accent: {
          500: '#c2410c',
          600: '#9a3412'
        }
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

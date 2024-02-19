/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d7ae68',
        secondary: '#2F3440',
        main_bg: '#212121',
      },

    },
  },
  plugins: [],
}
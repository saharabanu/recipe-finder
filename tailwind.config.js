/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemon: ["Lemon", "serif"],
        sanspro: ["Value Sans Pro", "serif"],
        baklida: ["Bakilda Histori", "serif"],
        lemonada: ["Lemonada", "cursive"],
        abril: ["Abril Display", "serif"],
       
      }
    },
  },
  plugins: [],
}


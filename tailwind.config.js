/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ["Abril Display", "serif"],
       
      },
      backgroundImage: {
        'banner-bg':"url('https://braise.qodeinteractive.com/wp-content/uploads/2021/09/main-home-recipe-list-img-4.jpg')",
       

        
      },
      boxShadow: {
        'orange-black': '1px 1px 2px orange, -1px -1px 2px black',
      },
    },
  },
  plugins: [],
}


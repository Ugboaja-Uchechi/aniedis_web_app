/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{ 
        syne: ["syne","sans-serif"],
        rubik: ["Rubik", "sans-serif"]

      },
      height: {
        exploreimgheight: 'calc(10rem + 25vw)',
      },
      width: {
        exploreh2width: 'calc(15rem + 33vw)',
      },
      fontSize: {
        xtralarge: 'calc(.61rem + 0.75vw)',
        large: 'calc(.5rem + 0.75vw)',
        herotext: 'calc(1rem + 3.5vw)',
        exploreh2: 'calc(.9rem + 3vw)',
        
      },
      padding: {
        inlinepadding: 'calc(2rem + 2vw)',
        exploreinline: 'calc(3rem + 4vw)',
        explorestart: 'calc(2rem + 6vw)',
      },
      gridTemplateColumns: {
        threeColumns: 'repeat(auto-fit,minmax(170px,1fr))',
      },
      
    },
  },
  plugins: [],
}


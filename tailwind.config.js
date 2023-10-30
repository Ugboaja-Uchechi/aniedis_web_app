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
        articleMainImageHeight: 'calc(5rem + 25vw)',
      },
      width: {
        exploreh2width: 'calc(15rem + 33vw)',
        articleMainImageWidth: 'calc(100% - 30px)',
        articleSubImages: 'calc(100% - 60px)',
        exploreImage: 'calc(15rem + 20vw)',
        sideRectangle: 'calc(1.25rem + 2vw)',
        quote: 'calc(3.825rem + 7vw)',
      },
      fontSize: {
        xtralarge: 'calc(.61rem + 0.75vw)',
        large: 'calc(.5rem + 0.75vw)',
        herotext: 'calc(1rem + 3.5vw)',
        mobileHeroText: 'calc(0.5rem + 3vw)',
        mobileSize16: 'calc(0.5rem + 2vw)',
        mobileSize24: 'calc(0.5rem + 2.75vw)',
        exploreh2: 'calc(.5rem + 3.4vw)',
        size32: 'calc(.25rem + 2vw)',
        size40: 'calc(0.5rem + 2vw)',
        articleParagraph: 'calc(.5rem + 1vw)',
        discoverBtn: 'calc(.325rem + .75vw)',
      },
      padding: {
        inlinepadding: 'calc(2rem + 2vw)',
        exploreinline: 'calc(3rem + 4vw)',
        explorestart: 'calc(1rem + 6vw)',
      },
      marginBottom: {
        btnBottom: 'calc(2rem + 12vh)',
      },
      gridTemplateColumns: {
        threeColumns: 'repeat(auto-fit,minmax(170px,1fr))',
        twoColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      },
      
    },
  },
  plugins: [],
}


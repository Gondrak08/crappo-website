module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crapurple': "#0F054C",
        'craprupebg': '#2B076E',
        'crablue': '#758EF5',
        'crabluedark': '#3671E9',
        'crabluelight': '#91A2FA',
        'cragreyneutral': '#E0E0E0',
        'cragreydark':'#828282',
        'crawhite':'#FFFFFF',
        'cradark':'#0D0D2B'
      },
      screens: {
        mf: "990px",
      },
      container: {
        md: "1100px"
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
}

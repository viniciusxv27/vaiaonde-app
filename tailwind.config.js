/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070707",
        primary: {
          DEFAULT: "#ff9c01",
          100: "#ff9001",
          200: "#ff8e01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1e1e2d",
          200: "#232533",
        },
        gray: {
          100: "#cdcde0",
        },
      },
      fontFamily: {
        pthin: ["Poppins", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        sfthin: ["Sf-Thin", "sans-serif"],
        sfultralight: ["Sf-Ultralight", "sans-serif"],
        sflight: ["Sf-Light", "sans-serif"],
        sfregular: ["Sf-Regular", "sans-serif"],
        sfmedium: ["Sf-Medium", "sans-serif"],
        sfsemibold: ["Sf-Semibold", "sans-serif"],
        sfbold: ["Sf-Bold", "sans-serif"],
        sfheavy: ["Sf-Heavy", "sans-serif"],
        sfblack: ["Sf-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
 
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "19/20": "90%",
      full: "100%",
    },

    extend: {
      colors: {
        primary: "#ffd615",
        my_blue:"#39bdc8",
        my_voilet:"#a696c8",
        my_red:"#cb3b3b",
        transparent: "transparent",
        current: "currentColor",
        black: "#3f3b3b",
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
      },
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      spacing: {
        88: "352px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


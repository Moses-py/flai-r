/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{tsx,jsx}"];
export const theme = {
  fontFamily: {
    sans: ["Roboto Serif", "serif"],
    serif: ["Montserrat", "sans-serif"],
    number: ["Libre Baskerville", "serif"],
  },
  container: {
    center: true,
  },

  extend: {
    colors: {
      primary: "#F26522",
    },
    screens: {
      xs: "420px",
      xl: "1280px",
      sm: "600px",
    },
  },
};
export const plugins = [];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-1": "#0b9e8e",
        "green-2": "#64ada5",
        red: "#F0502C",
        orange: "#F59724",
        indigo: "#918EF4",
        peach: "#E2AC79",
        cream: "#FFF3E5",
      },

      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        titan: ["Titan One", "sans-serif"],
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};

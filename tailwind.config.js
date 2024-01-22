/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#020D28",
        yellow: "#f68020",
        gray: "#D9D9D9",
      },
    },
    screens: {
      lg: "1600px",
      md: "440px",
    },

  },
  plugins: [],
};

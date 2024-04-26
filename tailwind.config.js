/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#020D28",
        yellow: "#f68020",
        gray: "#4A4848",
      },
      screens: {
        sm: "440px",
      },
    },
  },
  plugins: [],
};

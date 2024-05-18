/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#020D28",
        yellow: "#f68020",
        "yellow-600": "#e7610f",
        gray: "#333333",
        // gray: "#4A4848",
        "gray-950": "#272625",
        // /F2F1F2
      },
    },
  },
  plugins: [],
};

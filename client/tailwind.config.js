/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#FB6C0C",
        "dark-gray": "#211E1F",
        "light-gray": "#686D76",
      },
      backgroundImage: {
        "text-gradient": "linear-gradient(90deg, #FB6C0C 0%, #C5BB6A 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};

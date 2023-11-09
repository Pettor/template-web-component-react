/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  daisyui: {
    darkTheme: "dark"
  },
  theme: {
    extend: {
      fontFamily: "Rubik",
      fontWeight: 500,
    },
  },
  plugins: [require("daisyui")],
};

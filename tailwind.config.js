/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robot: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#fcffff",
          300: "#f2fbff",
          400: "#e8f1fd",
          500: "#dee7f3",
          600: "#d4dde9",
          700: "#cad3df",
          800: "#c0c9d5",
          900: "#b6bfcb",
        },
        secondary: {
          50: "#6ddad7",
          100: "#63d0cd",
          200: "#59c6c3",
          300: "#4fbcb9",
          400: "#45b2af",
          500: "#3ba8a5",
          600: "#319e9b",
          700: "#279491",
          800: "#1d8a87",
          900: "#13807d",
        },
      },
    },
  },
  plugins: [],
};

/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brush: ["Caveat Brush", "cursive"],
        main: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

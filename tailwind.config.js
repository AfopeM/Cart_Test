/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./component/**/*.tsx", "./context/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-base)"],
      },
    },
  },
  plugins: [],
};

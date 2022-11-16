/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        trees: "url('/background.png')",
        "trees-2x": "url('/background@2x.png')",
        tree: "url('/tree.png')",
      },
      colors: {
        primary: "#20b716",
        secondary: "#ee2d6e",
        blue: "#4285f4",
        gray: "#707070",
        lightgray: "#ddd",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};

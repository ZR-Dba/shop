/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   mytheme: {
      //     primary: "#FFFF00",
      //     secondary: "#f6d860",
      //     accent: "#37cdbe",
      //     neutral: "#3d4451",
      //     "base-100": "#ffffff",
      //   },
      // },
      "dark",
      "cupcake",
      "valentine",
    ],
  },
};

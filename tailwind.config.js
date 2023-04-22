/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          secondary: "#f2f2f2",

          "primary-focus": "mediumblue",
        },
      },
      {
        dark: {
          "base-100": "#242933",
          secondary: "#2a303c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

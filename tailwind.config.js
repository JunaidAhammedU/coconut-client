/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        defaultBtnColor: "#FF642F",
        onHoverButton: "#e04612",
      },
      screens: {
        ultraSm: "300px",
        foldSize: "280px",
      },
    },
  },
  daisyui: {
    themes: ["cmyk"],
  },
  plugins: [require("flowbite/plugin"), require("daisyui")],
};

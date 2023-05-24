/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#f5ebe0",
        dark: "#0e0e0e",
      },
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
        title: ["Montserrat", "Helvetica", "sans"],
      },
      boxShadow: {
        imgShadowDark: "12px 12px",
        imgShadowDarkLight: "12px 12px white",
      },
    },
  },
  plugins: [],
};

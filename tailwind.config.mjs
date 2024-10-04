/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blackBroker: "#212121",
        blueBroker: "#857266",
        grayBroker: "#D9D9D9",
        whiteContainBroker: "#FCFCFC",
      },
      fontFamily: {
        primary: ["SFPro", "sans-serif"],
      },
    },
  },
  plugins: [],
};

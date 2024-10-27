/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "1920px": { "max": "1920px" },
      "1600px": { "max": "1600px" },
      "1440px": { "max": "1440px" },
      "1200px": { "max": "1200px" },
      "1024px": { "max": "1024px" },
      "800px": { "max": "800px" },
      "600px": { "max": "600px" },
      "425px": { "max": "425px" },
      "375px": { "max": "375px" }
    },
    extend: {
      colors: {
        base_blue: "#005c9d",
        diff_blue: "#3f51b5",
        base_black: "#111",
        milk_color: "#dedede",
        black_text: "#313131",
        milk_gray: "#eeeeee",
        easy_blue: "#0083b7"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}


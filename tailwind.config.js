const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", ...fontFamily.sans],
        almaghribi: ["var(--font-almaghribi)"],
      },
      colors: {
        primary: {
          100: "#F0E9E1",
          200: "#CC9B80",
          300: "#B18366",
          400: "#7B5741", // 78543E #B18366 #B18367 #CC9B80
          500: "#78543E",
        },
      },
    },
  },
  plugins: [],
};

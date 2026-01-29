const { fontFamily } = require("tailwindcss/defaultTheme");

// @keyframes jello {
//   from,
//   11.1%,
//   to {
//     transform: translate3d(0, 0, 0);
//   }

//   22.2% {
//     transform: skewX(-12.5deg) skewY(-12.5deg);
//   }

//   33.3% {
//     transform: skewX(6.25deg) skewY(6.25deg);
//   }

//   44.4% {
//     transform: skewX(-3.125deg) skewY(-3.125deg);
//   }

//   55.5% {
//     transform: skewX(1.5625deg) skewY(1.5625deg);
//   }

//   66.6% {
//     transform: skewX(-0.78125deg) skewY(-0.78125deg);
//   }

//   77.7% {
//     transform: skewX(0.390625deg) skewY(0.390625deg);
//   }

//   88.8% {
//     transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
//   }
// }
// @keyframes wobble {
//   from {
//     transform: translate3d(0, 0, 0);
//   }

//   15% {
//     transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
//   }

//   30% {
//     transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
//   }

//   45% {
//     transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
//   }

//   60% {
//     transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
//   }

//   75% {
//     transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
//   }

//   to {
//     transform: translate3d(0, 0, 0);
//   }
// }

// @keyframes swing {
//   20% {
//     transform: rotate3d(0, 0, 1, 15deg);
//   }

//   40% {
//     transform: rotate3d(0, 0, 1, -10deg);
//   }

//   60% {
//     transform: rotate3d(0, 0, 1, 5deg);
//   }

//   80% {
//     transform: rotate3d(0, 0, 1, -5deg);
//   }

//   to {
//     transform: rotate3d(0, 0, 1, 0deg);
//   }
// }
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
        sans: ["var(--font-kufam)", ...fontFamily.sans],
        muraba: ["var(--font-muraba)"],
        murabaOutline: ["var(--font-muraba-outline)"],
        marhaban: ["var(--font-marhaban)"],
      },
      colors: {
        primary: "#ffe83c",
        secondary: "#d02b2b",
        tertiary: "#E9D1AD",
        accent: "#377c45",
        black: "#000000",
        white: "#ffffff",
      },
      animation: {
        swing: "swing 1s ease-in-out",
      },
      keyframes: {
        swing: {
          "0%, 100%": {
            transform: "rotate3d(0, 0, 1, 0deg)",
          },
          "20%": {
            transform: "rotate3d(0, 0, 1, 15deg)",
          },
          "40%": {
            transform: "rotate3d(0, 0, 1, -10deg)",
          },
          "60%": {
            transform: "rotate3d(0, 0, 1, 5deg)",
          },
          "80%": {
            transform: "rotate3d(0, 0, 1, -5deg)",
          },
        },
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color, rgba(0,0,0,0.5))",
        DEFAULT: "0 2px 4px var(--tw-shadow-color, rgba(0,0,0,0.5))",
        lg: "0 8px 16px var(--tw-shadow-color, rgba(0,0,0,0.5))",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};

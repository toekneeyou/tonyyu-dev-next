import type { Config } from "tailwindcss";

export const turquoise = "#07EEE0";
export const gray = "#333";
export const fog = "#CCC";
export const black = "#13141b";
export const white = "#EEE";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bring-to-front": "bring-to-front 750ms ease-in-out forwards",
        "move-to-back": "move-to-back 750ms ease-in-out forwards",
      },
      backgroundImage: {
        abby: `url("/images/abby-bg.jpg")`,
        "abby-gradient":
          "linear-gradient(145.47deg, #604956 19.56%, #3D2D36 109.08%)",
        tonyyu: `url("/images/tonyyu-bg.jpg")`,
      },
      keyframes: {
        "bring-to-front": {
          "0%": { transform: "translateX(32px) scale(0.9)", zIndex: "0" },
          "50%": { transform: "translateX(300px) scale(1)", zIndex: "0" },
          "70%": { zIndex: "1" },
          "100%": { transform: "translateX(0)", zIndex: "1" },
        },
        "move-to-back": {
          "0%": { transform: "translateX(0) scale(1)", zIndex: "1" },
          "50%": { transform: "translateX(0px) scale(0.9)", zIndex: "1" },
          "70%": { zIndex: "0" },
          "100%": { transform: "translateX(32px) scale(0.9)", zIndex: "0" },
        },
      },
      colors: {
        "app-black": black,
        "app-white": white,
        turquoise,
        "app-fog": fog,
        "app-gray": gray,
      },
      fontSize: {
        "1rem": "1rem",
        "2rem": "2rem",
        "3rem": "3rem",
        "4rem": "4rem",
        "5rem": "5rem",
      },
    },
  },
  plugins: [],
};
export default config;

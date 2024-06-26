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
        "floating-one": "floating-one 20s ease-in-out infinite",
        "floating-two": "floating-two 25s ease-in-out infinite",
        "floating-three": "floating-three 30s ease-in-out infinite",
        "floating-four": "floating-four 35s ease-in-out infinite",
        "floating-five": "floating-five 40s ease-in-out infinite",
        "floating-six": "floating-six 45s ease-in-out infinite",
        "floating-seven": "floating-seven 50s ease-in-out infinite",
        "floating-eight": "floating-eight 55s ease-in-out infinite",
        "floating-nine": "floating-nine 60s ease-in-out infinite",
        "floating-ten": "floating-ten 44s ease-in-out infinite",
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
        "floating-one": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(1rem, 1rem)` },
          "50%": { transform: `translate(1.5rem, 0.5rem)` },
          "75%": { transform: `translate(1rem, 1rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-two": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(-1rem, 1rem)` },
          "50%": { transform: `translate(-1.5rem, 0.5rem)` },
          "75%": { transform: `translate(-1rem, 1rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-three": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(1rem, 2rem)` },
          "50%": { transform: `translate(0.5rem, 4rem)` },
          "75%": { transform: `translate(1rem, 2rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-four": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(-1rem, -2rem)` },
          "50%": { transform: `translate(-2rem, -4rem)` },
          "75%": { transform: `translate(-1rem, -2rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-five": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(-2rem, 5rem)` },
          "50%": { transform: `translate(-4rem, 10rem)` },
          "75%": { transform: `translate(-2rem, 5rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-six": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(-3rem, 1rem)` },
          "50%": { transform: `translate(-6rem, 2rem)` },
          "75%": { transform: `translate(-3rem, 1rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-seven": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(2rem, 1rem)` },
          "50%": { transform: `translate(6rem, 1.5rem)` },
          "75%": { transform: `translate(2rem, 1rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-eight": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(-6rem, 10rem)` },
          "50%": { transform: `translate(-10rem, 20rem)` },
          "75%": { transform: `translate(-6rem, 10rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-nine": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(4rem, 5rem)` },
          "50%": { transform: `translate(10rem, 10rem)` },
          "75%": { transform: `translate(4rem, 5rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
        },
        "floating-ten": {
          "0%": { transform: `translate(0,0)` },
          "25%": { transform: `translate(4rem, 0rem)` },
          "50%": { transform: `translate(8rem, 1rem)` },
          "75%": { transform: `translate(4rem, 0rem)` },
          "100%": { transform: `translate(0rem, 0rem)` },
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

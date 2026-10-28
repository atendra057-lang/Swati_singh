import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#11151B",
          dark: "#0B0E13",
          light: "#181E26",
          elevated: "#202732",
          border: "#262E3B",
        },
        oxblood: {
          DEFAULT: "#4A1722",
          dark: "#341018",
          light: "#5E1E2B",
          subtle: "#2A0D14",
        },
        ivory: {
          DEFAULT: "#F4F0E8",
          pure: "#FAF8F5",
          dark: "#ECE6DA",
          border: "#E1D9CA",
          muted: "#D8CEBC",
        },
        brass: {
          DEFAULT: "#B49A68",
          light: "#C9B68F",
          dark: "#8E7548",
          muted: "rgba(180, 154, 104, 0.25)",
          subtle: "rgba(180, 154, 104, 0.12)",
        },
        graphite: {
          DEFAULT: "#383A3E",
          dark: "#26282B",
          light: "#4E5156",
          muted: "#666B73",
        },
        stone: {
          DEFAULT: "#9D968B",
          light: "#B2ABA0",
          dark: "#7A7368",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        display: ["var(--font-dm-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.22em",
        ultra: "0.3em",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;


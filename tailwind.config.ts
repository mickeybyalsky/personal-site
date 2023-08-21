import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue1: "#E0F2FF",
        blue2: "#9ED5FF",
        blue3: "#ACC1D2",
      },
    },
  },
  keyframes: {
    bounce: {
      from: { transform: "translateY(14px)" },
      to: { transform: "translateY(0)" },
    },
    wave: {
      "0%": { transform: "rotate(0.0deg)" },
      "10%": { transform: "rotate(14deg)" },
      "20%": { transform: "rotate(-8deg)" },
      "30%": { transform: "rotate(14deg)" },
      "40%": { transform: "rotate(-4deg)" },
      "50%": { transform: "rotate(10.0deg)" },
      "60%": { transform: "rotate(0.0deg)" },
      "100%": { transform: "rotate(0.0deg)" },
    },
  },
  animation: {
    wave: "wave 1s  infinite",
    bounce:
      "bounce 0.9s alternate cubic-bezier(0.95, 0.05,0.795, 0.035) infinite",
  },
  plugins: [],
};

export default config;

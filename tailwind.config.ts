import { content, plugin } from "flowbite-react/tailwind";
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonOk: "var(--buttonOk)",
        buttonCancel: "var(--buttonCancel)",
        modalBg: "var(--modalBg)",
        correct: "var(--correct)",
        incorrect: "var(--incorrect)",
      },
      keyframes: {
        fall: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
      },
      animation: {
        fall: "fall linear infinite",
      },
    },
  },
  plugins: [plugin()],
};

export default config;

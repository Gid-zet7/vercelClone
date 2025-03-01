import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // keyframes: {
      //   "open-menu": {
      //     "0%": {
      //       transform: "scaleX(0)",
      //     },
      //     "80%": {
      //       transform: "scaleX(1.2)",
      //     },
      //     "100%": {
      //       transform: "scaleX(1)",
      //     },
      //   },
      // },
      // animation: {
      //   "open-menu": "open-menu 0.5s ease-in-out forwards",
      // },
    },
  },
  plugins: [],
} satisfies Config;

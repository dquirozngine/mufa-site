import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lifted from una-unless.org. Off-white ground rather than pure white
        // is what stops the whole thing reading as a default browser page.
        paper: "#F2F2F2",
        ink: "#000000",
        // Slightly lifted black for borders and buttons — pure #000 on #F2F2F2
        // is a touch harsh at 2px rule weight.
        graphite: "#1B1B1B",
        accent: "#FF512E",
        marine: "#3537B2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Black", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        display: "-0.035em",
      },
      transitionDuration: {
        // Their transitions are slow and confident — 500ms, not 150ms.
        DEFAULT: "500ms",
        slow: "600ms",
      },
    },
  },
  plugins: [],
};

export default config;

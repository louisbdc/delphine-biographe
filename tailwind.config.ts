import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FDFBF7',
        'cream-dark': '#F5F2EB',
        'navy': '#1E293B',
        'navy-light': '#334155',
        'sage': '#4F6F52',
        'gold': '#C5A059',
        'old-rose': '#B76E79',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
      },
      fontSize: {
        'base-lg': '1.125rem', /* 18px minimum for body */
      }
    },
  },
  plugins: [],
};
export default config;


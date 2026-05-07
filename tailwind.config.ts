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
        'cream': 'rgb(var(--color-cream) / <alpha-value>)',
        'cream-dark': 'rgb(var(--color-cream-dark) / <alpha-value>)',
        'navy': 'rgb(var(--color-navy) / <alpha-value>)',
        'navy-light': 'rgb(var(--color-navy-light) / <alpha-value>)',
        'sage': 'rgb(var(--color-sage) / <alpha-value>)',
        'gold': 'rgb(var(--color-gold) / <alpha-value>)',
        'royal-blue': 'rgb(var(--color-royal-blue) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-lato)', 'sans-serif'],
        dancing: ['var(--font-dancing)', 'cursive'],
      },
      fontSize: {
        'base-lg': '1.125rem', /* 18px minimum for body */
      }
    },
  },
  plugins: [],
};
export default config;


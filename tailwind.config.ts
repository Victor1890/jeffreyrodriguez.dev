/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindTypography from "@tailwindcss/typography";

const srcDir = "./";
export default <Partial<Config>>{
  darkMode: ["class"],
  content: [`${srcDir}/components/**/*.{vue,js,ts,jsx,tsx}`, `${srcDir}/layouts/**/*.vue`, `${srcDir}/pages/**/*.vue`, `${srcDir}/composables/**/*.{js,ts}`, `${srcDir}/plugins/**/*.{js,ts}`, `${srcDir}/utils/**/*.{js,ts}`, `${srcDir}/App.{js,ts,vue}`, `${srcDir}/app.{js,ts,vue}`, `${srcDir}/Error.{js,ts,vue}`, `${srcDir}/error.{js,ts,vue}`, `${srcDir}/app.config.{js,ts}`],
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "rgb(var(--c-primary-dark) / <alpha-value>)",
        "secondary-dark": "rgb(var(--c-secondary-dark) / <alpha-value>)",
        "ternary-dark": "rgb(var(--c-ternary-dark) / <alpha-value>)",

        primary: "rgb(var(--c-cyan) / <alpha-value>)",
        "primary-content": "#ffffff",

        // Neo-brutalist redesign palette
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        grid: "rgb(var(--c-grid) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        "footer-dark": "rgb(var(--c-footer-dark) / <alpha-value>)",
        cyan: "rgb(var(--c-cyan) / <alpha-value>)",
        yellow: "rgb(var(--c-yellow) / <alpha-value>)",
        indigo: "rgb(var(--c-indigo) / <alpha-value>)",
        mint: "rgb(var(--c-mint) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        dim: "rgb(var(--c-dim) / <alpha-value>)",
        "ink-text": "rgb(var(--c-ink-text) / <alpha-value>)",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Archivo", ...defaultTheme.fontFamily.sans],
        grotesk: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        loading: ["Flow Circular", "cursive"],
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      // fontSize: {
      //   base: [
      //     "16px",
      //     {
      //       fontWeight: "400",
      //       lineHeight: "24px",
      //     },
      //   ],
      //   xs: "12px",
      //   sm: "14px",
      //   md: "16px",
      //   lg: "18px",
      //   xl: "20px",
      //   "display-xs": [
      //     "24px",
      //     {
      //       lineHeight: "32px",
      //     },
      //   ],
      //   "display-sm": [
      //     "30px",
      //     {
      //       lineHeight: "38px",
      //     },
      //   ],
      //   "display-md": [
      //     "36px",
      //     {
      //       lineHeight: "44px",
      //       letterSpacing: "-0.72px",
      //     },
      //   ],
      //   "display-lg": [
      //     "48px",
      //     {
      //       lineHeight: "60px",
      //       letterSpacing: "-0.96px",
      //     },
      //   ],
      //   "display-xl": [
      //     "60px",
      //     {
      //       lineHeight: "72px",
      //       letterSpacing: "-1.2px",
      //     },
      //   ],
      //   "display-2xl": [
      //     "72px",
      //     {
      //       lineHeight: "90px",
      //       letterSpacing: "-1.44px",
      //     },
      //   ],
      // },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [tailwindTypography],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
        },
        secondary: {
          DEFAULT: "#8b5cf6",
        },
        background: {
          DEFAULT: "#0f172a",
        },
        surface: {
          DEFAULT: "#1e293b",
          light: "#334155",
        },
        border: {
          DEFAULT: "#475569",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        "slide-in": "slideIn 0.3s ease-out",
      },
      keyframes: {
        slideIn: {
          from: {
            transform: "translateX(100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-bounce":
          "fadeInBounce 1s cubic-bezier(0.25, 1, 0.5, 1) forwards",
      },
      keyframes: {
        fadeInBounce: {
          "0%": { opacity: 0, transform: "translateY(30px) scale(0.95)" },
          "50%": { opacity: 1, transform: "translateY(-5px) scale(1.03)" },
          "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};

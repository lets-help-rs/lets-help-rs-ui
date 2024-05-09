/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-rs": "#007f5f",
        "red-rs": "#d62828",
        "yellow-rs": "#fcbf49",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        "fade-in": "fadeIn 2s ease-out forwards",
      },
      fontFamily: {
        'custom': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};

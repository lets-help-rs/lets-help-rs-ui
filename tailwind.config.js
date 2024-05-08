/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-rs': '#007f5f',  
        'red-rs': '#d62828',    
        'yellow-rs': '#fcbf49', 
      },
    },
  },
  plugins: [],
}
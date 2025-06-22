/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        "base-text": "#191919",
        "highlight": "#0094cf"
      },
      boxShadow: {
        "light": "0px 0px 5px rgba(0, 0, 0, 0.3)",
        "normal": "0px 2px 15px rgba(1,0,0,0.2)",
        "hovering": "0px 0px 15px #38e8ff"
      },
      borderColor: {
        "light": "#00000056"
      },
      gridTemplateColumns: {
        "2-tight": "repeat(2, minmax(0px, max-content))",
        "3-tight": "repeat(3, minmax(0px, max-content))",
        "4-tight": "repeat(4, minmax(0px, max-content))",
        "6-tight": "repeat(6, minmax(0px, max-content))"
      },
      screens: {
        "sm-plus": "500px"
      },
      backgroundColor: {
        "light-blue": "#38e8ff"
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        secondary: "#EFF2F4",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlack: "#1C1C1C",
        dimmerBlack: "#909499",
        dimmestBlack: "#A9ACB0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

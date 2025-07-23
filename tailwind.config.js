/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#CC2B52",
        secondary: "#3B486E",
        bgColorPrimary: "#F7EBEE",
        light: "#3B486E99",
        hrColor: "rgba(59,72,110,0.4)",
        lightText: "#6E6E6E",
        bgHero: "#F8F8F8",
        textBlack100: "#292929",
        textBlack200: "#212121",
        bgHeroAbout: "#F9F1F3",
        bgClientHero: "#F4E1E6",
        borderColor: "#F1F1F1",
        hrBgColor: "#CFDFE2",
        orColor: "#294957",
        bgSignGoogle: "#F3F9FA",
        googleBorderColor: "#E8E8E8",
        allRightsReserve: "#959CB6",
        labelColor: "#0C1421",
        inputBackgroundColor: "#F7FBFF",
        textBlack300: "#121212",
        textBlack200: "#111111",
        radioSelected: "#1AA428",
        gray600: "#666666",
        gray200: "#222222",
        navBorderColor: "#CC2B5280",
      },
      fontFamily: {
        syncopate: ['Syncopate', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
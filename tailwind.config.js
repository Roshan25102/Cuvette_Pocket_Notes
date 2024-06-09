/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        textBody: "#F7ECDC",
        grayShade: "#E8E8E8",
        lavender: "#B38BFA",
        pink: "#FF79F2",
        skyblue: "#43E6FC",
        coral: "#F19576",
        ultramarine: "#0047FF",
        periwinkle: "#6691FF",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    plugins: [],
  },
};

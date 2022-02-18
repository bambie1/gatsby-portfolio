module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "3xl": "1px -3px 14px #c4c4c4",
        "dark-3xl": "1px -3px 14px #090505",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#1E1111",
      white: "#FDFEFF",
      gray: "#8D8D8D",
      lightGray: "#B5B6B5",
      lightDark: "#322626",
      gray: "#746C70",
    },
  },
  plugins: [],
};

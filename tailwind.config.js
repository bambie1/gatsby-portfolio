module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      boxShadow: {
        "3xl": "1px -3px 14px #c4c4c4",
        "dark-3xl": "1px -3px 14px #4e545c",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000401",
      white: "#E5E8E8",
      gray: "#4E545C",
      disabled: "#d3d3d3",
      disabledText: "#808080",
      lightGray: "#8D9797",
      lightDark: "#181a1c",
    },
  },
  plugins: [],
};
// disabled:bg-disabled disabled:text-disabledText

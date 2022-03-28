module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      boxShadow: {
        "3xl": "1px -3px 14px #c4c4c4",
        "dark-3xl": "1px -3px 14px #4e545c",
        "dark-lg":
          "2px 2px 15px 8px rgb(26 26 26), 0 4px 6px -4px rgb(0 0 0 / 10%)",
        "dark-sm": "0 1px 2px 0 rgb(26 26 26, 0.7)",
      },
      colors: {
        transparent: "transparent",
        black: "#000401",
        disabled: "#d3d3d3",
        disabledText: "#808080",
        lightGray: "#8D9797",
        lightDark: "#181a1c",
      },
      borderWidth: {
        1: "1px",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              quotes: "none",
              "border-left-color": theme("colors.gray.300"),
            },
            hr: {
              "border-color": theme("colors.gray.300"),
            },
          },
        },

        invert: {
          css: {
            color: theme("colors.gray.200"),
            blockquote: {
              "border-left-color": theme("colors.gray.600"),
            },
            hr: {
              "border-color": theme("colors.gray.600"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

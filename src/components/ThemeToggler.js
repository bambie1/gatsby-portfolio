import React from "react";
import { ThemeToggler as GatsbyThemePlugin } from "gatsby-plugin-dark-mode";
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggler = () => {
  return (
    <GatsbyThemePlugin>
      {({ theme, toggleTheme }) => (
        <button>
          <>
            <FontAwesomeIcon
              icon={faLightbulb}
              className="hidden cursor-pointer rounded-lg border border-transparent py-1 px-2 transition duration-300 ease-in-out hover:border-black dark:block dark:hover:border-white"
              onClick={() => toggleTheme("light")}
            />
            <FontAwesomeIcon
              icon={faMoon}
              className="cursor-pointer rounded-lg border border-transparent py-1 px-2 transition duration-300 ease-in-out hover:border-black dark:hidden dark:hover:border-white"
              onClick={() => toggleTheme("dark")}
            />
            <span className="sr-only">
              {theme === "dark" ? "Toggle light mode" : "Toggle dark mode"}
            </span>
          </>
        </button>
      )}
    </GatsbyThemePlugin>
  );
};

export default ThemeToggler;

import React, { useState } from "react";
import { ThemeToggler as GatsbyThemePlugin } from "gatsby-plugin-dark-mode";
import { faLightbulb, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeToggler = () => {
  const [isLight, setIsLight] = useState(false);

  return (
    <GatsbyThemePlugin>
      {({ theme, toggleTheme }) => (
        <FontAwesomeIcon
          icon={isLight ? faMoon : faLightbulb}
          className="cursor-pointer rounded-lg border p-1"
          onClick={() => {
            toggleTheme(isLight ? "dark" : "light");
            setIsLight(!isLight);
          }}
        />
      )}
    </GatsbyThemePlugin>
  );
};

export default ThemeToggler;

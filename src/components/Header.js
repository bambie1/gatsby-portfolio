import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const linkStyle = `
  hover:text-gray-600 dark:hover:text-lightGray dark:hover:border-lightGray py-2 hover:border-b-2 hover:border-gray-600 transition duration-300 ease-in-out
 `;
  const activeStyle = `border-b-2 border-black font-bold dark:border-gray-200`;

  return (
    <nav className="container fixed top-0 left-0 right-0 z-10 mx-auto flex items-center justify-between py-4 pl-4 pr-5 backdrop-blur">
      <Link to="/" className="dark:hidden">
        <StaticImage
          src="../images/light-logo.png"
          width={37}
          height={35}
          alt="Brand logo"
        />
      </Link>
      <Link to="/" className="hidden dark:block">
        <StaticImage
          src="../images/dark-logo.png"
          width={37}
          height={35}
          alt="Brand logo"
        />
      </Link>
      <div className="text-2xl md:hidden">
        <ThemeToggler />
      </div>

      <ul className=" hidden gap-8 md:flex">
        <li className="mr-8 hidden items-center text-xl md:flex">
          <ThemeToggler />
        </li>
        <li>
          <Link to="/about" className={linkStyle} activeClassName={activeStyle}>
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={linkStyle}
            activeClassName={activeStyle}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

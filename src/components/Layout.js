import React from "react";
import { Link } from "gatsby";
import "@fontsource/fira-code";
import { StaticImage } from "gatsby-plugin-image";

import ThemeToggler from "./ThemeToggler";

const Layout = ({ children }) => {
  const linkStyle = `
     hover:opacity-70 py-2 hover:border-b-2 hover:border-gray
    `;
  const activeStyle = `border-b-2 font-bold`;

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <nav className="container fixed top-0 left-0 right-0 z-10 mx-auto flex items-center justify-between py-4 pl-4 pr-5 backdrop-blur">
        <Link to="/">
          <StaticImage
            src="../images/light-logo.png"
            width={43}
            height={40}
            alt="Brand logo"
            className="dark:hidden"
          />
          <StaticImage
            src="../images/dark-logo.png"
            width={43}
            height={40}
            alt="Brand logo"
            className="hidden dark:block"
          />
        </Link>
        <div className="text-2xl md:hidden">
          <ThemeToggler />
        </div>

        <ul className=" hidden gap-8 md:flex">
          <li className="mr-8 hidden items-center md:flex">
            <ThemeToggler />
          </li>
          <li>
            <Link
              to="/about"
              className={linkStyle}
              activeClassName={activeStyle}
            >
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

      <div className=" container mx-auto flex min-h-screen w-full flex-col justify-between px-5">
        <main className="my-28">
          {children}

          <div className="shadow-3xl dark:shadow-dark-3xl dark:bg-lightDark container fixed left-3 right-3 bottom-4 z-10 mx-auto flex h-16 w-auto items-center rounded-lg px-3 backdrop-blur-3xl md:hidden">
            <ul className="flex h-[100%] w-[100%] items-center justify-evenly gap-8 overflow-hidden text-sm">
              <li>
                <Link
                  to="/about"
                  className={linkStyle}
                  activeClassName={activeStyle}
                >
                  About
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
          </div>
        </main>

        <footer className="mb-24 md:mb-0">
          <p>Copyright {new Date().getFullYear()}</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

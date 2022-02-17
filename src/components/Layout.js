import React from "react";
import { Link } from "gatsby";
import "@fontsource/fira-code";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Layout = ({ children }) => {
  const linkStyle = `
     hover:opacity-70 py-2 hover:border-b-2 hover:border-gray
    `;
  const activeStyle = `border-b-2 border-black font-bold`;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex container justify-between items-center mx-auto py-4 pl-4 pr-5 z-10 backdrop-blur">
        <Link to="/">
          <StaticImage
            src="../images/icon.png"
            width={40}
            height={40}
            alt="Brand logo"
          />
        </Link>
        <FontAwesomeIcon icon={faMoon} className="md:hidden text-2xl" />

        <ul className=" hidden md:flex gap-8">
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

      <div className=" container mx-auto px-5 w-full flex flex-col justify-between min-h-screen">
        <main className="my-28">
          {children}

          <div className="left-3 right-3 fixed h-16 backdrop-blur-3xl bottom-1 flex items-center px-3 rounded-lg shadow-3xl z-10 md:hidden">
            <ul className="flex gap-8 h-[100%] w-[100%] text-sm items-center justify-evenly overflow-hidden">
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

        <footer>
          <p>Copyright {new Date().getFullYear()}</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;

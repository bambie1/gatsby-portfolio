import React from "react";
import { Link } from "gatsby";
import "@fontsource/fira-code";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const linkStyle = `
     hover:text-gray-600 dark:hover:text-lightGray dark:hover:border-lightGray py-2 hover:border-b-2 hover:border-gray-600 transition duration-300 ease-in-out
    `;
  const activeStyle = `border-b-2 border-black font-bold dark:border-gray-200`;

  return (
    <div className="bg-gray-200 text-black dark:bg-black dark:text-gray-200">
      <Header />

      <div className=" container mx-auto flex min-h-screen w-full flex-col justify-between px-5">
        <main className="my-28">
          {children}

          <div className="shadow-3xl dark:shadow-dark-3xl dark:bg-lightDark container fixed left-3 right-3 bottom-2 z-10 mx-auto flex h-16 w-auto items-center rounded-lg bg-gray-200 px-3 backdrop-blur-3xl md:hidden">
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

        <Footer />
      </div>
    </div>
  );
};

export default Layout;

import React from "react";

const Footer = () => {
  return (
    <footer className="mb-24 py-4 md:mb-0">
      <p className="text-gray-500 dark:text-gray-400">
        Copyright {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

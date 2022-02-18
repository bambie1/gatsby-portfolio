import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <a
      {...props}
      className="d cursor-pointer rounded-lg border-2 bg-black px-4 py-3 text-white transition duration-300 ease-in-out hover:border-black hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white"
    >
      {children}
    </a>
  );
};

export default Button;

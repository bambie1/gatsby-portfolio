import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <a
      {...props}
      className="cursor-pointer rounded-lg border-2 bg-black px-4 py-3 text-gray-200 transition duration-300 ease-in-out hover:border-black hover:bg-gray-200 hover:text-black dark:bg-gray-200 dark:text-black dark:hover:border-gray-200 dark:hover:bg-black dark:hover:text-gray-200"
    >
      {children}
    </a>
  );
};

export default Button;

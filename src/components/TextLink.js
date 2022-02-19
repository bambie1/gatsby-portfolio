import React from "react";

const TextLink = ({ children, ...props }) => {
  return (
    <a
      {...props}
      target="_blank"
      className="hover:text-gray underline transition duration-150 ease-in-out"
    >
      {children}
    </a>
  );
};

export default TextLink;

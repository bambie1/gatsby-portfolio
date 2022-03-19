import React from "react";

const TextLink = ({ children, ...props }) => {
  return (
    <a
      {...props}
      target="_blank"
      className="underline transition duration-150 ease-in-out hover:text-gray-600"
    >
      {children}
    </a>
  );
};

export default TextLink;

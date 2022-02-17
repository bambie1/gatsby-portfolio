import React from "react";

const TextLink = ({ children, ...props }) => {
  return (
    <a {...props} target="_blank" className="underline hover:text-gray">
      {children}
    </a>
  );
};

export default TextLink;

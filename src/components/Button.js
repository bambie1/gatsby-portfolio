import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <a
      {...props}
      className="border-2 px-4 py-3 rounded-lg bg-black text-white cursor-pointer hover:bg-white hover:border-black hover:text-black"
    >
      {children}
    </a>
  );
};

export default Button;

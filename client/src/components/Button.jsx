import React from "react";

const Button = ({ children, color }) => {
  return (
    <button
      className={`${color} font-semibold rounded-lg text-zinc-700 shadow-md text-sm px-4 py-2`}
    >
      {children}
    </button>
  );
};

export default Button;

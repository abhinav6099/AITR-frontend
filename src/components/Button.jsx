import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    
    <button
      onClick={onClick}
      className={` 
        px-6 py-2 rounded-2xl font-semibold shadow-md bg-blue-500 text-white
        ${className}
      `}
    >
      AJay
    </button>
  );
};

export default Button;

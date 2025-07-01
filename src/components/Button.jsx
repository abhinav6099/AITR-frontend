import React from "react";


const Button = ({ label, onClick, className = ""  }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 font-semibold shadow-sm 
        bg-blue-600 text-white hover:bg-blue-600 transition-colors duration-200
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
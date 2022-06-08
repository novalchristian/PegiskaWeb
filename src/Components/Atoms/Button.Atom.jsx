import React from "react";

const Button = (props) => {
  return (
    <button
      className="bg-blue-500 font-mono text-white py-1.5 px-3.5 text-xs rounded-full md:ml-8 hover:bg-blue-700 
    duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;

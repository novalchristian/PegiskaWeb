import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonAtom(props) {
  const history = useNavigate();

  function handleSubmit(e) {  
    e.preventDefault();

    history(props.to);
  }
  return (
    <button
      className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300"
      onClick={handleSubmit}
    >
      <span className="absolute right-0 w-3 h-15 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative md:text-xs text-[8px]">{props.title}</span>
    </button>
  );
}

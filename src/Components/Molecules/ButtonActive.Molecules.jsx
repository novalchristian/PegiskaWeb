import React from 'react'

function ButtonActiveMolecules(props) {
  return (
    <button
      className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300"
      onClick={() => {
        props.setOpenModal(true);
      }}
    >
      <span className="absolute right-0 w-3 h-15 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative md:text-[18px] text-md">{props.title}</span>
    </button>
  );
}

export default ButtonActiveMolecules
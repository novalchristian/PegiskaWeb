import React from "react";

function TitleHeroAtom(props) {
  return (
    <h1 className="font-bold  text-dark text-[27px] md:text-4xl md:w-[400px]">
      {props.children}
    </h1>
  );
}

export default TitleHeroAtom;

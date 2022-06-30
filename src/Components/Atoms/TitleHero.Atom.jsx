import React from 'react'

function TitleHeroAtom(props) {
  return (
    <h1 className="font-bold md:text-4xl text-dark text-[27px]">
      {props.children}
    </h1>
  );
}

export default TitleHeroAtom
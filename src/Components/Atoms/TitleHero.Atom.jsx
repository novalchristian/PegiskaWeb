import React from 'react'

function TitleHeroAtom(props) {
  return (
    <h1 className="font-bold text-4xl text-dark">{props.children}</h1>
  )
}

export default TitleHeroAtom
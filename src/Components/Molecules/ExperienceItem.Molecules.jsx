import React from 'react'

function ExperienceItemMolecules(props) {
  return (
    <div className="w-full lg:w-1/3 flex justify-center mt-6 md:mt-0 ">
      <div className="md:py-3 md:px-3 mt-4 w-1/2 md:w-full flex justify-center md:static">
        <img
          src={props.img}
          alt={props.name}
          className="w-3/4 md:w-full opacity-50 hover:opacity-100 duration-300"
        />
      </div>
    </div>
  );
}

export default ExperienceItemMolecules
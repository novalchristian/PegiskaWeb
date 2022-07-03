import React from "react";

function ExperienceOrganism(props) {
  return (
    <div className="flex flex-wrap items-center">
      {props.company.slice(0, 3).map((data) => (
        <div className="w-full lg:w-1/3 flex justify-center mb-8">
          <div className="md:py-3 md:px-3 mt-2 md:mt-4 flex justify-center md:static">
            <img
              src={data.img}
              alt={data.name}
              className="w-3/4 md:w-full opacity-50 hover:opacity-100 duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceOrganism;

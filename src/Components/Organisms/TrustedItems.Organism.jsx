import React from "react";

function TrustedItemsOrganism(props) {
  return (
    <div className="flex flex-wrap justify-center">
      {props.gofData.map((data) => (
        <div
          className="md:w-full w-3/4  lg:w-1/2 flex justify-center"
          key={data.id}
        >
          <a
            className="bg-slate-500 rounded-lg md:py-3 md:px-3 shadow-One mt-4 mb-2 md:mb-0 flex justify-center hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
            href={data.ref}
          >
            <img
              src={data.src}
              alt={data.name}
              className="w-3/4 md:w-full py-2"
            />
          </a>
        </div>
      ))}
    </div>
  );
}

export default TrustedItemsOrganism;

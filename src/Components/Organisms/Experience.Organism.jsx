import React from "react";
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";

function ExperienceOrganism(props) {
  const [getUrlBase] = useRecoilState(urlBase);
  return (
    <div className="flex flex-wrap items-center">
      {props.company.slice(0, 3).map((data) => (
        <div
          className="w-full lg:w-1/3 flex justify-center mb-8"
          key={data.id_client}
        >
          <div className="md:py-3 md:px-3 mt-2 md:mt-4 flex justify-center md:static">
            <img
              src={getUrlBase + data.clientURL}
              alt={data.clientName}
              className="w-3/4 md:w-full opacity-50 hover:opacity-100 duration-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceOrganism;

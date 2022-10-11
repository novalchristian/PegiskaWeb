import React from "react";
import { TitleLightMolecules } from "../Molecules";

function SertificationTemplate(props) {
  return (
    <div className="md:pt-28 pt-16 md:pb-32 pb-20 flex justify-center bg-gray-50">
      <div className="container">
        <div className="w-full px-4">
          <div className="md:mb-[-3rem] mx-auto text-center max-w-5xl">
            <TitleLightMolecules
              titleEng={props.titleEng}
              titleInd={props.titleInd}
            />
            <div className="flex flex-wrap items-center justify-center md:pt-8 max-w-[62rem]">
              <div className="w-full lg:w-1/2 mx-10 md:mx-0">
                <h2 className="text-center md:text-left md:text-[1.7rem]">
                  <span className="font-bold">PT Pegiska Berkat Abadi </span>
                  <br className="hidden md:inline-flex" />
                  memiliki beberapa <br className="hidden md:inline-flex" />
                  sertifikasi untuk <br className="hidden md:inline-flex" />
                  menunjang usaha <br className="hidden md:inline-flex" />
                  di bidang kepabeanan
                </h2>
              </div>
              <div className="lg:w-1/2 flex justify-center md:justify-end items-center">
                <div className="mt-10 md:mt-4 bg-teal-100 w-3/4 md:w-4/6 border-2 border-black shadow-Two shadow-slate-400">
                  <img
                    src={props.imgSertification}
                    alt={props.imgSertificationName}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SertificationTemplate;

import React from 'react'
import { TitleLightMolecules } from '../Molecules';
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";

export default function DetailBlogTemplate(props) {
    const [getUrlBase] = useRecoilState(urlBase);
  return (
    <div className="container">
      <div className="w-full px-4">
        <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
          <TitleLightMolecules titleEng="Blog" titleInd={props.judul} />
          <div className="flex justify-center items-center">
            <img
              src={getUrlBase + props.blog}
              alt=""
              className="md:w-[600px] md:h-[300px] w-[300px] drop-shadow-xl rounded-xl"
            />
          </div>
          <p className="pt-6 md:pl-6 indent-10 text-justify first-letter:text-4xl break-words leading-8 md:mx-0 mx-4 text-[14px] md:text-base">
            {props.isi}
          </p>
        </div>
      </div>
    </div>
  );
}

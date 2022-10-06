import React from "react";
import { ButtonAtom } from "../Atoms";
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";
// import {useNavigate} from 'react-router-dom'

function BlogItemMolecules(props) {
  const [getUrlBase] = useRecoilState(urlBase);
  // const navigate = useNavigate();
  return (
    <div className="md:w-full w-[40%] lg:w-1/3 md:py-3 md:px-7 mb-7  hover:-translate-y-1 hover:scale-110 duration-300 w:2/3 mx-2 md:m-0">
      <div className="mt-2 md:mt-4 flex flex-col md:static text-left border-[#d3d3d3] border rounded-default shadow-Three">
        <img
          src={getUrlBase + props.image}
          alt="Gambar Contoh"
          className=" md:w-full border rounded-t-default md:h-[200px] h-[80px]"
        />
        <div className="px-4 py-7 overflow-hidden ">
          <h4 className="font-bold text-black text-sm md:text-lg">
            {props.title}
          </h4>
          <div className="h-16 overflow-hidden">
            <p className="pt-3 text-secondary text-[11px] md:text-base">
              {props.subTitle}
            </p>
          </div>
          <div className="mt-6"></div>
          <ButtonAtom title="Baca Selengkapnya" to={`/blog/${props.title}`} />
        </div>
      </div>
    </div>
  );
}

export default BlogItemMolecules;

import React from "react";
import { ButtonAtom } from "../Atoms";

function BlogItemMolecules(props) {
  return (
    <div className="md:w-full w-[90%] lg:w-1/3 md:py-3 md:px-7 mb-7  hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="mt-2 md:mt-4 flex flex-col md:static text-left border-[#d3d3d3] border rounded-default shadow-Three">
        <img src={props.image} alt="Gambar Contoh" className=" md:w-full" />
        <div className="px-4 py-7 overflow-hidden ">
          <h4 className="font-bold text-black text-xl">{props.title}</h4>
          <div className="h-16 overflow-hidden">
            <p className="pt-3 text-secondary">{props.subTitle}</p>
          </div>
          <div className="mt-6"></div>
          <ButtonAtom>Baca Selengkapnya</ButtonAtom>
        </div>
      </div>
    </div>
  );
}

export default BlogItemMolecules;

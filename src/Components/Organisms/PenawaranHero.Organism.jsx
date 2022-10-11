import React from "react";
import { PenawaranBackground } from "../../Assets/Illustration";
import { TitleHeroAtom } from "../Atoms";
import { useNavigate } from "react-router-dom";

export default function PenawaranHeroOrganism() {
  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    history("/pengajuan");
  }
  return (
    <div className="md:pt-22 pt-28 md:pb-12 flex justify-center ">
      <div className="container flex justify-center">
        <div className="w-full max-w-[1340px]">
          <div className="flex flex-wrap-reverse justify-center">
            <div className="w-full lg:w-1/2 md:pt-10 flex md:justify-start justify-center mt-[-30px] md:mt-0">
              <img
                src={PenawaranBackground}
                alt="Money Illustration"
                className="w-[70%]"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col text-end items-end text-right justify-center px-10 md:px-0 pt-5 md:pt-0">
              <TitleHeroAtom>Penawaran</TitleHeroAtom>
              <p className="max-w-[430px] text-base text-secondary pt-3">
                PT Pegiska Berkat Abadi memiliki beberapa penawaran berdasarkan
                jenis jasa yang diinginkan. PT Pegiska Berkat Abadi dapat dengan
                baik mengurus semuanya berdasarkan jasa yang diminta.
              </p>
              <div className="md:mt-16 mt-10">
                <button
                  className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300"
                  onClick={handleSubmit}
                >
                  <span className="absolute right-0 w-3 h-15 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative md:text-xs text-[8px]">
                    Pengajuan
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

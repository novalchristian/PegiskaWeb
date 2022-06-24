import React from "react";
import { PenawaranBackground } from "../../Assets/Illustration";
import { TitleHeroAtom, ButtonAtom} from '../Atoms';


export default function PenawaranHeroTemplate() {
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
              <div className="mt-16">
                <ButtonAtom>Pengajuan {">"}</ButtonAtom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

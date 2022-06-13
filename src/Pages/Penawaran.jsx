import React from "react";
import { PenawaranBackground } from "../Assets/Illustration";
import {NavTemplate} from '../Components/Templates'
import { ButtonAtom } from "../Components/Atoms";
import TitleHeroAtom from "../Components/Atoms/TitleHero.Atom";

function Penawaran() {
  return (
    <>
      <NavTemplate />

      {/* Penawaran Hero */}

      <div className="md:pt-22 pt-28 md:pb-16">
        <div className="container flex justify-center">
          <div className="w-full max-w-7xl">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-1/2 pt-10 flex justify-start">
                <img
                  src={PenawaranBackground}
                  alt="Money Illustration"
                  className="w-[70%]"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col text-end items-end text-right justify-center">
                <TitleHeroAtom>Penawaran</TitleHeroAtom>
                <p className="max-w-md text-base text-secondary pt-3">
                  PT Pegiska Berkat Abadi memiliki beberapa penawaran
                  berdasarkan jenis jasa yang diinginkan. PT Pegiska Berkat
                  Abadi dapat dengan baik mengurus semuanya berdasarkan jasa
                  yang diminta.
                </p>
                <div className="mt-16">
                  <ButtonAtom>Pengajuan {'>'}</ButtonAtom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Penawaran;

import React from "react";
import { Link } from "react-router-dom";
import { ButtonAtom } from "../Atoms";
import { HomeBackground } from "../../Assets/Illustration";
import TitleHeroAtom from "../Atoms/TitleHero.Atom";

function HomeHeroTemplate() {
  return (
    <div className="pt-16 flex justify-center z-1">
      <div className="container">
        <div className="flex flex-wrap ">
          <div className="pt-8 md:pt-0 ml-5 md:ml-0 w-full self-center px-4 lg:w-2/5 lg:pr-[75px] lg:pl-[100px]">
            <TitleHeroAtom>PPJK</TitleHeroAtom>
            <p className="text-base text-secondary pt-3">
              Dalam Undang-undang No.17 Tahun 2006 tentang Kepabeanan
              (Indonesia) bahwa PPJK merupakan badan usaha yang melakukan
              kegiatan pengurusan kewajiban pabean untuk dan atas kuasa Importir
              atau Eksportir
            </p>
            <div className="mt-10">
              <Link to="/penawaran">
                <ButtonAtom>
                  Penawaran <span className="pl-3">{">"}</span>
                </ButtonAtom>
              </Link>
            </div>
          </div>
          <div className="w-full self-end lg:w-3/5">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img
                src={HomeBackground}
                alt="Home Background"
                className="md:pt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroTemplate;

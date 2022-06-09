import React from "react";
import { NavTemplate, HomeHeroTemplate } from "../Components/Templates";
import {AlfiLogo, KemenkeuLogo} from '../Assets/Img'

function Home() {
  return (
    <>
      <NavTemplate />
      <HomeHeroTemplate />

      {/* COMPANY PROFILE SECTION */}
      <div className="md:pt-6 pt-16 pb-32 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
              <h4 className="mb-2 text-lg font-bold text-primary uppercase">
                Company Profile
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark md:text-[2.5rem]">
                Tentang Perusahaan Kami
              </h2>
              <p className="font-base mt-10 text-secondary text-lg md:text-xl">
                Kami adalah perusahaan{" "}
                <span className="font-bold">PT Pegiska Berkat Abadi.</span>{" "}
                <br className="hidden md:inline-flex" />
                Didirikan pada tahun 1997, PT Pegiska Berkat Abadi merupakan
                perusahaan yang <br />
                bergerak di bidang kepabeanan. Dimana kami menangani pengurusan{" "}
                <br className="hidden md:inline-flex" />
                dokumen-dokumen mengenai kegiatan{" "}
                <span className="font-bold">ekspor dan impor.</span> <br />
                Dan menangani masuk dan keluarnya barang dari dalam dan luar
                negeri.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ATAS KEPERCAYAAN SECTION */}
      <div className="md:pt-12 pt-16 pb-10 flex justify-center bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-5xl ">
              <div className="pb-10">
                <h4 className="mb-2 text-lg font-bold text-primary uppercase">
                  Trusted By
                </h4>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-[2.5rem]">
                  Atas Kepercayaan
                </h2>
                <p className="mt-5 font-light text-[#F6F6F6] text-sm md:text-xl">
                  PT Pegiska Berkat Abadi bisa berjalan atas ijin dan kepercayaan
                  dari <br /> pihak kepabeanan negara
                </p>
              </div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="bg-slate-500 rounded-lg md:py-3 md:px-3 shadow-2xl mt-4">
                  <img src={KemenkeuLogo} alt="KemenkeuLogo"/>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="bg-slate-500 rounded-lg md:py-3 md:px-3 shadow-2xl mt-4">
                  <img src={AlfiLogo} alt="KemenkeuLogo"/>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

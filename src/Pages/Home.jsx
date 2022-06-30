import React from "react";
import { NavTemplate, HomeHeroTemplate, FooterTemplate } from "../Components/Templates";
import {
  ContohSertifikat,
  KemenkeuLogo,
  AlfiLogo,
  EkaMajuLogo,
  MobiusLogo,
  TristarLogo,
  ContohGambar,
} from "../Assets/Img";
import { TitleDarkMolecules, TitleLightMolecules } from "../Components/Molecules";
import { BlogItemsOrganism } from "../Components/Organisms";

const data = [
  {
    id: 1,
    image: ContohGambar,
    title: "Penjaluran Bea Cukai",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque reiciendis impedit unde possimus blanditiis cupiditate fugiat, ipsa, eligendi rerum ducimus molestias dolor, atque modi magni voluptas sint consectetur culpa.",
  },
  {
    id: 2,
    image: ContohGambar,
    title: "Penjaluran Bea Cukai",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque reiciendis impedit unde possimus blanditiis cupiditate fugiat, ipsa, eligendi rerum ducimus molestias dolor, atque modi magni voluptas sint consectetur culpa.",
  },
  {
    id: 3,
    image: ContohGambar,
    title: "Penjaluran Bea Cukai",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque reiciendis impedit unde possimus blanditiis cupiditate fugiat, ipsa, eligendi rerum ducimus molestias dolor, atque modi magni voluptas sint consectetur culpa.",
  },
  {
    id: 4,
    image: ContohGambar,
    title: "Penjaluran Bea Cukai",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam neque reiciendis impedit unde possimus blanditiis cupiditate fugiat, ipsa, eligendi rerum ducimus molestias dolor, atque modi magni voluptas sint consectetur culpa.",
  },
];

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
              <TitleLightMolecules
                titleEng="Company Profile"
                titleInd="Tentang Perusahaan Kami"
              />
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
      <div className="md:pt-12 pt-16 pb-8 flex justify-center bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-5xl">
              <div className="pb-10">
                <TitleDarkMolecules
                  titleEng="Trusted By"
                  titleInd="Atas Kepercayaan"
                  subTitle="PT Pegiska Berkat Abadi bisa berjalan atas ijin dan
                  kepercayaan dari pihak kepabeanan negara."
                />
              </div>
              <div className="flex flex-wrap justify-center">
                <div className="md:w-full w-3/4  lg:w-1/2 flex justify-center">
                  <a
                    className="bg-slate-500 rounded-lg md:py-3 md:px-3 shadow-One mt-4 mb-2 md:mb-0 flex justify-center hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                    href="https://www.beacukai.go.id/"
                  >
                    <img
                      src={KemenkeuLogo}
                      alt="KemenkeuLogo"
                      className="w-3/4 md:w-full py-2"
                    />
                  </a>
                </div>
                <div className="md:w-full w-3/4  lg:w-1/2 flex justify-center">
                  <a
                    className="bg-slate-500 rounded-lg md:py-3 md:px-3 shadow-One mt-4 mb-2 md:mb-0 flex justify-center hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                    href="https://www.ilfa.or.id/"
                  >
                    <img
                      src={AlfiLogo}
                      alt="KemenkeuLogo"
                      className="w-3/4 md:w-full py-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sertifikasi Usaha */}
      <div className="md:pt-28 pt-16 pb-32 flex justify-center bg-gray-50">
        <div className="container">
          <div className="w-full px-4">
            <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
              <TitleLightMolecules
                titleEng="Sertification"
                titleInd="Sertifikat Usaha"
              />
              <div className="flex flex-wrap items-center justify-center pt-8 max-w-[62rem]">
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
                      src={ContohSertifikat}
                      alt="Sertifikat Pegiska Berkat Abadi"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exprience Work */}
      <div className="md:pt-12 pt-16 pb-10 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-4xl ">
              <div className="pb-10">
                <p className="mt-10 text-dark text-lg md:text-2xl font-medium">
                  Dengan pengalaman lebih dari 25 tahun, <br />
                  kami telah mendapatkan banyak customer dan importir{" "}
                  <br className="hidden md:inline-flex" />
                  dari berbagai daerah.
                </p>
              </div>
              <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/3 flex justify-center">
                  <div className="md:py-3 md:px-3 mt-2 md:mt-4 flex justify-center md:static">
                    <img
                      src={EkaMajuLogo}
                      alt="KemenkeuLogo"
                      className="w-3/4 md:w-full opacity-50 hover:opacity-100 duration-300"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center mt-6 md:mt-0 ">
                  <div className=" md:py-3 md:px-3 mt-4 flex justify-center md:static">
                    <img
                      src={MobiusLogo}
                      alt="KemenkeuLogo"
                      className="w-3/4 md:w-full opacity-50 hover:opacity-100 duration-300"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center mt-6 md:mt-0 ">
                  <div className="md:py-3 md:px-3 mt-4 w-1/2 md:w-full flex justify-center md:static">
                    <img
                      src={TristarLogo}
                      alt="KemenkeuLogo"
                      className="w-3/4 md:w-full opacity-50 hover:opacity-100 duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="md:pt-12 pt-16 pb-10 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-7xl">
              <div className="pb-10">
                <TitleLightMolecules
                  titleEng="Blog"
                  titleInd="Informasi Tentang Kepabeanan"
                  subTitle="Dibawah ini terdapat informasi seputar kepabeanan yang
                  perlu kamu ketahui."
                />
              </div>
              <BlogItemsOrganism data={data} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterTemplate />
    </>
  );
}

export default Home;

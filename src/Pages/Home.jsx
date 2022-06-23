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
import { ButtonAtom } from "../Components/Atoms";

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
                  PT Pegiska Berkat Abadi bisa berjalan atas ijin dan
                  kepercayaan dari <br /> pihak kepabeanan negara
                </p>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="bg-slate-500 rounded-lg md:py-3 md:px-3 shadow-One mt-4">
                    <img src={KemenkeuLogo} alt="KemenkeuLogo" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="bg-slate-500 rounded-lg md:py-3 md:px-3 shadow-One mt-4">
                    <img src={AlfiLogo} alt="KemenkeuLogo" />
                  </div>
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
              <h4 className="mb-2 text-lg font-bold text-primary uppercase">
                Sertification
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark md:text-[2.5rem]">
                Sertifikat Usaha
              </h2>
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
                      className="w-3/4 md:w-full"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center mt-6 md:mt-0 ">
                  <div className=" md:py-3 md:px-3 mt-4 flex justify-center md:static">
                    <img
                      src={MobiusLogo}
                      alt="KemenkeuLogo"
                      className="w-3/4 md:w-full"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-center mt-6 md:mt-0 ">
                  <div className="md:py-3 md:px-3 mt-4 w-1/2 md:w-full flex justify-center md:static">
                    <img
                      src={TristarLogo}
                      alt="KemenkeuLogo"
                      className="w-3/4"
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
                <h4 className="mb-2 text-lg font-bold text-primary uppercase">
                  Blog
                </h4>
                <h2 className="mb-4 text-3xl font-bold text-dark md:text-[2.5rem]">
                  Informasi Tentang Kepabeanan
                </h2>
                <p className="mt-5 font-light text-secondary text-sm md:text-xl">
                  Dibawah ini terdapat informasi seputar kepabeanan <br /> yang
                  perlu kamu ketahui.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-start">
                <div className="md:w-full w-[70%] lg:w-1/3 md:py-3 md:px-7">
                  <div className="mt-2 md:mt-4 flex flex-col md:static text-left border-[#C1C1C1] border rounded-default">
                    <img
                      src={ContohGambar}
                      alt="Gambar Contoh"
                      className=" md:w-full"
                    />
                    <div className="px-4 py-7 overflow-hidden ">
                      <h4 className="font-bold text-black text-xl">
                        Penjaluran Bea Cukai
                      </h4>
                      <div className="h-16 overflow-hidden">
                        <p className="pt-3 text-secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nam neque reiciendis impedit unde possimus
                          blanditiis cupiditate fugiat, ipsa, eligendi rerum
                          ducimus molestias dolor, atque modi magni voluptas
                          sint consectetur culpa.
                        </p>
                      </div>
                      <div className="mt-6"></div>
                      <ButtonAtom>Baca Selengkapnya</ButtonAtom>
                    </div>
                  </div>
                </div>
                <div className="md:w-full w-[70%] lg:w-1/3 md:py-3 md:px-7">
                  <div className="mt-2 md:mt-4 flex flex-col md:static text-left border-[#C1C1C1] border rounded-default">
                    <img
                      src={ContohGambar}
                      alt="Gambar Contoh"
                      className=" md:w-full"
                    />
                    <div className="px-4 py-7 overflow-hidden ">
                      <h4 className="font-bold text-black text-xl">
                        Penjaluran Bea Cukai
                      </h4>
                      <div className="h-16 overflow-hidden">
                        <p className="pt-3 text-secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nam neque reiciendis impedit unde possimus
                          blanditiis cupiditate fugiat, ipsa, eligendi rerum
                          ducimus molestias dolor, atque modi magni voluptas
                          sint consectetur culpa.
                        </p>
                      </div>
                      <div className="mt-6"></div>
                      <ButtonAtom>Baca Selengkapnya</ButtonAtom>
                    </div>
                  </div>
                </div>
                <div className="md:w-full w-[70%] lg:w-1/3 md:py-3 md:px-7">
                  <div className="mt-2 md:mt-4 flex flex-col md:static text-left border-[#C1C1C1] border rounded-default">
                    <img
                      src={ContohGambar}
                      alt="Gambar Contoh"
                      className=" md:w-full"
                    />
                    <div className="px-4 py-7 overflow-hidden ">
                      <h4 className="font-bold text-black text-xl">
                        Penjaluran Bea Cukai
                      </h4>
                      <div className="h-16 overflow-hidden">
                        <p className="pt-3 text-secondary">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nam neque reiciendis impedit unde possimus
                          blanditiis cupiditate fugiat, ipsa, eligendi rerum
                          ducimus molestias dolor, atque modi magni voluptas
                          sint consectetur culpa.
                        </p>
                      </div>
                      <div className="mt-6"></div>
                      <ButtonAtom>Baca Selengkapnya</ButtonAtom>
                    </div>
                  </div>
                </div>
              </div>
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

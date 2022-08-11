import React from "react";
import { AboutBackground, EmptyPerson, Maps } from "../Assets/Img";
import { TitleHeroAtom } from "../Components/Atoms";
import { TitleLightMolecules } from "../Components/Molecules";
import { CompanyData } from '../Data/CompanyData'
import { EmployeeData } from "../Data/EmployeeData";


function About(props) {
  return (
    <>
      <div className="pt-16 flex justify-center z-1">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="pt-8 md:pt-0 ml-5 md:ml-0 w-full self-center px-4 lg:w-1/4 lg:pr-[75px] lg:pl-[100px]">
              <TitleHeroAtom>Tentang Kami</TitleHeroAtom>
              <p className="md:text-xl text-base text-secondary pt-3 md:w-[500px] w-[350px]">
                PT Pegiska Berkat Abadi sudah lebih dari 24 tahun menjadi tujuan
                utama bagi para importer maupun eksporter dalam mengirim dan
                mengantarkan barang dengan aman ke daerah asal mereka.
              </p>
            </div>
            <div className="w-full self-end lg:w-3/4">
              <div className="relative mt-10 lg:right-0 lg:mt-9">
                <img
                  src={AboutBackground}
                  alt="Home Background"
                  className="md:pt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section2 */}
      <div className="md:pt-12 pt-4 md:pb-10 flex justify-center bg-gray-50">
        <div className="">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-[1350px]">
              <div className="md:pb-10 pb-4">
                <p className="mt-10 text-dark text-lg md:text-2xl text-left font-bold">
                  Telah dipercaya oleh
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center">
                {CompanyData.map((data) => (
                  <div className="w-1/3 lg:w-1/5 flex justify-center">
                    <div className="md:px-3 md:mt-4 flex justify-center md:static">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="w-3/4 md:w-full duration-300 mt-10 md:mt-[-10px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="md:pt-16 pt-16 pb-32 flex justify-center bg-white">
        <div className="container">
          <div className="w-full px-4">
            <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
              <TitleLightMolecules
                titleEng="Location"
                titleInd="Lokasi Kami"
                subTitle="Untuk mendapatkan info lebih mendalam sebagai pengguna jasa, anda bisa mengunjungi kantor PT Pegiska Berkat Abadi di alamat di bawah ini."
              />
              <div className="flex flex-wrap-reverse items-center justify-center pt-8 mt-10 md:mt-0 max-w-[62rem] h-[50vh]">
                <div className="w-full lg:w-1/2 mx-10 md:mx-0 ">
                  <h2 className="text-center md:text-left md:text-[1.5rem] md:w-[400px] w-[350px] mt-6 md:mt-0 text-red-700">
                    Jl. Swasembada Barat XXIII No 41A, RW 14, Kb, Bawang,
                    Kecamatan, Tj Priok, Kota Jakarta Utara, Daerah Khusus
                    Ibukota Jakarta 14320
                  </h2>
                </div>
                <div className="lg:w-1/2 flex justify-center md:justify-end items-center">
                  <div className="mt-10 md:mt-4 bg-teal-100 w-3/4 md:w-4/6 border-2 hover:-translate-y-1 hover:scale-110 duration-300 shadow-Three">
                    <a href="https://maps.app.goo.gl/rC7DbnPagi8e45rU6">
                      <img src={Maps} alt={"Maps"} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section  4 */}
      <div className="md:pt-12 pt-16 md:pb-10 flex justify-center bg-gray-50">
        <div className="">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-[1350px]">
              <TitleLightMolecules
                titleEng="Stakeholders"
                titleInd="Pemegang Jabatan"
                subTitle="Kenalan yuk dengan pemegang jabatan yang ada di PT Pegiska Berkat Abadi."
              />
              <div className="flex flex-wrap items-center justify-center mt-4 md:mt-0">
                {EmployeeData.map((data) => (
                  <div className="w-2/4 lg:w-1/3 flex-col flex justify-center mt-4">
                    <div className="md:mt-16 md:px-3 md:mx-10 mx-4  flex justify-center md:static bg-blue md:rounded-[30px] rounded-[12px] shadow-Four">
                      {data.img ? (
                        <img
                          src={data.img}
                          alt={data.name}
                          className="w-3/4 md:w-full duration-300 mt-3 md:mt-[-10px] md:pt-2"
                        />
                      ) : (
                        <img
                          src={EmptyPerson}
                          alt={data.name}
                          className="w-3/4 md:w-full duration-300 mt-3 md:mt-[-10px] md:pt-2"
                        />
                      )}
                    </div>
                    <div className="flex flex-col items-start md:mt-6 md:px-3 md:mx-10 mx-5 mt-4">
                      <h3 className="font-medium md:text-[22px] text-[14px]">
                        {data.name}
                      </h3>
                      <p className="mt-1 md:text-base text-xs">{data.as}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

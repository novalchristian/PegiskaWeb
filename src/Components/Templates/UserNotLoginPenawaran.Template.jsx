import React from "react";
import { PenawaranHeroOrganism } from "../Organisms";

function UserNotLoginPenawaranTemplate(props) {
  return (
    <>
      {/* Penawaran Hero Start */}
      <PenawaranHeroOrganism />
      {/* Penawaran Hero End */}

      {/* Main Penawaran Start */}
      <div className="md:pt-0 pt-16 pb-4 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center max-w-6xl ">
              <div className="pb-10">
                <div className="flex flex-col items-center">
                  <h4 className="mb-2 text-base font-bold text-primary uppercase">
                    {props.penawaranTitleEng}
                  </h4>
                  <h2
                    className={
                      "mb-4 text-2xl font-bold text-dark md:text-[2.5rem]"
                    }
                  >
                    {props.penawaranTitleInd}
                  </h2>
                  <p className="text-white text-lg md:text-2xl md:max-w-[900px] bg-red-600 px-4 py-2">
                    {props.penawaranSubTitle}
                  </p>
                </div>
              </div>

              {props.data.map((data) => (
                <div className="border-2 pb-4 pt-4 px-4 mb-6 bg-slate-700 rounded-2xl ">
                  <h4 className="text-yellow-400 font-bold text-left md:text-[22px] text-[14px] border-b-[1px] p-2 mx-2">
                    {data.key}. {data.namaJasa}{" "}
                    {data.key === 1 && (
                      <span className="text-white font-light text-base">
                        (Container 1 - 3) (biaya per container)
                      </span>
                    )}
                    {data.key === 2 && (
                      <span className="text-white font-light text-base">
                        (Container Pertama) (biaya per Container)
                      </span>
                    )}
                    {data.key === 3 && (
                      <span className="text-white font-light text-base">
                        (Untuk jalur merah) (biaya per container)
                      </span>
                    )}
                    {data.key === 4 && (
                      <span className="text-white font-light text-base">
                        (biaya per PIB)
                      </span>
                    )}
                    {data.key === 5 && (
                      <span className="text-yellow-400 font-medium">
                        ( 1 s/d 5 Container ){" "}
                        <span className="text-white font-light text-base">
                          (biaya per PIB)
                        </span>
                      </span>
                    )}
                    {data.key === 6 && (
                      <span className="text-white font-light text-base">
                        (Ambil Dokumen, Ambil DO, Masukkan Dokumen ke Bea Cukai,
                        Dll) (biaya per PIB)
                      </span>
                    )}
                  </h4>
                  <div className="flex text-white mt-4 justify-between px-10 md:text-lg text-[14px]">
                    <h4 className="text-center md:pl-[16px]">20 Feet</h4>
                    <h4 className="text-center pr-[14px] md:pr-0">40 Feet</h4>
                    <h4 className="text-center md:pr-[24px] pr-[10px]">LCL</h4>
                  </div>
                  <div className="flex text-white mt-4 justify-between px-4 md:text-xl text-[11px] font-bold">
                    <h4 className="text-center">Rp {data.firstTwenty}</h4>
                    <h4 className="text-center md:pl-6">
                      Rp {data.secondFourty}
                    </h4>
                    <h4 className="text-center">Rp {data.lcl}</h4>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-yellow-400 font-medium text-left md:text-[18px] text-[14px] border-[1px] p-2 rounded-lg mx-2">
                      Container Berikutnya
                    </h4>
                    <div className="flex text-white mt-4 justify-start px-10 md:text-lg text-[14px]">
                      <h4 className="text-center md:ml-6 md:mr-[120px]">
                        20 Feet
                      </h4>
                      <h4 className="text-center mx-10">40 Feet</h4>
                    </div>
                    <div className="flex text-white mt-4 justify-start px-4 md:text-xl text-[11px] font-bold">
                      <h4 className="text-center md:mr-10 mr-[15px]">
                        Rp {data.firstTwenty}
                      </h4>
                      <h4 className="text-center md:mx-10">
                        Rp {data.secondFourty}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Main Penawaran End */}
    </>
  );
}

export default UserNotLoginPenawaranTemplate;

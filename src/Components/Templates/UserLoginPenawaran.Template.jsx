import React from "react";
import { TitleLightMolecules } from "../Molecules";
import { PenawaranHeroOrganism } from "../Organisms";

function UserLoginPenawaranTemplate(props) {
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
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
                <TitleLightMolecules
                  titleEng={props.penawaranTitleEng}
                  titleInd={props.penawaranTitleInd}
                  subTitle={props.penawaranSubTitle}
                />
              </div>

              {props.data.map((data) => (
                <div
                  className="border-2 pb-4 pt-4 px-4 mb-6 bg-slate-700 rounded-2xl"
                  key={data.id_jasa}
                >
                  <h4 className="text-yellow-400 font-bold text-left md:text-[22px] text-[14px] border-b-[1px] p-2 mx-2">
                    {data.id_jasa}. {data.nama_jasa}{" "}
                    {data.id_jasa === 1 && (
                      <span className="text-white font-light text-base">
                        (Container 1 - 3) (biaya per container)
                      </span>
                    )}
                    {data.id_jasa === 2 && (
                      <span className="text-white font-light text-base">
                        (Container Pertama) (biaya per Container)
                      </span>
                    )}
                    {data.id_jasa === 3 && (
                      <span className="text-white font-light text-base">
                        (Untuk jalur merah) (biaya per container)
                      </span>
                    )}
                    {data.id_jasa === 4 && (
                      <span className="text-white font-light text-base">
                        (biaya per PIB)
                      </span>
                    )}
                    {data.id_jasa === 5 && (
                      <span className="text-yellow-400 font-medium">
                        ( 1 s/d 5 Container ){" "}
                        <span className="text-white font-light text-base">
                          (biaya per PIB)
                        </span>
                      </span>
                    )}
                    {data.id_jasa === 6 && (
                      <span className="text-white font-light text-base">
                        (Ambil Dokumen, Ambil DO, Masukkan Dokumen ke Bea Cukai,
                        Dll) (biaya per PIB)
                      </span>
                    )}
                  </h4>
                  <div className="flex text-white mt-4 justify-between px-10 md:text-lg text-[14px]">
                    <h4 className="text-center md:pl-[16px]">20 Feet</h4>
                    <h4 className="text-center pr-[18px] md:pr-0">40 Feet</h4>
                    <h4 className="text-center md:pr-[24px] pr-[4px]">LCL</h4>
                  </div>
                  <div className="flex text-white mt-4 justify-between px-4 md:text-xl text-[11px] font-bold">
                    <h4 className="text-center">
                      {formatter.format(data.feet20)}
                    </h4>
                    <h4 className="text-center md:pl-6">
                      {formatter.format(data.feet40)}
                    </h4>
                    <h4 className="text-center">
                      {formatter.format(data.lcl)}
                    </h4>
                  </div>

                  {data.id_jasa === 1 && (
                    <div className="mt-4">
                      <h4 className="text-yellow-400 font-medium text-left md:text-[18px] text-[14px] border-[1px] p-2 rounded-lg mx-2">
                        (Container ke - 4 dan seterusnya)
                      </h4>
                      <div className="flex text-white mt-4 justify-start px-10 md:text-lg text-[14px]">
                        <h4 className="text-center md:ml-6 md:mr-[120px]">
                          20 Feet
                        </h4>
                        <h4 className="text-center mx-10">40 Feet</h4>
                      </div>
                      <div className="flex text-white mt-4 justify-start px-4 md:text-xl text-[11px] font-bold">
                        <h4 className="text-center md:mr-10 mr-[15px]">
                          {formatter.format(data.feet20 - 250000)}
                        </h4>
                        <h4 className="text-center md:mx-10 ml-[4px]">
                          {formatter.format(data.feet40 - 250000)}
                        </h4>
                      </div>
                    </div>
                  )}
                  {data.id_jasa === 2 && (
                    <div className="mt-4">
                      <h4 className="text-yellow-400 text-left font-medium md:text-[18px] text-[14px] border-[1px] p-2 rounded-lg mx-2">
                        (Container Berikutnya)
                      </h4>
                      <div className="flex text-white mt-4 justify-start px-10 md:text-lg text-[14px]">
                        <h4 className="text-center md:ml-6 md:mr-[120px]">
                          20 Feet
                        </h4>
                        <h4 className="text-center mx-10">40 Feet</h4>
                      </div>
                      <div className="flex text-white mt-4 justify-start px-4 md:text-xl text-[11px] font-bold">
                        <h4 className="text-center md:mr-10 mr-[15px]">
                          {formatter.format(data.feet20 - 250000)}
                        </h4>
                        <h4 className="text-center md:mx-10 ml-[4px]">
                          {formatter.format(data.feet40 - 250000)}
                        </h4>
                      </div>
                    </div>
                  )}
                  {data.id_jasa === 5 && (
                    <>
                      <div className="mt-4">
                        <h4 className="text-yellow-400 text-left font-medium md:text-xl text-[14px] border-[1px] p-2 rounded-lg mx-2">
                          6 s/d 10 Container
                        </h4>
                        <div className="flex text-white mt-4 justify-start px-10 md:text-lg text-[14px]">
                          <h4 className="text-center md:ml-6 md:mr-[120px]">
                            20 Feet
                          </h4>
                          <h4 className="text-center mx-10">40 Feet</h4>
                        </div>
                        <div className="flex text-white mt-4 justify-start px-4 md:text-xl text-[11px] font-bold">
                          <h4 className="text-center md:mr-10 mr-[15px]">
                            {formatter.format(data.feet20 - 150000)}
                          </h4>
                          <h4 className="text-center md:mx-10 ml-[4px]">
                            {formatter.format(data.feet40 - 150000)}
                          </h4>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-yellow-400 text-left font-medium md:text-xl text-[14px] border-[1px] p-2 rounded-lg mx-2">
                          10 s/d Container Seterusnya
                        </h4>
                        <div className="flex text-white mt-4 justify-start px-10 md:text-lg text-[14px]">
                          <h4 className="text-center md:ml-6 md:mr-[120px]">
                            20 Feet
                          </h4>
                          <h4 className="text-center mx-10">40 Feet</h4>
                        </div>
                        <div className="flex text-white mt-4 justify-start px-4 md:text-xl text-[11px] font-bold">
                          <h4 className="text-center md:mr-10 mr-[15px]">
                            {formatter.format(data.feet20 + 400000)}
                          </h4>
                          <h4 className="text-center md:mx-10 ml-[4px]">
                            {formatter.format(data.feet40 + 400000)}
                          </h4>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLoginPenawaranTemplate;

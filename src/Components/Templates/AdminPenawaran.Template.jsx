import React from "react";
import { TitleLightMolecules } from "../Molecules";

function AdminPenawaranTemplate(props) {
  return (
    <>
      <div className="md:pt-0 pt-16 pb-4 mt-36 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-6xl ">
              <div className="pb-10">
                <TitleLightMolecules
                  titleEng={props.penawaranTitleEng}
                  titleInd={props.penawaranTitleInd}
                />
              </div>

              <div>
                <h1 className="font-bold text-[22px] p-3 border-[1.5px]">
                  20 Feet
                </h1>
                <div className="flex justify-between md:pt-10 md:pb-6 pt-5">
                  <h4 className="text-primary font-bold md:text-xl text-[15px] ">
                    Keterangan Jasa
                  </h4>
                  <h4 className="font-bold text-black md:pr-16 pr-8 md:text-xl text-[15px]">
                    Harga
                  </h4>
                </div>
              </div>

              <div className="border-b-2 pb-4 pt-8 md:pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
                    Jasa Inklaring{" "}
                    <span className="text-secondary font-light">
                      (Container 1 -3)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-lg text-[14px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                    <br />
                    <span className="text-secondary font-light">
                      (s/d container ke-3)
                    </span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[400px] w-[200px] text-left md:text-lg text-[14px]">
                    Container Berikutnya
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-lg text-[14px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="border-b-2 pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[400px] w-[200px] text-left md:text-lg text-[14px]">
                    Kelancaran Behandel{" "}
                    <span className="text-secondary font-light">
                      (Container Pertama)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-lg text-[14px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                    <br />
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[400px] w-[200px] text-left md:text-lg text-[14px]">
                    Container Berikutnya{" "}
                    <span className="text-secondary font-light">
                      (Untuk jalur merah)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-lg text-[14px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="border-b-2 pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
                    Biaya Forklift/Buruh/dll{" "}
                    <span className="text-secondary font-light">
                      (Untuk jalur merah)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-lg text-[14px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                    <br />
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
              </div>

              {/* PIB */}
              <div className="border-b-2 pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
                    Biaya Rekaman PIB{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-lg md:w-[192px] w-[130px] text-[14px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
              </div>

              {/* Biaya Uitslag */}
              <div className="border-b-2 pb-4 pt-4">
                <h4 className="text-left md:text-lg text-[15px]">
                  Biaya Uitslag
                </h4>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[350px] w-[220px] text-left md:text-lg text-[14px]">
                    • 1 s/d 5 Container{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-lg md:w-[192px] w-[130px] text-[14px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[350px] w-[220px] text-left md:text-lg text-[14px]">
                    • 6 s/d 10 Container{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-lg md:w-[192px] w-[130px] text-[14px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[350px] w-[220px] text-left md:text-lg text-[14px]">
                    • 11 s/d seterusnya{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-lg md:w-[192px] w-[130px] text-[14px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
              </div>

              {/* Biaya Angkutan */}
              <div className="border-b-2 pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
                    Biaya Angkutan{" "}
                    <span className="text-secondary font-light">
                      <br />
                      (Sesuai daerah masing-masing)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-lg text-[14px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                </div>
              </div>

              {/* Biaya Operasional Dokumen */}
              <div className="pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[400px] w-[220px] text-left md:text-lg text-[14px]">
                    Biaya Operasional Dokumen{" "}
                    <span className="text-secondary font-light">
                      <br />
                      (Ambil dokumen, ambil DO, Masukan dokumen ke Bea cukai,
                      dll)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-lg md:w-[192px] w-[130px] text-[14px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPenawaranTemplate;

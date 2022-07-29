import React from "react";
import { TitleLightMolecules } from "../Components/Molecules";
import { PenawaranHeroTemplate, PengajuanTemplate } from "../Components/Templates";

function Penawaran() {
  return (
    <>
      {/* Penawaran Hero Start */}
      <PenawaranHeroTemplate />
      {/* Penawaran Hero End */}

      {/* Main Penawaran Start */}
      <div className="md:pt-0 pt-16 pb-4 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-6xl ">
              <div className="pb-10">
                <TitleLightMolecules
                  titleEng="Offer"
                  titleInd="Penawaran Jasa Perusahaan"
                  subTitle="Keterangan : Login jika ingin melihat harga dari setiap jasa !!!"
                />
              </div>

              <div className="flex justify-between md:pt-10 md:md:pb-6">
                <h4 className="text-primary font-bold md:text-base text-xs ">
                  Keterangan Jasa
                </h4>
                <h4 className="font-bold text-black md:pl-32 md:text-base text-xs">
                  20 Feet
                </h4>
                <h4 className="font-bold text-black md:pr-16 pr-8 md:text-base text-xs">
                  40 Feet
                </h4>
              </div>

              <div className="border-b-2 pb-4 pt-8 md:pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    Jasa Inklaring{" "}
                    <span className="text-secondary font-light">
                      (Container 1 -3)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                    <br />
                    <span className="text-secondary font-light">
                      (s/d container ke-3)
                    </span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base text-[11px]">
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
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    Container Berikutnya
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="border-b-2 pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    Kelancaran Behandel{" "}
                    <span className="text-secondary font-light">
                      (Container Pertama)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                    <br />
                    <span className="text-secondary font-light"></span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                    <br />
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    Container Berikutnya{" "}
                    <span className="text-secondary font-light">
                      (Untuk jalur merah)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="border-b-2 pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    Biaya Forklift/Buruh/dll{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                    <br />
                    <span className="text-secondary font-light"></span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                    <br />
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    • Untuk jalur merah{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                </div>
              </div>

              {/* PIB */}
              <div className="border-b-2 pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    Biaya Rekaman PIB{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[195px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[192px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
              </div>

              {/* Biaya Uitslag */}
              <div className="border-b-2 pb-4 pt-4">
                <h4 className="text-left md:text-base text-xs">
                  Biaya Uitslag
                </h4>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    • 1 s/d 5 Container{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[192px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[192px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    • 6 s/d 10 Container{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[192px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[192px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4 pt-2">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    • 11 s/d seterusnya{" "}
                    <span className="text-secondary font-light"></span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[192px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[192px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
              </div>

              {/* Biaya Angkutan */}
              <div className="border-b-2 pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    Biaya Angkutan{" "}
                    <span className="text-secondary font-light">
                      <br />
                      (Sesuai daerah masing-masing)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-center md:text-base text-[11px]">
                    Rp XXX.XXX{" "}
                    <span className="md:inline-flex hidden">/Container</span>
                    <span className="md:hidden inline-flex">/Cont</span>
                  </p>
                </div>
              </div>

              {/* Biaya Operasional Dokumen */}
              <div className="pb-4 pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-black font-bold md:w-[350px] w-[150px] text-left md:text-base text-xs">
                    Biaya Operasional Dokumen{" "}
                    <span className="text-secondary font-light">
                      <br />
                      (Ambil dokumen, ambil DO, Masukan dokumen ke Bea cukai,
                      dll)
                    </span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[195px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left md:text-base md:w-[192px] w-[103px] text-[11px]">
                    Rp XXX.XXX <span className="md:inline-flex">/PIB</span>
                    <span className="text-secondary font-light"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Penawaran End */}

      {/* Pengajuan Start*/}
      <PengajuanTemplate
        titleEng="Contact"
        titleInd="Hubungi Kami"
        subTitle="Jika anda ingin menggunakan jasa kami, hubungi kami dengan mengisi informasi yang ada dibawah ini."
      />

      {/* Pengajuan End */}
    </>
  );
}

export default Penawaran;

import React from "react";
import { ButtonAtom } from "../Components/Atoms";
import { NavTemplate, PenawaranHeroTemplate, FooterTemplate } from "../Components/Templates";

function Penawaran() {
  return (
    <>
      {/* Nav Template Start */}
      <NavTemplate />
      {/* Nav Template End */}

      {/* Penawaran Hero Start */}
      <PenawaranHeroTemplate />
      {/* Penawaran Hero End */}

      {/* Main Penawaran Start */}
      <div className="md:pt-0 pt-16 pb-4 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-6xl ">
              <div className="pb-10">
                <h4 className="mb-2 text-base font-bold text-primary uppercase">
                  Offer
                </h4>
                <h2 className="mb-4 text-2xl font-bold text-black md:text-[2.5rem]">
                  Penawaran Jasa Perusahaan
                </h2>
                <p className="mt-5 font-light text-secondary text-sm md:text-xl underline underline-offset-8 decoration-1">
                  <span className="text-red-600">Keterangan :</span> Login jika
                  ingin melihat harga dari setiap jasa !!!
                </p>
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
      <div className="md:pt-12 pt-3 pb-10 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center md:max-w-3xl">
              <div className="pb-10">
                <h4 className="mb-2 text-base font-bold text-primary uppercase">
                  Contact
                </h4>
                <h2 className="mb-4 text-2xl font-bold text-dark md:text-[2.5rem]">
                  Hubungi Kami
                </h2>
                <p className="mt-5 font-light text-secondary text-sm md:text-xl text-[14px]">
                  Jika anda ingin menggunakan jasa kami, hubungi kami dengan
                  mengisi informasi yang ada dibawah ini.
                </p>
              </div>
              <div className="">
                <label className="block md:pb-6 pb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                    Nama Lengkap
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="John Doe"
                  />
                </label>
                <label className="block md:pb-6 pb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block md:pb-6 pb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                    Perusahaan asal
                  </span>
                  <input
                    type="text"
                    name="perusahaan"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="PT Contoh Sejahtera"
                  />
                </label>
                <label className="block md:pb-6 pb-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                    No Whatsapp
                  </span>
                  <input
                    type="text"
                    name="whatsapp"
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="08xx xxxx xxxx"
                  />
                </label>
                <div className="flex flex-col mt-4">
                  <ButtonAtom>Kirim</ButtonAtom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pengajuan End */}

      {/* Footer Template Start */}
      <FooterTemplate />
      {/* Footer Template End */}
    </>
  );
}

export default Penawaran;

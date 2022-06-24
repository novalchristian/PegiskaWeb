import React from "react";
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
      <div className="md:pt-0 pt-16 pb-10 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-6xl ">
              <div className="pb-10">
                <h4 className="mb-2 text-lg font-bold text-primary uppercase">
                  Offer
                </h4>
                <h2 className="mb-4 text-3xl font-bold text-black md:text-[2.5rem]">
                  Penawaran Jasa Perusahaan
                </h2>
                <p className="mt-5 font-light text-secondary text-sm md:text-xl underline underline-offset-8 decoration-1">
                  <span className="text-red-600">Keterangan :</span> Login jika
                  ingin melihat harga dari setiap jasa !!!
                </p>
              </div>

              <div className="flex justify-between md:pt-10 md:md:pb-6">
                <h4 className="text-primary font-bold">Keterangan Jasa</h4>
                <h4 className="font-bold text-black pl-6">20 Feet</h4>
                <h4 className="font-bold text-black pr-16">40 Feet</h4>
              </div>

              <div className="border-b-2 pb-4">
                <div className="flex justify-between items-center md:pt-4">
                  <h4 className="text-black font-bold">
                    Jasa Inklaring{" "}
                    <span className="font-light">(Container 1 -3)</span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left max-w-[190px]">
                    Rp XXX.XXX/Container{" "}
                    <span className="font-light">(s/d container ke-3)</span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] max-w-[190px] w-[240px] text-left">
                    Rp XXX.XXX/Container{" "}
                    <span className="font-light">(s/d container ke-3)</span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4">
                  <h4 className="text-black font-bold w-[240px] text-left">
                    Container berikutnya
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left max-w-[190px]">
                    Rp XXX.XXX/Container
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left max-w-[190px]">
                    Rp XXX.XXX/Container
                  </p>
                </div>
              </div>

              <div className="border-b-2 pb-4">
                <div className="flex justify-between items-center md:pt-4">
                  <h4 className="text-black font-bold">
                    Jasa Inklaring{" "}
                    <span className="font-light">(Container 1 -3)</span>
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left max-w-[190px]">
                    Rp XXX.XXX/Container{" "}
                    <span className="font-light">(s/d container ke-3)</span>
                  </p>
                  <p className="font-bold text-[#C1C1C1] max-w-[190px] w-[240px] text-left">
                    Rp XXX.XXX/Container{" "}
                    <span className="font-light">(s/d container ke-3)</span>
                  </p>
                </div>
                <div className="flex justify-between items-center md:pt-4">
                  <h4 className="text-black font-bold w-[240px] text-left">
                    Container berikutnya
                  </h4>
                  <p className="font-bold text-[#C1C1C1] text-left max-w-[190px]">
                    Rp XXX.XXX/Container
                  </p>
                  <p className="font-bold text-[#C1C1C1] text-left max-w-[190px]">
                    Rp XXX.XXX/Container
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Penawaran End */}

      {/* Footer Template Start */}
      <FooterTemplate />
      {/* Footer Template End */}
    </>
  );
}

export default Penawaran;

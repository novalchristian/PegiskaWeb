import React, { useState } from "react";
import {  ButtonDisableMolecules } from "../Molecules";
import { PesananData } from "../../Data/PesananData";

function UserNotLoginPengajuan(props) {
  const [setOpenModal] = useState(false);

  return (
    <div className="md:pt-20 pt-20 md:mt-8 pb-10 flex justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center md:max-w-7xl">
            <div className="flex flex-col items-center ">
              <h4 className="mb-2 text-base font-bold text-primary uppercase">
                Order
              </h4>
              <h2
                className={"mb-4 text-2xl font-bold text-dark md:text-[2.5rem]"}
              >
                Buat Pesanan Jasa
              </h2>
              <p className="text-white text-lg md:text-2xl md:max-w-[1200px] bg-red-600 px-4 py-2 md:mb-4">
                !!! Anda harus login terlebih dahulu jika ingin melakukan
                pengajuan pesanan jasa !!!
              </p>
            </div>
            <div className="md:max-w-3xl mx-auto md:mt-0 mt-4">
              {PesananData.map((data) => (
                <label className="block md:pb-6 pb-4" key={data.id}>
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                    {data.title}
                  </span>
                  <div className="mt-1 px-3 py-5 bg-slate-800 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"></div>
                </label>
              ))}
              <div className="flex flex-col mt-4">
                <ButtonDisableMolecules
                  setOpenModal={setOpenModal}
                  title="kirim"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserNotLoginPengajuan;

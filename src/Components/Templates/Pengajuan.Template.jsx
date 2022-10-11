import React, { useState } from "react";
import { QuestionModal } from ".";
import { ButtonActiveMolecules } from "../Molecules";
import { PengajuanHeaderOrganism } from "../Organisms";
import { PesananData } from "../../Data/PesananData";

function PengajuanTemplate(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="md:pt-20 pt-24 md:mt-8 pb-10 flex justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="md:mx-auto mb-16 text-center md:max-w-3xl mx-4">
            <PengajuanHeaderOrganism
              titleEng={props.titleEng}
              titleInd={props.titleInd}
              subTitle={props.subTitle}
            />
            <div>
              {PesananData.map((data) => (
                <label className="block md:pb-6 pb-4" key={data.id}>
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                    {data.title}
                  </span>
                  <input
                    type={data.type}
                    name={data.name}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder={data.placeholder}
                  />
                </label>
              ))}
              <div className="flex flex-col mt-4">
                  <ButtonActiveMolecules
                    setOpenModal={setOpenModal}
                    title="Kirim"
                  />
                {openModal && (
                  <QuestionModal
                    closeModal={setOpenModal}
                    title={
                      "Apakah data mu sudah benar? Periksa kembali data mu !"
                    }
                    buttonOne={"Ya, tentu"}
                    buttonTwo={"Belum hihi"}
                    trueTitle={
                      "Terima kasih telah mempercayai kami, kami akan segera menghubungi anda"
                    }
                    trueButton={"Sama-sama"}
                    to={"/"}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PengajuanTemplate;

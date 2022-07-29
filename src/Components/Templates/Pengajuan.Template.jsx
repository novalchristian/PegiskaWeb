import React, {useState} from 'react'
import { QuestionModal } from '.';
import { ButtonActiveMolecules, ButtonDisableMolecules } from '../Molecules';
import { PengajuanHeaderOrganism } from '../Organisms';

function PengajuanTemplate(props) {
  const [openModal, setOpenModal] = useState(false);
  const login = useState(true)

  const input = [
    {
      title: "Nama Lengkap",
      placeholder: "John Doe",
      type: "text",
      name: "",
    },
    {
      title: "Email",
      placeholder: "you@example.com",
      type: "email",
      name: "email",
    },
    {
      title: "Nama Perusahaan asal",
      placeholder: "PT Contoh Sejahtera",
      type: "text",
      name: "perusahaan",
    },
    {
      title: "No Whatsapp",
      placeholder: "08xx xxxx xxxx",
      type: "text",
      name: "whatsapp",
    },
  ];

  return (
    <div className="md:pt-20 pt-3 pb-10 flex justify-center" id="pengajuan">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center md:max-w-3xl">
            <PengajuanHeaderOrganism
              titleEng={props.titleEng}
              titleInd={props.titleInd}
              subTitle={props.subTitle}
            />
            <div>
              {input.map((data) => (
                <label className="block md:pb-6 pb-4">
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
                {login ? (
                    <ButtonActiveMolecules setOpenModal={setOpenModal} title="Kirim" />
                ) : (
                    <ButtonDisableMolecules setOpenModal={setOpenModal} title="kirim" />
                )}
                {openModal && (
                  <QuestionModal
                    closeModal={setOpenModal}
                    title={
                      "Apakah data mu sudah benar? Periksa kembali data mu !"
                    }
                    buttonOne={"Ya, tentu"}
                    buttonTwo={"Belum hihi"}
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


export default PengajuanTemplate
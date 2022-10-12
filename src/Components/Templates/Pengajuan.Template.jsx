import React, { useState } from "react";
import { PengajuanHeaderOrganism } from "../Organisms";
import { PesananData } from "../../Data/PesananData";
import { PesananDataFile } from "../../Data/PesananDataFile.js";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";
import PengajuanModalTemplate from "./PengajuanModal.Template";

function PengajuanTemplate(props) {
  const [openModal, setOpenModal] = useState(false);
  const [getUrlBase] = useRecoilState(urlBase);
  const [error, setError] = useState("");
  const [newPesanan, setNewPesanan] = useState({
    nama: "",
    email: "",
    noWa: "",
    namaPerusahaan: "",
    alamatPerusahaan: "",
    nib: "",
    ktpDirektur: "",
    npwpPerusahaan: "",
    aktaPendirian: "",
    aktaPerubahan: "",
  });

  async function dataPesananBaru() {  
    if (
      newPesanan.nama &&
      newPesanan.email &&
      newPesanan.noWa &&
      newPesanan.namaPerusahaan &&
      newPesanan.alamatPerusahaan &&
      newPesanan.nib &&
      newPesanan.ktpDirektur &&
      newPesanan.npwpPerusahaan &&
      newPesanan.aktaPendirian &&
      newPesanan.aktaPerubahan !== ""
    ) {
      const newData = new FormData();
      newData.append("nama", newPesanan.nama);
      newData.append("email", newPesanan.email);
      newData.append("noWa", newPesanan.noWa);
      newData.append("namaPerusahaan", newPesanan.namaPerusahaan);
      newData.append("alamatPerusahaan", newPesanan.alamatPerusahaan);
      newData.append("nib", newPesanan.nib);
      newData.append("ktpDirektur", newPesanan.ktpDirektur);
      newData.append("npwpPerusahaan", newPesanan.npwpPerusahaan);
      newData.append("aktaPendirian", newPesanan.aktaPendirian);
      newData.append("aktaPerubahan", newPesanan.aktaPerubahan);
      const request = await axios
        .post(getUrlBase + "pesanan", newData, {
          headers: {
            "Content-Type": "multipart/form-data",
            session: localStorage.getItem("session"),
          },
        })
        .then((res) => {
          console.log(res);
          setOpenModal(true);
        })
        .catch((er) => {
          // console.log("Error: ", er.response.data);
          console.log(er.response);
          // setError(er.response.data);
        });
      return request;
    } else {
      setError(
        "Data yang anda masukkan ada yang kosong atau ada yang salah, Periksa kembali data anda !!!"
      );
    }
  }

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
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block md:text-base text-[14px] font-medium text-slate-700 text-left">
                    {data.title}
                  </span>
                  <input
                    type={data.type}
                    name={data.name}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder={data.placeholder}
                    onClick={() => {
                      setError("");
                    }}
                    onChange={(e) => {
                      setNewPesanan({
                        ...newPesanan,
                        [data.name]: e.target.value,
                      });
                    }}
                  />
                </label>
              ))}
              {PesananDataFile.map((data) => (
                <label className="block md:pb-6 pb-4" key={data.id}>
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block md:text-base text-[14px] font-medium text-slate-700 text-left">
                    {data.title}
                  </span>
                  <input
                    type={data.type}
                    name={data.name}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    placeholder={data.placeholder}
                    onClick={() => {
                      setError("");
                    }}
                    onChange={(e) => {
                      setNewPesanan({
                        ...newPesanan,
                        [data.name]: e.target.files[0],
                      });
                    }}
                  />
                </label>
              ))}

              <p className="text-red-500 text-left">{error}</p>
              <div className="flex flex-col mt-4">
                <button
                  className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300"
                  onClick={() => {
                    dataPesananBaru();
                  }}
                >
                  <span className="absolute right-0 w-3 h-15 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative md:text-[18px] text-md">
                    Submit
                  </span>
                </button>
                {openModal && (
                  <PengajuanModalTemplate/>
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

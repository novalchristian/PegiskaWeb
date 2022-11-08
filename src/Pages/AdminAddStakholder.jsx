import React, { useState, useLayoutEffect } from "react";
import { TitleLightMolecules } from "../Components/Molecules";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";

export default function AdminAddClient() {
  const [getUrlBase] = useRecoilState(urlBase);
  const [error] = useState("");
  const [newStakeholder, setNewStakeholder] = useState({
    stakeholderURL: "",
    nama: "",
    jabatan: "",
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  async function dataStakeholderBaru() {
    const newData = new FormData();
    newData.append("stakeholderURL", newStakeholder.stakeholderURL);
    newData.append("nama", newStakeholder.nama);
    newData.append("jabatan", newStakeholder.jabatan);
    const request = await axios
      .post(getUrlBase + "stakeholder", newData, {
        headers: {
          "Content-Type": "multipart/form-data",
          session: localStorage.getItem("session"),
        },
      })
      .then((res) => {
        console.log(res);
        window.location.href = "/#/about";
        // setOpenModal(true);
      })
      .catch((er) => {
        // console.log("Error: ", er.response.data);
        console.log(er.response);
      });
    return request;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="md:pt-28 pt-20 pb-32 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
              <TitleLightMolecules
                titleInd="Tambahkan Karyawan"
                titleEng="Adding Stakeholder"
                subTitle="Silahkan masukkan data karyawan baru yang bekerja untuk PT Pegiska Berkat Abadi"
              />
              <p>{error}</p>
              <label className="block pb-3 pt-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Foto Karyawan
                </span>
                <input
                  type="file"
                  name="stakeholderURL"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Tambahkan Foto..."
                  onChange={(e) => {
                    setNewStakeholder({
                      ...newStakeholder,
                      stakeholderURL: e.target.files[0],
                    });
                  }}
                />
              </label>
              <label className="block pb-3 pt-8">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Nama Karyawan
                </span>
                <input
                  type="name"
                  name="nama"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan Nama Karyawan..."
                  onChange={(e) => {
                    setNewStakeholder({
                      ...newStakeholder,
                      nama: e.target.value,
                    });
                  }}
                />
              </label>
              <label className="block pb-3 pt-8">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Jabatan
                </span>
                <input
                  type="name"
                  name="jabatan"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan jabatan Karyawan..."
                  onChange={(e) => {
                    setNewStakeholder({
                      ...newStakeholder,
                      jabatan: e.target.value,
                    });
                  }}
                />
              </label>

              <button
                className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-3 mr-4 mt-4"
                onClick={() => {
                  dataStakeholderBaru();
                }}
              >
                <h1>Submit Stakeholder</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

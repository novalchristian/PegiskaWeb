import React, { useState, useLayoutEffect } from "react";
import { TitleLightMolecules } from "../Components/Molecules";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";

export default function AdminAddClient() {
  const [getUrlBase] = useRecoilState(urlBase);
  const [error] = useState("");
  const [newClient, setNewClient] = useState({
    clientURL: "",
    clientName: "",
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  async function dataClientBaru() {
    const newData = new FormData();
    newData.append("clientURL", newClient.clientURL);
    newData.append("clientName", newClient.clientName);
    const request = await axios
      .post(getUrlBase + "client", newData, {
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
                titleInd="Tambahkan Client"
                titleEng="Adding Client"
                subTitle="Silahkan masukkan data client baru yang telah menggunakan jasa PT Pegiska Berkat Abadi"
              />
              <p>{error}</p>
              <label className="block pb-3 pt-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Gambar Client
                </span>
                <input
                  type="file"
                  name="clientURL"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Tambahkan Gambar..."
                  onChange={(e) => {
                    setNewClient({
                      ...newClient,
                      clientURL: e.target.files[0],
                    });
                  }}
                />
              </label>
              <label className="block pb-3 pt-8">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Nama Client
                </span>
                <input
                  type="name"
                  name="clientName"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan Nama Client..."
                  onChange={(e) => {
                    setNewClient({
                      ...newClient,
                      clientName: e.target.value,
                    });
                  }}
                />
              </label>

              <button
                className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-3 mr-4 mt-4"
                onClick={() => {
                  dataClientBaru();
                }}
              >
                <h1>Submit Client</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

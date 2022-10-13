import React, { useState } from "react";
import { TitleLightMolecules } from "../Components/Molecules";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";
import { useParams } from "react-router-dom";

export default function AdminEditJasa() {
  const { id } = useParams();
  const [getUrlBase] = useRecoilState(urlBase);
  const [error, setError] = useState("");
  const [newJasa, setNewJasa] = useState({
    nama_jasa: "",
    feet20: "",
    feet40: "",
    lcl: "",
  });

  React.useEffect(() => {
    async function fetchDataJasaById() {
      const request = await axios
        .get(getUrlBase + `jasa/${id}`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            session: localStorage.getItem("session"),
          },
        })
        .then((res) => {
          // console.log(res.data.result)
          setNewJasa(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }
    fetchDataJasaById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function updateJasa(id) {
    if (
      newJasa.nama_jasa &&
      newJasa.feet20 &&
      newJasa.feet40 &&
      newJasa.lcl !== ""
    ) {
      const newData = new URLSearchParams(id);
      newData.append("nama_jasa", newJasa.nama_jasa);
      newData.append("feet20", newJasa.feet20);
      newData.append("feet40", newJasa.feet40);
      newData.append("lcl", newJasa.lcl);
      const request = await axios
        .put(getUrlBase + `jasa/${id}`, newData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            session: localStorage.getItem("session"),
          },
        })
        .then((res) => {
        //   console.log(res);
            window.location.href = "/penawaran";
        })
        .catch((er) => {
          // console.log("Error: ", er.response.data);
          console.log(er.response);
        });
      return request;
    } else {
      setError(
        "Data yang anda masukkan ada yang kosong atau ada yang salah !!!"
      );
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="md:pt-28 pt-20 pb-32 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
              <TitleLightMolecules
                titleInd="Masukkan Jasa"
                titleEng="New Jasa"
                subTitle="Silahkan masukkan data jasa yang kamu ingin tampilkan di halaman website"
              />
              <label className="block pb-3 ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Nama Jasa
                </span>
                <input
                  type="text"
                  name="nama_jasa"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan Jasa yang ingin anda tambahkan."
                  defaultValue={newJasa.nama_jasa}
                  onClick={() => {
                    setError("");
                  }}
                  onChange={(e) => {
                    setNewJasa({
                      ...newJasa,
                      nama_jasa: e.target.value,
                    });
                  }}
                />
              </label>
              <label className="block pb-3 ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  20 Feet
                </span>
                <input
                  type="number"
                  name="feet20"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan harga untuk ukuran 20 feet ini."
                  defaultValue={newJasa.feet20}
                  onClick={() => {
                    setError("");
                  }}
                  onChange={(e) => {
                    setNewJasa({
                      ...newJasa,
                      feet20: e.target.value,
                    });
                  }}
                />
              </label>
              <label className="block pb-3 ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  40 Feet
                </span>
                <input
                  type="number"
                  name="feet40"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan harga untuk ukuran 40 feet ini."
                  defaultValue={newJasa.feet40}
                  onClick={() => {
                    setError("");
                  }}
                  onChange={(e) => {
                    setNewJasa({
                      ...newJasa,
                      feet40: e.target.value,
                    });
                  }}
                />
              </label>
              <label className="block pb-3 ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Less Container Loud
                </span>
                <input
                  type="number"
                  name="lcl"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan harga untuk Less Container Loud ini."
                  defaultValue={newJasa.lcl}
                  onClick={() => {
                    setError("");
                  }}
                  onChange={(e) => {
                    setNewJasa({
                      ...newJasa,
                      lcl: e.target.value,
                    });
                  }}
                />
              </label>
              <p className="text-red-500">{error}</p>

              <button
                className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-3 mr-4 mt-4"
                onClick={() => {
                  updateJasa(id);
                }}
              >
                <h1>Submit Jasa</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

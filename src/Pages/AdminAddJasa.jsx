import React, { useState, useLayoutEffect } from "react";
import { TitleLightMolecules } from "../Components/Molecules";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";
import { TambahJasa } from "../Data/AddJasaData";

export default function AdminAddJasa() {
  const [getUrlBase] = useRecoilState(urlBase);
  const [error, setError] = useState("");
  const [newJasa, setNewJasa] = useState({
    nama_jasa: "",
    feet20: "",
    feet40: "",
    lcl: "",
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });


  async function dataJasaBaru() {
    if (
      newJasa.nama_jasa &&
      newJasa.feet20 &&
      newJasa.feet40 &&
      newJasa.lcl !== ""
    ) {
      const newData = new URLSearchParams();
      newData.append("nama_jasa", newJasa.nama_jasa);
      newData.append("feet20", newJasa.feet20);
      newData.append("feet40", newJasa.feet40);
      newData.append("lcl", newJasa.lcl);
      const request = await axios
        .post(getUrlBase + "jasa", newData, {
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
              {TambahJasa.map((data, key) => (
                <label className="block pb-3 " key={key}>
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
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
                      setNewJasa({
                        ...newJasa,
                        [data.name]: e.target.value,
                      });
                    }}
                  />
                </label>
              ))}
              <p className="text-red-500">{error}</p>

              <button
                className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-3 mr-4 mt-4"
                onClick={() => {
                  dataJasaBaru();
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

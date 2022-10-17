import React, { useState, useLayoutEffect } from "react";
import { TitleLightMolecules } from "../Components/Molecules";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";

export default function AdminAddBlog() {
  const [getUrlBase] = useRecoilState(urlBase);
  const [error] = useState("");
  const [newBlog, setNewBlog] = useState({
    blog: "",
    judul: "",
    isi: "",
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  async function dataBlogBaru() {
    const newData = new FormData();
    newData.append("blog", newBlog.blog);
    newData.append("judul", newBlog.judul);
    newData.append("isi", newBlog.isi);
    const request = await axios
      .post(getUrlBase + "blog", newData, {
        headers: {
          "Content-Type": "multipart/form-data",
          session: localStorage.getItem("session"),
        },
      })
      .then((res) => {
        console.log(res);
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
                titleInd="Masukkan Blog"
                titleEng="Adding Blog"
                subTitle="Silahkan masukkan data blog yang kamu ingin tampilkan di halaman website"
              />
              <p>{error}</p>
              <label className="block pb-3 pt-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Gambar
                </span>
                <input
                  type="file"
                  name="blog"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Tambahkan Gambar..."
                  onChange={(e) => {
                    setNewBlog({
                      ...newBlog,
                      blog: e.target.files[0],
                    });
                  }}
                />
              </label>
              <label className="block pb-3 pt-8">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Judul Blog
                </span>
                <input
                  type="name"
                  name="judul"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan Judul Blog..."
                  onChange={(e) => {
                    setNewBlog({
                      ...newBlog,
                      judul: e.target.value,
                    });
                  }}
                />
              </label>

              <label className="block pb-3 pt-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Isi Blog
                </span>
                <textarea
                  name="isi"
                  id="message"
                  rows="15"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 pb-4"
                  placeholder="Masukkan Isi Blog..."
                  onChange={(e) => {
                    setNewBlog({
                      ...newBlog,
                      isi: e.target.value,
                    });
                  }}
                ></textarea>
              </label>

              <button
                className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-3 mr-4 mt-4"
                onClick={() => {
                  dataBlogBaru();
                  window.location.href = "/blog";
                }}
              >
                <h1>Submit Blog</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

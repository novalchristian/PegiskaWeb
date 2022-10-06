import React from "react";
import { TitleLightMolecules } from "../Components/Molecules";

export default function AdminAddBlog() {
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
              <label className="block pb-3 pt-8">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Judul Blog
                </span>
                <input
                  type="name"
                  name="judulBlog"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Masukkan Judul Blog..."
                />
              </label>

              <label className="block pb-3 pt-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Isi Blog
                </span>
                <textarea
                  id="message"
                  rows="15"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                  placeholder="Masukkan Isi Blog..."
                ></textarea>
              </label>

              <label className="block pb-3 pt-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  Gambar
                </span>
                <input
                  type="file"
                  name="blogImage"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder="Tambahkan Gambar..."
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

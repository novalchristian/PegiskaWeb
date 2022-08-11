/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { PengajuanHeaderOrganism } from "../Organisms";

export default function AdminPengajuanTemplate(props) {
  return (
    <div className="md:pt-20 pt-3 md:mt-8 pb-20 flex justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center md:max-w-3xl">
            <PengajuanHeaderOrganism
              titleEng="Admin"
              titleInd="Daftar Pesanan"
              subTitle="Daftar orang yang ingin melakukan pesanan :"
            />
          </div>

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-w-7xl mx-auto">
            <div className="pb-4 bg-white">
              <label for="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari pesanan"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600  focus:ring-2 text-gray-700"
                      />
                      <label for="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nama
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nomor Whatsapp
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Nama Perusahaan
                  </th>
                  <th scope="col" className="py-3 px-12">
                    Action
                  </th>
                </tr>
              </thead>

              {props.data.map((data) => (
                <tbody>
                  <tr className="bg-white border-b hover:bg-gray-50 ">
                    <td className="p-4 w-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2"
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {data.nama}
                    </th>
                    <td className="py-4 px-6">{data.email}</td>
                    <td className="py-4 px-6">{data.noWa}</td>
                    <td className="py-4 px-6">{data.namaPerusahaan}</td>
                    <td className="py-4 px-6">
                      <a
                        href="#"
                        className="font-medium text-[#1d4ed8] hover:underline"
                      >
                        Edit
                      </a>
                      <button className="p-2 bg-yellow-400 hover:bg-yellow-300 text-white rounded-lg ml-4">
                        Detail
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

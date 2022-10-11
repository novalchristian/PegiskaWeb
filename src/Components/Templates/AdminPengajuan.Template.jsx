/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { PengajuanHeaderOrganism } from "../Organisms";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";
import { Link } from "react-router-dom";
import moment from "moment";
import localization from "moment/locale/id";

moment.updateLocale("id", localization);

export default function AdminPengajuanTemplate(props) {
  moment.locale("id");
  const [getUrlBase] = useRecoilState(urlBase);
  const [dataPesanan, setDataPesanan] = useState([]);

  React.useEffect(() => {
    async function fetchDataBlog() {
      const request = await axios
        .get(getUrlBase + "pesanan", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            session: localStorage.getItem("session"),
          },
        })
        .then((res) => {
          // console.log(res.data.result)
          setDataPesanan(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }
    fetchDataBlog();
  }, [getUrlBase]);

  return (
    <div className="md:pt-20 pt-24 md:mt-8 pb-25 mb-20 flex justify-center">
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
              <label htmlFor="table-search" className="sr-only">
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
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue focus:border-blue "
                  placeholder="Cari pesanan"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="p-4">
                    Tanggal
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
                  <th scope="col" className="py-3 px-12 text-center">
                    Action
                  </th>
                </tr>
              </thead>

              {dataPesanan.map((data) => (
                <tbody key={data.id_pesanan}>
                  <tr className="bg-white border-b hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                      {moment(data.createdAt).locale("id").format("LL")}
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
                    <td className="py-4 px-6 flex justify-center md:flex-row items-center">
                      {/* BIKIN LINK TO HALAMAN EDIT */}
                      <Link to={`/pesanan/edit/${data.id_pesanan}`}>
                        <button className="py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg px-4 ml-4 mt-4 md:mt-0">
                          Edit
                        </button>
                      </Link>
                      <Link to={`/detail-pesanan/${data.id_pesanan}`}>
                        <button className="p-2 bg-yellow-400 hover:bg-yellow-300 text-white rounded-lg ml-4 md:mt-0 mt-4">
                          Detail
                        </button>
                      </Link>
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

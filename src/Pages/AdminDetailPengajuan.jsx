import React from "react";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import moment from "moment";
import localization from "moment/locale/id";

moment.updateLocale("id", localization);


function AdminDetailPengajuan() {
  const { id } = useParams();
  const [getUrlBase] = useRecoilState(urlBase);
  const [dataPesanan, setDataPesanan] = React.useState([]);

  React.useEffect(() => {
    async function fetchDataPesananById() {
      const request = await axios
        .get(getUrlBase + `pesanan/${id}`, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            session: localStorage.getItem("session"),
          },
        })
        .then((res) => {
          //   console.log(res);
          setDataPesanan(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }
    fetchDataPesananById();
  }, [id, getUrlBase]);

  return (
    <div className="md:pt-32 pt-16 md:pb-0 flex  justify-center bg-white">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center max-w-7xl">
            <div className="pb-10 px-4 md:px-0 flex flex-wrap justify-center mt-6 md:mt-0">
              <div className="w-1/2 text-left">
                <h1 className="md:text-3xl text-xl font-bold text-primary">
                  {dataPesanan.nama}
                </h1>
                <h1 className="md:text-xl text-sm">{dataPesanan.email}</h1>
                <h1 className="mt-2">No Whatsapp : {dataPesanan.noWa}</h1>
              </div>
              <div className="w-1/2 text-right ">
                <h1 className="md:text-3xl text-xl font-bold">
                  {dataPesanan.namaPerusahaan}
                </h1>
                <h1 className="md:text-xl">{dataPesanan.alamatPerusahaan}</h1>
                <h1 className="mt-2">
                  {moment(dataPesanan.createdAt).locale("id").format("LL")}
                </h1>
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <a
                href={getUrlBase + dataPesanan.nib}
                className="md:w-full w-3/4  lg:w-1/3 flex justify-center"
              >
                <div className="md:w-full w-3/4  lg:w-1/3 flex justify-center">
                  <div className="text-left flex justify-center flex-col items-center">
                    <h1 className="mb-4 border-2 border-blue bg-blue text-white w-full text-center">
                      Nomor Induk Berusaha
                    </h1>
                    <Document file={getUrlBase + dataPesanan.nib}>
                      <Page height="400" pageNumber={1} />
                    </Document>
                  </div>
                </div>
              </a>
              <a
                href={getUrlBase + dataPesanan.aktaPendirian}
                className="md:w-full w-3/4  lg:w-1/3 flex justify-center"
              >
                <div className="md:w-full w-3/4  lg:w-1/3 flex justify-center">
                  <div className="text-left flex justify-center flex-col items-center">
                    <h1 className="mb-4 border-2 border-blue bg-blue text-white w-full text-center">
                      Akta Pendirian
                    </h1>
                    <Document file={getUrlBase + dataPesanan.aktaPendirian}>
                      <Page
                        height="400"
                        // className="w-[50%]"
                        pageNumber={1}
                      />
                    </Document>
                  </div>
                </div>
              </a>
              <a
                href={getUrlBase + dataPesanan.aktaPendirian}
                className="md:w-full w-3/4  lg:w-1/3 flex justify-center"
              >
                <div className="md:w-full w-3/4  lg:w-1/3 flex justify-center">
                  <div className="text-left flex justify-center flex-col items-center">
                    <h1 className="mb-4 border-2 border-blue bg-blue text-white w-full text-center">
                      Akta Perubahan
                    </h1>
                    <Document file={getUrlBase + dataPesanan.aktaPendirian}>
                      <Page
                        height="400"
                        // className="w-[50%]"
                        pageNumber={1}
                      />
                    </Document>
                  </div>
                </div>
              </a>
              <a
                href={getUrlBase + dataPesanan.ktpDirektur}
                className="md:w-full w-3/4  lg:w-1/3 flex justify-center md:mt-10"
              >
                <div className="md:w-full w-3/4  lg:w-1/3 flex justify-center">
                  <div className="text-left flex justify-center flex-col items-center">
                    <h1 className="mb-4 border-2 border-blue bg-blue text-white w-full text-center">
                      KTP Direktur
                    </h1>
                    <Document file={getUrlBase + dataPesanan.ktpDirektur}>
                      <Page
                        height="400"
                        // className="w-[50%]"
                        pageNumber={1}
                      />
                    </Document>
                  </div>
                </div>
              </a>
              <a
                href={getUrlBase + dataPesanan.npwpPerusahaan}
                className="md:w-full w-3/4  lg:w-1/3 flex justify-center md:mt-10"
              >
                <div className="md:w-full w-3/4  lg:w-1/3 flex justify-center">
                  <div className="text-left flex justify-center flex-col items-center">
                    <h1 className="mb-4 border-2 border-blue bg-blue text-white w-full text-center">
                      NPWP Perusahaan
                    </h1>
                    <Document file={getUrlBase + dataPesanan.npwpPerusahaan}>
                      <Page
                        height="400"
                        // className="w-[50%]"
                        pageNumber={1}
                      />
                    </Document>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDetailPengajuan;

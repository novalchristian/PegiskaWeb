import React, { useState } from "react";
import { TitleLightMolecules } from "../Molecules";
import { useNavigate } from "react-router-dom";
import { AddJasaModalTemplate, EditJasaModalTemplate } from ".";

function AdminPenawaranTemplate(props) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const history = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    history("/pengajuan");
  }
  return (
    <div className="md:mt-[120px]">
      {/* Main Penawaran Start */}
      <div className="md:pt-0 pt-16 pb-4 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center max-w-6xl ">
              <div className="pb-4">
                <TitleLightMolecules
                  titleEng={props.penawaranTitleEng}
                  titleInd={props.penawaranTitleInd}
                  subTitle={props.penawaranSubTitle}
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-3 mr-4"
                  onClick={() => {
                    setOpenAddModal(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h1 className="pl-2">Tambahkan Jasa</h1>
                </button>
                {openAddModal && (
                  <AddJasaModalTemplate closeModal={setOpenAddModal} />
                )}
                <button
                  className="flex justify-center items-center text-white bg-orange-600 hover:bg-orange-700 rounded-lg text-sm py-2 px-3"
                  onClick={handleSubmit}
                  to="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h1 className="pl-2">Lihat Pesanan</h1>
                </button>
              </div>

              {props.data.map((data) => (
                <div className="border-2 pb-4 pt-4 px-4 mb-6 bg-slate-700 rounded-2xl mt-6">
                  <div className="flex border-b-[1px] p-2 mx-2">
                    <div>
                      <h4 className="text-yellow-400 font-bold text-left md:text-[22px] text-[14px] md:w-[700px]">
                        {data.key}. {data.namaJasa}{" "}
                        {data.namaJasa === "Jasa Inklaring" && (
                          <span className="text-white font-light text-base">
                            (Container 1 - 3) (biaya per container)
                          </span>
                        )}
                        {data.namaJasa === "Kelancaran Behandel" && (
                          <span className="text-white font-light text-base">
                            (Container Pertama) (biaya per Container)
                          </span>
                        )}
                        {data.namaJasa === "Biaya Forklift/Buruh/dll" && (
                          <span className="text-white font-light text-base">
                            (Untuk jalur merah) (biaya per container)
                          </span>
                        )}
                        {data.namaJasa === "Biaya Rekaman PIB" && (
                          <span className="text-white font-light text-base">
                            (biaya per PIB)
                          </span>
                        )}
                        {data.namaJasa === "Biaya Uitslag" && (
                          <span className="text-yellow-400 font-medium">
                            ( 1 s/d 5 Container ){" "}
                            <span className="text-white font-light text-base">
                              (biaya per PIB)
                            </span>
                          </span>
                        )}
                        {data.key === 6 && (
                          <span className="text-white font-light text-base">
                            (Ambil Dokumen, Ambil DO, Masukkan Dokumen ke Bea
                            Cukai, Dll) (biaya per PIB)
                          </span>
                        )}
                      </h4>
                    </div>
                    <button
                      type="button"
                      className="flex justify-center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm py-1.5 px-2 ml-auto items-center dark:hover:bg-gray-800 dark:hover:text-white"
                      data-modal-toggle="popup-modal"
                      onClick={() => {
                        setOpenEditModal(true);
                      }}
                    >
                      {/* Edit ICON */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="orange"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <h1 className="text-lg text-orange-300 pl-2 pt-[2px]">
                        Edit
                      </h1>
                    </button>
                  </div>
                  <div className="flex text-white mt-4 justify-between px-10 text-lg">
                    <h4 className="text-center pl-[16px]">20 Feet</h4>
                    <h4 className="text-center">40 Feet</h4>
                    <h4 className="text-center pr-[24px]">LCL</h4>
                  </div>
                  <div className="flex text-white mt-4 justify-between px-4 text-xl font-bold">
                    <h4 className="text-center">
                      {formatter.format(data.firstTwenty)}
                    </h4>
                    <h4 className="text-center pl-6">
                      {formatter.format(data.secondFourty)}
                    </h4>
                    <h4 className="text-center">
                      {formatter.format(data.lcl)}
                    </h4>
                  </div>

                  {data.key === 1 && (
                    <div className="mt-4">
                      <h4 className="text-yellow-400 font-medium text-left md:text-[18px] text-[14px] border-[1px] p-2 rounded-lg mx-2">
                        (Container ke - 4 dan seterusnya)
                      </h4>
                      <div className="flex text-white mt-4 justify-start px-10 text-lg ">
                        <h4 className="text-center ml-6 mr-[120px]">20 Feet</h4>
                        <h4 className="text-center mx-10">40 Feet</h4>
                      </div>
                      <div className="flex text-white mt-4 justify-start px-4 text-xl font-bold">
                        <h4 className="text-center mr-10">
                          {formatter.format(data.firstTwenty - 250000)}
                        </h4>
                        <h4 className="text-center mx-10">
                          {formatter.format(data.secondFourty - 250000)}
                        </h4>
                      </div>
                    </div>
                  )}
                  {data.key === 2 && (
                    <div className="mt-4">
                      <h4 className="text-yellow-400 text-left font-medium md:text-[18px] text-[14px] border-[1px] p-2 rounded-lg mx-2">
                        (Container Berikutnya)
                      </h4>
                      <div className="flex text-white mt-4 justify-start px-10 text-lg ">
                        <h4 className="text-center ml-6 mr-[120px]">20 Feet</h4>
                        <h4 className="text-center mx-10">40 Feet</h4>
                      </div>
                      <div className="flex text-white mt-4 justify-start px-4 text-xl font-bold">
                        <h4 className="text-center mr-10">
                          {formatter.format(data.firstTwenty - 250000)}
                        </h4>
                        <h4 className="text-center mx-10">
                          {formatter.format(data.secondFourty - 250000)}
                        </h4>
                      </div>
                    </div>
                  )}
                  {data.key === 5 && (
                    <>
                      <div className="mt-4">
                        <h4 className="text-yellow-400 text-left font-medium md:text-xl text-[14px] border-[1px] p-2 rounded-lg mx-2">
                          6 s/d 10 Container
                        </h4>
                        <div className="flex text-white mt-4 justify-start px-10 text-lg ">
                          <h4 className="text-center ml-6 mr-[120px]">
                            20 Feet
                          </h4>
                          <h4 className="text-center mx-10">40 Feet</h4>
                        </div>
                        <div className="flex text-white mt-4 justify-start px-4 text-xl font-bold">
                          <h4 className="text-center mr-10">
                            {formatter.format(data.firstTwenty + 150000)}
                          </h4>
                          <h4 className="text-center mx-10">
                            {formatter.format(data.secondFourty + 150000)}
                          </h4>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-yellow-400 text-left font-medium md:text-xl text-[14px] border-[1px] p-2 rounded-lg mx-2">
                          10 s/d Container Seterusnya
                        </h4>
                        <div className="flex text-white mt-4 justify-start px-10 text-lg ">
                          <h4 className="text-center ml-6 mr-[120px]">
                            20 Feet
                          </h4>
                          <h4 className="text-center mx-10">40 Feet</h4>
                        </div>
                        <div className="flex text-white mt-4 justify-start px-4 text-xl font-bold">
                          <h4 className="text-center mr-10">
                            {formatter.format(data.firstTwenty + 400000)}
                          </h4>
                          <h4 className="text-center mx-10">
                            {formatter.format(data.secondFourty + 400000)}
                          </h4>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
              {openEditModal && (
                <EditJasaModalTemplate closeModal={setOpenEditModal} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPenawaranTemplate;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CorrectModals } from ".";

const TambahJasa = [
  {
    title: "Nama Jasa",
    placeholder: "Jasa Inklaring",
    type: "text",
    name: "namaJasa",
  },
  {
    title: "20 Feet",
    placeholder: "Rp 750.000,00",
    type: "number",
    name: "firstTwenty",
  },
  {
    title: "40 Feet",
    placeholder: "Rp 750.000,00",
    type: "number",
    name: "secondFourty",
  },
  {
    title: "LCL",
    placeholder: "Rp 750.000,00",
    type: "number",
    name: "lcl",
  },
];

export default function EditJasaModal(props) {
  const [openTrueModal, setOpenTrueModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 transition duration-75 bg-slate-800 bg-opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      {openTrueModal && (
        <CorrectModals
          title="Jasa berhasil di Update."
          buttonOne="Baiklah"
          to="/"
        />
      )}
      <motion.div
        className="flex h-screen justify-center items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <div className=" bg-white drop-shadow-2xl rounded-lg shadow w-[600px] h-[550px] p-4 flex justify-center items-center">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="popup-modal"
            onClick={() => props.closeModal(false)}
          >
            {/* X ICON */}
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div className="p-6">
            {/* ICON TENGAH */}
            <div className="flex justify-center">
              <h3 className="mb-5 text-2xl font-bold text-primary w-[400px] px-10">
                Update Jasa
              </h3>
            </div>
            {TambahJasa.map((data) => (
              <label className="block pb-3 ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left mb-2">
                  {data.title}
                </span>
                <input
                  type={data.type}
                  name={data.name}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 placeholder:text-[14px] "
                  placeholder={data.placeholder}
                />
              </label>
            ))}

            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 mt-5"
              onClick={() => {
                setOpenTrueModal(true);
              }}
            >
              Update
            </button>
            <motion.button
              onClick={() => props.closeModal(false)}
              id="closeModal"
              data-modal-toggle="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Batalkan
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// AddJasaModal.defaultProps = {
//   title: "Apakah data mu sudah benar? Periksa kembali data mu !",
//   buttonOne: "deepblue",
//   buttonTwo: "45",
// };

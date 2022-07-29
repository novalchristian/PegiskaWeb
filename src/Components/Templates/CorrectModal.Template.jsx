import React, { useEffect } from "react";
import { motion } from "framer-motion";

function CorrectModalsTemplate(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 transition duration-75 bg-slate-800 bg-opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3 } }}
    >
      <motion.div
        className="flex h-screen justify-center items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <motion.div className=" bg-white drop-shadow-2xl rounded-lg shadow w-[500px] h-[300px] flex justify-center items-center">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="popup-modal"
            onClick={() => props.closeModal(false)}
          >
            <svg
              className="bg-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              {" "}
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                fill="blue"
              ></path>{" "}
              <path
                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
                fill="blue"
              ></path>{" "}
            </svg>
          </button>

          <motion.div class="p-6 text-center">
            <svg
              aria-hidden="true"
              class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
              fill="none"
              stroke="red"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex justify-center">
              <h3 class="mb-5 text-lg font-normal text-gray-700 dark:text-gray-400 w-[400px] px-10">
                {props.title}
              </h3>
            </div>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-5 mt-5"
            >
              {props.buttonOne}
            </button>
            <motion.button
              onClick={() => props.closeModal(false)}
              id="closeModal"
              data-modal-toggle="popup-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              {props.buttonTwo}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

CorrectModalsTemplate.defaultProps = {
  title: "Apakah data mu sudah benar? Periksa kembali data mu !",
  buttonOne: "Ya, sudah",
  buttonTwo: "Belum hihi",
};

export default CorrectModalsTemplate;

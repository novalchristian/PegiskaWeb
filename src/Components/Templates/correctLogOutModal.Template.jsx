import React, { useEffect } from "react";
import { motion } from "framer-motion";

function CorrectLogOutModalTemplate(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  function handleSubmit() {
    // history("/");
    // window.location.reload();
    window.location.href = "/";
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 transition duration-75 bg-slate-800 bg-opacity-70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="flex h-screen justify-center items-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <motion.div className="bg-white drop-shadow-2xl rounded-lg shadow md:w-[500px] md:h-[300px] w-[400px] flex justify-center items-center">
          <motion.div
            className="p-6 text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="green"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex justify-center">
              <h3 className="mb-5 text-lg font-normal text-gray-700 dark:text-gray-400 w-[400px] px-10">
                {props.title}
              </h3>
            </div>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white bg-[#1e4ed8] hover:bg-[#1e40af] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 mt-5"
              onClick={handleSubmit}
            >
              {props.buttonOne}
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

CorrectLogOutModalTemplate.defaultProps = {
  title: "Terima Kasih Sudah Mampir, Jangan Lupa Datang Kembali",
  buttonOne: "Baik, Terima Kasih",
};

export default CorrectLogOutModalTemplate;

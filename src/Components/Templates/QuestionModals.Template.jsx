import React, {useEffect} from 'react'
import {motion} from 'framer-motion'


function QuestionModalsTemplate(props) {

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
            {/* X ICON */}
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          <motion.div class="p-6 text-center">
            {/* ICON TENGAH */}
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
              Ya, tentu
            </button>
            <motion.button
              onClick={() => props.closeModal(false)}
              id="closeModal"
              data-modal-toggle="popup-modal"
              type="button"
              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Belum hihi
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

QuestionModalsTemplate.defaultProps = {
  title: "Apakah data mu sudah benar? Periksa kembali data mu !",
  buttonOne: "deepblue",
  buttonTwo: "45",
};

export default QuestionModalsTemplate
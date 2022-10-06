import React from "react";
import { ButtonAtom } from "../Atoms";
import { TitleLightMolecules } from "../Molecules";
import { useNavigate } from "react-router-dom";
// import Axios from 'axios'

function AdminBlogTemplate(props) {
  // const [dataBlog, setDataBlog] = useState([]);

  // useEffect(() => {
  //   Axios.get('http://localhost:5000/blog')
  //   .then(result => {
  //     console.log('data API', result.data)
  //     const responseAPI = result.data

  //     setDataBlog(responseAPI.data)
  //   })
  //   .catch(err => {
  //     console.log('error: ', err)
  //   })
  // }, []);

  const history = useNavigate();

  function AddBlog(e) {
    e.preventDefault();

    history("/AddBlog");
  }
  return (
    <div className="md:pt-12 pt-8 flex justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-8 md:mb-20 text-center max-w-7xl">
            <div className="pb-10">
              <TitleLightMolecules
                titleEng={props.titleEng}
                titleInd={props.titleInd}
                subTitle={props.subTitle}
              />
              <div className="flex justify-center items-center">
                <button
                  className="flex justify-center items-center text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm py-2 px-3 mt-6"
                  onClick={AddBlog}
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
                  <h1 className="pl-2">Tambahkan Blog</h1>
                </button>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="flex flex-wrap justify-center items-start md:ml-0 cursor-pointer">
                {props.data.map((list) => (
                  <div className="md:w-full w-[40%] lg:w-1/3 md:py-3 md:px-7 mb-7  hover:-translate-y-1 hover:scale-110 duration-300 w:2/3 mx-2 md:m-0">
                    <div className="mt-2 md:mt-4 flex flex-col md:static text-left border-[#d3d3d3] border rounded-default shadow-Three">
                      <img
                        src={list.image}
                        alt="Gambar Contoh"
                        className=" md:w-full border rounded-t-default md:h-[200px] h-[80px]"
                      />
                      <div className="px-4 py-7 overflow-hidden ">
                        <h4 className="font-bold text-black text-sm md:text-lg">
                          {list.title}
                        </h4>
                        <div className="h-16 overflow-hidden">
                          <p className="pt-3 text-secondary text-[11px] md:text-base">
                            {list.subTitle}
                          </p>
                        </div>
                        <div className="mt-6 flex ">
                          <ButtonAtom
                            title="Baca Selengkapnya"
                            to={`/blog/${list.title}`}
                          />
                          <button
                            type="button"
                            className="flex justify-center text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto py-1.5 px-2 items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="popup-modal"
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
                          <button
                            type="button"
                            className="flex justify-center text-gray-400 bg-red-500 hover:bg-red-600  rounded-3xl text-sm ml-auto py-1.5 px-2 items-center p-2"
                            data-modal-toggle="popup-modal"
                          >
                            {/* Edit ICON */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 m-2"
                              viewBox="0 0 20 20"
                              fill="white"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBlogTemplate;

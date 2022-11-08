import React from 'react'
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";
import { 
  DetailButtonAtom, 
  // EditButtonAtom 
} from '../Atoms';

export default function BlogItemOrganism(props) {
    const [getUrlBase] = useRecoilState(urlBase);
  return (
    <div
      className="md:w-full w-[40%] lg:w-1/3 md:py-3 md:px-7 mb-7  hover:-translate-y-1 hover:scale-110 duration-300 w:2/3 mx-2 md:m-0"
      key={props.id_blog}
    >
      <div className="mt-2 md:mt-4 flex flex-col md:static text-left border-[#d3d3d3] border rounded-default shadow-Three">
        <img
          src={getUrlBase + props.blog}
          alt="Gambar Contoh"
          className=" md:w-full border rounded-t-default md:h-[200px] h-[80px]"
        />
        <div className="px-4 py-7 overflow-hidden ">
          <h4 className="font-bold text-black text-sm md:text-lg">
            {props.judul}
          </h4>
          <div className="h-16 overflow-hidden">
            <p className="pt-3 text-secondary text-[11px] md:text-base">
              {props.isi}
            </p>
          </div>
          <div className="mt-6 flex ">
            <Link to={`/blog/detail-blog/${props.id_blog}`}>
              <DetailButtonAtom />
            </Link>
            {/* <Link to={`/blog/edit-blog/${props.id_blog}`}>
              <EditButtonAtom />
            </Link> */}
            <button
              type="button"
              className="flex justify-center text-gray-400 bg-red-500 hover:bg-red-600  rounded-3xl text-sm ml-auto py-1.5 px-2 items-center p-2"
              data-modal-toggle="popup-modal"
              onClick={() => props.func(props.id_blog)}
            >
              {/* Delete ICON */}
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
  );
}

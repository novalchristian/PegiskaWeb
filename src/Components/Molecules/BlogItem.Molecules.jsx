import React from "react";
// import { ButtonAtom } from "../Atoms";
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function BlogItemMolecules(props) {
  const [getUrlBase] = useRecoilState(urlBase);

  // const history = useNavigate();

  // function handleSubmit(e, id) {
  //   e.preventDefault();

  //   history(`/detail-blog/${props.id}`);
  // }

  return (
    <div
      className="md:w-full w-[40%] lg:w-1/3 md:py-3 md:px-7 mb-7  hover:-translate-y-1 hover:scale-110 duration-300 w:2/3 mx-2 md:m-0"
      key={props.id}
    >
      <div className="mt-2 md:mt-4 flex flex-col md:static text-left border-[#d3d3d3] border rounded-default shadow-Three">
        <img
          src={getUrlBase + props.image}
          alt="Gambar Contoh"
          className=" md:w-full border rounded-t-default md:h-[200px] h-[80px]"
        />
        <div className="px-4 py-7 overflow-hidden ">
          <h4 className="font-bold text-black text-sm md:text-lg">
            {props.title}
          </h4>
          <div className="h-16 overflow-hidden">
            <p className="pt-3 text-secondary text-[11px] md:text-base">
              {props.subTitle}
            </p>
          </div>
          <div className="mt-6">
            <Link to={`/detail-blog/${props.id}`}>
              <button className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300">
                <span className="absolute right-0 w-3 h-15 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative md:text-xs text-[8px]">
                  Baca Selengkapnya
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItemMolecules;

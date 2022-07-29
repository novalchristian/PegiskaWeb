import React from "react";
import { useParams } from "react-router-dom";
import { TitleLightMolecules } from "../Components/Molecules";

function BlogDetail({ data }) {
  const { title } = useParams();
  return (
    <div className="flex justify-center items-center">
      {data
        .filter((list) => list.title === title)
        .map((list) => (
          <div className="md:pt-28 pt-20 pb-32 flex justify-center">
            <div className="container">
              <div className="w-full px-4">
                <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
                  <TitleLightMolecules titleEng="Blog" titleInd={list.title} />
                  <div className="flex justify-center items-center">
                    <img
                      src={list.image}
                      alt=""
                      className="w-[600px] h-[300px] drop-shadow-xl rounded-xl"
                    />
                  </div>
                  <p className="pt-6 md:pl-6 indent-10 text-justify first-letter:text-4xl break-words">
                    {list.subTitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BlogDetail;

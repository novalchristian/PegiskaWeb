import React from "react";
import { BlogItemMolecules, TitleLightMolecules } from "../Molecules";

function BlogTemplate(props) {
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
            </div>
            <div className="flex justify-start">
              <div className="flex flex-wrap justify-center items-start md:ml-0 cursor-pointer">
                {props.data.map((list) => (
                  <BlogItemMolecules
                    id={list.id}
                    image={list.blog}
                    title={list.judul}
                    subTitle={list.isi}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogTemplate;

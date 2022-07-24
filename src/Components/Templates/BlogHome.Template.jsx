import React from "react";
import { BlogItemMolecules, TitleLightMolecules } from "../Molecules";

function BlogHomeTemplate(props) {
  return (
    <div className="md:pt-12 pt-16 pb-10 flex justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center max-w-7xl">
            <div className="pb-10">
              <TitleLightMolecules
                titleEng={props.titleEng}
                titleInd={props.titleInd}
                subTitle={props.subTitle}
              />
            </div>
            <div className="flex flex-wrap justify-center items-start">
              {props.data.slice(0, 3).map((data) => (
                <BlogItemMolecules
                  image={data.image}
                  title={data.title}
                  subTitle={data.subTitle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHomeTemplate;

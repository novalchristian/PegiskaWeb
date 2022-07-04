import React from "react";
import { TitleLightMolecules } from "../Molecules";
import { BlogItemsOrganism } from "../Organisms";

function BlogTemplate(props) {
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
            <BlogItemsOrganism data={props.data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogTemplate;
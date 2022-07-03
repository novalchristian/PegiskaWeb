import React from 'react'
import TitleDarkMolecules from '../Molecules/TitleDark.Molecules';
import { TrustedItemsOrganism } from '../Organisms';

function TrustedHomeTemplate(props) {
  return (
    <div className="md:pt-12 pt-16 pb-8 flex justify-center bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center max-w-5xl">
            <div className="pb-10">
              <TitleDarkMolecules
                titleEng={props.titleEng}
                titleInd={props.titleInd}
                subTitle={props.subTitle}
              />
            </div>
            <TrustedItemsOrganism gofData={props.gofData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedHomeTemplate
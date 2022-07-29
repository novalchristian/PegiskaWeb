import React from 'react'
import { TitleLightMolecules } from '../Molecules';

function PengajuanHeaderOrganism(props) {
  return (
    <div className="pb-10">
      <TitleLightMolecules
        titleEng={props.titleEng}
        titleInd={props.titleInd}
        subTitle={props.subTitle}
      />
    </div>
  );
}

PengajuanHeaderOrganism.defaultProps = {
  titleEng: "Contact",
  titleInd: "HubungiKami",
  subTitle:
    "Jika anda ingin menggunakan jasa kami, hubungi kami dengan mengisi informasi yang ada dibawah ini.",
};

export default PengajuanHeaderOrganism
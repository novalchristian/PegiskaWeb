import React from "react";
import { TitleLightMolecules } from "../Molecules";
import { MainPenawaranOrganism, PenawaranHeroOrganism } from "../Organisms";
import PengajuanTemplate from "./Pengajuan.Template";

function UserLoginPenawaranTemplate(props) {
  return (
    <>
      {/* Penawaran Hero Start */}
      <PenawaranHeroOrganism />
      {/* Penawaran Hero End */}

      {/* Main Penawaran Start */}
      <div className="md:pt-0 pt-16 pb-4 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 text-center max-w-6xl ">
              <div className="pb-10">
                <TitleLightMolecules
                  titleEng={props.penawaranTitleEng}
                  titleInd={props.penawaranTitleInd}
                  subTitle={props.penawaranSubTitle}
                />
              </div>

              <MainPenawaranOrganism
                jenisContainer="20 feet"
                jasa1="Jasa Inklaring"
                jasa2="Jasa Inklaring Container Berikutnya"
                jasa3="Kelancaran Behandel"
                jasa4="Kelancaran Behandel Container Berikutnya"
                jasa5="Biaya Forklift/Buruh/dll"
                jasa6="Biaya Rekaman PIB"
                jasa7="Biaya Uitslag (1 s/d 5 Container)"
                jasa8="Biaya Uitslag (6 s/d 10 Container"
                jasa9="Biaya Uitslag (11 s/d seterusnya)"
                jasa10="Biaya Angkutan"
                jasa11="Biaya Operasional Dokumen"
                biaya1="750.000"
                biaya2="400.000"
                biaya3="650.000"
                biaya4="400.000"
                biaya5="650.000"
                biaya6="250.000"
                biaya7="350.000"
                biaya8="500.000"
                biaya9="750.000"
                biaya10="1.100.000"
                biaya11="350.000"
              />
              <MainPenawaranOrganism
                jenisContainer="40 Feet"
                jasa1="Jasa Inklaring"
                jasa2="Jasa Inklaring Container Berikutnya"
                jasa3="Kelancaran Behandel"
                jasa4="Kelancaran Behandel Container Berikutnya"
                jasa5="Biaya Forklift/Buruh/dll"
                jasa6="Biaya Rekaman PIB"
                jasa7="Biaya Uitslag (1 s/d 5 Container)"
                jasa8="Biaya Uitslag (6 s/d 10 Container"
                jasa9="Biaya Uitslag (11 s/d seterusnya)"
                jasa10="Biaya Angkutan"
                jasa11="Biaya Operasional Dokumen"
                biaya1="750.000"
                biaya2="500.000"
                biaya3="750.000"
                biaya4="500.000"
                biaya5="750.000"
                biaya6="250.000"
                biaya7="350.000"
                biaya8="500.000"
                biaya9="750.000"
                biaya10="2.200.000"
                biaya11="350.000"
              />
              <MainPenawaranOrganism
                jenisContainer="LCL (Less Container Load)"
                jasa1="Jasa Inklaring"
                jasa2="Jasa Inklaring Container Berikutnya"
                jasa3="Kelancaran Behandel"
                jasa4="Kelancaran Behandel Container Berikutnya"
                jasa5="Biaya Forklift/Buruh/dll"
                jasa6="Biaya Rekaman PIB"
                jasa7="Biaya Uitslag (1 s/d 5 Container)"
                jasa8="Biaya Uitslag (6 s/d 10 Container"
                jasa9="Biaya Uitslag (11 s/d seterusnya)"
                jasa10="Biaya Angkutan"
                jasa11="Biaya Operasional Dokumen"
                biaya1="750.000"
                biaya3="750.000"
                biaya5="750.000"
                biaya6="250.000"
                biaya7="750.000"
                biaya11="350.000"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Main Penawaran End */}

      {/* Pengajuan Start*/}
      <PengajuanTemplate
        titleEng={props.pengajuanTitleEng}
        titleInd={props.pengajuanTitleInd}
        subTitle={props.pengajuanSubTitle}
      />

      {/* Pengajuan End */}
    </>
  );
}

export default UserLoginPenawaranTemplate;

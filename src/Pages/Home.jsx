/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  HomeHeroTemplate,
  BlogHomeTemplate,
  TrustedHomeTemplate,
  SertificationTemplate,
  ExperienceTemplate,
} from "../Components/Templates";
import {
  ContohSertifikat,
} from "../Assets/Img";
import { TitleLightMolecules } from "../Components/Molecules";
import { gofData } from "../Data/GofData";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";


function Home({ data }) {
  const [getUrlBase] = useRecoilState(urlBase);
  const [dataClient, setDataClient] = useState([]);

  useEffect(() => {
    async function fetchDataClient() {
      const request = await axios
        .get(getUrlBase + "client")
        .then((res) => {
          // console.log(res.data.result)
          setDataClient(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }
    fetchDataClient();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <HomeHeroTemplate
        titleHero="PPJK"
        subTitle="Dalam Undang-undang No.17 Tahun 2006 tentang Kepabeanan (Indonesia) bahwa PPJK merupakan badan usaha yang melakukan kegiatan pengurusan kewajiban pabean untuk dan atas kuasa Importir atau Eksportir"
        btnTitle="Penawaran"
      />

      {/* COMPANY PROFILE SECTION */}
      <div className="md:pt-6 pt-16 pb-32 flex justify-center">
        <div className="container">
          <div className="w-full px-4">
            <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
              <TitleLightMolecules
                titleEng="Company Profile"
                titleInd="Tentang Perusahaan Kami"
              />
              <p className="font-base mt-10 text-secondary text-lg md:text-xl">
                Kami adalah perusahaan{" "}
                <span className="font-bold">PT Pegiska Berkat Abadi.</span>{" "}
                <br className="hidden md:inline-flex" />
                Didirikan pada tahun 1997, PT Pegiska Berkat Abadi merupakan
                perusahaan yang <br />
                bergerak di bidang kepabeanan. Dimana kami menangani pengurusan{" "}
                <br className="hidden md:inline-flex" />
                dokumen-dokumen mengenai kegiatan{" "}
                <span className="font-bold">ekspor dan impor.</span> <br />
                Dan menangani masuk dan keluarnya barang dari dalam dan luar
                negeri.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ATAS KEPERCAYAAN SECTION */}
      <TrustedHomeTemplate
        gofData={gofData}
        titleEng="Trusted By"
        titleInd="Atas Kepercayaan"
        subTitle="PT Pegiska Berkat Abadi bisa berjalan atas ijin dan kepercayaan dari pihak kepabeanan negara."
      />
      {/* Sertifikasi Usaha */}
      <SertificationTemplate
        titleEng="Sertification"
        titleInd="Sertifikat Usaha"
        imgSertification={ContohSertifikat}
        imgSertificationName="Sertifikat Pegiska Berkat Abadi"
      />
      {/* Exprience Work */}
      <ExperienceTemplate company={dataClient} />

      {/* Blog */}
      <BlogHomeTemplate
        data={data}
        titleEng="Blog"
        titleInd="Informasi Tentang Kepabeanan"
        subTitle="Dibawah ini terdapat informasi seputar kepabeanan yang perlu kamu ketahui."
      />
    </>
  );
}

export default Home;

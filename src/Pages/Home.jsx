import React from "react";
import {
  NavTemplate,
  HomeHeroTemplate,
  FooterTemplate,
  BlogHomeTemplate,
  TrustedHomeTemplate,
  SertificationTemplate,
  ExperienceTemplate,
} from "../Components/Templates";
import {
  ContohSertifikat,
  EkaMajuLogo,
  MobiusLogo,
  TristarLogo,
  KemenkeuLogo,
  AlfiLogo,
  PIB,
  PenjaluranBeaCukai,
  DO,
  Container,
} from "../Assets/Img";
import { TitleLightMolecules } from "../Components/Molecules";

const company = [
  {
    id: 1,
    name: "Eka Maju",
    img: EkaMajuLogo,
  },
  {
    id: 2,
    name: "Mobius",
    img: MobiusLogo,
  },
  {
    id: 3,
    name: "Tristar",
    img: TristarLogo,
  },
];

const data = [
  {
    id: 1,
    image: PIB,
    title: "Apa Itu PIB",
    subTitle:
      "Pemberitahuan Impor Barang atau PIB adalah dokumen pemberitahuan oleh importir kepada bea cukai atas barang impor, berdasarkan dokumen pelengkap pabean sesuai dengan prinsip self-assessment. ",
  },
  {
    id: 2,
    image: PenjaluranBeaCukai,
    title: "Penjaluran Bea Cukai",
    subTitle:
      "Proses pengawasan yang dilakukan petugas Bea Cukai dalam pelayanan kegiatan impor agar tidak ada pelanggaran yang dilakukan pihak yang tidak bertanggung jawab.",
  },
  {
    id: 3,
    image: DO,
    title: "Apa Itu DO?",
    subTitle:
      "DO merupakan surat bukti penyerahan barang yang dikeluarkan perusahaan pelayaran/angkutan laut atau kuasanya kepada pengirim barang. Sementara, surat penyerahan peti kemas (SP2) merupakan dokumen untuk mengeluarkan peti kemas dari dalam pelabuhan.",
  },
  {
    id: 4,
    image: Container,
    title: "Jenis-jenis Container",
    subTitle:
      "Dalam kegiatan Ekspor impor, container atau peti kemas merupakan hal yang tak bisa terpisahkan. jenis Container sendiri sangat beragam. Keberagaman jenis Container ini untuk memenuhi kebutuhan barang yang membutuhkan penanganan yang berbeda dalam proses pengirimannya.",
  },
];

const links = [
  { name: "Beranda", link: "/" },
  { name: "Penawaran", link: "/penawaran" },
  { name: "Blog", link: "/blog" },
  { name: "Tentang Kami", link: "/about" },
];

const gofData = [
  {
    id: 1,
    ref: "https://www.beacukai.go.id/",
    src: KemenkeuLogo,
    name: "Logo Kemenkeu",
  },
  {
    id: 2,
    ref: "https://www.ilfa.or.id/",
    src: AlfiLogo,
    name: "Logo Alfi Ilfa",
  },
];

function Home() {
  return (
    <>
      <NavTemplate links={links} />

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
      <ExperienceTemplate company={company} />

      {/* Blog */}
      <BlogHomeTemplate
        data={data}
        titleEng="Blog"
        titleInd="Informasi Tentang Kepabeanan"
        subTitle="Dibawah ini terdapat informasi seputar kepabeanan yang perlu kamu ketahui."
      />


      {/* Footer */}
      <FooterTemplate links={links} />
    </>
  );
}

export default Home;

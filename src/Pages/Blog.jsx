import React from "react";
import { Container, ContohGambar, DO, PenjaluranBeaCukai, PIB } from "../Assets/Img";
import { BlogTemplate, NavTemplate } from "../Components/Templates";

const links = [
  { name: "Beranda", link: "/" },
  { name: "Penawaran", link: "/penawaran" },
  { name: "Blog", link: "/blog" },
  { name: "Tentang Kami", link: "/about" },
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
  {
    id: 5,
    image: ContohGambar,
    title: "Contoh Title",
    subTitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, vel, modi perferendis alias suscipit recusandae praesentium dicta quos ratione hic labore? Id, error hic quis aspernatur deleniti mollitia quae accusamus!",
  },
  {
    id: 6,
    image: ContohGambar,
    title: "Contoh Title",
    subTitle:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, vel, modi perferendis alias suscipit recusandae praesentium dicta quos ratione hic labore? Id, error hic quis aspernatur deleniti mollitia quae accusamus!",
  },
];

function Blog() {
  return (
    <>
      <NavTemplate links={links} />
      <div className="mt-20">
        <BlogTemplate
          data={data}
          titleEng="Blog"
          titleInd="Informasi Tentang Kepabeanan"
          subTitle="Dibawah ini terdapat informasi seputar kepabeanan yang perlu kamu ketahui."
        />
      </div>

      {/* <FooterTemplate links={links} /> */}
    </>
  );
}

export default Blog;

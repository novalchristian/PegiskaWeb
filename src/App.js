import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Container,
  ContohGambar,
  DO,
  PenjaluranBeaCukai,
  PIB,
} from "./Assets/Img";
import {
  HomePage,
  PenawaranPage,
  BlogPage,
  AboutPage,
  LoginPage,
  BlogDetailPage,
} from "./Pages";
import NavbarLayout from "./Layout/NavbarLayout";

function App() {
  const data = [
    {
      id: 1,
      image: PIB,
      title: "Apa Itu PIB",
      subTitle:
        "Pemberitahuan Impor Barang atau PIB adalah dokumen pemberitahuan oleh importir kepada bea cukai atas barang impor, berdasarkan dokumen pelengkap pabean sesuai dengan prinsip self-assessment. Apakah itu prinsip self-assessment? Prinsip ini merupakan prinsip yang mewajibkan tiap wajib pajak untuk menghitung, membayar, dan melaporkan pajak sesuai dengan ketentuan perundang-undangan. Dalam prinsip self-assessment wajib pajak memiliki tanggung jawab dalam pemenuhan kewajiban perpajakannya tiap bulan dengan Surat Pemberitahuan (SPT) Masa PPN. Peningkatan nilai dari penerimaan Pajak Pertambahan Nilai akan diikuti dengan peningkatan nilai self-assessment system dan penurunan nilai penerimaan Pajak Pertambahan Nilai yang diikuti pula dengan penurunan nilai self-assessment system. Dengan penrapan ini, diharapkan wajib pajak akan terdorong untuk dapat mempercayai mekanisme perpajakan di DJP, sehingga pemenuhan kewajiban perpajakan dapat dilakukan dengan baik oleh wajib pajak baik dalam hal menghitung, menyetor, ataupun melaporkan pajak teutang dan mempertanggungjawabkannya dalam SPT. Terdapat beberapa dokumen yang termasuk dalam dokumen pelengkap Pemberitahuan Impor Barang atau PIB di antaranya ialah invoice, bill of lading/airway bill asuransi, dan packing list. Pemberitahuan Impor Barang ini umumnya digunakan oleh perorangan ataupun perusahaan yaitu Wajib Pajak Badan. Pemberitahuan Impor Barang ini memuat rincian atas jumlah pajak, barang impor, dan bea masuk yang harus dibayar oleh importir kepada bea cukai.",
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
      title: "Apa Itu Delivery Order",
      subTitle:
        "DO  adalah  dokumen  yang  memiliki  oleh  penerima,  pengirim  atau  pemilik dari  perusahaan  sarana  pengangkut  yang  berisi  perintah  untuk  menyerahkan barang-barang   yang   diangkut   kepada   pihak   lain   atau   yang   tertera   dalam 17dokumen    tersebut.    D/O    dapat    diterimakan    dengan    menunjukan    atau menyerahkan bill  of  lading. Peraturan  yang  mengatur  mengenai  D/O  secara internasional   adalah   UCC   (Uniform   Commercial   Code).   Apa   yang   perlu diperhatikan  importir  atas  D/O,  yaitu  tanggal  dan  masa  berlakunya.  Hal  ini menunjukan bahwa jika waktu pengurusan barang melewati masa berlaku yang telah  ditentukan,  atau  dikenakan  sewa  gudang  ditambah  dengan  denda  yang dihitung harian.",
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
  return (
    <Routes>
      <Route path="/login" exact element={<LoginPage />} />
      <Route element={<NavbarLayout />}>
        <Route
          element={<BlogDetailPage data={data} />}
          path="/blog/:title"
          data={data}
        />
        <Route element={<HomePage data={data} />} path="/" exact />
        <Route element={<PenawaranPage />} path="/penawaran" />
        <Route element={<BlogPage data={data} />} path="/blog" />
        <Route element={<AboutPage />} path="/about" />
      </Route>
    </Routes>
  );
}

export default App;

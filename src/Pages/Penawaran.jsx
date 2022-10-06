import React, { useState, useEffect } from "react";
import {
  AdminPenawaranTemplate,
  UserLoginPenawaranTemplate,
  UserNotLoginPenawaranTemplate,
} from "../Components/Templates";
import {PenawaranNotLogin} from '../Data/PenawaranNotLogin'
import axios from 'axios';

const DataIsi = [
  {
    key: 1,
    namaJasa: "Jasa Inklaring",
    firstTwenty: 750000,
    secondFourty: 750000,
    lcl: 750000,
  },
  {
    key: 2,
    namaJasa: "Kelancaran Behandel",
    firstTwenty: 650000,
    secondFourty: 750000,
    lcl: 500000,
  },
  {
    key: 3,
    namaJasa: "Biaya Forklift/Buruh/dll",
    firstTwenty: 650000,
    secondFourty: 750000,
    lcl: 500000,
  },
  {
    key: 4,
    namaJasa: "Biaya Rekaman PIB",
    firstTwenty: 250000,
    secondFourty: 250000,
    lcl: 250000,
  },
  {
    key: 5,
    namaJasa: "Biaya Uitslag",
    firstTwenty: 350000,
    secondFourty: 350000,
    lcl: 750000,
  },
  {
    key: 6,
    namaJasa: "Biaya Operasional Dokumen",
    firstTwenty: 350000,
    secondFourty: 350000,
    lcl: 350000,
  },
];



function Penawaran() {
  // eslint-disable-next-line no-unused-vars
  const [jasa, setJasa] = useState([])
  const [isAdmin] = useState(false);
  const [isLogin] = useState(true);

  useEffect(() => {
    getJasa();
  },[])

  const getJasa = async () => {
    const response = await axios.get('http://localhost:5000/jasa')
    setJasa(response.data)
  }

  return (
    <>
      {isAdmin ? (
        <AdminPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
          data={DataIsi}
        />
      ) : isLogin ? (
        <UserLoginPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
          penawaranSubTitle="Berikut merupakan jasa yang kami berikan beserta harga yang telah sesuai dengan kebijakan perusahaan kami."
          data={DataIsi}
          login={isLogin}
        />
      ) : (
        <UserNotLoginPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
          penawaranSubTitle="Keterangan : Anda harus login terlebih dahulu jika ingin melihat daftar harga!!!"
          pengajuanTitleEng="Contact"
          pengajuanTitleInd="Hubungi Kami"
          pengajuanSubTitle="Jika anda ingin menggunakan jasa kami, hubungi kami dengan mengisi informasi yang ada dibawah ini."
          data={PenawaranNotLogin}
          login={isLogin}
        />
      )}
    </>
  );
}

export default Penawaran;

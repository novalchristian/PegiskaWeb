import React, { useState, useEffect } from "react";
import {
  AdminPenawaranTemplate,
  UserLoginPenawaranTemplate,
  UserNotLoginPenawaranTemplate,
} from "../Components/Templates";
import { PenawaranNotLogin } from "../Data/PenawaranNotLogin";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";

function Penawaran() {
  const [getUrlBase] = useRecoilState(urlBase);
  const [dataJasa, setDataJasa] = useState([]);

  useEffect(() => {
    async function fetchDataBlog() {
      const request = await axios
        .get(getUrlBase + "jasa", {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            session: localStorage.getItem("session"),
          },
        })
        .then((res) => {
          // console.log(res.data.result)
          setDataJasa(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }
    fetchDataBlog();
  }, [getUrlBase]);

  // const [jasa, setJasa] = useState([])
  const [isAdmin] = useState(false);

  // useEffect(() => {
  //   getJasa();
  // },[])

  // const getJasa = async () => {
  //   const response = await axios.get('http://localhost:5000/jasa')
  //   setJasa(response.data)
  // }

  return (
    <>
      {isAdmin ? (
        <AdminPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
          data={dataJasa}
        />
      ) : localStorage.getItem("session") !== null ? (
        <UserLoginPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
          penawaranSubTitle="Berikut merupakan jasa yang kami berikan beserta harga yang telah sesuai dengan kebijakan perusahaan kami."
          data={dataJasa}
          // login={isLogin}
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
          // login={isLogin}
        />
      )}
    </>
  );
}

export default Penawaran;

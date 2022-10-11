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
  const data = JSON.parse(localStorage.getItem("dataPengguna"));
  // const [isAdmin] = useState();

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

  return (
    <>
      {data !== null ? (
        data.id_user === 1 ? (
          <AdminPenawaranTemplate
            penawaranTitleEng="Offer"
            penawaranTitleInd="Penawaran Jasa Perusahaan"
            data={dataJasa}
          />
        ) : (
          <UserLoginPenawaranTemplate
            penawaranTitleEng="Offer"
            penawaranTitleInd="Penawaran Jasa Perusahaan"
            penawaranSubTitle="Berikut merupakan jasa yang kami berikan beserta harga yang telah sesuai dengan kebijakan perusahaan kami."
            data={dataJasa}
          />
        )
      ) : (
        <UserNotLoginPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
          penawaranSubTitle="!!! Anda harus login terlebih dahulu jika ingin melihat daftar harga!!!"
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

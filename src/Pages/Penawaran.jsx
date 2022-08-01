import React, { useState } from "react";
import {
  AdminPenawaranTemplate,
  UserLoginPenawaranTemplate,
  UserNotLoginPenawaranTemplate,
} from "../Components/Templates";

function Penawaran() {
  const [isAdmin] = useState(false);
  const [isLogin] = useState(true);

  return (
    <>
      {isAdmin ? (<AdminPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
          penawaranSubTitle="Keterangan : Login jika ingin melihat harga dari setiap jasa"
          pengajuanTitleEng="Contact"
        />) : isLogin ? (
        <UserLoginPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
          penawaranSubTitle="Keterangan : Login jika ingin melihat harga dari setiap jasa"
          pengajuanTitleEng="Contact"
          pengajuanTitleInd="Hubungi Kami"
          pengajuanSubTitle="Jika anda ingin menggunakan jasa kami, hubungi kami dengan mengisi informasi yang ada dibawah ini."
        />
      ) : (
        <UserNotLoginPenawaranTemplate
          penawaranTitleEng="Offer"
          penawaranTitleInd="Penawaran Jasa Perusahaan"
        />
      )}
      
    </>
  );
}

export default Penawaran;

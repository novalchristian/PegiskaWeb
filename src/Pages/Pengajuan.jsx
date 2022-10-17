import React from "react";
import {
  AdminPengajuanTemplate,
  PengajuanTemplate,
  UserNotLoginPengajuan,
} from "../Components/Templates";

function Pengajuan() {
  const data = JSON.parse(localStorage.getItem("dataPengguna"));
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {data !== null ? (
        data.id_user === 1 ? (
          <AdminPengajuanTemplate />
        ) : (
          <PengajuanTemplate
            titleEng="Order"
            titleInd="Buat Pesanan Jasa"
            subTitle="Jika anda berminat menggunakan jasa kami, silahkan mengisi informasi yang ada dibawah ini."
          />
        )
      ) : (
        <UserNotLoginPengajuan />
      )}
    </>
  );
}

export default Pengajuan;

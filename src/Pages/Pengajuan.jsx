/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { AdminPengajuanTemplate, PengajuanTemplate } from '../Components/Templates';
import {DummyPesanan} from '../Data/DummyPesanan'

function Pengajuan() {
    const [isUser, setIsUser] = useState(false)
    const [isAdmin, setIsAdmin] = useState(true)
  return (
    <>
        {isUser && <PengajuanTemplate
        titleEng="Order"
        titleInd="Buat Pesanan Jasa"
        subTitle="Jika anda berminat menggunakan jasa kami, silahkan mengisi informasi yang ada dibawah ini."
        login={true}
        />}
        {isAdmin && <AdminPengajuanTemplate data={DummyPesanan} />}
    </>
  );
}

export default Pengajuan
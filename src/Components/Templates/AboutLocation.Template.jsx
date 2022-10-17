import React from 'react'
import { Maps } from '../../Assets/Img';
import { TitleLightMolecules } from '../Molecules';

export default function AboutLocationTemplate() {
  return (
    <div className="md:pt-16 pt-10 pb-32 flex justify-center bg-white">
      <div className="container">
        <div className="w-full px-4">
          <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
            <TitleLightMolecules
              titleEng="Location"
              titleInd="Lokasi Kami"
              subTitle="Untuk mendapatkan info lebih mendalam sebagai pengguna jasa, anda bisa mengunjungi kantor PT Pegiska Berkat Abadi di alamat di bawah ini."
            />
            <div className="flex flex-wrap-reverse items-center justify-center pt-8 mt-4 md:mt-0 max-w-[62rem] h-[50vh]">
              <div className="w-full lg:w-1/2 mx-10 md:mx-0 ">
                <h2 className="text-center md:text-left md:text-[1.5rem] md:w-[400px] w-[350px] mt-6 md:mt-0 text-red-700">
                  Jl. Swasembada Barat XXIII No 41A, RW 14, Kb, Bawang,
                  Kecamatan, Tj Priok, Kota Jakarta Utara, Daerah Khusus Ibukota
                  Jakarta 14320
                </h2>
              </div>
              <div className="lg:w-1/2 flex justify-center md:justify-end items-center">
                <div className=" md:mt-4 bg-teal-100 w-3/4 md:w-4/6 border-2 hover:-translate-y-1 hover:scale-110 duration-300 shadow-Three">
                  <a
                    href="https://maps.app.goo.gl/rC7DbnPagi8e45rU6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Maps} alt={"Maps"} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import { PegiskaLogoWhite } from '../../Assets/Img';
import {Link} from 'react-router-dom'

function FooterTemplate() {
    let Links = [
      { name: "Beranda", link: "/" },
      { name: "Penawaran", link: "/penawaran" },
      { name: "Blog", link: "/blog" },
      { name: "Tentang Kami", link: "/AboutUs" },
    ];
  return (
    <div className="bg-dark pt-12 pb-10 flex justify-center">
      <div className="container max-w-6xl ">
        <div className="flex flex-wrap w-full justify-center ">
          <div className="lg:w-1/2 pl-4 md:pl-0">
            <div className="w-2/3">
              <img src={PegiskaLogoWhite} alt="Logo Pegiska Putih" />
            </div>
            <p className=" text-white pl-2 pt-8 font-light">
              Jl. Swasembada Barat XXIII No 41A, RW 14, Kb, Bawang,
              Kec, Tj Priok, Kota Jat Utara, Daerah Khusus Ibukota <br />{" "}
              Jakarta 14320.
            </p>
          </div>

          <div className="w-full lg:w-1/2 flex justify-start flex-col md:pl-16 pl-6 pt-16 md:pt-6">
            <h4 className="text-white font-bold">Tautan</h4>
            <div className="pt-4 flex flex-col">
              {Links.map((link) => (
                <Link
                  to={link.link}
                  className="text-white mb-3 hover:text-gray-400 duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <h4 className="text-white md:pl-4 pl-6 pt-16 font-medium text-left w-full md:text-base text-[13px]">
            copyright © 2022 PT Pegiska Berkat Abadi
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FooterTemplate
import React from 'react'
import { AboutBackground } from '../../Assets/Img';
import { TitleHeroAtom } from '../Atoms';

export default function AboutHeroTemplate() {
  return (
    <div className="pt-16 flex justify-center z-1">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="pt-8 md:pt-0 ml-5 md:ml-0 w-full self-center px-4 lg:w-1/4 lg:pr-[75px] lg:pl-[100px]">
            <TitleHeroAtom>Tentang Kami</TitleHeroAtom>
            <p className="md:text-xl text-base text-secondary pt-3 md:w-[500px] w-[350px]">
              PT Pegiska Berkat Abadi sudah lebih dari 24 tahun menjadi tujuan
              utama bagi para importer maupun eksporter dalam mengirim dan
              mengantarkan barang dengan aman ke daerah asal mereka.
            </p>
          </div>
          <div className="w-full self-end lg:w-3/4">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img
                src={AboutBackground}
                alt="Home Background"
                className="md:pt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

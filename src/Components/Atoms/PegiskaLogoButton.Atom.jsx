import React from 'react'
import { Link } from 'react-router-dom';
import { PegiskaLogoWhite } from '../../Assets/Img';


export default function PegiskaLogoButtonAtom() {
  return (
    <Link to="/">
      <button>
        <img
          src={PegiskaLogoWhite}
          alt="Logo Pegiska Putih"
          className="absolute md:w-[300px] w-[350px] md:left-20 md:top-10 left-10 top-10"
        />
      </button>
    </Link>
  );
}

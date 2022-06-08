import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonAtom } from "../Atoms";

const Nav = () => {
  let Links = [
    { name: "Beranda", link: "/" },
    { name: "Penawaran", link: "/penawaran" },
    { name: "Blog", link: "/blog" },
    { name: "Tentang Kami", link: "/AboutUs" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-sans 
        text-gray-800"
        >
          <span className="text-3xl text-sky-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-sm md:my-0 my-5">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 font-mono"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <ButtonAtom>Login | Sign Up</ButtonAtom>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

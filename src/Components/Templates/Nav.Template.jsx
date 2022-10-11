import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PegiskaLogo } from "../../Assets/Img";
import { ButtonAtom } from "../Atoms";
import { LogOutModalTemplate } from ".";

const links = [
  { id: 1, name: "Beranda", link: "/" },
  { id: 2, name: "Penawaran", link: "/penawaran" },
  { id: 3, name: "Pengajuan", link: "/pengajuan" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Tentang Kami", link: "/about" },
];

function NavTemplate(props) {
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const data = JSON.parse(localStorage.getItem("dataPengguna"));

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-3 md:px-20 px-7 ">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-sans 
        text-gray-800"
        >
          <Link to="/">
            <img
              src={PegiskaLogo}
              alt="Pegiska Logo"
              className="md:w-[250px] w-[200px]"
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 shadow-md md:shadow-none" : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.id} className="md:mr-8 text-sm md:my-0 my-5">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 text-tiny"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {localStorage.getItem("session") !== null ? (
            <button
              className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <span className="absolute right-0 w-3 h-15 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative md:text-xs text-[8px]">
                {"Halo, " + data.nama}
              </span>
            </button>
          ) : (
            <ButtonAtom title="Login | Sign Up" to={"/login"} />
          )}
          {openModal && (
            <LogOutModalTemplate
              closeModal={setOpenModal}
              title="Apakah kamu yakin ingin keluar?"
              buttonOne="Ya, saya yakin"
              buttonTwo="Tidak, belum"
            />
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavTemplate;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PegiskaLogo } from "../../Assets/Img";
import { ButtonAtom } from "../Atoms";

function NavTemplate(props) {
  const [open, setOpen] = useState(false);
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
          {props.links.map((link) => (
            <li key={link.name} className="md:mr-8 text-sm md:my-0 my-5">
              <Link
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 text-tiny"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link to="login">
            <ButtonAtom>Login | Sign Up</ButtonAtom>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavTemplate;

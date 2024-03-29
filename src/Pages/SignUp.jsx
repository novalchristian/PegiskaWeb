import React, { useState } from "react";
import { CorrectModals } from "../Components/Templates";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";
import { signUpForm } from "../Data/SignUpForm";
import { PegiskaLogoButtonAtom, SubTitleButtonAtom } from "../Components/Atoms";

function SignUp() {
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [getUrlBase] = useRecoilState(urlBase);
  const [newUser, setNewUser] = useState({
    nama: "",
    email: "",
    password: "",
    noTelp: "",
  });

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  async function authUser() {
    if (
      newUser.email &&
      newUser.password &&
      newUser.nama &&
      newUser.noTelp !== ""
    ) {
      const newData = new URLSearchParams();
      newData.append("nama", newUser.nama);
      newData.append("email", newUser.email);
      newData.append("password", newUser.password);
      newData.append("no_telp", newUser.noTelp);
      const request = await axios
        .post(getUrlBase + "user", newData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          // console.log(res);
          setOpenModal(true);
        })
        .catch((er) => {
          // console.log("Error: ", er.response.data);
          console.log(er.response);
        });
      return request;
    } else {
      setError(
        "Data yang anda masukkan ada yang kosong atau ada yang salah !!!"
      );
    }
  }

  return (
    <div className="bg-login-cover bg-cover relative">
      <div className="w-screen h-screen flex justify-center items-center mx-auto">
        <PegiskaLogoButtonAtom />
        <div className="bg-white md:w-[450px] md:h-[620px] w-[350px] rounded-xl md:p-10 p-6 mt-4">
          <h1 className="md:text-2xl text-xl uppercase font-bold">Sign Up</h1>
          <div className="md:mt-10 mt-6">
            {signUpForm.map((data) => (
              <label className="block pb-3 " key={data.id}>
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  {data.title}
                </span>
                <input
                  type={data.type}
                  name={data.name}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder={data.placeholder}
                  onClick={() => {
                    setError("");
                  }}
                  onChange={(e) => {
                    setNewUser({
                      ...newUser,
                      [data.name]: e.target.value,
                    });
                  }}
                />
              </label>
            ))}
          </div>
          <p className="text-red-500">{error}</p>
          <div className="flex flex-col mt-4">
            <button
              className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300"
              onClick={() => {
                authUser();
              }}
            >
              <span className="absolute right-0 w-3 h-15 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative md:text-[18px] text-md">Submit</span>
            </button>
            {openModal && (
              <CorrectModals
                closeModal={setOpenModal}
                title={"Selamat kamu berhasil mendaftar, waktunya login ya"}
                buttonOne={"Baiklah"}
                to={"/login"}
              />
            )}
            <SubTitleButtonAtom
              title="Already a user? "
              to="/login"
              button="SIGN IN"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

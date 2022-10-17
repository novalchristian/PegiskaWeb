import React, { useState } from "react";
import { CorrectModals } from "../Components/Templates";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";
import { PegiskaLogoButtonAtom, SubTitleButtonAtom } from "../Components/Atoms";

function Login() {
  const [getUrlBase] = useRecoilState(urlBase);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState("");
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  async function fetchDataAccount(id_user) {
    const request = await axios
      .get(getUrlBase + "user/" + id_user, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          session: localStorage.getItem("session"),
        },
      })
      .then((res) => {
        const dataPengguna = {
          id_user: res.data.result.id_user,
          nama: res.data.result.nama,
        };
        localStorage.setItem("dataPengguna", JSON.stringify(dataPengguna));
        // console.log(dataPengguna);
        setOpenModal(true);
      });
    return request;
  }

  async function authUser() {
    const newData = new URLSearchParams();
    newData.append("email", credential.email);
    newData.append("password", credential.password);
    const request = await axios
      .post(getUrlBase + "auth", newData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        localStorage.setItem("session", res.data.session);
        fetchDataAccount(res.data.id_user);
      })
      .catch((er) => {
        setError(er.response.data);
      });
    return request;
  }

  const data = JSON.parse(localStorage.getItem("dataPengguna"));

  return (
    <div className="bg-login-cover bg-cover relative">
      <div className="w-screen h-screen flex justify-center items-center">
        <PegiskaLogoButtonAtom />
        <div className="bg-white md:w-[450px] md:h-[450px] w-[350px] rounded-xl mt-20 md:p-10 p-6">
          <h1 className="md:text-2xl text-xl uppercase font-bold">Login</h1>
          <div className="md:mt-10 mt-6">
            {/* Email */}
            <label className="block pb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="you@example.com"
                onClick={() => {
                  setError("");
                }}
                onChange={(e) => {
                  setCredential({
                    ...credential,
                    email: e.target.value,
                  });
                }}
              />
            </label>

            {/* Password */}
            <label className="block pb-4">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="*******"
                onClick={() => {
                  setError("");
                }}
                onChange={(e) => {
                  setCredential({
                    ...credential,
                    password: e.target.value,
                  });
                }}
              />
            </label>
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
              <span className="relative md:text-[18px] text-md">Login</span>
            </button>
            {openModal && (
              <CorrectModals
                closeModal={setOpenModal}
                title={`Selamat datang ${data.nama}:) \n\n di PT Pegiska Berkat Abadi`}
                buttonOne={"Mulai Menjelajah"}
                to={"/"}
              />
            )}
          </div>
          <SubTitleButtonAtom
            title="Need an account? "
            to="/SignUp"
            button="SIGN UP"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;

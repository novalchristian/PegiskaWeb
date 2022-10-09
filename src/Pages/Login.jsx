import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PegiskaLogoWhite } from "../Assets/Img";
import { CorrectModals } from "../Components/Templates";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";

function Login() {
  const [getUrlBase] = useRecoilState(urlBase);
  const [openModal, setOpenModal] = useState(false);
  const [credential, setCredential] = useState({
    email: "",
    password: "",
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
          id_user: res.data.id_user,
          nama: res.data.result.nama,
        };
        localStorage.setItem("dataPengguna", JSON.stringify(dataPengguna));
        // console.log(res);
        setOpenModal(true);
      });
    return request;
  }

  async function authUser() {
    if (credential.email && credential.password !== "") {
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
          console.log(res.data);
          // alert("Login Berhasil");
          fetchDataAccount(res.data.id_user);
        })
        .catch((er) => {
          // console.log("Error: ", er.response.data);
          console.log(er);
        });
      return request;
    }
  }

  const data = JSON.parse(localStorage.getItem("dataPengguna"));

  const history = useNavigate();
  function toHome(e) {
    e.preventDefault();

    history("/");
  }
  function toSignUp(e) {
    e.preventDefault();

    history("/SignUp");
  }

  const input = [
    {
      title: "Email",
      placeholder: "you@example.com",
      type: "email",
      name: "email",
    },
    {
      title: "Password",
      placeholder: "*******",
      type: "password",
      name: "password",
    },
  ];

  return (
    <div className="bg-login-cover bg-cover relative">
      <div className="w-screen h-screen flex justify-center items-center">
        <button onClick={toHome}>
          <img
            src={PegiskaLogoWhite}
            alt="Logo Pegiska Putih"
            className="absolute md:w-[300px] w-[200px] md:left-20 md:top-10 left-10 top-10"
          />
        </button>
        <div className="bg-white w-[450px] h-[500px] rounded-xl mt-20 p-10">
          <h1 className="text-2xl uppercase font-bold">Login</h1>
          <div className="mt-10">
            {input.map((data) => (
              <label className="block pb-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  {data.title}
                </span>
                <input
                  type={data.type}
                  name={data.name}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder={data.placeholder}
                  onChange={(e) => {
                    setCredential({
                      ...credential,
                      [data.name]: e.target.value,
                    });
                  }}
                />
              </label>
            ))}
          </div>
          <div className="flex flex-col mt-4">
            <button
              className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300"
              onClick={() => {
                authUser();
                // setOpenModal(true);
                // console.log(credential);
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
          <p className="text-center mt-4 text-grayText">
            Need an account?{" "}
            <button className="hover:underline" onClick={toSignUp}>
              SIGN UP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

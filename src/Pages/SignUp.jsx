import React from "react";
import { useNavigate } from "react-router-dom";
import { PegiskaLogoWhite } from "../Assets/Img";

function SignUp() {
  const history = useNavigate();
  function toHome(e) {
    e.preventDefault();

    history("/");
  }
  function toLogin(e) {
    e.preventDefault();

    history("/login");
  }

  const input = [
    {
      title: "Nama Lengkap",
      placeholder: "John Doe",
      type: "text",
      name: "",
    },
    {
      title: "Email",
      placeholder: "you@example.com",
      type: "email",
      name: "email",
    },
    {
      title: "No Telepon",
      placeholder: "08xx xxxx xxxx",
      type: "text",
      name: "telepon",
    },
    {
      title: "Password",
      placeholder: "******",
      type: "password",
      name: "password",
    },
    {
      title: "Confirm Password",
      placeholder: "******",
      type: "password",
      name: "confirm password",
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
        <div className="bg-white w-[450px] h-[650px] rounded-xl p-10 mt-4">
          <h1 className="text-2xl uppercase font-bold">Sign Up</h1>
          <div className="mt-10">
            {input.map((data) => (
              <label className="block pb-3 ">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 text-left">
                  {data.title}
                </span>
                <input
                  type={data.type}
                  name={data.name}
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                  placeholder={data.placeholder}
                />
              </label>
            ))}
          </div>
          <div className="flex flex-col mt-4">
            <button
              className="relative rounded-full px-3 md:py-1.5 py-[3px] overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 transition-all ease-out duration-300"
              onClick={toLogin}
            >
              <span className="absolute right-0 w-3 h-15 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative md:text-[18px] text-md">Login</span>
            </button>
            <p className="text-center mt-4 text-grayText">
              Already a user?{" "}
              <button className="hover:underline" onClick={toLogin}>
                LOGIN
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

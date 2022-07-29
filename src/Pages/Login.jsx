import React from "react";
import { useNavigate } from "react-router-dom";
import { LoginCover, PegiskaLogoWhite } from "../Assets/Img";

function Login() {
  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    history("/");
  }
  return (
    <div>
      <img src={LoginCover} alt="" className="w-screen h-screen absolute" />
      <button onClick={handleSubmit}>
        <img
          src={PegiskaLogoWhite}
          alt="Logo Pegiska Putih"
          className="relative w-[300px] left-20 top-10"
        />
      </button>
    </div>
  );
}

export default Login;

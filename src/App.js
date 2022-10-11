import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  PenawaranPage,
  BlogPage,
  AboutPage,
  LoginPage,
  BlogDetailPage,
  SignUpPage,
  PengajuanPage,
  AdminAddBlog,
  AdminDetailPengajuan,
} from "./Pages";
import NavbarLayout from "./Layout/NavbarLayout";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "./store";

function App() {
  const [getUrlBase] = useRecoilState(urlBase);
  const [dataBlog, setDataBlog] = useState([]);

  useEffect(() => {
    async function fetchDataBlog() {
      const request = await axios
        .get(getUrlBase + "blog")
        .then((res) => {
          // console.log(res.data.result)
          setDataBlog(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }
    fetchDataBlog();
  }, [getUrlBase]);

  return (
    <Routes>
      <Route path="/login" exact element={<LoginPage />} />
      <Route path="/SignUp" exact element={<SignUpPage />} />
      <Route element={<NavbarLayout />}>
        <Route element={<HomePage data={dataBlog} />} path="/" exact />
        <Route element={<PenawaranPage />} path="/penawaran" />
        <Route element={<PengajuanPage />} path="/pengajuan" />
        <Route element={<AdminDetailPengajuan />} path="/detail-pesanan/:id" />
        <Route element={<BlogPage data={dataBlog} />} path="/blog" />
        <Route element={<BlogDetailPage />} path="/detail-blog/:id" />
        <Route element={<AboutPage />} path="/about" />

        <Route path="/AddBlog" exact element={<AdminAddBlog />} />
      </Route>
    </Routes>
  );
}

export default App;

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
  AdminEditBlog,
  AdminAddJasa,
  AdminEditJasa,
  AdminAddClient,
  AdminAddStakeholder,
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
        {/* Home */}
        <Route element={<HomePage data={dataBlog} />} path="/" exact />
        {/* Penawaran */}
        <Route element={<PenawaranPage />} path="/penawaran" />
        <Route element={<AdminAddJasa />} path="/penawaran/add-jasa" />
        <Route element={<AdminEditJasa />} path="/penawaran/edit-jasa/:id" />
        {/* Pengajuan */}
        <Route element={<PengajuanPage />} path="/pengajuan" />
        <Route element={<AdminDetailPengajuan />} path="/detail-pesanan/:id" />
        {/* Blog */}
        <Route element={<BlogPage data={dataBlog} />} path="/blog" />
        <Route element={<BlogDetailPage />} path="/blog/detail-blog/:id" />
        <Route element={<AdminEditBlog />} path="/blog/edit-blog/:id" />
        <Route element={<AdminAddBlog />} path="/blog/AddBlog" exact />
        {/* About */}
        <Route element={<AboutPage />} path="/about" />
        <Route element={<AdminAddClient/>} path="/about/AddClient" />
        <Route element={<AdminAddStakeholder/>} path="/about/AddStakeholder" />
        {/* Wrong URL */}
        {/* <Route path="*" element={<HomePage data={dataBlog} />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

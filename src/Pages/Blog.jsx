import React from "react";
import { NavTemplate } from "../Components/Templates";

const links = [
  { name: "Beranda", link: "/" },
  { name: "Penawaran", link: "/penawaran" },
  { name: "Blog", link: "/blog" },
  { name: "Tentang Kami", link: "/about" },
];

function Blog() {
  return (
    <>
      <NavTemplate links={links} />




      {/* <FooterTemplate links={links} /> */}
    </>
  );
}

export default Blog;

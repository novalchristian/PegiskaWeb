import React from "react";
import { BlogTemplate } from "../Components/Templates";


function Blog({data}) {
  return (
    <>
      <div className="mt-20">
        <BlogTemplate
          data={ data }
          titleEng="Blog"
          titleInd="Informasi Tentang Kepabeanan"
          subTitle="Dibawah ini terdapat informasi seputar kepabeanan yang perlu kamu ketahui."
        />
      </div>
    </>
  );
}

export default Blog;

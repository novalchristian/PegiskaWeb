/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BlogTemplate, AdminBlogTemplate } from "../Components/Templates";

function Blog({data}) {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
      <div className="mt-20">
        {isAdmin ? (
          <AdminBlogTemplate
            data={data}
            titleEng="Blog"
            titleInd="Informasi Tentang Kepabeanan"
            subTitle="Dibawah ini terdapat informasi seputar kepabeanan yang perlu kamu ketahui."
          />
        ) : (
          <BlogTemplate
            data={data}
            titleEng="Blog"
            titleInd="Informasi Tentang Kepabeanan"
            subTitle="Dibawah ini terdapat informasi seputar kepabeanan yang perlu kamu ketahui."
          />
        )}
      </div>
    </>
  );
}

export default Blog;

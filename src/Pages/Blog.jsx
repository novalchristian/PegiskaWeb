/* eslint-disable no-unused-vars */
import React from "react";
import { BlogTemplate, AdminBlogTemplate } from "../Components/Templates";

function Blog({ data }) {
  const dataAdmin = JSON.parse(localStorage.getItem("dataPengguna"));
  const [isAdmin, setIsAdmin] = React.useState(false);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="mt-20">
        {dataAdmin !== null ? (
          dataAdmin.id_user === 1 ? (
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
          )
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

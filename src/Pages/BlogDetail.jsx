import React from "react";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DetailBlogTemplate } from "../Components/Templates";

function BlogDetail() {
  const { id } = useParams();
  const [getUrlBase] = useRecoilState(urlBase);
  const [dataBlog, setDataBlog] = React.useState([]);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  React.useEffect(() => {
    async function fetchDataBlogById() {
      const request = await axios
        .get(getUrlBase + `blog/${id}`)
        .then((res) => {
          // console.log(res.data.result)
          setDataBlog(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }
    fetchDataBlogById();
  }, [id, getUrlBase]);

  return (
    <div className="flex justify-center items-center">
      <div className="md:pt-28 pt-20 pb-32 flex justify-center">
        <DetailBlogTemplate judul={dataBlog.judul} blog={dataBlog.blog} isi={dataBlog.isi} />
      </div>
    </div>
  );
}

export default BlogDetail;

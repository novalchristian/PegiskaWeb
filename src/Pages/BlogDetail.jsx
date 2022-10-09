import React from "react";
import { TitleLightMolecules } from "../Components/Molecules";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [getUrlBase] = useRecoilState(urlBase);
  const [dataBlog, setDataBlog] = React.useState([]);
  // let id = props.id_blog;
  // const { id_blog } = useParams();

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
        <div className="container">
          <div className="w-full px-4">
            <div className="mb-[-3rem] md:mb-[-3rem] mx-auto text-center max-w-5xl">
              <TitleLightMolecules titleEng="Blog" titleInd={dataBlog.judul} />
              <div className="flex justify-center items-center">
                <img
                  src={getUrlBase + dataBlog.blog}
                  alt=""
                  className="w-[600px] h-[300px] drop-shadow-xl rounded-xl"
                />
              </div>
              <p className="pt-6 md:pl-6 indent-10 text-justify first-letter:text-4xl break-words leading-8">
                {dataBlog.isi}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;

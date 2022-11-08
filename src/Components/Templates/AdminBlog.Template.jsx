import React from "react";
import { TitleLightMolecules } from "../Molecules";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";
import axios from "axios";
import { BlogItemOrganism } from "../Organisms";
import { AddButtonAtom } from "../Atoms";

function AdminBlogTemplate(props) {
  const [getUrlBase] = useRecoilState(urlBase);

  async function delBlog(id) {
    const request = await axios
      .delete(getUrlBase + `blog/${id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          session: localStorage.getItem("session"),
        },
      })
      .then((res) => {
        console.log(res);
        // setOpenModal(true);
        window.location.reload();
      })
      .catch((er) => {
        // console.log("Error: ", er.response.data);
        console.log(er.response);
      });
    return request;
  }

  return (
    <div className="md:pt-12 pt-8 flex justify-center">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-8 md:mb-20 text-center max-w-7xl">
            <div className="pb-10">
              <TitleLightMolecules
                titleEng={props.titleEng}
                titleInd={props.titleInd}
                subTitle={props.subTitle}
              />
              <div className="flex justify-center items-center">
                <Link to="/blog/AddBlog">
                  <AddButtonAtom title="Tambahkan Blog" />
                </Link>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="flex flex-wrap justify-center items-start md:ml-0 cursor-pointer">
                {props.data.map((list) => (
                  <BlogItemOrganism
                    id_blog={list.id_blog}
                    blog={list.blog}
                    judul={list.judul}
                    isi={list.isi}
                    func={delBlog}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminBlogTemplate;

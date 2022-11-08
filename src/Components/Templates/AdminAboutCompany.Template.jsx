import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { urlBase } from "../../store";
import { AddButtonAtom } from "../Atoms";

export default function AdminAboutCompanyTemplate(props) {
  const [getUrlBase] = useRecoilState(urlBase);
  return (
    <div className="md:pt-12 pt-4 md:pb-10 flex justify-center bg-gray-50">
      <div className="">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 text-center max-w-[1350px]">
            <div className="md:pb-10 pb-4">
              <p className="mt-10 text-dark text-lg md:text-2xl text-left font-bold">
                Telah dipercaya oleh
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center">
              {props.CompanyData.map((data) => (
                <div
                  className="w-1/3 lg:w-1/5 flex justify-center"
                  key={data.id_client}
                >
                  <div className="md:px-3 md:mt-4 flex justify-center md:static">
                    <img
                      src={getUrlBase + data.clientURL}
                      alt={data.clientName}
                      className="w-3/4 md:w-full duration-300 mt-10 md:mt-[-10px]"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <Link to="/about/AddClient">
                <AddButtonAtom title="Tambahkan Client" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

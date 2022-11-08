/* eslint-disable react-hooks/exhaustive-deps */
import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  AboutCompanyTemplate,
  AboutHeroTemplate,
  AboutLocationTemplate,
  AboutStakeholderTemplate,
  AdminAboutCompanyTemplate,
  AdminAboutStakeholderTemplate,
} from "../Components/Templates";
import axios from "axios";
import { useRecoilState } from "recoil";
import { urlBase } from "../store";

function About() {
  const dataAdmin = JSON.parse(localStorage.getItem("dataPengguna"));
  const [getUrlBase] = useRecoilState(urlBase);
  const [dataClient, setDataClient] = useState([]);
  const [dataStakeholder, setDataStakeholder] = useState([]);

  useEffect(() => {
    async function fetchDataClient() {
      const request = await axios
        .get(getUrlBase + "client")
        .then((res) => {
          // console.log(res.data.result)
          setDataClient(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }

    async function fetchDataStakeholder() {
      const request = await axios
        .get(getUrlBase + "stakeholder")
        .then((res) => {
          // console.log(res.data.result)
          setDataStakeholder(res.data.result);
        })
        .catch((er) => console.log("Error: ", er));
      return request;
    }

    fetchDataStakeholder();
    fetchDataClient();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <AboutHeroTemplate />

      {/* Section2 */}
      {dataAdmin !== null ? (
        dataAdmin.id_user === 1 ? (
          <AdminAboutCompanyTemplate CompanyData={dataClient} />
        ) : (
          <AboutCompanyTemplate CompanyData={dataClient} />
        )
      ) : (
        <AboutCompanyTemplate CompanyData={dataClient} />
      )}

      {/* Section 3 */}
      <AboutLocationTemplate />
      {/* Section  4 */}
      {/* <AdminAboutStakeholderTemplate EmployeeData={dataStakeholder} /> */}

      {dataAdmin !== null ? (
        dataAdmin.id_user === 1 ? (
          <AdminAboutStakeholderTemplate EmployeeData={dataStakeholder} />
        ) : (
          <AboutStakeholderTemplate EmployeeData={dataStakeholder} />
        )
      ) : (
        <AboutStakeholderTemplate EmployeeData={dataStakeholder} />
      )}
    </>
  );
}

export default About;

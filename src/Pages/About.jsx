import React, { useLayoutEffect } from "react";
import {
  AboutCompanyTemplate,
  AboutHeroTemplate,
  AboutLocationTemplate,
  AboutStakeholderTemplate,
} from "../Components/Templates";
import { CompanyData } from "../Data/CompanyData";
import { EmployeeData } from "../Data/EmployeeData";

function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <AboutHeroTemplate />

      {/* Section2 */}
      <AboutCompanyTemplate CompanyData={CompanyData} />

      {/* Section 3 */}
      <AboutLocationTemplate />

      {/* Section  4 */}
      <AboutStakeholderTemplate EmployeeData={EmployeeData} />
    </>
  );
}

export default About;

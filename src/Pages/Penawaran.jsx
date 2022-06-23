import React from "react";
import { NavTemplate, PenawaranHeroTemplate, FooterTemplate } from "../Components/Templates";

function Penawaran() {
  return (
    <>
      {/* Nav Template Start */}
      <NavTemplate />
      {/* Nav Template End */}

      {/* Penawaran Hero Start */}
      <PenawaranHeroTemplate />
      {/* Penawaran Hero End */}


      {/* Footer Template Start */}
      <FooterTemplate />
      {/* Footer Template End */}
    </>
  );
}

export default Penawaran;

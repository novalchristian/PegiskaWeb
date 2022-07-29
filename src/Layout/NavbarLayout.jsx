import { Outlet } from "react-router-dom";
import { FooterTemplate, NavTemplate } from "../Components/Templates";

const NavbarLayout = () => (
  <div className="Navbar">
    <NavTemplate />
    <Outlet />
    <FooterTemplate />
  </div>
);

export default NavbarLayout
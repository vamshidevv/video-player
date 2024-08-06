import React from "react";
import logo from "../Assets/Images/logo-2-removebg-preview.png";

const NavBar = () => (
  <header className="header">
    <img src={logo} alt="logo" style={{ height: "45px", objectFit: "cover" }} />
    {/* <h1>Video Gallery</h1> */}
  </header>
);

export default NavBar;

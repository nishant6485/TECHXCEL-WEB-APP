import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>TechXcel</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About Us</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <HashLink to={"/#contact"}>Contact Us</HashLink>
        <HashLink to={"/#services"}>Explore Services</HashLink>
      </main>
    </nav>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="nav">
      <Link to={"/products"} className="nav-link">
        Produkty
      </Link>
      <Link to={"/contact"} className="nav-link">
        Kontakt
      </Link>
      <SlMagnifier className="magnifier" />
    </div>
  );
};

export default Navbar;

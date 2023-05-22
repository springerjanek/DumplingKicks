import React, { useState } from "react";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { MobileMenu } from "./mobile/MobileMenu";
import { NavbarProducts } from "./NavbarProducts";

export const Navbar = () => {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleInput = () => {
    setShowInput(!showInput);
    setInput("");
  };

  return (
    <>
      <div className="nav">
        <div className="nav__left">
          <a href="/brand/jordan">AIR JORDAN</a>
          <a href="/brand/nike-dunk"> NIKE DUNK</a>
          <a href="/brand/new-balance"> NEW BALANCE</a>
        </div>

        <div className="hamburger-icon">
          <Bars3Icon
            style={{
              width: "25px",
              height: "25px",
            }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </div>

        <div className={`${showInput ? "input-search" : "hidden"} `}>
          <input
            type="text"
            placeholder="JORDAN 1"
            value={input}
            onChange={(e) => setInput(e.target.value.trim())}
          ></input>
        </div>

        {showMobileMenu && <MobileMenu />}

        <div className="nav__right">
          <MagnifyingGlassIcon
            style={{
              width: "25px",
              height: "25px",
              margin: "7px 10px",
              cursor: "pointer",
            }}
            onClick={handleInput}
          />
          <a href="/contact" className={`${showInput ? "hide-contact" : ""} `}>
            KONTAKT
          </a>
        </div>
      </div>

      <NavbarProducts input={input} />
    </>
  );
};

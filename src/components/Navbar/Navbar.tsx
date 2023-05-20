import React, { useState } from "react";
import { useSearch } from "./utils/useSearch";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const matchingProducts = useSearch(input);

  return (
    <>
      <div className="nav">
        <div className="nav__left">
          <a href="/brand/jordan">AIR JORDAN</a>
          <a href="/brand/nike-dunk"> NIKE DUNK</a>
          <a href="/brand/new-balance"> NEW BALANCE</a>
        </div>
        <div className="hamburger">
          <Bars3Icon
            style={{ width: "25px", height: "25px", margin: "5px" }}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
        </div>
        {showMobileMenu && (
          <div className="mobile__menu">
            <a href="/brand/jordan">AIR JORDAN</a>
            <a href="/brand/nike-dunk"> NIKE DUNK</a>
            <a href="/brand/new-balance"> NEW BALANCE</a>
          </div>
        )}
        <div className="nav__right">
          <MagnifyingGlassIcon
            style={{
              width: "25px",
              height: "25px",
              margin: "7px 10px",
              cursor: "pointer",
            }}
            onClick={() => setShowInput(!showInput)}
          />
          <a href="/contact">KONTAKT</a>
        </div>
      </div>

      <div className={`${showInput ? "" : "hidden"} `}>
        <input
          type="text"
          placeholder="JORDAN 1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        {matchingProducts && input.length > 0
          ? matchingProducts.map((product) => {
              return (
                <div key={product.id} className="search__product">
                  <img src={product.thumbnail} />
                  <p>{product.name}</p>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
};

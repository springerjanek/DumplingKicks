import React, { useState } from "react";
import { useSearch } from "./utils/useSearch";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);

  const matchingProducts = useSearch(input);

  return (
    <>
      <div className="nav">
        <a href="/brand/jordan">AIR JORDAN</a>
        <a href="/brand/nike-dunk"> NIKE DUNK</a>
        <a href="/brand/new-balance"> NEW BALANCE</a>

        <div className="nav__right">
          <a href="/contact">KONTAKT</a>
          <MagnifyingGlassIcon
            style={{ width: "30px", height: "30px", margin: "5px 5px" }}
            onClick={() => setShowInput(!showInput)}
          />
        </div>
      </div>

      <div
        className={`search-container ${
          showInput ? "block" : "hidden"
        } slide-animation`}
      >
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

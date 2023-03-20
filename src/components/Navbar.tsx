import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import data from "../shoes.json";

type essa = {
  id: number;
  name: string;
  sizes_and_prices: {
    size: string;
    price: string;
  }[];
  sku: string;
  thumbnail: string;
  brand: string;
};

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchProducts, setSearchProducts] = useState<essa[]>([]);
  const [displayProducts, setDisplayProducts] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    let matches: essa[] = [];
    let rest: essa[] = [];
    console.log("ESA", matches);
    if (inputValue.length > 0) {
      data.map((product) => {
        product.name.toLowerCase().includes(inputValue.toLowerCase())
          ? matches.push(product)
          : rest.push(product);
      });
    }
    matches.push(...rest);
    setSearchProducts(matches);
    if (inputValue.length === 0) {
      setDisplayProducts(false);
    } else {
      setDisplayProducts(true);
    }
  }, [inputValue]);

  return (
    <>
      <div className="nav">
        <Link to={"/brand/jordan"} className="nav-link">
          AIR JORDAN
        </Link>
        <Link to={"/brand/nike-dunk"} className="nav-link">
          NIKE DUNK
        </Link>
        <Link to={"/brand/new-balance"} className="nav-link">
          NEW BALANCE
        </Link>
        <div className="nav-right">
          <Link to={"/contact"} className="nav-link">
            KONTAKT
          </Link>
          <SlMagnifier
            className="magnifier"
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>
      </div>

      <div
        className={`search-container ${
          showSearch ? "block" : "hidden"
        } slide-animation`}
      >
        <input
          type="text"
          className={`input-search`}
          placeholder="JORDAN 1"
          onChange={handleSearch}
        ></input>
        {displayProducts &&
          searchProducts.map((product) => {
            return product.name;
          })}
      </div>
    </>
  );
};

export default Navbar;

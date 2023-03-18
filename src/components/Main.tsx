import React from "react";
import data from "../shoes.json";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  console.log("TEST");

  return (
    <div className="container">
      <div>
        {data.map((shoe) => {
          const { id, name, sizes_and_prices, sku, thumbnail } = shoe;
          console.log(name.replace(/\s/g, "-"));
          return (
            <div key={id}>
              <img
                src={thumbnail}
                alt="Product"
                onClick={() =>
                  navigate(`/product/${name.replace(/\s/g, "-").toLowerCase()}`)
                }
              ></img>
              <h1>{name}</h1>
              <h2>{sku}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;

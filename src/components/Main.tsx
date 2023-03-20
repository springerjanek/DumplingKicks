import React from "react";
import data from "../shoes.json";
import { useNavigate } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {data.map((shoe) => {
        const { id, name, sizes_and_prices, sku, thumbnail } = shoe;
        console.log(name.replace(/\s/g, "-"));
        return (
          <div className="shoe-container" key={id}>
            <img
              src={thumbnail}
              alt="Product"
              onClick={() =>
                navigate(`/product/${name.replace(/\s/g, "-").toLowerCase()}`)
              }
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default Main;

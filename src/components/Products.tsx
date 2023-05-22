import React from "react";
import shoes from "../shoes.json";
import Styles from "../styles/products.scss";

export const Products = () => {
  return (
    <main className="products">
      {shoes.map((shoe) => {
        const { id, name, thumbnail } = shoe;
        return (
          <div className="product" key={id}>
            <img src={thumbnail} alt="Shoe" />
            <h1>
              <a href={`/product/${name.replace(/\s/g, "-").toLowerCase()}`}>
                {name}
              </a>
            </h1>
          </div>
        );
      })}
    </main>
  );
};

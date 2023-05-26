import React from "react";
import { useSearch } from "./utils/useSearch";

export const NavbarProducts = ({ input }: { input: string }) => {
  const matchingProducts = useSearch(input);

  return (
    <>
      {matchingProducts && input.length > 0 ? (
        <ul className="input-searcch__products">
          {matchingProducts.map((product) => {
            return (
              <li
                key={product.id}
                className="input-search__product"
                onClick={() =>
                  (window.location.href = `/product/${product.name
                    .replace(/\s/g, "-")
                    .toLowerCase()}`)
                }
              >
                <img src={product.thumbnail} />
                <p>{product.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

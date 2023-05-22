import React from "react";
import { useSearch } from "./utils/useSearch";

export const NavbarProducts = ({ input }: { input: string }) => {
  const matchingProducts = useSearch(input);

  return (
    <>
      {matchingProducts && input.length > 0 ? (
        <div className="input-search__products">
          {matchingProducts.map((product) => {
            return (
              <div key={product.id} className="input-search__product">
                <img src={product.thumbnail} />
                <p>{product.name}</p>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

import React from "react";
import { useSearch } from "./utils/useSearch";

export const NavbarProducts = ({ input }: { input: string }) => {
  const matchingProducts = useSearch(input);

  return (
    <>
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
    </>
  );
};

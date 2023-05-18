import shoes from "../../../shoes.json";

export interface Product {
  id: number;
  name: string;
  sizes_and_prices: {
    size: string;
    price: string;
  }[];
  sku: string;
  thumbnail: string;
  brand: string;
}

export const useSearch = (input: string) => {
  let matchingProducts: Product[] = [];
  shoes.forEach((shoe) => {
    const formattedProductTitle = shoe.name.toLowerCase();
    formattedProductTitle.includes(input.toLowerCase()) &&
      matchingProducts.push(shoe);
  });
  if (matchingProducts) {
    return matchingProducts;
  }
};

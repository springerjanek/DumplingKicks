import data from "../shoes.json";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { name } = useParams();

  const formattedName = name?.replace(/-/g, " ").toUpperCase();
  console.log("TEST");
  return (
    <div className="container">
      {data
        .filter((x) => x.name === formattedName)
        .map((product) => {
          const sizeAndPrice = product.sizes_and_prices.map((obj) => {
            return (
              <p key={obj.size}>
                {obj.size} {obj.price}
              </p>
            );
          });

          return (
            <div key={product.id}>
              <img src={product.thumbnail} alt="Product" />
              <br></br>
              {product.name}
              {sizeAndPrice}
            </div>
          );
        })}
    </div>
  );
};

export default ProductPage;

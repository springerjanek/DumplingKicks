import React from "react";
// import data from "../shoes.json";
// import { useNavigate } from "react-router-dom";
// import { Button, Grid } from "@mui/material";

const Main = () => {
  // const navigate = useNavigate();

  return (
    <div className="contact">
      <h1>COMING SOON</h1>
      <div className="ig">
        <h2>CHECK OUT OUR IG</h2>
        <a href="https://www.instagram.com/dumpling_kicks">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
            style={{
              width: "35px",
              height: "35px",
              marginTop: "27px",
              marginLeft: "10px",
            }}
          />
        </a>
      </div>
    </div>
    // <Grid container columnGap={6}>
    //   {data.map((shoe) => {
    //     const { id, name, sizes_and_prices, sku, thumbnail } = shoe;
    //     console.log(name.replace(/\s/g, "-"));
    //     return (
    //       <Grid>
    //         <img
    //           src={thumbnail}
    //           alt="Product"
    //           onClick={() =>
    //             navigate(`/product/${name.replace(/\s/g, "-").toLowerCase()}`)
    //           }
    //         ></img>
    //       </Grid>
    //     );
    //   })}
    // </Grid>
  );
};

export default Main;

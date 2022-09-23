import React from "react";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Button, Link } from "@mui/material";



let ProductViewHorizontal = (props) => {


  let { image, title, price, description, id } = props.product;
  let { rate } = props.product.rating;

  return (
    <Grid
      sx={{
        boxShadow: (props) => props.palette.mode === "light" ? "0px 14px 32px 0px rgba(0, 0, 0, 0.15)" : "0px 14px 32px 0px rgba(0, 0, 0, 1)",
        width: `${props.width}vw`,
        margin: "1vw auto",
      }}
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item container alignItems="center" xs={12} md={6}>
        <img
          src={image}
          style={{
            width: "50%",
            display: "block",
            margin: "auto",
          }}
        />
      </Grid>
      <Grid item xs={11} md={5}>
        {" "}
        <div className="product-info">
          <div className="product-text">
            <h1>
              <Link href={`/products/${id}`}>{title}</Link>
            </h1>
            <h2>
              rating : <Rating value={rate} readOnly size="small" />
            </h2>
            <p>{description}</p>
          </div>
          <Grid
            container
            justifyContent="space-between"
            className="product-price-btn"
            sx={{ paddingLeft: "2vw" }}
          >
            <Grid item>
              <p>
                <span style={{ fontSize: "34px" }}>{price}</span>$
              </p>
            </Grid>
            <Grid item>
              <Button
                type="button"
                sx={{
                  backgroundImage: (theme) =>
                    `linear-gradient(-90deg, ${theme.palette.colors.blue}, ${theme.palette.colors.grey}) !important`,
                }}
              >
                buy now
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductViewHorizontal;

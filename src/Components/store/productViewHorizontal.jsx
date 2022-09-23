import React from "react";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Box, Button, Link } from "@mui/material";

let ProductViewHorizontal = (props) => {
  let { image, title, price, description, id } = props.product;
  let { rate } = props.product.rating;

  return (
    <Grid
      sx={{
        boxShadow: (props) =>
          props.palette.mode === "light"
            ? "0px 14px 32px 0px rgba(0, 0, 0, 0.15)"
            : "0px 14px 32px 0px rgba(0, 0, 0, 1)",
        width: `${props.width}vw`,
        margin: "1vw auto",
        span: {
          display: "inline-block",
          fontFamily: "Suranna, serif",
        },
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
        <Box
          component="h1"
          sx={{
            margin: "0 0 0 38px",
            paddingTop: "52px",
            fontSize: "34px",
            color: "#474747",
            fontFamily: "Bentham, serif",
          }}
        >
          <Link href={`/products/${id}`}>{title}</Link>
        </Box>
        <h2
          style={{
            margin: "0 0 47px 38px",
            fontSize: "13px",
            fontFamily: "Raleway, sans-serif",
            fontWeight: 400,
            textTransform: "uppercase",
            color: "#d2d2d2",
            letterSpacing: "0.2em",
          }}
        >
          rating : <Rating value={rate} readOnly size="small" />
        </h2>
        <p
          style={{
            fontFamily: "Bentham, serif",
            height: "125px",
            margin: "0 0 0 38px",
            fontFamily: "Playfair Display, serif",
            color: "#8d8d8d",
            lineHeight: " 1.7em",
            fontSize: "15px",
            fontWeight: "lighter",
            overflow: "hidden",
          }}
        >
          {description}
        </p>
        <Grid
          container
          justifyContent="space-between"
          className="product-price-btn"
          sx={{
            paddingLeft: "2vw",
            height: "103px",
            marginTop: "17px",
            position: "relative",
          }}
        >
          <Grid item>
            <p
              style={{
                fontFamily: "Trocchi, serif",
                fontSize: "28px",
                fontWeight: "lighter",
                color: "#474747",
              }}
            >
              <span style={{ fontSize: "34px" }}>{price}</span>$
            </p>
          </Grid>
          <Grid item>
            <Button
              type="button"
              sx={{
                backgroundImage: (theme) =>
                  `linear-gradient(-90deg, ${theme.palette.colors.blue}, ${theme.palette.colors.grey}) !important`,
                display: "inline-block",
                height: "50px",
                width: "176px",
                boxSizing: "border-box",
                border: "transparent",
                borderRadius: "60px",
                fontFamily: "Raleway, sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#ffffff",
                cursor: "pointer",
                outline: "none",
              }}
            >
              buy now
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductViewHorizontal;

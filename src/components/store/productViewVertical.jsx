import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import { Box, Button, Link } from "@mui/material";

let ProductViewVertical = (props) => {
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
        margin: "auto",
        paddingBottom: "1vw",
      }}
      container
      alignItems="center"
      justifyContent="center"
    >
      <Grid item container alignItems="center" xs={12}>
        <img
          src={image}
          style={{
            width: "50%",
            display: "block",
            margin: "auto",
          }}
        />
      </Grid>
      <Grid item xs={11}>
        <Box
          sx={{
            h1: {
              paddingTop: "52px",
              fontSize: "34px",
              color: "#474747",
            },
            h2: {
              fontSize: "13px",
              fontFamily: "Raleway, sans-serif",
              fontWeight: 400,
              textTransform: "uppercase",
              color: "#d2d2d2",
              letterSpacing: "0.2em",
            },
          }}
        >
          <h1>
            <Link href={`/products/${id}`}>{title}</Link>
          </h1>
          <h2>
            rating : <Rating value={rate} readOnly size="small" />
          </h2>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#8d8d8d",
              lineHeight: "1.7em",
              fontSize: "15px",
              fontWeight: "lighter",
              overflow: "hidden",
            }}
          >
            {description}
          </p>
        </Box>
        <Grid
          container
          justifyContent="space-between"
          className="product-price-btn"
          sx={{
            height: "103px",
            marginTop: "17px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Box
              sx={(theme) => {
                return {
                  fontFamily: "Trocchi, serif",
                  fontSize: "28px",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "18px",
                  },
                  fontWeight: "lighter",
                  color: "#474747",
                };
              }}
            >
              <Box
                component="span"
                sx={(theme) => {
                  return {
                    [theme.breakpoints.down("sm")]: {
                      fontSize: "25px",
                    },
                    fontSize: "34px",
                  };
                }}
              >
                {price}
              </Box>
              $
            </Box>
          </Grid>
          <Grid item>
            <Button
              type="button"
              sx={(theme) => {
                return {
                  backgroundImage: (theme) =>
                    `linear-gradient(-90deg, ${theme.palette.colors.blue}, ${theme.palette.colors.grey}) !important`,
                  display: "inline-block",
                  height: "50px",
                  width: "176px",
                  [theme.breakpoints.down("sm")]: {
                    width: "100px",
                    fontSize: "10px",
                  },
                  boxSizing: "border-box",
                  border: "transparent",
                  borderRadius: "60px",
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "#ffffff",
                  cursor: "pointer",
                  outline: "none",
                };
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

export default ProductViewVertical;

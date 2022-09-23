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
        boxShadow: (props) => props.palette.mode === "light" ? "0px 14px 32px 0px rgba(0, 0, 0, 0.15)" : "0px 14px 32px 0px rgba(0, 0, 0, 1)",
        width: `${props.width}vw`,
        margin: "auto",
        paddingBottom: "2vw",
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
          sx={{
            marginTop: "17px",
            position: "relative",
            p: {
              fontFamily: "Trocchi, serif",
              fontSize: "28px",
              fontWeight: "lighter",
              color: "#474747",
            },
            button: {
              display: "inline-block",
              height: "50px",
              width: "176px",
              boxSizing: "border-box",
              border: "transparent",
              borderRadius: "60px",
              fontFamily: " Raleway, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#ffffff",
              backgroundColor: "#9cebd5",
              cursor: "pointer",
              outline: "none",
            },
          }}
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
      </Grid>
    </Grid>
  );
};

export default ProductViewVertical;

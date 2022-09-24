import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import React from "react";
import { useParams } from "react-router-dom";
import { AddToCart, CategorySlider, Loading } from "../components";
import { useSingleProduct } from "../hooks";
import { singleProductStyles } from "../styles";
import { green } from "@mui/material/colors";
import { Box } from "@mui/material";

let SingleProduct = () => {
  let { id } = useParams();

  if (typeof Number(id) !== "number") return "error";

  let { product, loading, error } = useSingleProduct(id);

  if (loading) return <Loading width={100} height={100} />;
  if (error) return <h2>error</h2>;

  return (
    <>
      <Grid container sx={singleProductStyles}>
        <Grid item md={6} xs={12}>
          <img src={product.image} />
        </Grid>
        <Grid item md={6} xs={12}>
          <h2 style={{ fontSize: "34px" }}>{product.title}</h2>
          <Box
            component="div"
            sx={{ color: "#666", padding: "1vw 0", lineHeight: "1.7em" }}
          >
            {product.description}
          </Box>
          <Rating readOnly value={Number(product.rating.rate)} />
          <br />
          <Box component="span" sx={{ color: green["700"] }}>
            {" "}
            ${product.price}
          </Box>{" "}
          <br />
          <Box component="div" sx={{ color: "#666" }}>
            {product.rating.count} Left
          </Box>
          <br />
          <Grid container>
            <Grid item>
              <AddToCart productId={id} productTitle={product.title} />
            </Grid>
            <Grid item>
              <Button color="success" variant="contained">
                Buy
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box component="h1" width="100vw" sx={{ margin: 2 }}>
        You Might Also Like :
      </Box>{" "}
      <Grid container>
        <Grid item width="100vw" xs={12}>
          <CategorySlider category={product.category} />
        </Grid>
      </Grid>
    </>
  );
};

export default SingleProduct;

import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Rating from "@mui/material/Rating";
import React from "react";
import { useParams } from "react-router-dom";
import { AddToCart, CategorySlider, Loading } from "../Components";
import { useSingleProduct } from "../hooks";
import { singleProductStyles } from "../styles";
import { green } from "@mui/material/colors";

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
          <h2>{product.title}</h2>
          {product.description}
          catagory : {product.catagory}
          <br />
          <List>
            <ListItem>
              <ListItemText>
                <Rating readOnly value={Number(product.rating.rate)} />
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText style={{ color: green["700"] }}>
                ${product.price}
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText>{product.rating.count} left</ListItemText>
            </ListItem>
          </List>
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
      <h2>You Might Also Like : </h2>
      <Grid container>
        <Grid item p={2} width="100vw" xs={12}>
          <CategorySlider category={product.category} />
        </Grid>
      </Grid>
    </>
  );
};

export default SingleProduct;

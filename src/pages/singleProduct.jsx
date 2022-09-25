import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import React from "react";
import { useParams } from "react-router-dom";
import { AddToCart, CategorySlider, Loading } from "../components";
import { useSingleProduct } from "../hooks";
import { singleProductStyles } from "../styles";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

let SingleProduct = () => {
  let { id } = useParams();
  if (typeof Number(id) !== "number") return "error";
  let { product, loading, error } = useSingleProduct(id);
  let { t } = useTranslation();
  if (loading) return <Loading width={100} height={100} />;
  if (error) return <h2>error</h2>;

  return (
    <Grid container sx={singleProductStyles}>
      <Grid item md={6} xs={12}>
        <img src={product.image} />
      </Grid>
      <Grid item md={6} xs={12}>
        <h2 className="title">{product.title}</h2>
        <Box className="description">{product.description}</Box>
        <Rating readOnly value={Number(product.rating.rate)} />
        <br />
        <Box component="span" className="price">
          ${product.price}
        </Box>
        <br />
        <Box component="div" className="count">
          {product.rating.count} {t("singleProduct.left")}
        </Box>
        <br />
        <Grid container>
          <Grid item>
            <AddToCart productId={id} productTitle={product.title} />
          </Grid>
          <Grid item>
            <Button color="success" variant="contained">
              {t("singleProduct.buy")}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box component="h1" className="other">
          {t("singleProduct.youMightAlsoLike")}
        </Box>
        <Grid container>
          <CategorySlider category={product.category} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;

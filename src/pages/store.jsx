import React from "react";
import { ProductsFilter, Loading, ProductViewHorizontal } from "../components";
import { useProducts } from "../hooks";
import { storeStyles } from "../styles";
import Grid from "@mui/material/Grid";
import { setProducts } from "../store/features/products/productsSlice";
import Box from "@mui/material/Box";

let Store = () => {
  let { loading, error, products } = useProducts();

  if (loading) return <Loading width={100} height={100} />;
  if (error) return <h2>error</h2>;

  return (
    <Grid container sx={storeStyles}>
      <Grid item container xs={1} className="filter">
        <ProductsFilter setProducts={setProducts} />
      </Grid>
      <Grid item xs={12}>
        <Grid container className="productsContainer">
          {products.map((product, i) => {
            return (
              <Box key={i} className="productBox">
                <ProductViewHorizontal
                  product={product}
                  width={90}
                  boxShadow={false}
                />
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Store;

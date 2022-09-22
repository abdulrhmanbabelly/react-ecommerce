import React from "react";
import {
  ProductsFilter,
  Loading,
  ProductViewHorizontal,
  ProductViewVertical,
} from "../Components";
import { useProducts } from "../hooks";
import { storeStyles } from "../styles";
import Grid from "@mui/material/Grid";
import { setProducts } from "../store/features/products/productsSlice";
import { Box } from "@mui/material";

let Store = () => {
  let { loading, error, products } = useProducts();

  if (loading) return <Loading width={100} height={100} />;
  if (error) return <h2>error</h2>;

  return (
    <Grid container sx={storeStyles}>
      <Grid item container xs={1} ml="auto" mr="1vw" justifyContent="flex-end">
        <ProductsFilter setProducts={setProducts} />
      </Grid>
      <Grid item xs={12}>
        <Grid container width="100vw">
          {products.map((product, i) => {
            return (
              <Box key={i} sx={{ margin: "1vw auto" }}>
                <ProductViewVertical
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

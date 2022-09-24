import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import React from "react";
import { AddNewCart, Cart, Loading } from "../components";
import { useUserCarts } from "../hooks";
import { cartsStyles } from "../styles";

let Carts = () => {
  let theme = useTheme();
  let { carts, loading, error } = useUserCarts(1);
  if (loading) return <Loading width={100} height={100} />;
  if (error) return <h2>error</h2>;

  return (
    <Box sx={cartsStyles(theme)} width="100vw">
      {carts.map((cart, i) => (
        <Cart cart={cart} key={i} order={i} price={cart.price} />
      ))}
      <AddNewCart carts={carts} />
    </Box>
  );
};

export default Carts;

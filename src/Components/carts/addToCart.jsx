import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useNotification, useUpdateCart, useUserCarts } from "../../hooks";
import { AddNewCart, Cart } from "../";
import { cartsStyles } from "../../styles";
import { Modal } from "../";
import { SignIn } from "../../Pages";
import { useSelector } from "react-redux";
import { addItemToCart } from "../../store/features/carts/cartsSilce";

let AddToCart = (props) => {
  const { productId, productTitle } = props;
  const theme = useTheme();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { updateCart } = useUpdateCart();
  const { carts, prices, loading, error } = useUserCarts(1);
  const { triggerNotification } = useNotification();

  if (loading) return <CircularProgress />;
  if (error) return <h2>error</h2>;

  const handleAddToCart = (cart, order) => {
    let found = false;
    for (let i = 0; i < cart.products.length; i++) {
      if (cart.products[i].productId == productId) {
        found = true;
        triggerNotification("this product is already in your cart", "error");
        break;
      }
    }
    if (!found) {
      updateCart({
        variables: {
          input: {
            cart: cart,
          },
        },
        id: cart.id,
      }).then((data) => {
        dispatch(
          addItemToCart({
            productId: Number(productId),
            quantity: Number(
              document.getElementById(`quantity${cart.id}`).value
            ),
            order: order,
          })
        );
        triggerNotification(`added prodcut ${productTitle}`);
      });
    }
  };

  return (
    <Modal
      content={
        <Box sx={cartsStyles(theme)}>
          {isLoggedIn ? (
            <>
              {carts.map((cart, i) => (
                <div key={i}>
                  <Cart cart={cart} price={prices[i]} order={i} />
                  <div key={Math.random() * 100000}>
                    <form className="addToCartForm">
                      <FormGroup>
                        <TextField
                          type="number"
                          id={`quantity${cart.id}`}
                          label="quantity"
                          variant="filled"
                          inputProps={{ min: 1 }}
                          defaultValue={1}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Button
                          variant="contained"
                          onClick={() => {
                            handleAddToCart(cart, i);
                          }}
                        >
                          Add to cart
                        </Button>
                      </FormGroup>
                    </form>
                  </div>
                </div>
              ))}
              <AddNewCart />
            </>
          ) : (
            <SignIn />
          )}
        </Box>
      }
      openButtonContent="add to cart"
      closeButtonContent="close"
      headerContent="add to cart"
      openButtonColor="warning"
    />
  );
};

export default AddToCart;

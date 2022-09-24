import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useUpdateCart, useUserCarts } from "../../hooks";
import { AddNewCart, Cart } from "../";
import { cartsStyles } from "../../styles";
import { Modal } from "../";
import { SignIn } from "../../pages";
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, init } from "../../store/features/carts/cartsSilce";
import swal from "sweetalert";

let AddToCart = (props) => {
  const { productId, productTitle } = props;
  const theme = useTheme();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const { updateCart } = useUpdateCart();
  const { carts, loading, error } = useUserCarts(1);

  if (loading) return <CircularProgress />;
  if (error) return <h2>error</h2>;

  const handleAddToCart = (cart, order) => {
    let found = false;
    for (let i = 0; i < cart.products.length; i++) {
      if (cart.products[i].productId == productId) {
        found = true;
        swal({ title: "this product is already in your cart", icon: "error" });
        break;
      }
    }
    if (!found) {
      updateCart({
        variables: {
          id: cart.id,
          input: {
            cart: cart,
          },
        },
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
        swal({ title: `added ${productTitle} to your cart`, icon: "success" });
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
                  <Cart cart={cart} price={cart.price} order={i} />
                  <form id={`addToCartForm${i}`} className="addToCartForm">
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
      headerContent="Add To Cart"
      openButtonColor="warning"
      closeFunc={() => {
        dispatch(init({ carts: carts, prices: carts.map(() => 0) }));
      }}
    />
  );
};

export default AddToCart;

import React from "react";
import Delete from "@mui/icons-material/Delete";
import CreditCard from "@mui/icons-material/CreditCard";
import Facebook from "@mui/icons-material/Facebook";
import ArrowRight from "@mui/icons-material/ArrowRight";
import WhatsApp from "@mui/icons-material/WhatsApp";
import Instagram from "@mui/icons-material/Instagram";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import { CartProduct } from "..";
import { useDeleteCart, useNotification, useUpdateCart } from "../../hooks";
import { useDispatch } from "react-redux";
import { deleteStoreCart } from "../../store/features/carts/cartsSilce";

let Cart = (props) => {
  let { cart, order, price } = props;
  let { products, date, id } = cart;
  let { deleteCart } = useDeleteCart(id);
  let { updateCart } = useUpdateCart();
  let { triggerNotification } = useNotification();
  let dispatch = useDispatch();
  let handleDelete = () => {
    deleteCart({
      variables: {
        id: id,
      },
    })
      .then((data) => {
        if (!data.errors) {
          dispatch(deleteStoreCart({ order: order }));
          triggerNotification(`deleted cart ${id}`, "success");
        } else triggerNotification(`failed to delete cart ${id}`, "error");
      })
      .catch((err) => {
        triggerNotification(`failed to delete cart ${id}`, "error");
      });
  };

  let handleUpdateCart = () => {
    updateCart({
      variables: {
        id: id,
        input: cart,
      },
    })
      .then((data) => {
        if (!data.errors) triggerNotification(`updated cart ${id}`, "success");
        else triggerNotification(`failed to update cart ${id}`, "error");
      })
      .catch((err) => {
        triggerNotification(`failed to update cart ${id}`, "error");
      });
  };
  return (
    <>
      <Card className="cart" id={`cart${order}`}>
        <Box>
          <Grid container justifyContent="space-between">
            <Grid item>
              <h4>Date : {date.substring(0, 10)}</h4>
            </Grid>
            <Grid item>
              <IconButton onClick={handleDelete}>
                <Delete style={{ Gridor: "#cecece", cursor: "pointer" }} />
              </IconButton>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={7} sm={12}>
              {products.map((product, i) => {
                return (
                  <CartProduct
                    key={i}
                    product={product}
                    cart={cart}
                    cartOrder={order}
                    productOrder={i}
                  />
                );
              })}
            </Grid>
            <Grid item md={5} sm={12}>
              <Card className="paycard">
                <Box p={1} overflow="hidden">
                  <Grid container justifyContent="space-between" mb={4}>
                    <h2 className="mb-0">Card details</h2>
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                      className="img-fluid rounded-3"
                      style={{ width: "45px" }}
                      alt="Avatar"
                    />
                  </Grid>

                  <Typography paragraph mb={2}>
                    Card type
                  </Typography>
                  <CreditCard />
                  <Facebook />
                  <WhatsApp />
                  <Instagram />

                  <form>
                    <FormGroup>
                      <TextField
                        type="text"
                        placeholder="Enter Cardholder's Name"
                        variant="outlined"
                        label="Cardholder's Name"
                      />
                    </FormGroup>
                    <FormGroup>
                      <TextField
                        type="text"
                        placeholder="1234 5678 9012 3457"
                        variant="outlined"
                        label="Card Number"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Grid container spacing={1}>
                        <Grid item sm={6} xs={12}>
                          <FormGroup>
                            <TextField
                              type="text"
                              placeholder="MM/YYYY"
                              variant="outlined"
                              label="Expiration"
                            />
                          </FormGroup>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <FormGroup>
                            <TextField
                              type="password"
                              placeholder="Enter Password"
                              variant="outlined"
                              label="Cvv"
                            />
                          </FormGroup>
                        </Grid>
                      </Grid>
                    </FormGroup>
                  </form>

                  <hr />
                  <br />
                  <Grid container justifyContent="space-between" mb={2}>
                    <Grid item>
                      <p>Subtotal</p>
                    </Grid>
                    <Grid item>
                      <p>
                        $<span>{Number(price)}</span>
                      </p>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="space-between" mb={2}>
                    <Grid item>
                      <p>Shipping</p>
                    </Grid>
                    <Grid item>
                      <p>$20.00</p>
                    </Grid>
                  </Grid>

                  <Grid container justifyContent="space-between" mb={2}>
                    <Grid item>
                      <p>Total(Incl. taxes)</p>
                    </Grid>
                    <Grid item>
                      <p>
                        $<span>{Number(price) + 20}</span>
                      </p>
                    </Grid>
                  </Grid>
                  <Button
                    color="info"
                    className="checkoutButton"
                    variant="contained"
                  >
                    <div>
                      $<span>{Number(price) + 20}</span>
                    </div>
                    <span className="check">
                      Checkout <ArrowRight />
                    </span>
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Button
          onClick={handleUpdateCart}
          variant="outlined"
          sx={{ float: "right", marginTop: "1vw", marginBottom: "-1vw" }}
        >
          save changes
        </Button>
      </Card>
    </>
  );
};

export default Cart;

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
import { useDeleteCart, useUpdateCart } from "../../hooks";
import { useDispatch } from "react-redux";
import { deleteStoreCart } from "../../store/features/carts/cartsSilce";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "@mui/icons-material";

let Cart = (props) => {
  let { cart, order, price } = props;
  let { products, date, id } = cart;
  let { deleteCart } = useDeleteCart(id);
  let { updateCart } = useUpdateCart();
  let dispatch = useDispatch();
  let { t, i18n } = useTranslation();
  let handleDelete = () => {
    deleteCart({
      variables: {
        id: id,
      },
    })
      .then((data) => {
        if (!data.errors) {
          dispatch(deleteStoreCart({ order: order }));
          swal(
            t("cart.deletedCart"),
            `${t("cart.cartNumber")} ${id}`,
            "success"
          );
        } else
          swal(
            t("cart.failedToDeleteCart"),
            `${t("cart.cartNumber")} ${id}`,
            "error"
          );
      })
      .catch((err) => {
        swal(
          t("cart.failedToDeleteCart"),
          `${t("cart.cartNumber")} ${id}`,
          "error"
        );
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
        if (!data.errors)
          swal(
            t("cart.updatedCart"),
            `${t("cart.cartNumber")} ${id}`,
            "success"
          );
        else
          swal(
            t("cart.failedToUpdateCart"),
            `${t("cart.cartNumber")} ${id}`,
            "error"
          );
      })
      .catch((err) => {
        swal(
          t("cart.failedToUpdateCart"),
          `${t("cart.cartNumber")} ${id}`,
          "error"
        );
      });
  };
  return (
    <Card className="cart" id={`cart${order}`}>
      <Box>
        <Grid container justifyContent="space-between">
          <Grid item>
            <h4>
              {t("cart.date")} : {date.substring(0, 10)}
            </h4>
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
                  <h2>{t("cart.details")}</h2>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                    style={{ width: "45px" }}
                    alt="Avatar"
                  />
                </Grid>

                <Typography paragraph mb={2}>
                  {t("cart.type")}{" "}
                </Typography>
                <CreditCard />
                <Facebook />
                <WhatsApp />
                <Instagram />

                <form>
                  <FormGroup>
                    <TextField
                      type="text"
                      placeholder={t("cart.namePlaceholder")}
                      variant="outlined"
                      label={t("cart.name")}
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      type="text"
                      placeholder={t("cart.numberPlaceholder")}
                      variant="outlined"
                      label={t("cart.number")}
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
                            label={t("cart.expiration")}
                          />
                        </FormGroup>
                      </Grid>
                      <Grid item sm={6} xs={12}>
                        <FormGroup>
                          <TextField
                            type="password"
                            placeholder={t("cart.cvvPlaceholder")}
                            variant="outlined"
                            label={t("cart.cvv")}
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
                    <p>{t("cart.subtotal")}</p>
                  </Grid>
                  <Grid item>
                    <p>
                      $<span>{Number(price)}</span>
                    </p>
                  </Grid>
                </Grid>

                <Grid container justifyContent="space-between" mb={2}>
                  <Grid item>
                    <p>{t("cart.shipping")}</p>
                  </Grid>
                  <Grid item>
                    <p>$20.00</p>
                  </Grid>
                </Grid>

                <Grid container justifyContent="space-between" mb={2}>
                  <Grid item>
                    <p>{t("cart.total")}</p>
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
                    {t("cart.checkout")}{" "}
                    {i18n.language === "ar" ? <ArrowLeft /> : <ArrowRight />}
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
        {t("cart.save")}
      </Button>
    </Card>
  );
};

export default Cart;

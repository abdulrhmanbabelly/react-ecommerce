import React, { useEffect, useState } from "react";
import { useCartProduct } from "../../hooks";
import Delete from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Loading } from "../";
import { useDispatch } from "react-redux";
import {
  changeItemsQuantity,
  deleteItem,
  itemMount,
} from "../../store/features/carts/cartsSilce";
import swal from "sweetalert";
import { useTranslation } from "react-i18next";

let CartProduct = (props) => {
  let { productId, quantity } = props.product;
  let dispatch = useDispatch();
  let { cartOrder, productOrder } = props;
  let { product, loading } = useCartProduct(productId);
  let [, setCount] = useState(quantity);
  let price = Number(product.price).toFixed(0) * Number(quantity);
  let { t } = useTranslation();
  useEffect(() => {
    if (!loading)
      dispatch(
        itemMount({
          price: price,
          order: cartOrder,
        })
      );
  }, [loading]);

  let handleChangeCount = (e) => {
    setCount(e.target.value);
    dispatch(
      changeItemsQuantity({
        quantity: Number(e.target.value),
        order: cartOrder,
        productId: productId,
        price: price,
        oneProductPrice: product.price,
      })
    );
  };

  let handleDeleteProduct = () => {
    dispatch(
      deleteItem({
        productOrder: productOrder,
        price: price,
        product: product,
        order: cartOrder,
      })
    );
    swal(t("cart.deletedProduct"), product.title, "success");
  };

  if (loading) return <Loading width={100} height={10} />;
  return (
    <>
      <Card className="cartProduct">
        <Box>
          <Grid container>
            <Grid item xs={12} sm={2} justifyContent="center" container p={1}>
              <img src={product.image} alt="Shopping item" />
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={10}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12} sm={8}>
                <h5>{product.title}</h5>
                <Link href={`/products/${productId}`} color="inherit">
                  {t("cart.productPage")}
                </Link>
              </Grid>
              <Grid item xs={6} sm={2} pr={2} pl={2}>
                <TextField
                  type="number"
                  value={quantity}
                  onChange={handleChangeCount}
                  variant="standard"
                  inputProps={{ min: 1 }}
                />
              </Grid>
              <Grid item xs={3} sm={1} justifyContent="center" container>
                <h5>${product.price}</h5>
              </Grid>
              <Grid item xs={3} sm={1}>
                <IconButton onClick={handleDeleteProduct}>
                  <Delete />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default CartProduct;

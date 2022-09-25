import React from "react";
import { useAddNewCart } from "../../hooks";
import { useDispatch } from "react-redux";
import { addStorageNewCart } from "../../store/features/carts/cartsSilce";
import { IconButton } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
let AddNewCart = () => {
  let { addNewCart } = useAddNewCart();
  let dispatch = useDispatch();
  let { t } = useTranslation();
  let handleAddNewCart = () => {
    let date = new Date();
    let cart = {
      userId: 1,
      products: [],
      date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
    };
    addNewCart({
      variables: {
        input: {
          userId: cart.userId,
          products: [],
          date: cart.date,
        },
      },
    })
      .then((data) => {
        let id = data.data.cart.id;
        if (!data.errors) {
          dispatch(
            addStorageNewCart({
              cart: {
                id: id,
                userId: cart.userId,
                products: [],
                date: cart.date,
              },
            })
          );
          swal({ title: `${t("cart.addedCart")} ${id}`, icon: "success" });
        } else
          swal({ title: `${t("cart.failedToAddCart")} ${id}`, icon: "error" });
      })
      .catch((err) => {
        swal({ title: `${t("cart.failedToAddCart")} ${id}`, icon: "error" });
      });
  };

  return (
    <>
      <IconButton
        color="success"
        sx={{ margin: "2vw auto", display: "block" }}
        onClick={handleAddNewCart}
      >
        <Add />
      </IconButton>
    </>
  );
};

export default AddNewCart;

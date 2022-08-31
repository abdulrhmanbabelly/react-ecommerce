import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useNotification, useUpdateProduct } from "../../hooks";
import { Modal } from "../";
import { filtersStyles } from "../../styles";
import { useDispatch } from "react-redux";
import { updateStorageProduct } from "../../store/features/admin/productsSlice";

let UpdateProduct = (props) => {
  let { title, description, id, rating } = props.product;
  let { categories, order } = props;
  let dispatch = useDispatch();
  let [category, setCategory] = useState(props.product.category);
  let [price, setPrice] = useState(props.product.price);
  let { updateProduct } = useUpdateProduct();
  let { triggerNotification } = useNotification(
    `updated product ${title}`,
    "info"
  );

  let handleUpdate = async () => {
    let newTitle = document.getElementById("title").value;
    let desc = document.getElementById("description").value;
    updateProduct({
      variables: {
        input: {
          title: newTitle,
          price: price,
          description: desc,
          category: category,
        },
        id: id,
      },
    })
      .then((data) => {
        if (!data.errors) {
          dispatch(
            updateStorageProduct({
              order: order,
              product: {
                title: newTitle,
                price: price,
                description: desc,
                category: category,
                rating: rating,
              },
            })
          );
          triggerNotification(`updated product ${title}`, "success");
        } else
          triggerNotification(`failed to update product ${title}`, "error");
      })
      .catch((err) => {
        console.log(err);
        triggerNotification(`failed to update product ${title}`, "error");
      });
  };

  let handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  let handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <Modal
        content={
          <Box sx={filtersStyles}>
            <form>
              <FormGroup>
                <TextField
                  type="text"
                  placeholder="Example : HUAWEI MATE 10 LITE"
                  label="title"
                  variant="outlined"
                  defaultValue={title}
                  id="title"
                />
                <TextField
                  placeholder="Write product`s description here"
                  variant="outlined"
                  label="description"
                  defaultValue={description}
                  id="description"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Price :</FormLabel>
                <FormControl>
                  <Slider
                    min={0}
                    max={10000}
                    valueLabelDisplay="auto"
                    defaultValue={price}
                    onChange={handlePriceChange}
                  />
                </FormControl>
              </FormGroup>
              <FormGroup>
                <FormLabel>Category : </FormLabel>
                <Select
                  label="category"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="all">all</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={Math.random() * 10000} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormGroup>
            </form>
          </Box>
        }
        headerContent="update"
        openButtonContent="update"
        closeButtonContent="update"
        closeFunc={handleUpdate}
      />
    </>
  );
};

export default UpdateProduct;

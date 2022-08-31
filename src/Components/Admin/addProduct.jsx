import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useAddProduct, useNotification } from "../../hooks";
import { Modal } from "../";
import { filtersStyles } from "../../styles";
import { useDispatch } from "react-redux";
import { addStorageProduct } from "../../store/features/admin/productsSlice";
let AddProduct = (props) => {
  let { categories } = props;
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState(0);
  let { addProduct } = useAddProduct();
  const { triggerNotification } = useNotification();
  let dispatch = useDispatch();

  let handleAddProduct = () => {
    let title = document.getElementById("title").value;
    let desc = document.getElementById("description").value;
    addProduct({
      variables: {
        input: {
          title: title,
          price: price,
          description: desc,
          category: category,
          image: "https://i.pravatar.cc",
        },
      },
    })
      .then((data) => {
        if (!data.errors) {
          triggerNotification(`added product ${title}`, "success");
          dispatch(
            addStorageProduct({
              product: {
                title: title,
                price: price,
                description: desc,
                category: category,
                image: "https://i.pravatar.cc",
                rating: {
                  rate: 0,
                  count: 0,
                },
                id: data.data.product.id,
              },
            })
          );
        } else triggerNotification(`failed to add product ${title}`, "error");
      })
      .catch((err) => {
        triggerNotification(`failed to add product ${title}`, "error");
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
                  id="title"
                />
                <TextField
                  placeholder="Write product`s description here"
                  variant="outlined"
                  label="description"
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
                <FormControl>
                  <InputLabel id="category-label">Category</InputLabel>
                  <Select
                    labelId="category-label"
                    label="Category"
                    value={category}
                    onChange={handleCategoryChange}
                    variant="outlined"
                  >
                    {categories.map((category, i) => (
                      <MenuItem key={i} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </FormGroup>
            </form>
          </Box>
        }
        openButtonContent="add product"
        closeButtonContent="add"
        headerContent="add product"
        closeFunc={handleAddProduct}
      />
    </>
  );
};

export default AddProduct;

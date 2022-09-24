import React, { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { useCategories, useFilterProducts } from "../../hooks";
import { Modal } from "..";
import FilterAlt from "@mui/icons-material/FilterAlt";
import { filtersStyles } from "../../styles";

let ProductsFliter = (props) => {
  let { setProducts } = props;
  let { categories } = useCategories();
  let [searchBy, setSearchBy] = useState("title");
  let [category, setCategory] = useState("all");
  let [limit, setLimit] = useState(5);
  let [priceValue, setPriceValue] = useState([0, 10000]);
  let [rateValue, setRateValue] = useState([0, 5]);
  let [countValue, setCountValue] = useState([0, 1000]);
  let { filterProducts } = useFilterProducts(setProducts);
 

  let handleFilter = () => {
    let desc = document.getElementById("desc").checked;
    let search = document.getElementById("search").value;
    filterProducts({
      desc,
      search,
      searchBy,
      category,
      limit,
      priceValue,
      rateValue,
      countValue
    })
  };

  const handleSearchChange = (event) => {
    setSearchBy(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Modal
      content={
        <Box sx={filtersStyles}>
          <form>
            <FormGroup>
              <FormControl>
                <InputLabel id="demo-simple-select-label">search by</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="search by"
                  onChange={handleSearchChange}
                  value={searchBy}
                >
                  <MenuItem value="id">id</MenuItem>
                  <MenuItem value="title">title</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <TextField id="search" label="search" variant="outlined" />
            </FormGroup>
            <FormGroup>
              <FormLabel>limit : </FormLabel>
              <Slider
                key={Math.random()}
                defaultValue={limit}
                valueLabelDisplay="auto"
                onChange={(e) => {
                  setLimit(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>price :</FormLabel>
              <Slider
                key={Math.random()}
                defaultValue={priceValue}
                min={0}
                max={1000}
                valueLabelDisplay="auto"
                color="success"
                onChange={(e) => {
                  setPriceValue(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>rate :</FormLabel>
              <Slider
                defaultValue={rateValue}
                min={0}
                max={5}
                valueLabelDisplay="auto"
                color="warning"
                onChange={(e) => {
                  setRateValue(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>count :</FormLabel>
              <Slider
                key={Math.random()}
                defaultValue={countValue}
                min={0}
                max={1000}
                valueLabelDisplay="auto"
                color="info"
                onChange={(e) => {
                  setCountValue(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup>
              <FormControl>
                <InputLabel id="categoryLabel">select catagory</InputLabel>
                <Select
                  labelId="categoryLabel"
                  label="select catagory"
                  onChange={handleCategoryChange}
                  defaultValue={category}
                >
                  <MenuItem value="all">all</MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </FormGroup>
            <FormGroup className="m-2">
              <FormControlLabel
                control={<Checkbox value="desc" id="desc" />}
                label="sort Desc"
              />
            </FormGroup>
          </form>
        </Box>
      }
      headerContent="filter products"
      openIcon={<FilterAlt />}
      closeButtonContent="fliter"
      closeFunc={handleFilter}
    />
  );
};

export default ProductsFliter;

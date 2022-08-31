import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import FilterAlt from "@mui/icons-material/FilterAlt";
import { Modal } from "../";
import { filtersStyles } from "../../styles";
import { useFilterUsers } from "../../hooks";

let UsersFilter = () => {
  let [searchBy, setSearchBy] = useState("id");
  let [limit, setLimit] = useState(5);
  let { filterUsers } = useFilterUsers();

  let handleFilter = () => {
    let search = document.getElementById("search").value;
    let desc = document.getElementById("desc").checked;
    filterUsers({
      search,
      searchBy,
      desc,
      limit,
    });
  };

  return (
    <Modal
      content={
        <Box sx={filtersStyles}>
          <form>
            <FormGroup>
              <FormControl>
                <InputLabel id="selectLabel">search by</InputLabel>
                <Select
                  id="selectBox"
                  labelId="selectLabel"
                  label="search by"
                  value={searchBy}
                  onChange={(e) => setSearchBy(e.target.value)}
                >
                  <MenuItem value="id">id</MenuItem>
                  <MenuItem value="email">email</MenuItem>
                  <MenuItem value="username">username</MenuItem>
                  <MenuItem value="password">password</MenuItem>
                  <MenuItem value="firstname">firstname</MenuItem>
                  <MenuItem value="lastname">lastname</MenuItem>
                  <MenuItem value="city">city</MenuItem>
                  <MenuItem value="street">street</MenuItem>
                  <MenuItem value="number">number</MenuItem>
                  <MenuItem value="zipcode">zipcode</MenuItem>
                  <MenuItem value="lat">geolocation lat</MenuItem>
                  <MenuItem value="long">geolocation long</MenuItem>
                  <MenuItem value="phone">phone</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <TextField
                id="search"
                placeholder="search"
                variant="outlined"
                label="search"
              />
            </FormGroup>
            <FormGroup>
              <Slider
                key={Math.random()}
                defaultValue={limit}
                onChange={(e) => setLimit(e.target.value)}
                valueLabelDisplay="auto"
              />
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox value="desc" id="desc" />}
                label="sort Desc"
              />
            </FormGroup>
            <Button onClick={handleFilter}>filter</Button>
          </form>
        </Box>
      }
      headerContent="filter users"
      openIcon={<FilterAlt />}
      closeButtonContent="fliter"
      closeFunc={handleFilter}
    />
  );
};

export default UsersFilter;

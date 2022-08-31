import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import React, { useState } from "react";
import { Modal } from "../";
import FilterAlt from "@mui/icons-material/FilterAlt";
import { filtersStyles } from "../../styles";
import { useFilterCarts } from "../../hooks";

let CartsFilter = () => {
  let [searchBy, setSearchBy] = useState("id");
  let [startDate, setStartDate] = useState(new Date());
  let [endDate, setEndDate] = useState(new Date());
  let [limit, setLimit] = useState(5);
  let { filterCarts } = useFilterCarts();

  let handleFilter = () => {
    let search = document.getElementById("search").value;
    let desc = document.getElementById("desc").checked;
    filterCarts({
      search,
      desc,
      startDate,
      endDate,
      limit,
      searchBy,
    });
  };

  return (
    <Modal
      content={
        <Box sx={filtersStyles}>
          <form>
            <FormGroup>
              <FormControl fullWidth>
                <InputLabel id="searchByLable">search by</InputLabel>
                <Select
                  value={searchBy}
                  onChange={(event) => setSearchBy(event.target.value)}
                  labelId="searchByLable"
                  id="demo-simple-select"
                  label="search by"
                >
                  <MenuItem value="id">id</MenuItem>
                  <MenuItem value="userId">userId</MenuItem>
                  <MenuItem value="date">date</MenuItem>
                  <MenuItem value="productId">productId</MenuItem>
                  <MenuItem value="quantity">quantity</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
            <FormGroup>
              <TextField id="search" label="search" variant="outlined" />
            </FormGroup>
            <FormGroup>
              <FormLabel>limit :</FormLabel>
              <Slider
                defaultValue={limit}
                onChange={(e) => setLimit(e.target.value)}
                valueLabelDisplay="auto"
                key={Math.random()}
              />
            </FormGroup>
            <FormGroup>
              <Grid container>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      onChange={(value) => setStartDate(value)}
                      id="startDate"
                      value={startDate}
                      renderInput={(params) => (
                        <TextField {...params} label="start" />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      onChange={(value) => setEndDate(value)}
                      id="endDate"
                      renderInput={(params) => <TextField {...params} />}
                      label="end"
                      value={endDate}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox value="desc" id="desc" />}
                label="sort Desc"
              />
            </FormGroup>
          </form>
        </Box>
      }
      headerContent="filter carts"
      openIcon={<FilterAlt />}
      closeButtonContent="fliter"
      closeFunc={handleFilter}
    />
  );
};

export default CartsFilter;

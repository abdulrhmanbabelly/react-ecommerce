import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Select, Slider, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { filterCarts } from "../../functions";

let CartsFilter = () => {

    let [searchBy, setSearchBy] = useState('id');
    let [startDate, setStartDate] = useState(new Date());
    let [endDate, setEndDate] = useState(new Date());
    let [limit, setLimit] = useState(5);
    let [getCarts, { data }] = useLazyQuery(gql`
        query getCarts($path : String) {
                sortedCarts(path : $path) @rest(type : "cart", path : "carts{args.path}") {
                    products
                    date
                    id
                    userId
                }
            }
        `);
    let handleFilter = async () => {

        let search = document.getElementById('search').value;
        let desc = document.getElementById('desc').checked;

        await getCarts({
            variables : {
                path : `/?${( desc ? 'sort=desc' : 'sort=asc')}${(startDate && endDate) && `&startdate=${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}&enddate=${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`}&limit=${limit}`
            }
        });

        if (data?.sortedCarts) {
            filterCarts({
                searchBy : searchBy,
                search : search
            }, data);
        }

    }

    return (
        <form className="filter">
            <FormGroup>
                <FormControl fullWidth>
                    <InputLabel id="searchByLable">search by</InputLabel>
                    <Select value={searchBy} onChange={(event) => setSearchBy(event.target.value)} labelId="searchByLable" id="demo-simple-select" label="search by">
                        <MenuItem value="id">id</MenuItem>
                        <MenuItem value="userId">userId</MenuItem>
                        <MenuItem value="date">date</MenuItem>
                        <MenuItem value="productId">productId</MenuItem>
                        <MenuItem value="quantity">quantity</MenuItem>
                    </Select>
                </FormControl>
            </FormGroup>
            <FormGroup>
                <TextField id='search' label="search" variant="outlined" />
            </FormGroup>
            <FormGroup>
                <FormLabel>
                    limit : 
                </FormLabel>
                <Slider defaultValue={limit} onChange={(e) => setLimit(e.target.value)} valueLabelDisplay/>
            </FormGroup>
            <FormGroup>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker 
                                onChange={(value) => setStartDate(value)}
                                id="startDate"
                                value={startDate}
                                renderInput={(params) => <TextField {...params} label="start"/>}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} >
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
                <FormControlLabel control={<Checkbox value='desc' id="desc"/>} label='sort Desc'/>
            </FormGroup>
            <Button onClick={handleFilter}>
                filter
            </Button>
        </form>
    )

}

export default CartsFilter;
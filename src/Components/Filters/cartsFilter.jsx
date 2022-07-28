import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Slider, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React, { useState } from "react";
import cartsFilter from "../../helpers/cartsFilter";

let CartsFilter = (props) => {

    let { button, setCarts } = props;
    let [selectValue, setSelectValue] = useState('id');
    let [startDate, setStartDate] = useState(new Date());
    let [endDate, setEndDate] = useState(new Date());

    return (
        <form className="filter">
            <FormGroup>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">search by</InputLabel>
                    <Select value={selectValue} onChange={(event) => setSelectValue(event.target.value)} labelId="demo-simple-select-label" id="demo-simple-select" label="search by">
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
                <Slider defaultValue={10} valueLabelDisplay/>
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
            <Button onClick={() => {
                cartsFilter(setCarts)
            }}>
                filter
            </Button>
            <Button>
                {button}
            </Button>
        </form>
    )

}

export default CartsFilter;
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Slider, TextField } from "@mui/material";
import React, { useState } from "react";
import { usersFilter } from "../../functions";

let UsersFilter = (props) => {

    let { setUsers } = props;
    let [selectValue, setSelectValue] = useState('id');

    let handleChange = (e) => { setSelectValue(e.target.value) }

    return (
        <form className="filter">
            <FormGroup>
                <FormControl>
                    <InputLabel id="selectLabel">search by</InputLabel>
                    <Select id='selectBox' labelId="selectLabel" label="search by" value={selectValue} onChange={handleChange}>
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
                <TextField id='search' placeholder="search" variant="outlined" label="search"/>
            </FormGroup>
            <FormGroup>
                <Slider id='limit' defaultValue={10} valueLabelDisplay/>
            </FormGroup>
            <FormGroup>
                <FormControlLabel control={<Checkbox value='desc'/>} label='sort Desc'/>
            </FormGroup>
            <Button onClick={() => {
                usersFilter(setUsers);
            }}>
                filter
            </Button>
        </form>
    )

}

export default UsersFilter;
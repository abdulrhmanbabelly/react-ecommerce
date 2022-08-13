import { useLazyQuery } from "@apollo/client";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Slider, TextField } from "@mui/material";
import React, { useState } from "react";
import { filterUsers } from "../../functions";
import { gql } from "@apollo/client";
import { FilterAlt } from "@mui/icons-material";
import { Modal } from "../";

let UsersFilter = () => {

    let [searchBy, setSearchBy] = useState('id');
    let [limit, setLimit] = useState(5);
    let [getUsers, {data}] = useLazyQuery(gql`
    query getUsers($path : String) {
            sortedUsers(path : $path) @rest(type : "user", path : "users{args.path}") {
                id
                email
                username
                password
                name {
                    firstname
                    lastname
                }
                address {
                    city
                    street
                    number
                    zipcode
                    geolocation {
                        lat
                        long
                    }
                }
                phone
            }
        }
    `);

    let handleFilter = async () => {

        let search = document.getElementById('search').value;
        let desc = document.getElementById('desc').checked;
        
        await getUsers({
            variables : {
                path : `/?${( desc ? 'sort=desc' : 'sort=asc')}&limit=${limit}`
            }
        });

        if(data?.sortedUsers) {
            filterUsers({
                searchBy : searchBy,
                search : search
            }, data)
        }

    }

    return (
        <Modal content={
        <form className="filter">
            <FormGroup>
                <FormControl>
                    <InputLabel id="selectLabel">search by</InputLabel>
                    <Select id='selectBox' labelId="selectLabel" label="search by" value={searchBy} onChange={e => setSearchBy(e.target.value)}>
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
                <Slider key={Math.random()} id='limit' defaultValue={limit} onChange={e => setLimit(e.target.value)} valueLabelDisplay="auto"/>
            </FormGroup>
            <FormGroup>
                <FormControlLabel control={<Checkbox value='desc' id='desc'/>} label='sort Desc'/>
            </FormGroup>
            <Button onClick={handleFilter}>
                filter
            </Button>
        </form>
        } headerContent='filter users' 
            openIcon={<FilterAlt />}
            closeButtonContent='fliter'
            closeFunc={handleFilter}  />
    )

}

export default UsersFilter;
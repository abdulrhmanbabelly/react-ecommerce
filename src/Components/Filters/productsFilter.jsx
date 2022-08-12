import React, { useState } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material';
import { useCategories } from '../../hooks';
import { filterProducts } from '../../functions';
import { gql, useLazyQuery } from '@apollo/client';

let ProductsFliter = () => {
    
    let { categories } = useCategories();
    let [searchBy, setSearchBy] = useState('title');
    let [category, setCategory] = useState('all');
    let [limit, setLimit] = useState(5);
    let [priceValue, setPriceValue] = useState([0,10000]);
    let [rateValue, setRateValue] = useState([0,5]);
    let [countValue, setCountValue] = useState([0,1000]);

    let [getProducts, { data }] = useLazyQuery(gql`
        query getProducts($path : String) {
                sortedProducts(path : $path) @rest(type : "product", path : "products{args.path}") {
                    title
                    category
                    price
                    rating {
                        rate
                        count
                    }
                    id
                }
            }
        `);

    let handleFilter = async () => {

        let desc = document.getElementById('desc').checked;
        let search = document.getElementById('search').value;

        await getProducts({
            variables : {
                path : `${category === 'all' ? '' : `/category/${category}`}/${( desc ? '?sort=desc' : '?sort=asc')}`
            }
        });

        if (data?.sortedProducts) {
            filterProducts({
                searchBy : searchBy,
                limit : limit,
                search : search,
                priceValue : priceValue,
                rateValue : rateValue,
                countValue : countValue
            }, data);
        }

    }

    const handleSearchChange = (event) => {
        setSearchBy(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
    <form>
        <FormGroup>
            <FormControl>
                <InputLabel id="demo-simple-select-label">search by</InputLabel>
                <Select labelId='demo-simple-select-label' label="search by" onChange={handleSearchChange} value={searchBy}>
                    <MenuItem value="id">id</MenuItem>
                    <MenuItem value="title">title</MenuItem>
                </Select>
            </FormControl>
        </FormGroup>
        <FormGroup>
            <TextField id='search' label="search" variant="outlined" />
        </FormGroup>
        <FormGroup>
            <FormLabel>limit : </FormLabel>
            <Slider key={Math.random()} defaultValue={limit} valueLabelDisplay="auto" onChange={(e) => {
                setLimit(e.target.value);
            }}/>
        </FormGroup>
        <FormGroup>
            <FormLabel>price :</FormLabel>
            <Slider key={Math.random()} defaultValue={priceValue} min={0} max={1000} valueLabelDisplay="auto" color="success" onChange={(e) => {
                setPriceValue(e.target.value);
            }}/>
        </FormGroup>
        <FormGroup>
            <FormLabel>rate :</FormLabel>
            <Slider key={Math.random()} defaultValue={rateValue} min={0} max={5} valueLabelDisplay="auto" color="warning" onChange={(e) => {
                setRateValue(e.target.countValue);
            }}/>
        </FormGroup>
        <FormGroup>
            <FormLabel>count :</FormLabel>
            <Slider key={Math.random()} defaultValue={countValue} min={0} max={1000} valueLabelDisplay="auto" color="info" onChange={(e) => {
                setCountValue(e.target.value);
            }}/>
        </FormGroup>
        <FormGroup>
            <FormControl>
                <InputLabel id="categoryLabel">select catagory</InputLabel>
                <Select labelId='categoryLabel' label="select catagory" onChange={handleCategoryChange} defaultValue={category}>
                <MenuItem value="all">all</MenuItem>
                    {   
                        categories.map((category) => <MenuItem key={category} value={category}>{category}</MenuItem>)
                    }
                </Select>
            </FormControl>
        </FormGroup>
        <FormGroup className='m-2'>
            <FormControlLabel control={<Checkbox value='desc' id="desc"/>} label='sort Desc'/>
        </FormGroup>
        <Button onClick={handleFilter}>filter</Button>
    </form>
    )

}

export default ProductsFliter;
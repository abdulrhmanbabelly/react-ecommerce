import React, { useState } from 'react';
import "nouislider/distribute/nouislider.scss";
import productsFilter from '../../helpers/productsFilter';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, Slider, TextField } from '@mui/material';



let ProductsFliter = (props) => {

    let { setProducts, button, categories } = props;
    
    let [searchBy, setSearchBy] = useState('title');
    let [category, setCategory] = useState('all');

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
            <FormLabel>limit : <span id="printLimit"></span></FormLabel>
            <Slider defaultValue={5} valueLabelDisplay="auto" />
        </FormGroup>
        <FormGroup>
            <FormLabel>price :</FormLabel>
            <Slider defaultValue={[0, 1000]} min={0} max={1000} valueLabelDisplay="auto" color="success"/>
        </FormGroup>
        <FormGroup>
            <FormLabel>rate :</FormLabel>
            <Slider defaultValue={[0, 5]} min={0} max={5} valueLabelDisplay="auto" color="warning"/>
        </FormGroup>
        <FormGroup>
            <FormLabel>count :</FormLabel>
            <Slider defaultValue={[0, 1000]} min={0} max={1000} valueLabelDisplay="auto" color="info"/>
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
        <Button onClick={() => {
            productsFilter(setProducts);
        }}>filter</Button>
        { 
            button && 
            <Button>
                {button}
            </Button>
        }
    </form>
    )

}

export default ProductsFliter;
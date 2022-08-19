import React, { useState } from 'react';
import { FormGroup, FormLabel, MenuItem, Select, Slider, TextField, FormControl, InputLabel, Box } from "@mui/material";
import { useAddProduct, useNotification } from '../../hooks';
import { Modal } from '../';
import { filtersStyles } from '../../styles';

let AddProduct = (props) => {

    let { categories } = props;
    let [category, setCategory] = useState('');
    let [price, setPrice] = useState(0);
    let { addProduct } = useAddProduct();
    const { triggerNotification } = useNotification();

    let handleAddProduct = () => {

        let title = document.getElementById('title').value;
        addProduct(
            {
                variables : {
                    input : {
                        title : title,
                        price : price,
                        description : document.getElementById('description').value,
                        category : category,
                        image: 'https://i.pravatar.cc',
                    },
                }
            }

        ).then((data) => {
            
            if (!data.errors) triggerNotification(`added product ${title}`, "success");
            else triggerNotification(`failed to add product ${title}`, "error");

        }).catch((err) => {
            triggerNotification(`failed to add product ${title}`, "error");
        });;
    }

    let handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    let handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    return (
        <>
        <Modal content={
            <Box sx={filtersStyles}>
                <form>
                <FormGroup>
                    <TextField type="text" placeholder="Example : HUAWEI MATE 10 LITE" label = 'title' variant="outlined" id="title"/>
                    <TextField placeholder='Write product`s description here' variant="outlined" label="description" id="description"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Price :</FormLabel>
                    <FormControl>
                        <Slider min={0} max={10000} valueLabelDisplay="auto" defaultValue={price} onChange={handlePriceChange}/>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select labelId='category-label' label="Category" value={category} onChange={handleCategoryChange} variant='outlined'>
                            {categories.map((category, i) => <MenuItem key={i} value={category}>{category}</MenuItem>)}
                        </Select>
                    </FormControl>
                </FormGroup>
            </form>
        </Box>
        } openButtonContent='add product'
            closeButtonContent='add'
            headerContent='add product'
            closeFunc={handleAddProduct}/>
        </>
        
  );
}

export default AddProduct;

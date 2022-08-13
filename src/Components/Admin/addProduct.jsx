import React, { useState } from 'react';
import { FormGroup, FormLabel, MenuItem, Select, Slider, TextField, FormControl, InputLabel } from "@mui/material";
import { Popup } from '../';
import { useAddProduct } from '../../hooks';
import { Modal } from '../';

let AddProduct = (props) => {

    const [open, setOpen] = useState(false);
    let { categories } = props;
    let [category, setCategory] = useState('');
    let [price, setPrice] = useState(0);
    let [popup, setPopup] = useState('');
    let { addProduct } = useAddProduct();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let handleAddProduct = async () => {
        await addProduct(
            {
                variables : {
                    input : {
                        title : document.getElementById('title').value,
                        price : price,
                        description : document.getElementById('description').value,
                        category : category,
                        image: 'https://i.pravatar.cc',
                    },
                }
            }

        );
        setPopup(<Popup content={`added product`} type={"success"} title="Done Adding product" setPopup={setPopup}/>);
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
            } openButtonContent='add product'
              closeButtonContent='add'
              headerContent='add product'
              closeFunc={handleAddProduct}/>
        {popup}
        </>
        
  );
}

export default AddProduct;

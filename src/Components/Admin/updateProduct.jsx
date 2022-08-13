import React, { useState } from 'react';
import { FormGroup, FormLabel, MenuItem, Select, Slider, TextField, FormControl, Button } from "@mui/material";
import { Popup } from '../';
import { useUpdateProduct } from '../../hooks';
import { Modal } from '../'

let UpdateProduct = (props) => {



    let { title, description, id, rating } = props.product;
    let { categories } = props;
    let [category, setCategory] = useState(props.product.category);
    let [price, setPrice] = useState(props.product.price);
    let [popup, setPopup] = useState('');
    let { updateProduct } = useUpdateProduct(rating)

    let handleUpdate = async () => {
        let newTitle = document.getElementById('title').value;
        await updateProduct({
            variables : {
                input : {
                    title : newTitle,
                    price : price,
                    description : document.getElementById('description').value,
                    category : category,
                },
                id : id
            }
        });
        setPopup(<Popup content={`updated product ${title} to be ${newTitle}`} type="success" title="Done Updating Product" setPopup={setPopup}/>)
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
            <TextField type="text" placeholder="Example : HUAWEI MATE 10 LITE" label = 'title' variant="outlined" defaultValue={title} id="title"/>
            <TextField placeholder='Write product`s description here' variant="outlined" label="description" defaultValue={description} id="description"/>
        </FormGroup>
        <FormGroup>
            <FormLabel>Price :</FormLabel>
            <FormControl>
                <Slider min={0} max={10000} valueLabelDisplay="auto" defaultValue={price} onChange={handlePriceChange}/>
            </FormControl>
        </FormGroup>
        <FormGroup>
            <FormLabel>Category : </FormLabel>
            <Select label="category" value={category} onChange={handleCategoryChange}>
                <MenuItem value="all">all</MenuItem>
                {categories.map((category) => <MenuItem key={Math.random() * 10000} value={category}>{category}</MenuItem>)}
            </Select>
        </FormGroup>
    </form>
    } headerContent='update' 
        openButtonContent='update'
        closeButtonContent='update'
        closeFunc={handleUpdate}  />
    {popup}
    </>
  );
}

export default UpdateProduct;
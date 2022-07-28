import { Box, Button, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { deleteProduct } from '../../api/products';
import Popup from '../common/Popup';
import UpdateProduct from './updateProduct';

let AdminProduct = (props) => {

    let { title, price, id, category, rating } = props.product;
    let { rate, count } = rating;
    let { categories } = props;
    let [popup, setPopup] = useState('');
    let handleDeleteProduct = async () => {
        let res = await deleteProduct(id);
        if (res.title === title) setPopup(<Popup type="error" title="Done Deleting Product" content={`deleted product ${res.title}`} setPopup={setPopup}/>);
    } 

    return (
        <>
        <TableRow>
            <TableCell className="text-info">{id}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell className='text-danger'>{count}</TableCell>
            <TableCell className='text-warning'>{rate}</TableCell>
            <TableCell className="text-success">${price}</TableCell>
            <TableCell style={{
                display : 'flex'
            }}>
            <Box mr={2}>
                <Button color="error" onClick={handleDeleteProduct}>delete</Button>
            </Box>
            <UpdateProduct product={props.product} categories={categories}/>
            </TableCell>
        </TableRow>
        {popup}
        </>
    )
}

export default AdminProduct;
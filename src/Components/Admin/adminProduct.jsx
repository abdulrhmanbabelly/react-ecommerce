import { Box, Button, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { Popup, UpdateProduct } from '../';
import { useDeleteProduct } from '../../hooks';

let AdminProduct = (props) => {

    let { title, price, id, category, rating } = props.product;
    let { rate, count } = rating;
    let { categories } = props;    
    let [popup, setPopup] = useState('');
    let { deleteProduct } = useDeleteProduct(id);

    let handleDeleteProduct = async () => {
        setPopup(<Popup type="error" title="Done Deleting Product" content={`deleted product ${title}`} setPopup={setPopup} then={async() => {
            await deleteProduct({
                variables : {
                    id : id
                }
            });
        }}/>);

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
            {popup}
            </TableCell>
        </TableRow>
        </>
    )
}

export default AdminProduct;
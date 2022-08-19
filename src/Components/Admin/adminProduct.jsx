import { Box, Button, TableCell, TableRow } from '@mui/material';
import { blue, green, red, yellow } from '@mui/material/colors';
import React from 'react';
import { UpdateProduct } from '../';
import { useDeleteProduct, useNotification } from '../../hooks';

let AdminProduct = (props) => {

    let { title, price, id, category, rating } = props.product;
    let { rate, count } = rating;
    let { categories } = props;    
    let { deleteProduct } = useDeleteProduct(id);
    const { triggerNotification } = useNotification();

    let handleDeleteProduct = () => {
        deleteProduct({
            variables : {
                id : id
            }
        }).then((data) => {
            
            if (!data.errors) triggerNotification(`deleted product ${title}`, "success");
            else triggerNotification(`failed to delete product ${title}`, "error");

        }).catch((err) => {
            triggerNotification(`failed to delete product ${title}`, "error");
        });
    } 

    return (
        <>
        <TableRow>
            <TableCell sx={{ color: blue['700'] }}>{id}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{title}</TableCell>
            <TableCell sx={{ color: red['700'] }}>{count}</TableCell>
            <TableCell sx={{ color: yellow['700'] }}>{rate}</TableCell>
            <TableCell sx={{ color: green['700'] }}>${price}</TableCell>
            <TableCell style={{
                display : 'flex'
            }}>
            <Box mr={2}>
                <Button color="error" onClick={handleDeleteProduct}>delete</Button>
            </Box>
            <UpdateProduct product={props.product} categories={categories}/>
            </TableCell>
        </TableRow>
        </>
    )
}

export default AdminProduct;
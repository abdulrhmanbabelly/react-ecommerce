import { Button } from '@mui/material';
import React from 'react';
import { useAddNewCart, useNotification } from '../../hooks';

let AddNewCart = () => {

    let { addNewCart } = useAddNewCart();
    let { triggerNotification } = useNotification();
 
    let handleAddNewCart = () => {
        let date = new Date();
        let cart = {
            userId : 1,
            products : [],
            date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        };
        addNewCart({
            variables : {
                input : {
                    userId : cart.userId,
                    products : [],
                    date : cart.date
                }
            }
        }).then((data) => {
            
            let id = data.data.cart.id
            if (!data.errors) triggerNotification(`added cart ${id}`, "success");
            else triggerNotification(`failed to add cart ${id}`, "error");

        }).catch((err) => {
            triggerNotification(`failed to add cart ${id}`, "error");
        });
    }

    return (
        <>
            <Button color="success" variant='contained' onClick={handleAddNewCart}>
                New cart
            </Button>
        </>
    )

}

export default AddNewCart;
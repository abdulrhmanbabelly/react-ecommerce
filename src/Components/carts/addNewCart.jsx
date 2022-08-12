import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Popup } from '../';
import { useAddNewCart } from '../../hooks';

let AddNewCart = () => {

    let [popup, setPopup] = useState('');
    let { addNewCart } = useAddNewCart();
    
    let handleAddNewCart = async () => {
        let date = new Date();
        let cart = {
            userId : 1,
            products : [],
            date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        };
        await addNewCart({
            variables : {
                input : {
                    userId : cart.userId,
                    products : [],
                    date : cart.date
                }
            }
        });
        setPopup(<Popup title="created Cart" type="success" content={`added new Cart`} setPopup={setPopup}/>);
    }

    return (
        <>
            <Button color="success" variant='contained' onClick={handleAddNewCart}>
                New cart
            </Button>
            {popup}
        </>
    )

}

export default AddNewCart;
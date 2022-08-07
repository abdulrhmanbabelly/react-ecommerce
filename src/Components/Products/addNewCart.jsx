import { useMutation } from '@apollo/client';
import { Button, Card } from '@mui/material';
import React, { useState } from 'react';
import { Popup } from '../';
import { ADD_NEW_CART } from '../../gql';

let AddNewCart = (props) => {

    let { carts, setCarts } = props;
    let [popup, setPopup] = useState('');
    let [addNewCart] = useMutation(ADD_NEW_CART);
    let handleAddNewCart = async () => {
        let date = new Date();
        let cart = {
            userId : 1,
            products : [],
            date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        };
        carts.push(cart);
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
        setCarts(carts.map((cart) => cart));
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
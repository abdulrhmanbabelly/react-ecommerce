import { Button } from '@mui/material';
import React, { useState } from 'react';
import { addNewCart } from '../../api/cart';
import Popup from '../common/Popup';

let AddNewCart = (props) => {

    let { carts, setCarts } = props;
    let [popup, setPopup] = useState('');

    let handleAddNewCart = async () => {
        let date = new Date();
        let cart = {
            userId : 1,
            products : [],
            date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        };
            carts.push(cart);
            let res = await addNewCart(cart);
            setPopup(<Popup title="created Cart" type="success" content={`added cart ${res.id}`} setPopup={setPopup}/>);
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
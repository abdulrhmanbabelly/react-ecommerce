import { Button, FormGroup, TextField, CircularProgress, useTheme, Box } from '@mui/material';
import React, { useState } from 'react';
import { useUpdateCart, useUserCarts } from '../../hooks';
import { Popup, AddNewCart, Cart } from '../';
import { cartsStyles } from '../../styles';
import { Modal } from '../';
import SignIn from '../../Pages/signIn';
import { useQuery } from '@apollo/client';
import { LOGGED_IN } from '../../gql';


let AddToCart = (props) => {

    let theme = useTheme();
    let { productId, productTitle } = props;
    let { carts, loading, error } = useUserCarts(1);
    let [popup, setPopup] = useState('');
    let loggedIn = useQuery(LOGGED_IN).data.loggedIn;
    let { updateCart } = useUpdateCart();


    let handleAddToCart = async (cart) => {
        let found = false;
        for (let i = 0; i < cart.products.length; i++) {
            if (cart.products[i].productId == productId) {
                cart.products[i].quantity += Number(document.getElementById(`quantity${cart.id}`).value);
                found = true;
                break;
            }
        }
        if (!found) cart.products.push({ productId : Number(productId), quantity : Number(document.getElementById(`quantity${cart.id}`).value)});
        await updateCart({
            variables : {
                input : cart,
                id : cart.id
            }
        });
        setPopup(<Popup content={`added product ${productTitle}`} type="success" title="Done Updating Cart" setPopup={setPopup}/>);
    }


    if (loading) return <CircularProgress />
    if (error) return <h2>error</h2>

    return (
    <>
        <Modal 
            content={
            <Box sx={cartsStyles(theme)}>
                { loggedIn ? 
                <>
                    {
                    carts.map((cart) => {
                        return (
                        <div key={Math.random() * 100000}>
                            <Cart 
                                cart={cart}
                            />
                            <form className='addToCartForm'>
                                <FormGroup>
                                    <TextField type='number' id={`quantity${cart.id}`} label='quantity' variant='filled'/>     
                                </FormGroup>
                                <FormGroup>
                                    <Button variant='contained' onClick={() => {
                                        handleAddToCart(cart)
                                    }}>
                                        Add to cart
                                    </Button>
                                </FormGroup>
                            </form>
                        </div>
                        )})
                    }
                    <AddNewCart carts={carts} />
                </> : <SignIn /> }
            </Box>
            }
            openButtonContent='add to cart'
            closeButtonContent='close'
            headerContent='add to cart'
            openButtonColor='warning'
        />
        {popup}
    </>
    );
}

export default AddToCart;
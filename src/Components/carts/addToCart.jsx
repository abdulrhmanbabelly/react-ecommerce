import { Button, FormGroup, TextField, CircularProgress, useTheme, Box } from '@mui/material';
import React from 'react';
import { useNotification, useUserCarts } from '../../hooks';
import { AddNewCart, Cart } from '../';
import { cartsStyles } from '../../styles';
import { Modal } from '../';
import { SignIn } from '../../Pages';
import { useQuery } from '@apollo/client';
import { LOGGED_IN, UPDATE_CART, UPDATE_COMPONENET } from '../../gql';
import client from '../../config/apolloClient';


let AddToCart = (props) => {

    let theme = useTheme();
    let { productId, productTitle } = props;
    let { carts, loading, error } = useUserCarts(1);
    let loggedIn = useQuery(LOGGED_IN).data.loggedIn;
    let { triggerNotification } = useNotification();
    let { data } = useQuery(UPDATE_COMPONENET);


    let handleAddToCart = (cart) => {
        let found = false;
        for (let i = 0; i < cart.products.length; i++) {
            if (cart.products[i].productId == productId) {
                cart.products[i].quantity += Number(document.getElementById(`quantity${cart.id}`).value);
                found = true;
                break;
            }
        }
        if (!found) cart.products.push({ productId : Number(productId), quantity : Number(document.getElementById(`quantity${cart.id}`).value)});
        client.writeQuery({
            query : UPDATE_CART,
            variables : {
                id : cart.id
            },
            data : {
                cart : cart
            }
        });
        triggerNotification(`added prodcut ${productTitle}`)
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
                    carts.map((cart, i) => 
                        <div key={i}>
                            <Cart cart={cart} price={localStorage.getItem(`price:${cart.id}`)}/>
                            <div key={Math.random() * 100000}>
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
                        </div>)}
                    <AddNewCart/>
                </> : <SignIn /> }
            </Box>
            }
            openButtonContent='add to cart'
            closeButtonContent='close'
            headerContent='add to cart'
            openButtonColor='warning'
        />
    </>
    );
}

export default AddToCart;
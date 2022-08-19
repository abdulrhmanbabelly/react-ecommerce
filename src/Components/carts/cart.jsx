import React from 'react';
import { Delete, CreditCard, Facebook, ArrowRight, WhatsApp, Instagram } from '@mui/icons-material';
import { Box, Button, Card, FormGroup, Grid, IconButton, TextField, Typography } from '@mui/material';
import { CartProduct } from '..';
import { useDeleteCart, useNotification, useUpdateCart } from '../../hooks';

let Cart = (props) => {

    let { cart, price } = props;
    localStorage.setItem(`price:${cart.id}`, 0)
    let { products, date, id } = cart; 
    let { deleteCart } = useDeleteCart(id);
    let { updateCart } = useUpdateCart();
    let { triggerNotification } = useNotification();


    let handleDelete = () => {
        
        deleteCart({
            variables : {
                id : id
            }
        }).then((data) => {
            
            if (!data.errors) triggerNotification(`deleted cart ${id}`, "success");
            else triggerNotification(`failed to delete cart ${id}`, "error");

        }).catch((err) => {
            triggerNotification(`failed to delete cart ${id}`, "error");
        });
    }

    let handleUpdateCart = () => {
        updateCart({
            variables : {
                id : id,
                input : cart    
            }
        }).then((data) => {
            
            if (!data.errors) triggerNotification(`updated cart ${id}`, "success");
            else triggerNotification(`failed to update cart ${id}`, "error");

        }).catch((err) => {
            triggerNotification(`failed to update cart ${id}`, "error");
        });
    }
    return (
    <>
    <Card className="cart">
        <Box>
        <Grid container justifyContent='space-between'>
            <Grid item>
                <h4>Date : {date.substring(0, 10)}</h4>
            </Grid>
            <Grid item>
                <IconButton onClick={handleDelete}>
                    <Delete style={{ Gridor: "#cecece", cursor : 'pointer' }}/>
                </IconButton>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item md={7} sm={12}>
                {
                products.map((product, i) => {
                    return <CartProduct 
                    key = {i}
                    product = {product}
                    cart = {cart}
                />
                }
  
                )}   
                </Grid>
            <Grid item md={5} sm={12}>
                <Card className='paycard'>
                    <Box p={1} overflow="hidden">
                        <Grid container justifyContent='space-between' mb={4}>
                            <h2 className="mb-0">Card details</h2>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar" />
                        </Grid>

                        <Typography paragraph mb={2}>Card type</Typography>
                        <CreditCard />
                        <Facebook />
                        <WhatsApp />
                        <Instagram />

                        <form>
                            <FormGroup>
                                <TextField type="text" 
                                        placeholder="Enter Cardholder's Name" variant='outlined' label="Cardholder's Name"/>
                            </FormGroup>
                            <FormGroup>
                                <TextField type="text" 
                                        placeholder="1234 5678 9012 3457" variant='outlined' label="Card Number"/>
                            </FormGroup>
                            <FormGroup>  
                                <Grid container spacing={1}>
                                    <Grid item sm={6} xs={12}>
                                        <FormGroup>
                                            <TextField type="text" 
                                            placeholder="MM/YYYY" variant='outlined' label="Expiration"/>
                                        </FormGroup>
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <FormGroup>
                                            <TextField type="password" 
                                            placeholder="Enter Password" variant='outlined' label="Cvv"/>
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </form>

                        <hr />
                        <br/>
                        <Grid container justifyContent='space-between' mb={2}>
                            <Grid item>
                                <p>Subtotal</p>
                            </Grid>
                            <Grid item>
                                <p>$<span>{Number(price)}</span></p>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent='space-between' mb={2}>
                            <Grid item>
                                <p>Shipping</p>
                            </Grid>
                            <Grid item>
                                <p>$20.00</p>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent='space-between' mb={2}>
                            <Grid item>
                                <p>Total(Incl. taxes)</p>
                            </Grid>
                            <Grid item>
                                <p>$<span>{Number(price)+ 20}</span></p>
                            </Grid>
                        </Grid>
                        <Button color="info" className='checkoutButton' variant='contained'>
                            <div>$<span>{Number(price)+ 20}</span></div>
                            <span className='check'>Checkout <ArrowRight /></span>
                        </Button>
                    </Box>
                </Card>
            </Grid>
        </Grid>
        </Box>
        <Button onClick={handleUpdateCart} variant='outlined' sx={{ float : 'right', marginTop : '1vw', marginBottom : '-1vw' }}>save changes</Button>
    </Card>
    </>
    )
}

export default Cart;
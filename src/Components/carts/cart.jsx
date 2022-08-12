import React, { useState } from 'react';
import { Delete, CreditCard, Facebook, ArrowRight, WhatsApp, Instagram } from '@mui/icons-material';
import { Box, Button, Card, FormGroup, Grid, IconButton, TextField } from '@mui/material';
import { Popup, CartProduct } from '..';
import { useDeleteCart } from '../../hooks';

let Cart = (props) => {
    let { cart } = props;
    let { products, date, id } = cart; 
    let [popup, setPopup] = useState(null);
    let { deleteCart } = useDeleteCart(id);

    let handleDelete = () => {
        setPopup(<Popup content={`deleted cart ${id}`} type="error"
        title="Done Deleting Cart"
        setPopup={setPopup}
        then={
            async () => {
            await deleteCart({
                variables : {
                   id : id
                }
           })}
        }
        />);
    }

    return (
    <>
    <Card className="cart">
        <Box>
        <div className='d-flex justify-content-between'>
            <h4>Date : {date.substring(0, 10)}</h4>
            <IconButton onClick={handleDelete}>
                <Delete style={{Gridor: "#cecece", cursor : 'pointer'}}/>
            </IconButton>
        </div>
        <Grid container>
            <Grid item md={7} sm={12}>
                {
                products.map((product) => 
                <CartProduct 
                    key = {Math.random() * 100000}
                    product = {product}
                    cart = {cart}
                />
                )}   
                </Grid>
            <Grid item md={5} sm={12}>
                <Card className='paycard bg-primary'>
                    <Box>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="img-fluid rounded-3" style={{width: "45px"}} alt="Avatar" />
                        </div>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" type="submit" className="text-white"><CreditCard /></a>
                        <a href="#!" type="submit" className="text-white"><Facebook /></a>
                        <a href="#!" type="submit" className="text-white"><WhatsApp /></a>
                        <a href="#!" type="submit" className="text-white"><Instagram /></a>

                        <form className="mt-4 text-black">
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

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$<span id={`subtotal${id}`}>0</span></p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$<span id={`total${id}`}>0</span></p>
                        </div>

                        <Button color="info" className='checkoutButton' variant='contained'>
                            <div>$<span id={`checkout${id}`}>0</span></div>
                            <span>Checkout <ArrowRight /></span>
                        </Button>
                    </Box>
                </Card>
            </Grid>
        </Grid>
        </Box>
    </Card>
    {popup}
    </>
    )
}

export default Cart;
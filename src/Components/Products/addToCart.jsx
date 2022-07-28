import { Box, Button, Divider, FormGroup, TextField } from '@mui/material';
import React, { useState } from 'react';
import { updateCart } from '../../api/cart';
import { useUserCarts } from '../../hooks';
import Cart from '../common/cart';
import AddNewCart from './addNewCart';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Popup from '../common/Popup';
import useCartsStyles from '../../styles/carts';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let AddToCart = (props) => {

    let { productId, productTitle } = props;
    const [open, setOpen] = useState(false);
    let { carts, setCarts } = useUserCarts(1);
    let [popup, setPopup] = useState('');
    let classes = useCartsStyles();

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
        await updateCart(cart);
        setPopup(<Popup content={`added product ${productTitle}`} type="success" title="Done Updating Cart" setPopup={setPopup}/>);
        setCarts(carts.map((cart) => cart));
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <>
        <Button variant="contained" color='warning' onClick={handleClickOpen}>
            Add To Cart
        </Button>
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
                <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Add To Cart
                </Typography>
                <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                >
                    <CloseIcon />
                </IconButton>
            </Toolbar>
            </AppBar>
            <List className='carts'>
                <Box className={classes.carts}>
                    <h2 style={{ padding : "1vw", marginBottom : 0 }}>Select Cart</h2>
                    <Divider />
                    {
                        carts.map((cart) => {
                            return (
                            <div key={Math.random() * 100000}>
                            <Cart 
                                cart={cart}
                                carts={carts}
                                setCarts={setCarts} 
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
                    <AddNewCart setCarts={setCarts} carts={carts} />
                    <Divider/>
                    <Button color="secondary" variant='contained' style={{
                        margin : "1vw",
                        float : "right"
                    }} onClick={handleClose}>
                    Close
                    </Button>
                </Box>
            </List>
        </Dialog>
        {popup}
    </>
    );
}

export default AddToCart;
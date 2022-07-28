import { Grid } from '@mui/material';
import React from 'react';
import { useTheme } from 'react-jss';
import Cart from '../Components/common/cart';
import Footer from '../Components/common/footer';
import AddNewCart from '../Components/Products/addNewCart';
import { useUserCarts } from '../hooks';
import useCartsStyles from '../styles/carts';


let Carts = () => {

    let { carts, setCarts } = useUserCarts(1);
    let classes = useCartsStyles();

    return (
        <>
        <div className={`carts ${classes.carts}`}>
            {
                carts.map((cart) => 
                <Cart 
                cart={cart}
                carts={carts}
                setCarts={setCarts}
                key={Math.random() * 100000} 
                />)
            }
            <AddNewCart carts={carts} setCarts={setCarts}/>
            <Grid>
                <Footer/>   
            </Grid>
        </div>
        </>
    )
}

export default Carts;
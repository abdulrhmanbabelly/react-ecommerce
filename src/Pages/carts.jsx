import { Grid } from '@mui/material';
import React from 'react';
import { AddNewCart, Cart, Footer } from '../Components';
import { useUserCarts } from '../hooks';
import { useCartsStyles } from '../styles';

let Carts = () => {

    let { carts, setCarts, loading, error } = useUserCarts(1);

    let classes = useCartsStyles();
    if (loading) return (<h2>loading</h2>);
    if (error) return (<h2>error</h2>);

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
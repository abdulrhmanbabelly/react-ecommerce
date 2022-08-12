import { Grid } from '@mui/material';
import React from 'react';
import { AddNewCart, Cart, Footer, Loading } from '../Components';
import { useUserCarts } from '../hooks';
import { useCartsStyles } from '../styles';

let Carts = () => {

    let { carts, loading, error } = useUserCarts(1);
    let classes = useCartsStyles();
    if (loading) return (<Loading />);
    if (error) return (<h2>error</h2>);

    return (
        <>
        <div className={`carts ${classes.carts}`}>
            {
                carts.map((cart) => 
                <Cart 
                cart={cart}
                key={Math.random() * 100000} 
                />)
            }
            <AddNewCart carts={carts}/>
            <Grid>
                <Footer/>   
            </Grid>
        </div>
        </>
    )
}

export default Carts;
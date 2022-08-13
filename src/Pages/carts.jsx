import { Grid, useTheme } from '@mui/material';
import React from 'react';
import { AddNewCart, Cart, Footer, Loading } from '../Components';
import { useUserCarts } from '../hooks';
import { useCartsStyles } from '../styles';

let Carts = () => {

    let { carts, loading, error } = useUserCarts(1);
    let theme = useTheme();
    let classes = useCartsStyles(theme);
    if (loading) return (<Loading width={100} height={100}/>);
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
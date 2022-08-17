import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import { AddNewCart, Cart, Footer, Loading } from '../Components';
import { useUserCarts } from '../hooks';
import { cartsStyles } from '../styles';

let Carts = () => {

    let theme = useTheme()
    let { carts, loading, error } = useUserCarts(1);
    if (loading) return (<Loading width={100} height={100}/>);
    if (error) return (<h2>error</h2>);

    return (
        <>
        <Box sx={cartsStyles(theme)}>
            {
                carts.map((cart, i) => 
                <Cart 
                cart={cart}
                key={i} 
                />)
            }
            <AddNewCart carts={carts}/>
            <Grid>
                <Footer/>   
            </Grid>
        </Box>
        </>
    )
}

export default Carts;
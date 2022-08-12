import React from 'react';
import { ProductsFilter, Footer, ProductView, Loading } from '../Components';
import { useProducts } from '../hooks';
import { useStoreStyles } from '../styles';
import { Card, Grid } from '@mui/material';

let Store = () => {

    let { loading, error, products } = useProducts();
    
    let classes = useStoreStyles();

    if (loading) return <Loading />
    if (error) return <h2>error</h2>


    return (
        <Grid container className={classes.store + " store"}>
            <Grid item md={3} xs={12} className="filter-wrapper">
                <Card className='filter'>
                    <ProductsFilter />
                </Card>
            </Grid>
            <Grid item md={9} xs={12} className="products">
                <Grid container spacing={1}>
                    {
                        products.map((product, i) =><ProductView key={i} product={product} sm={12} md={4}/>)
                    }
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}

export default Store;
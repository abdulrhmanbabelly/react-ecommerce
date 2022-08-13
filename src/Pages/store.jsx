import React from 'react';
import { ProductsFilter, Footer, Loading, ProductViewHorizontal } from '../Components';
import { useProducts } from '../hooks';
import { useStoreStyles } from '../styles';
import { Divider, Grid } from '@mui/material';

let Store = () => {

    let { loading, error, products } = useProducts();
    
    let classes = useStoreStyles();

    if (loading) return <Loading width={100} height={100}/>
    if (error) return <h2>error</h2>


    return (
        <Grid container className={classes.store + " store"}>
            <div className='filterButton'>
                <ProductsFilter />
            </div>
            <Grid item className="products">
                <Grid container width="100vw">
                    {
                        products.map((product, i) => { return (
                            <div key={i}>
                                <ProductViewHorizontal product={product}/>
                                <Divider />
                            </div>
                        )}) 
                    }
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}

export default Store;
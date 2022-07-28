import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductView from '../Components/Products/productView';
import Footer from '../Components/common/footer';
import ProductsFliter from '../Components/Filters/productsFilter';
import useProducts from '../hooks/useProducts';
import { useCategories } from '../hooks';
import { Card, CircularProgress, Grid } from '@mui/material';
import useStoreStyles from '../styles/store';

let Store = () => {

    let { loading, products, setProducts } = useProducts();
    let categories = useCategories();
    let classes = useStoreStyles();

    if (loading) return <CircularProgress />

    return (
        <Grid container className={classes.store + " store"}>
            <Grid item md={3} xs={12} className="filter-wrapper">
                <Card className='filter'>
                    <ProductsFliter setProducts={setProducts} categories={categories}/>
                </Card>
            </Grid>
            <Grid item md={9} xs={12} className="products">
                <Grid container spacing={1}>
                    {
                        products.map((product) =><ProductView key={Math.random() * 10000} product={product} sm={12} md={4}/>)
                    }
                </Grid>
            </Grid>
            <Footer/>
        </Grid>
    )
}

export default Store;
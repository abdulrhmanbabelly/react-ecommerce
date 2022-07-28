import { Button, CircularProgress, Divider, Grid, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import CategorySlider from "../Components/common/categorySlider";
import Footer from '../Components/common/footer';
import AddToCart from "../Components/Products/addToCart";
import { useSingleProduct } from "../hooks";
import { useSingleProductStyles } from "../styles";


let SingleProduct = () => {

    let { id } = useParams();
    let classes = useSingleProductStyles();
    let { product, loading } = useSingleProduct(id);

    if (loading) return <CircularProgress />;

    return (
    <>
        <Grid container className={`${classes.singleProduct} singleProduct`}>
            <Grid item md={6} xs={12} className='image'>
                <img src={product.image}/>
            </Grid>
            <Grid item md={6} xs={12}>
                <h2>{product.title}</h2>
                {product.description}
                catagory : {product.catagory}
                <br/>
                <List className="list-group-flush">
                    <ListItem className="text-warning">
                        <ListItemText>{product.rating.rate}</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>
                            {product.rating.count} left
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem className="text-success">
                        <ListItemText>
                            ${product.price}
                        </ListItemText>
                    </ListItem>
                </List>
                <br />
                <form>
                    <AddToCart productId = {id} productTitle={product.title}/>
                    <Button color="success" variant='contained'>Buy</Button>
                </form>
            </Grid>
        </Grid>
        <h2 className="p-2">You Might Also Like : </h2>
        <CategorySlider category={product.category}/>
        <Grid container>
            <Footer/>
        </Grid>
    </>
    )

}

export default SingleProduct;
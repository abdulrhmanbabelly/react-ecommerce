import { Button, Divider, Grid, List, ListItem, ListItemText, Rating } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { AddToCart, Footer, CategorySlider, Loading } from "../Components";
import { useSingleProduct } from "../hooks";
import { useSingleProductStyles } from "../styles";
import { green } from '@mui/material/colors';

let SingleProduct = () => {

    let { id } = useParams();
    let classes = useSingleProductStyles();
    let { product, loading, error } = useSingleProduct(id);

    if (loading) return <Loading width={100} height={100}/>;
    if (error) return <h2>error</h2>;

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
                <List>
                    <ListItem>
                        <ListItemText><Rating readOnly value={Number(product.rating.rate)} /></ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText style={{color : green["700"]}}>
                            ${product.price}
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>
                            {product.rating.count} left
                        </ListItemText>
                    </ListItem>
                </List>
                <br />
                <form>
                    <Grid container>
                        <Grid item>
                            <AddToCart productId = {id} productTitle={product.title}/>
                        </Grid>
                        <Grid item>
                            <Button color="success" variant='contained'>Buy</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
        <h2 className="p-2">You Might Also Like : </h2>
        <Grid container>
            <Grid item p={2} width="100vw" xs={12}>
                <CategorySlider category={product.category}/>
            </Grid>
        </Grid>
        <Footer/>

    </>
    )

}

export default SingleProduct;
import React, { useEffect } from "react";
import { useCartProduct, useUpdateCart } from "../../hooks";
import { Delete } from '@mui/icons-material';
import { Box, Card, IconButton, Link, TextField, Grid } from "@mui/material";
import { Loading } from "../";

let CartProduct = (props) => {

    let { productId, quantity } = props.product;
    let { cart } = props;
    let { product, loading } = useCartProduct(productId);
    let { updateCart } = useUpdateCart();

    useEffect(() => {

        if (!loading) {
            document.getElementById(`subtotal${cart.id}`).textContent = Number(document.getElementById(`subtotal${cart.id}`).textContent) + Number(product.price) * quantity;
            document.getElementById(`total${cart.id}`).textContent = Number(document.getElementById(`subtotal${cart.id}`).textContent) + 20;
            document.getElementById(`checkout${cart.id}`).textContent = document.getElementById(`total${cart.id}`).textContent;    
        }

    });
      
    let handleChangeCount = async (e) => {
        let productIndex;
        for (let i = 0; i < cart.products.length; i++) {
            if (productId == cart.products[i].productId) {
                productIndex = i;
                break;
            }
        }
        cart.products[productIndex].quantity = Number(e.target.value);
        await updateCart({
            variables : {
                input : cart,
                id : cart.id
            }
        });
    }

    let handleDeleteProduct = async () => {
        cart.products.splice(cart.products.indexOf(props.product), 1);
        updateCart({
            variables : {
                id : cart.id,
                input : cart
            }
        })
    };

    if (loading) return <Loading width={50} height={10}/>;

    return (
    <>
    <Card className="cartProduct">
        <Box>
            <Grid container>
                <Grid item xs={12} sm={2} justifyContent='center' container p={1}>
                    <img
                        src={product.image}
                        alt="Shopping item"
                        />
                </Grid>
                <Grid item container xs={12} sm={10} justifyContent='space-between' alignItems='center'>
                    <Grid item xs={12} sm={8}>
                        <h5>{product.title}</h5>
                        <Link href={`/products/${productId}`} color='inherit'>product page</Link>
                    </Grid>
                    <Grid item xs={6} sm={2} pr={2} pl={2}>
                        <TextField type="number" defaultValue={quantity} onChange={handleChangeCount} variant="standard"/>
                    </Grid>
                    <Grid item xs={3} sm={1} justifyContent='center' container>
                        <h5>${product.price}</h5>
                    </Grid>
                    <Grid item xs={3} sm={1}>
                        <IconButton onClick={handleDeleteProduct}><Delete /></IconButton>
                    </Grid>
                </Grid>
            </Grid> 
        </Box>
    </Card>
    </>
    )
}

export default CartProduct;
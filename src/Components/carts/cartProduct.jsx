import React, { useEffect } from "react";
import { useCartProduct, useNotification } from "../../hooks";
import { Delete } from '@mui/icons-material';
import { Box, Card, IconButton, Link, TextField, Grid } from "@mui/material";
import { Loading } from "../";
import client from "../../config/apolloClient";
import {  UPDATE_CART, UPDATE_COMPONENET } from "../../gql";
import { useState } from "react";

let CartProduct = (props) => {

    let { productId, quantity } = props.product;
    let { cart } = props;
    let { product, loading } = useCartProduct(productId);
    let { triggerNotification } = useNotification();

        if (!loading) {
            localStorage.setItem(`price:${cart.id}`, Number(localStorage.getItem(`price:${cart.id}`)) + product.price * quantity);
        }

        useEffect(() => {
            client.writeQuery({
                query : UPDATE_COMPONENET,
                data : {
                    update : Math.random() * 10000
                }
            })    
        }, [loading])
 


    let handleChangeCount = (e) => {


        let productIndex;
        for (let i = 0; i < cart.products.length; i++) {
            if (productId == cart.products[i].productId) {
                productIndex = i;
                break;
            }
        }
        cart.products[productIndex].quantity = Number(e.target.value);

        client.writeQuery({
            query : UPDATE_CART,
            variables : {
                id : cart.id
            },
            data : {
                cart : cart
            }
        });

        setTimeout(() => {
            client.writeQuery({
                query : UPDATE_COMPONENET,
                data : {
                    update : Math.random() * 10000
                }
            })  
        }, 50)



    }

    let handleDeleteProduct = () => {
        cart.products.splice(cart.products.indexOf(props.product), 1);

        client.writeQuery({
            query : UPDATE_CART,
            variables : {
                id : cart.id
            },
            data : {
                cart : cart
            }
        });

        localStorage.setItem(`price:${cart.id}`, Number(localStorage.getItem(`price:${cart.id}`)) - product.price * quantity);

        triggerNotification(`deleted product ${product.title}`)
    };

    if (loading) return <Loading width={100} height={10}/>;
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
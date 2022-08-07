import React, { useEffect } from "react";
import { useSingleProduct } from "../../hooks";
import { Delete } from '@mui/icons-material';
import { Box, Card, CircularProgress, IconButton, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { UPDATE_CART } from "../../gql";

let CartProduct = (props) => {

    let { productId, quantity } = props.product;
    let { cart, setCarts, carts } = props;
    let { product, loading } = useSingleProduct(productId);
    let [updateCart] = useMutation(UPDATE_CART);
    useEffect(() => {

        if (!loading) {
            document.getElementById(`subtotal${cart.id}`).textContent = Number(document.getElementById(`subtotal${cart.id}`).textContent) + Number(product.price) * quantity;
            document.getElementById(`total${cart.id}`).textContent = Number(document.getElementById(`subtotal${cart.id}`).textContent) + 20;
            document.getElementById(`checkout${cart.id}`).textContent = document.getElementById(`total${cart.id}`).textContent;    
        }

    });
      
    let handleChangeCount = async (e) => {
        let cartIndex;
        for (let i = 0; i < carts.length; i++) {
            if (cart.id == carts[i].id) {
                cartIndex = i;
                break;
            }
        }
        let productIndex;
        for (let i = 0; i < carts[cartIndex].products.length; i++) {
            if (productId == carts[cartIndex].products[i].productId) {
                productIndex = i;
                break;
            }
        }
        carts[cartIndex].products[productIndex].quantity = Number(e.target.value);
        await updateCart({
            variables : {
                input : cart,
                id : cart.id
            }
        });
        setCarts(carts.map((cart) => cart));
    }

    let handleDeleteProduct = async () => {

        cart.products.splice(cart.products.indexOf(props.product), 1)
        updateCart({
            variables : {
                id : cart.id,
                input : cart
            }
        })
        setCarts(carts.map((cart) => cart));
    };

    if (loading) return <CircularProgress />;

    return (
    <>
    <Card className="cartProduct">
        <Box>
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                    <div>
                        <img
                            src={product.image}
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{width: "65px"}} />
                        </div>
                        <div className="ms-3 w-75">
                            <h5>{product.title}</h5>
                            <a href={`/products/${productId}`}>product page</a>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                    <div style={{
                        width: "60px",
                        marginRight : "10px",
                        }}>
                        <TextField type="number" defaultValue={quantity} onChange={handleChangeCount} variant="standard"/>
                    </div>
                    <div style={{width: "80px"}}>
                        <h5 className="mb-0">${product.price}</h5>
                    </div>
                    <IconButton onClick={handleDeleteProduct}><Delete /></IconButton>
                </div>
            </div>
        </Box>
    </Card>
    </>
    )
}

export default CartProduct;
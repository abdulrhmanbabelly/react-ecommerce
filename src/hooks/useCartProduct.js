import { useState } from "react"
import { GET_CART_PRODUCT, GET_PRODUCT } from "../gql/products";
import { useQuery } from '@apollo/client';

let useCartProduct = (id) => {

    let [product, setProduct] = useState({
        title : '...',
        rating : {
            rate : '...',
            count : '...'
        }
    });

    let { loading, error, data } = useQuery(GET_CART_PRODUCT, {
        variables : {
            id : id
        }
    });

    if (!loading && !error && product.title === '...') setProduct(data.product);

    return { product, loading, error };

}

export default useCartProduct;
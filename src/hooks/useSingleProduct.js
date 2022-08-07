import { useState } from "react"
import { GET_PRODUCT } from "../gql/products";
import { useQuery } from '@apollo/client';

let useSingleProduct = (id) => {

    let [product, setProduct] = useState({
        title : '...',
        rating : {
            rate : '...',
            count : '...'
        }
    });

    let { loading, error, data } = useQuery(GET_PRODUCT, {
        variables : {
            id : id
        }
    });

    if (!loading && !error && product.title === '...') setProduct(data.product);

    return { product, loading, error };

}

export default useSingleProduct;
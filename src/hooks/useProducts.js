import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_PRODUCTS } from "../gql/products";

let useProducts = () => {

    let { loading, error, data } = useQuery(GET_PRODUCTS);

    let [products, setProducts] = useState([]);

    if (!loading && !error && !products[0]) { setProducts(data.products); }
    
    return { products, setProducts, loading, error };

}

export default useProducts;
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../gql/products";

let useProducts = () => {

    let { loading, error, data } = useQuery(GET_PRODUCTS);

    let products = [];

    if (!loading && !error) products = data.products;
    
    return { products, loading, error };

}

export default useProducts;
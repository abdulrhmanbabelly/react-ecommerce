import { useQuery } from "@apollo/client";
import { GET_CARTS } from "../gql";

let useCarts = () => {

    let { loading, error, data } = useQuery(GET_CARTS);
   
    let carts = [];

    if (!loading && !error) carts = data.carts;

    return { loading, error, carts };

}

export default useCarts;
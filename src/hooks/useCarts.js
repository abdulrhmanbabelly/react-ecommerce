import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_CARTS } from "../gql/cart";

let useCarts = () => {

    let { loading, error, data } = useQuery(GET_CARTS);

    let [carts, setCarts] = useState([]);
   
    if (!loading && !error && !carts[0]) setCarts(data.carts);

    return { loading, error, carts, setCarts, data };

}

export default useCarts;
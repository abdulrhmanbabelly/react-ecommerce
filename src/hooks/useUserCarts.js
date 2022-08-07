import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_USER_CART } from "../gql/cart";
import copyObj from "../helpers/copyObj";

let useUserCarts = (userId) => {

    let { loading, error, data } = useQuery(GET_USER_CART,
    {
        notifyOnNetworkStatusChange : true,
        variables : {
            userId
        }
    });

    let [cartsState, setCarts] = useState([]);

    let newCarts = [];

    if (!loading && !error && !cartsState[0]) {
        data.carts.forEach((cart) => {
            if (cart.userId === userId) {
                newCarts.push(cart);
            }
        });
        setCarts(newCarts);
    }

    let carts = copyObj(cartsState);
    
    return { carts, setCarts, loading, error };

}

export default useUserCarts;
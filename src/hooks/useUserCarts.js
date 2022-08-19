import { useQuery } from "@apollo/client";
import { copyObj } from "../functions";
import { GET_USER_CART } from "../gql";

let useUserCarts = (userId) => {

    let { loading, error, data } = useQuery(GET_USER_CART,
    {
        variables : {
            userId
        }
    });

    let carts = [];

    if (!loading && !error) {
        carts = copyObj(data.carts);
    }
    
    return { carts, loading, error };

}

export default useUserCarts;
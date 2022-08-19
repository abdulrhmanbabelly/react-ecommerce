import { gql, useMutation } from "@apollo/client";
import { ADD_NEW_CART } from "../gql";

let useAddNewCart = () => {
    let [addNewCart] = useMutation(ADD_NEW_CART, {
        update(cache, data) {
            let { cart } = data.data;
            cache.modify({
                fields : {
                    carts(existingCarts) {
                        let newRef = cache.writeFragment({
                            id : cache.identify(cart),
                            data : {
                                products : [],
                                date : cart.date,
                                userId : cart.userId,
                                id : cart.id
                            },
                            fragment : gql`
                                fragment NewCart on cart {
                                    products
                                    date
                                    userId
                                    id
                                }
                            `
                        });
                        return [...existingCarts, newRef];
                    }
                }
            });
        }
    });

    return {addNewCart}; 
}

export default useAddNewCart;
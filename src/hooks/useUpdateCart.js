import { gql, useMutation } from "@apollo/client";
import { UPDATE_CART } from "../gql";

let useUpdateCart = () => {
    
    let [updateCart] = useMutation(UPDATE_CART,{
        update(cache, data) {
            let { cart } = data.data;
            cache.modify({
                fields : {
                    carts(existingCarts, { readField }) {
                        return existingCarts.map(cachedCart => {
                            if (cart.id == readField('id', cachedCart)) {
                                return cache.writeFragment({
                                    id : cache.identify(cart),
                                    data : cart,
                                    fragment : gql`
                                        fragment updatedCart on cart {
                                            products
                                            id 
                                        }
                                    `
                                })
                            } else { return cachedCart }
                        });
                        
                    }
                }
            })
        }
    });
    return { updateCart };
}

export default useUpdateCart;
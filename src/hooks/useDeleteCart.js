import { useMutation } from "@apollo/client";
import { DELETE_CART } from "../gql";

let useDeleteCart = (id) => {
    let [deleteCart] = useMutation(DELETE_CART, {
        update(cache) {
            cache.modify({
                fields : {
                    carts(existingCarts, { readField }) {
                        return existingCarts.filter(cachedCart => id != readField('id', cachedCart));
                    }
                }
            });
        }
    });
    return { deleteCart };
}

export default useDeleteCart;
import { useMutation } from "@apollo/client";
import { DELETE_PRODUCT } from "../gql";

let useDeleteProduct = (id) => {
    let [deleteProduct] = useMutation(DELETE_PRODUCT, {
        update(cache) {
            cache.modify({
                fields : {
                    products(existingProducts, { readField }) {
                        return existingProducts.filter((cachedProduct) => 
                            id != readField('id', cachedProduct)
                        )
                    }
                }
            })
        }
    });
    return { deleteProduct };
}

export default useDeleteProduct;
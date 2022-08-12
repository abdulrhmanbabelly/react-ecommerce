import { gql, useMutation } from '@apollo/client';
import { ADD_PRODUCT } from "../gql";

let useAddProduct = () => {

    let [addProduct] = useMutation(ADD_PRODUCT, {
        update(cache, data) {
            let { product } = data.data;
            cache.modify({
                fields : {
                    products(existingProducts) {
                        let newRef = cache.writeFragment({
                            id : cache.identify(product),
                            data : {
                                id : product.id,
                                title : product.title,
                                image: product.image,
                                category : product.category,
                                rating : {
                                    count : 0,
                                    rate : 0
                                },
                                price : product.price,
                                description: product.description
                            },
                            fragment : gql`
                                fragment NewProduct on product {
                                    title
                                    image
                                    category
                                    rating {
                                        count
                                        rate
                                    }
                                    id
                                    description
                                }
                            `
                        });
                        return [...existingProducts, newRef]
                    }
                }
            })
        }
    });

    return { addProduct };
}

export default useAddProduct;
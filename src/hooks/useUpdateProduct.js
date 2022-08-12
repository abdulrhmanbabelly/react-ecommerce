import { gql, useMutation } from '@apollo/client';
import { UPDATE_PRODUCT } from '../gql';

let useUpdateProduct = (rating) => {
    let [updateProduct] = useMutation(UPDATE_PRODUCT, {
        update(cache, data) {
            let { product } = data.data;
            cache.modify({
                fields : {
                    products(existingProducts, { readField }) {
                        return existingProducts.map(cachedProduct => {
                            if (product.id == readField('id', cachedProduct)) {
                                return cache.writeFragment({
                                    id : cache.identify(product),
                                    data : {
                                        id : product.id,
                                        title : product.title,
                                        image: product.image,
                                        category : product.category,
                                        rating : rating,
                                        price : product.price,
                                        description: product.description
                                    },
                                    fragment : gql`
                                        fragment updatedProduct on product {
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
                            } else { return cachedProduct }
                        });
                        
                    }
                }
            })
        }
    });

    return { updateProduct };
}

export default useUpdateProduct;
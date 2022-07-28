import { useEffect, useState } from "react"
import { getProduct } from "../api/products";


let useSingleProduct = (id) => {

    let [product, setProduct] = useState({
        title : '...',
        rating : {
            rate : '...',
            count : '...'
        }
    });
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        (
            async () => {
                try {

                    if (loading) {

                        let data = await getProduct(id);
                        setProduct(data);
                        setLoading(false);
                    
                    }

                } catch (e) {

                    console.log(e);

                }
            }
        )();
    })

    return { product, loading };

}

export default useSingleProduct;
import { useEffect, useState } from "react"
import { getProducts } from "../api/products";

let useProducts = () => {

    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {

        (
            async () => {

                try {

                    if (loading) {
                        let data = await getProducts();
                        setProducts(data);
                        setLoading(false);
                    };

                } catch (e) {

                    console.log(e);

                }

            }
        )();

    }, []);

    return { loading, products, setProducts };

}

export default useProducts;
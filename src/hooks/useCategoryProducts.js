import { useEffect, useState } from "react"
import { getCatagoryProducts } from "../api/catagories";

let useCategoryProducts = (category) => {

    let [categoryProducts, setCategoryProducts] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {

        (
            async () => {

                try {

                    if (loading) { 
                        let data = await getCatagoryProducts(category);
                        setCategoryProducts(data);
                        setLoading(false);
                    };

                } catch (e) {

                    console.log(e);

                }

            }
        )();

    }, []);

    return { loading, categoryProducts };

}

export default useCategoryProducts;
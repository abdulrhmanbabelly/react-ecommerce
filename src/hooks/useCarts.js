import { useEffect, useState } from "react";
import { getCarts } from "../api/cart";

let useCarts = () => {

    let [carts, setCarts] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {

        (
            async () => {

                try {

                    if (loading) { setCarts(await getCarts()); setLoading(false); }
        

                } catch (e) {

                    console.log(e);

                }

            }
        )();

    });

    return { loading, carts, setCarts };

}

export default useCarts;
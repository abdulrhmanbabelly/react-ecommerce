import { useEffect, useState } from "react";
import { getUserCarts } from "../api/cart";

let useUserCarts = (userId) => {

    let [carts, setCarts] = useState([]);

    useEffect(() => {

        (
            async () => {

                try {

                    if (!carts[0]) setCarts(await getUserCarts(userId));

                } catch (e) {

                    console.log(e);

                }

            }
        )();

    });

    return { carts, setCarts };

}

export default useUserCarts;
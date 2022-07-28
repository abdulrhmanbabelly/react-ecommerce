import { useEffect, useState } from "react"
import { getCatagories } from "../api/catagories";


let useCategories = () => {

    let [categories, setCategories] = useState([]);

    useEffect(() => {

        (
            async () => {
                try {

                    let data = await getCatagories();
                    if (!categories[0]) setCategories(data)

                } catch (e) {

                    console.log(e)

                }
            }
        )();

    })

    return categories;

}

export default useCategories;
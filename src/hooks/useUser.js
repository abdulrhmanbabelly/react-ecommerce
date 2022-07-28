import { useEffect, useState } from "react"
import { getUser } from "../api/user";

let useUser = (id) => {

    let [user, setUser] = useState();

    let [loading, setLoading] = useState(true);

    useEffect(() => {
        (
            async () => {

                if (loading) {
                    let data = await getUser(id);
                    setUser(data);
                    setLoading(false);
                }

            }
        )();
    });

    return { user, loading };

}

export default useUser;
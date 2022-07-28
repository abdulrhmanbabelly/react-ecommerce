import { useEffect, useState } from "react"
import { getUsers } from "../api/user";

let useUsers = () => {

    let [users, setUsers] = useState([]);

    let [loading, setLoading] = useState(true);

    useEffect(() => {
        (
            async () => {

                if (loading) {
                    let data = await getUsers();
                    setUsers(data);
                    setLoading(false);
                }

            }
        )();
    });

    return { users, setUsers, loading };

}

export default useUsers;
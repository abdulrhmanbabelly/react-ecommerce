import { useQuery } from "@apollo/client";
import { useState } from "react"
import { GET_USERS } from "../gql/user";

let useUsers = () => {

    let { loading, error, data } = useQuery(GET_USERS);

    let [users, setUsers] = useState([]);

    if (!loading && !error && !users[0]) setUsers(data.users);

    return { users, setUsers, loading, error };

}

export default useUsers;
import { useQuery } from "@apollo/client";
import { GET_USERS } from "../gql";

let useUsers = () => {

    let { loading, error, data } = useQuery(GET_USERS);

    let users = [];

    if (!loading && !error) users = data.users;

    return { users, loading, error };

}

export default useUsers;
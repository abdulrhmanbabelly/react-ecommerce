import { useState } from "react"
import { useQuery } from '@apollo/client';
import { GET_USER } from "../gql";

let useUser = (id) => {

    let [user, setUser] = useState({
        username : '...',
        name : {
            firstname : '...',
            lastname : '...'
        },
        address  : {
            city: '...',
            street: '...',
            number: '...',
            zipcode: '...',
            geolocation : {
                lat: '...',
                long: '...',
            }
        }
    });

    let { loading, error, data } = useQuery(GET_USER, {
        variables : {
            id : id
        }
    })

    if (!loading && !error && user.username === '...') setUser(data.user);

    return { user, loading, error };

}

export default useUser;
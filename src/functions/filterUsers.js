import { gql } from "@apollo/client";
import client from "../config/apolloClient";

let filterUsers = async (filters, data) => {

    let {
        searchBy,
        search
    } = filters;

    let users = data.sortedUsers;

    let searchedUsers = [];

    if (search) 
        for (let i = 0; i < users.length; i++) {
            if (searchBy == 'id') if (search == users[i][searchBy].toString()) { searchedUsers.push(users[i]); break; }
            if (searchBy !== 'firstname' && searchBy !== 'lastname') {
                if (searchBy !== 'city' && searchBy !== 'street' && searchBy !== 'zipcode' && searchBy !== 'street' && searchBy !== 'number'  && searchBy !== 'lat' && searchBy !== 'long') {
                    if (users[i][searchBy].toString().indexOf(search) > -1) searchedUsers.push(users[i]);
                } else {
                    if (users[i].geolocation[searchBy].toString().indexOf(search) > -1) searchedUsers.push(users[i]);
                }
            } else {
                if (users[i].name[searchBy].toString().indexOf(search) > -1) searchedUsers.push(users[i]);
            }
        }

        client.writeQuery({
            data : { users : searchedUsers[0] ? searchedUsers : users },
            query : gql`
                mutation filterUsers {
                    users {
                        id
                        email
                        username
                        password
                        name {
                            firstname
                            lastname
                        }
                        address {
                            city
                            street
                            number
                            zipcode
                            geolocation {
                                lat
                                long
                            }
                        }
                        phone
                    }
                }
            `
        })
        
}

export default filterUsers;
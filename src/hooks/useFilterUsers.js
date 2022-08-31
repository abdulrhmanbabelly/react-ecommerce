import { gql, useLazyQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setUsers } from "../store/features/admin/usersSlice";

let useFilterUsers = () => {
  let dispatch = useDispatch();
  let [getUsers] = useLazyQuery(gql`
    query getUsers($path: String) {
      sortedUsers(path: $path) @rest(type: "user", path: "users{args.path}") {
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
  `);
  let filterUsers = (filters) => {
    let { desc, limit } = filters;
    getUsers({
      variables: {
        path: `/?${desc ? "sort=desc" : "sort=asc"}&limit=${limit}`,
      },
    }).then((data) => {
      if (data?.data.sortedUsers) {
        let { searchBy, search } = filters;

        let users = data.data.sortedUsers;

        let searchedUsers = [];

        if (search)
          for (let i = 0; i < users.length; i++) {
            if (searchBy == "id")
              if (search == users[i][searchBy].toString()) {
                searchedUsers.push(users[i]);
                break;
              }
            if (searchBy !== "firstname" && searchBy !== "lastname") {
              if (
                searchBy !== "city" &&
                searchBy !== "street" &&
                searchBy !== "zipcode" &&
                searchBy !== "street" &&
                searchBy !== "number" &&
                searchBy !== "lat" &&
                searchBy !== "long"
              ) {
                if (users[i][searchBy].toString().indexOf(search) > -1)
                  searchedUsers.push(users[i]);
              } else {
                if (
                  users[i].geolocation[searchBy].toString().indexOf(search) > -1
                )
                  searchedUsers.push(users[i]);
              }
            } else {
              if (users[i].name[searchBy].toString().indexOf(search) > -1)
                searchedUsers.push(users[i]);
            }
          }

        dispatch(setUsers({ users: searchedUsers[0] ? searchedUsers : users }));
      }
    });
  };

  return { filterUsers };
};

export default useFilterUsers;

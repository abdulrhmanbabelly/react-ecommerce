import { useQuery } from "@apollo/client";
import { GET_USERS } from "../gql";
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from "../store/features/admin/usersSlice";
import { useEffect } from "react";
let useUsers = () => {
  let { loading, error, data } = useQuery(GET_USERS);
  let users = useSelector(state => state.adminUsers.users);
  let dispatch = useDispatch();
  useEffect(() => {
    if (!loading && !error && !users[0]) dispatch(setUsers({ users : data.users }));
  })
  return { users, loading, error };
};

export default useUsers;

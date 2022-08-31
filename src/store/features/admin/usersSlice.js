import { createSlice } from "@reduxjs/toolkit";

let adminUsersSlice = createSlice({
    name : 'adminUsers',
    initialState : {
        users : []
    },
    reducers : {
        setUsers : (state, { payload : { users }}) => {
            state.users = users;
        }
    }
});

export const { setUsers } = adminUsersSlice.actions;
export default adminUsersSlice;

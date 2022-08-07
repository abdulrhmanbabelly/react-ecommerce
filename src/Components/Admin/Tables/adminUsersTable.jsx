import React from 'react';
import { CSVLink } from "react-csv";
import { AdminUser, UsersFilter } from "../../";
import excelUsersData from "../../../helpers/excelDataForming/excelUsersData";
import { useUsers } from "../../../hooks";
import { Paper, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

let AdminUsersTable = () => {
    
    let { loading, users, setUsers, error } = useUsers();

    let excelData = excelUsersData(users);
    
    if (loading) return <CircularProgress />
    if (error) return <h2 className='text-info'>error...</h2>

    
    return (
        <>
        <UsersFilter
            setUsers = {setUsers}
            users = {users}
        />
        <CSVLink
            data={excelData}>
            export to excel
        </CSVLink>
        <Table component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>email</TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>password</TableCell>
                    <TableCell>firstname</TableCell>
                    <TableCell>lastname</TableCell>
                    <TableCell>city</TableCell>
                    <TableCell>street</TableCell>
                    <TableCell>number</TableCell>
                    <TableCell>zipcode</TableCell>
                    <TableCell>geolocation lat</TableCell>
                    <TableCell>geolocation long</TableCell>
                    <TableCell>phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => <AdminUser user={user} key={Math.random() * 10000} />)}
            </TableBody>
        </Table>
        </>
    )
}

export default AdminUsersTable;
import { useEffect } from "react";
import { CSVLink } from "react-csv";
import AdminUser from "../adminUser";
import React from 'react';
import UsersFilter from "../../Filters/usersFilter";
import excelUsersData from "../../../helpers/excelDataForming/excelUsersData";
import { useUsers } from "../../../hooks";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';

let AdminUsersTable = () => {
    
    let { loading, users, setUsers } = useUsers();

    let excelData = excelUsersData(users);
    
    if (loading) return <h2 className='text-info'>loading...</h2>

    
    return (
        <>
        <UsersFilter button = {
            <CSVLink
                data={excelData}>
                export to excel
            </CSVLink>
        } 
            setUsers = {setUsers}
            users = {users}
        />
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
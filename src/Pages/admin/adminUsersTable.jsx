import React from 'react';
import { CSVLink } from "react-csv";
import { AdminUser, UsersFilter } from "../../Components";
import { excelUsersData } from "../../functions";
import { useUsers } from "../../hooks";
import { Paper, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Button, Grid } from "@mui/material";

let AdminUsersTable = () => {
    
    let { loading, users, error } = useUsers();

    let excelData = excelUsersData(users);
    
    if (loading) return <CircularProgress />
    if (error) return <h2 className='text-info'>error...</h2>

    
    return (
        <>
        <UsersFilter
            users = {users}
        />
        <Button>
            <CSVLink
                data={excelData}>
                export to excel
            </CSVLink>
        </Button>
        <Grid component={Paper}>
            <Table>
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
        </Grid>
        </>
    )
}

export default AdminUsersTable;
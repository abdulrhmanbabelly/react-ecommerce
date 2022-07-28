import { CSVLink } from "react-csv";
import React from 'react';
import AdminCategory from "../adminCategory";
import { useCategories } from "../../../hooks";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';

let AdminCategoriesTable = () => {

    let categories = useCategories();
    
    return (
        <>
        <Button>
            <CSVLink
                data={[categories]}>
                export to excel
            </CSVLink>
        </Button>
        <Table component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {categories.map((category) => <AdminCategory category={category} key={Math.random() * 10000} />)}
            </TableBody>
        </Table>
        </>
    )
}

export default AdminCategoriesTable;
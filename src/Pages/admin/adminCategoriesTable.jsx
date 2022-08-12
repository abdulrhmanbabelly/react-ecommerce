import { CSVLink } from "react-csv";
import React from 'react';
import { AdminCategory } from "../../Components";
import { useCategories } from "../../hooks";
import { Paper, Button, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

let AdminCategoriesTable = () => {

    let { loading, error, categories } = useCategories();

    if (loading) return <CircularProgress />
    if (error) return <h2>error</h2>


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
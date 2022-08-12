import { CSVLink } from "react-csv";
import React from 'react';
import { CartsFilter, AdminCart } from "../../Components";
import { useCarts } from "../../hooks";
import { excelCartsData } from "../../functions";
import { Paper, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";

let AdminCartsTable = () => {

    let { loading, carts, error } = useCarts();
    let { excelData, products } = excelCartsData(carts);
    
    if (loading) return <CircularProgress />;
    if (error) return <h2>error</h2>;

    return (
        <>
        <CartsFilter
            carts={carts}
        />
        <Button>
            <CSVLink
            data={excelData}
            >
            export to excel
            </CSVLink>
        </Button>
        <Table component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>userId</TableCell>
                    <TableCell>date</TableCell>
                    {
                        products.map((num) => <TableCell key={Math.random() * 10000}>product_{num}</TableCell>) 
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {carts.map((cart) => <AdminCart cart={cart} key={Math.random() * 10000} />)}
            </TableBody>
        </Table>
        </>
    )
}

export default AdminCartsTable;
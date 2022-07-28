import { CSVLink } from "react-csv";
import React from 'react';
import AdminCart from "../adminCart";
import CartsFilter from "../../Filters/cartsFilter";
import { useCarts } from "../../../hooks";
import excelCartsData from "../../../helpers/excelDataForming/excelCartsData";
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

let AdminCartsTable = () => {

    let { loading, carts, setCarts } = useCarts();
    let { excelData, products } = excelCartsData(carts);
    
    if (loading) return <h2>loading</h2>;
    
    return (
        <>
        <CartsFilter button={
            <CSVLink
            data={excelData}
            >
            export to excel
            </CSVLink>
            }
            carts={carts}
            setCarts={setCarts}
        />
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
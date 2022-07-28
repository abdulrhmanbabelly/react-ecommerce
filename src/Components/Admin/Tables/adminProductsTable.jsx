import { CSVLink } from "react-csv";
import AdminProduct from "../adminProduct";
import React, { useState } from 'react';
import ProductsFliter from "../../Filters/productsFilter";
import AddProduct from "../addProduct";
import excelProductsData from "../../../helpers/excelDataForming/excelProductsData";
import { useCategories, useProducts } from "../../../hooks";
import { Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';

let AdminProductsTable = () => {

    let { products, setProducts } = useProducts();
    let categories = useCategories();
    let excelData = excelProductsData(products);

    return (
        <>
        <ProductsFliter 
        setProducts={setProducts}
        categories = {categories}
        button={
        <CSVLink
            data={excelData}>
            export to excel
        </CSVLink>} />
        <AddProduct categories={categories}/>
        <Table component={Paper}>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>catagory</TableCell>
                    <TableCell>title</TableCell>
                    <TableCell>count</TableCell>
                    <TableCell>rate</TableCell>
                    <TableCell>price</TableCell>
                    <TableCell>update</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((product) => <AdminProduct product={product} key={Math.random() * 10000} categories={categories}/>)}
            </TableBody>
        </Table>
        </>
    )
}

export default AdminProductsTable;
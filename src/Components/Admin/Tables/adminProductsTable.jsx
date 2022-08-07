import { CSVLink } from "react-csv";
import React from 'react';
import { AddProduct, AdminProduct, ProductsFilter } from "../../";
import excelProductsData from "../../../helpers/excelDataForming/excelProductsData";
import { useCategories, useProducts } from "../../../hooks";
import { Paper, CircularProgress, Table, TableBody, TableCell, tableCellClasses, TableHead, TableRow, Button, Grid } from "@mui/material";

let AdminProductsTable = () => {

    let { loading, error, products, setProducts } = useProducts();
    let { categories } = useCategories();
    let excelData = excelProductsData(products);

    if (loading) return <CircularProgress/>
    if (error) return <h2>error</h2>


    return (
        <>
        <ProductsFilter 
        setProducts={setProducts}
        categories = {categories}
         />
        <Grid container spacing={2}>
            <Grid item>
                <Button>
                    <CSVLink
                        data={excelData}>
                        export to excel
                    </CSVLink>
                </Button>
            </Grid>  
            <Grid item>
                <AddProduct categories={categories}/>
            </Grid>
         </Grid>
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
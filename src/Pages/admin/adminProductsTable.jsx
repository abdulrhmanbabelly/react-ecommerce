import { CSVLink } from "react-csv";
import React from 'react';
import { AddProduct, AdminProduct, ProductsFilter } from "../../Components";
import { useCategories, useProducts } from "../../hooks";
import { Paper, CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Button, Grid } from "@mui/material";
import { excelProductsData } from "../../functions";

let AdminProductsTable = () => {

    let { loading, error, products } = useProducts();
    let { categories } = useCategories();
    if (loading) return <CircularProgress/>
    if (error) return <h2>error</h2>;
    let excelData = excelProductsData(products);

    return (
        <>
        <Grid container spacing={2} mb={1}>
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
            <Grid item>
                <ProductsFilter 
                    categories = {categories}
                    />
            </Grid>
         </Grid>
        <Grid component={Paper}>
            <Table>
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
        </Grid>
        </>
    )
}

export default AdminProductsTable;
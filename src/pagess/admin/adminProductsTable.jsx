import { CSVLink } from "react-csv";
import React from "react";
import { AddProduct, AdminProduct, ProductsFilter } from "../../components";
import { useAdminProducts, useCategories } from "../../hooks";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import { excelProductsData } from "../../functions";
import { setProducts } from "../../store/features/admin/productsSlice";

let AdminProductsTable = () => {
  let { loading, error, products } = useAdminProducts();
  let { categories } = useCategories();
  if (loading) return <CircularProgress />;
  if (error) return <h2>error</h2>;
  let excelData = excelProductsData(products);

  return (
    <>
      <Grid container spacing={2} mb={1}>
        <Grid item>
          <Button>
            <CSVLink data={excelData}>export to excel</CSVLink>
          </Button>
        </Grid>
        <Grid item>
          <AddProduct categories={categories} />
        </Grid>
        <Grid item>
          <ProductsFilter categories={categories} setProducts={setProducts} />
        </Grid>
      </Grid>
      <Grid component={Paper} sx={{ overflowX: "auto" }}>
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
            {products.map((product, i) => (
              <AdminProduct
                product={product}
                key={i}
                categories={categories}
                order={i}
              />
            ))}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};

export default AdminProductsTable;

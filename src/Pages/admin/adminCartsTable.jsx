import { CSVLink } from "react-csv";
import React from "react";
import { CartsFilter, AdminCart } from "../../Components";
import { useCarts } from "../../hooks";
import { excelCartsData } from "../../functions";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";

let AdminCartsTable = () => {
  let { loading, carts, error } = useCarts();
  let { excelData, products } = excelCartsData(carts);

  if (loading) return <CircularProgress />;
  if (error) return <h2>error</h2>;

  return (
    <>
      <Grid container mb={1}>
        <Grid item>
          <Button>
            <CSVLink data={excelData}>export to excel</CSVLink>
          </Button>
        </Grid>
        <Grid item>
          <CartsFilter carts={carts} />
        </Grid>
      </Grid>
      <Grid component={Paper} sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>userId</TableCell>
              <TableCell>date</TableCell>
              {products.map((num) => (
                <TableCell key={Math.random() * 10000}>product_{num}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {carts.map((cart) => (
              <AdminCart cart={cart} key={Math.random() * 10000} />
            ))}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};

export default AdminCartsTable;

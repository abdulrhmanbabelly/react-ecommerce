import { CSVLink } from "react-csv";
import React from "react";
import { AdminCategory } from "../../components";
import { useCategories } from "../../hooks";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
let AdminCategoriesTable = () => {
  let { loading, error, categories } = useCategories();

  if (loading) return <CircularProgress />;
  if (error) return <h2>error</h2>;

  return (
    <>
      <Button mb={1}>
        <CSVLink data={[categories]}>export to excel</CSVLink>
      </Button>
      <Table component={Paper} sx={{ overflowX: "auto" }}>
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <AdminCategory category={category} key={Math.random() * 10000} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AdminCategoriesTable;

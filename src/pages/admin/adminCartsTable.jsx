import React from "react";
import { useCarts } from "../../hooks";
import { excelCartsData } from "../../functions";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

let AdminCartsTable = () => {
  let { loading, carts, error } = useCarts();
  let { excelData, products } = excelCartsData(carts);

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 150,
    },
    {
      field: "userId",
      headerName: "user id",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      type: "string",
      width: 200,
      sortable: false,
    },
  ];
  products.map((num) =>
    columns.push({
      field: `product_${num}`,
      headerName: `product_${num}`,
      width: 250,
      sortable: false,
    })
  );

  if (loading) return <CircularProgress />;
  if (error) return <h2>error</h2>;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={carts.map((cart) => {
          let obj = {
            id: cart.id,
            userId: cart.userId,
            date: cart.date,
          };
          cart.products.forEach((element, i) => {
            obj[
              `product_${i + 1}`
            ] = `id : ${element.productId}  quantity : ${element.quantity}`;
          });
          return obj;
        })}
        columns={columns}
        pageSize={5}
        sx={{ width: "100%", overflowX: "auto" }}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default AdminCartsTable;

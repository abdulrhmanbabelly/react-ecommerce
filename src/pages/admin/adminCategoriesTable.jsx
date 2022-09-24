import React from "react";
import { useCategories } from "../../hooks";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

let AdminCategoriesTable = () => {
  let { loading, error, categories } = useCategories();

  if (loading) return <CircularProgress />;
  if (error) return <h2>error</h2>;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={categories.map((c, i) => ({ category: c, id: i + 1 }))}
        columns={[
          {
            field: "id",
            headerName: "id",
            width: 150,
          },
          {
            field: "category",
            headerName: "category",
            type: "string",
            sortable: false,
          },
        ]}
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

export default AdminCategoriesTable;

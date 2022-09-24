import React from "react";
import { excelUsersData } from "../../functions";
import { useUsers } from "../../hooks";
import CircularProgress from "@mui/material/CircularProgress";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

let AdminUsersTable = () => {
  let { loading, users, error } = useUsers();

  let excelData = excelUsersData(users);

  if (loading) return <CircularProgress />;
  if (error) return <h2 className="text-info">error...</h2>;

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={excelData}
        columns={[
          {
            field: "id",
            headerName: "id",
            width: 100,
          },
          {
            field: "email",
            headerName: "email",
            type: "string",
            sortable: false,
            width: 200,
          },
          {
            field: "username",
            headerName: "username",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "password",
            headerName: "password",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "firstname",
            headerName: "firstname",
            type: "string",
            sortable: false,
            width: 100,
          },
          {
            field: "lastname",
            headerName: "lastname",
            type: "string",
            sortable: false,
            width: 100,
          },
          {
            field: "city",
            headerName: "city",
            type: "string",
            sortable: false,
            width: 100,
          },
          {
            field: "street",
            headerName: "street",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "number",
            headerName: "number",
            type: "string",
            sortable: false,
            width: 100,
          },
          {
            field: "zipcode",
            headerName: "zipcode",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "lat",
            headerName: "geolocation lat",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "long",
            headerName: "geolocation long",
            type: "string",
            sortable: false,
            width: 150,
          },
          {
            field: "phone",
            headerName: "phone",
            type: "string",
            sortable: false,
            width: 150,
          },
        ]}
        pageSize={10}
        sx={{ width: "100%", overflowX: "auto" }}
        rowsPerPageOptions={[10]}
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

export default AdminUsersTable;

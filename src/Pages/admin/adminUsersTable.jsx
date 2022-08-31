import React from "react";
import { CSVLink } from "react-csv";
import { AdminUser, UsersFilter } from "../../Components";
import { excelUsersData } from "../../functions";
import { useUsers } from "../../hooks";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";

let AdminUsersTable = () => {
  let { loading, users, error } = useUsers();

  let excelData = excelUsersData(users);

  if (loading) return <CircularProgress />;
  if (error) return <h2 className="text-info">error...</h2>;

  return (
    <>
      <Grid container mb={1}>
        <Grid item>
          <Button>
            <CSVLink color="inherit" data={excelData}>
              export to excel
            </CSVLink>
          </Button>
        </Grid>
        <Grid item>
          <UsersFilter users={users} />
        </Grid>
      </Grid>
      <Grid component={Paper} style={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>email</TableCell>
              <TableCell>username</TableCell>
              <TableCell>password</TableCell>
              <TableCell>firstname</TableCell>
              <TableCell>lastname</TableCell>
              <TableCell>city</TableCell>
              <TableCell>street</TableCell>
              <TableCell>number</TableCell>
              <TableCell>zipcode</TableCell>
              <TableCell>geolocation lat</TableCell>
              <TableCell>geolocation long</TableCell>
              <TableCell>phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <AdminUser user={user} key={Math.random() * 10000} />
            ))}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};

export default AdminUsersTable;

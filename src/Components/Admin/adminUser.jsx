import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";

let AdminUser = (props) => {
  let { username, email, id, password, name, address, phone } = props.user;

  return (
    <TableRow>
      <TableCell className="text-info">{id}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{username}</TableCell>
      <TableCell>{password}</TableCell>
      <TableCell>{name.firstname}</TableCell>
      <TableCell>{name.lastname}</TableCell>
      <TableCell>{address.city}</TableCell>
      <TableCell>{address.street}</TableCell>
      <TableCell>{address.number}</TableCell>
      <TableCell>{address.zipcode}</TableCell>
      <TableCell>{address.geolocation.lat}</TableCell>
      <TableCell>{address.geolocation.long}</TableCell>
      <TableCell>{phone}</TableCell>
    </TableRow>
  );
};

export default AdminUser;

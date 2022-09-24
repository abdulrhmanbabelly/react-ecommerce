import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";

let AdminCategory = (props) => {
  let { category } = props;

  return (
    <TableRow>
      <TableCell>{category}</TableCell>
    </TableRow>
  );
};

export default AdminCategory;

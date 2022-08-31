import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";

let AdminCart = (props) => {
  let { id, userId, date, products } = props.cart;

  return (
    <TableRow>
      <TableCell className="text-info">{id}</TableCell>
      <TableCell>{userId}</TableCell>
      <TableCell className="text-warning">{date}</TableCell>
      {products.map((product) => (
        <TableCell key={Math.random() * 100000}>
          <span className="p-3">id : {product.productId} </span>
          <span>quantity : {product.quantity} </span>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default AdminCart;

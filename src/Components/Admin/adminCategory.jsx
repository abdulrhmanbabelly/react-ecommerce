import { TableCell, TableRow } from '@mui/material';
import React from 'react';

let AdminCategory = (props) => {

    let { category } = props;

    return (
        <TableRow>
            <TableCell>{category}</TableCell>
        </TableRow>
    )
}

export default AdminCategory;
import React from 'react';
import { Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

let NotFound = () => {

    return (
        <Typography sx={{
            position : 'absolute',
            top : '50%',
            left : '50%',
            transform : 'translate(-50%,-50%)'
        }}>
                404 Not found <Search />
        </Typography>
    )

}

export default NotFound;
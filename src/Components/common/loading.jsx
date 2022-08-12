import { CircularProgress } from '@mui/material';
import React from 'react';

let Loading = () => (
    <div style={{ height : "100vh", width : "100vw", display : "flex", alignItems : "center", justifyContent : "center" }}>
        <CircularProgress />
    </div>);

export default Loading;
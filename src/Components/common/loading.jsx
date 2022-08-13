import { CircularProgress } from '@mui/material';
import React from 'react';

let Loading = (props) => (
    <div style={{ height : `${props.height}vh`, width : `${props.width}vw`, display : "flex", alignItems : "center", justifyContent : "center" }}>
        <CircularProgress />
    </div>);

export default Loading;
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

let Loading = (props) => (
  <div
    style={{
      height: `${props.height}vh`,
      width: `${props.width}%`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <CircularProgress />
  </div>
);

export default Loading;

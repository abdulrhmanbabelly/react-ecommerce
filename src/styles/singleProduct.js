import { green } from "@mui/material/colors";

let singleProductStyles = {
  width: "100vw",
  overflowX: "hidden",
  "& .MuiGrid-grid-md-6:nth-of-type(1)": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "50%",
      padding: "2vw",
    },
  },
  ".title": {
    fontSize: "34px",
  },
  ".description": {
    color: "#666",
    padding: "1vw 0",
    lineHeight: "1.7em",
  },
  ".price": {
    color: green["700"],
  },
  ".count": {
    color: "#666",
  },
  "& .other": {
    width: "100vw",
    margin: 2,
  },
  "& > .MuiGrid-grid-md-6:nth-of-type(2)": {
    padding: "2vw",
    "& button": {
      marginRight: (props) => (props.palette.ltr ? "1vw" : "0vw"),
      marginLeft: (props) => (props.palette.ltr ? "0" : "1vw"),
    },
  },
};

export default singleProductStyles;

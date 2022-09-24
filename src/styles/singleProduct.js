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
  "& > .MuiGrid-grid-md-6:nth-of-type(2)": {
    padding: "2vw",
    "& button": {
      marginRight: (props) => (props.palette.ltr ? "1vw" : "0vw"),
      marginLeft: (props) => (props.palette.ltr ? "0" : "1vw"),
    },
  },
};

export default singleProductStyles;

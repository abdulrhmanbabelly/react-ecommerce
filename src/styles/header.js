let headerStyles = (props) => {
  return {
    width : "100%",
    position : "relative",
    direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
    flexGrow: 1,
    "& a": {
      textDecoration: "none !important",
    },
  };
};

export default headerStyles;

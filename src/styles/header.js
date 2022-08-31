let headerStyles = (props) => {
  return {
    direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
    flexGrow: 1,
    "& a": {
      color: "#fff !important",
      textDecoration: "none !important",
    },
  };
};

export default headerStyles;

let adminDashboardStyles = () => {
  return {
    width: "100vw",
    direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
    "& div": {
      textAlign: (props) =>
        `${props.palette.ltr ? "left !important" : "right !important"}`,
    },
    "& a": {
      textDecoration: "none !important",
      color: (props) =>
        `${props.palette.mode === "light" ? "#1976d2" : "#fff"}`,
    },
    "& .MuiListItemIcon-root": {
      minWidth: "0 !important",
      marginRight: "1.5vw",
    },
    form: {
      "& > div": {
        marginBottom: "1vw",
        marginTop: "1vw",
      },
    },
  };
};

export default adminDashboardStyles;

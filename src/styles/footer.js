let footerStyles = (props) => {
  return {
    marginTop : "2vw",
    direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
    width: "100vw",
    borderTop: "1px solid #ccc",
    "& input, ::placeholder, label": {
      color: "#fff !important",
    },
    "& fieldset": {
      border: ".1px solid #fff !important",
    },
    backgroundColor: (props) =>
      `${props.palette.mode === "light" ? "#1976d2" : "#121212"}`,
    color: "#fff",
    "& a": {
      textDecoration: "none",
      color : "inherit !important",
    },
    "& li": {
      textAlign: "center",
    },
  };
};

export default footerStyles;

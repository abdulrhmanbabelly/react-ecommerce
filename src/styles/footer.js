let footerStyles = (props) => {
  return {
    position: "relative",
    marginTop: "5vw",
    paddingTop: "12vw",
    direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
    width: "100vw",
    "& input, ::placeholder, label": {
      color: "#fff !important",
    },
    "& fieldset": {
      border: ".1px solid #fff !important",
    },
    backgroundColor: (props) => props.palette.colors.grey,
    color: "#fff",
    "& a": {
      textDecoration: "none",
      color: "inherit !important",
      fontSize: "1.2vw",
    },
    "& li": {
      textAlign: "center",
    },
    "& h4": {
      color: "#bbb",
      marginBottom: "1vw",
    },
  };
};

export default footerStyles;

let footerStyles = (theme) => {
  return {
    "a": {
      padding: ".3vw",
      display: "block !important",
    },
    ".MuiCard-root": {
      position: "absolute",
      top: "-8vh",
      left: "50%",
      transform: "translate(-50%)",
      padding: "2vw",
      width: "90%",
      boxShadow: ".1vw .1vw 1vw .1vw #111",
      color: "#fff",
      backgroundImage: (theme) =>
        `linear-gradient(-90deg, ${theme.palette.colors.blue}, ${theme.palette.colors.grey}) !important`,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    h5: {
      mb: 1,
    },

    ".MuiSvgIcon-fontSizeMedium": {
      width: "50px",
      height: "50px",
      marginRight: 1,
      backgroundColor: (theme) => theme.palette.colors.pink,
      borderRadius: "50% 50%",
      padding: "1vw",
      margin: 0,
    },

    position: "relative",
    marginTop: "5vw",
    paddingTop: "12vw",
    direction: (theme) => `${theme.palette.ltr ? "ltr" : "rtl"}`,
    width: "100vw",
    "& input, ::placeholder, label": {
      color: "#fff !important",
    },
    "& fieldset": {
      border: ".1px solid #fff !important",
    },
    backgroundColor: (theme) => theme.palette.colors.grey,
    color: "#fff",
    "& a": {
      textDecoration: "none",
      color: "inherit !important",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.2vw",
      },
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

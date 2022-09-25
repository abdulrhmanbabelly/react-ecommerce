let signUpStyles = (i18n) => ({
  direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
  "& p": {
    textAlign: (props) =>
      `${props.palette.ltr ? "left !important" : "right !important"}`,
  },
  marginTop: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  ".back": {
    mt: 2,
    mb: 2,
    float: i18n.language == "ar" ? "right" : "left",
  },
  ".next": {
    mt: 2,
    mb: 2,
    float: i18n.language == "ar" ? "left" : "right",
  },
  ".iAccept": {
    m: 0,
  },
});

export default signUpStyles;

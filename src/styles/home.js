let homeStyles = {
  header: (height) => ({
    zIndex: 1,
    backgroundImage: (theme) =>
      `linear-gradient(-90deg, ${theme.palette.colors.blue}, ${theme.palette.colors.grey}) !important`,
    height: height,
    color: "#fff",
    ".welcome": {
      position: "absolute",
      top: "30%",
      left: (props) => (props.palette.ltr ? "5%" : "none"),
      right: (props) => (props.palette.ltr ? "none" : "5%"),
      zIndex: 100000,
      padding: "2vw",
      h4: {
        fontWeight: 100,
      },
      h1: {
        fontWeight: 800,
      },
      ".readMore": {
        background: (theme) => theme.palette.colors.pink,
        color: "#fff",
        fontWeight: 300,
        marginTop: "1vw",
        width: "40%",
      },
    },
    ".downward": {
      position: "absolute",
      bottom: "1vw",
      left: "50%",
      transform: "translate(-50%)",
      zIndex: 100000,
      color: "#fff",
    },
  }),
  info: {
    img: {
      width: "100%",
      height: "100%",
      boxShadow: (props) => props.palette.boxShadow,
    },
    ".MuiTypography-root, h4": {
      color: "#666",
    },
    ".info": {
      padding: "2vw",
    },
    ".MuiButton-root": {
      marginTop: 2,
    },
  },
  plans: {
    width: "100vw",
    padding: 2,
    paddingTop: 0,
    h1: {
      textAlign: "center",
      margin: 2,
    },
    ".plans": {
      padding: 1,
      paddingTop: 0,
      ".MuiCardHeader-title": {
        textAlign: "center",
      },
      ".MuiPaper-root": {
        position: "relative",
      },
      "ul, li": (theme) => {
        return {
          padding: ".3vw",
          [theme.breakpoints.down("md")]: {
            paddingBottom: "1vh",
          },
          [theme.breakpoints.down("sm")]: {
            paddingBottom: "2vh",
          },
        };
      },

      ".MuiCardContent-root": {
        paddingTop: 0,
      },
      ".MuiPaper-root": {
        height: "100%",
      },
      ".MuiButtonBase-root": {
        position: "absolute",
        bottom: "2vh",
        left: "50%",
        transform: "translate(-50%)",
        width: "90%",
      },
      ".MuiCard-root": {
        position: "relative",
        paddingBottom: "3vw",
        backgroundColor: "#32C1FF",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%230F67FF' stroke-width='0' stroke-opacity='0.06' %3E%3Ccircle fill='%2324FFE8' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2300efe3' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2300e0dd' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2300d0d5' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2300c1cd' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2300b1c4' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2300a2ba' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230093af' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230084a3' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23007696' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23006888' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23005a7b' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23004c6c' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2300405e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2300334f' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23042740' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23041c32' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23021024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        color: "#fff",
      },
      ".planIcon": {
        width: "80px",
        height: "80px",
        display: "block",
        margin: "auto",
      },
      ".rotated": {
        transform: "rotate(40deg)",
      },
      ".price": {
        textAlign: "center",
        fontFamily:
          "Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif",
        span: { fontSize: "50px" },
      },
    },
  },
};

export default homeStyles;

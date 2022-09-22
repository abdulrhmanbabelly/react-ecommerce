import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { footerStyles } from "../../styles";
import { useTranslation } from "react-i18next";
import { Card } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
let Footer = () => {
  let theme = useTheme();
  let { t } = useTranslation();
  return (
    <Box sx={footerStyles(theme)}>
      <Card
        sx={
          (props) => {
            return {
              position: "absolute",
              top: "-8vh",
              left: "50%",
              transform: "translate(-50%)",
              padding: "2vw",
              width: "90%",
              boxShadow: ".1vw .1vw 1vw .1vw #111",
              color: "#fff",
              backgroundImage: (props) =>
                `linear-gradient(-90deg, ${props.palette.colors.blue}, ${props.palette.colors.grey}) !important`,
                [props.breakpoints.down('md')]: {
                  display : "none"
                },
            }
          }
    
        }
      >
        <Box component="h2">You Can Join Us Immediatly!</Box>
        <Box component="h5" mb={1}>
          Start with any Plan You Want And Then You Can Upgrade
        </Box>
        <Button variant="contained">Join now</Button>
      </Card>
      <Box alignItems="center" display="flex" pl={3}>
        <ShoppingCart sx={{ width: "5vw", height: "5vw", marginRight: 1 }} />{" "}
        E-commerce
      </Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={2}
          p={3}
          sx={{
            "& a": {
              padding: ".3vw",
              display: "block",
            },
          }}
        >
          <Box component="h4">Geolocation</Box>
          <Link href="/products">Store</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/adminDashboard">Admin Dashboard</Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          p={3}
          sx={{
            "& a": {
              padding: ".3vw",
              display: "block",
            },
          }}
        >
          <Box component="h4">Programming</Box>
          <Link href="/">Home</Link>
          <Link href="/products">Store</Link>
          <Link href="/adminDashboard">Admin Dashboard</Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          p={3}
          sx={{
            "& a": {
              padding: ".3vw",
              display: "block",
            },
          }}
        >
          <Box component="h4">Github</Box>
          <Link href="/signIn">Sign-In</Link>
          <Link href="/signUp">Sign-Up</Link>
          <Link href="/adminDashboard">Admin Dashboard</Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          p={3}
          sx={{
            "& a": {
              padding: ".3vw",
              display: "block",
            },
          }}
        >
          <Box component="h4">Facebook</Box>
          <Link href="/">Home</Link>
          <Link href="/signUp">Sign-Up</Link>
          <Link href="/adminDashboard">Admin Dashboard</Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          p={3}
          sx={{
            "& a": {
              padding: ".3vw",
              display: "block",
            },
          }}
        >
          <Box component="h4">Twitter</Box>
          <Link href="/">Home</Link>
          <Link href="/products">Store</Link>
          <Link href="/cart">Cart</Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          p={3}
          sx={{
            "& a": {
              padding: ".3vw",
              display: "block",
            },
          }}
        >
          <Box component="h4">Contribution</Box>
          <Link href="/">Home</Link>
          <Link href="/signUp">Sign-Up</Link>
          <Link href="/adminDashboard">Admin Dashboard</Link>
        </Grid>
      </Grid>

      <Grid
        container
        p={3}
        justifyContent="center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <Grid item md={1} xs={12}>
          Home
        </Grid>
        <Grid item md={1} xs={12}>
          Ecommerce
        </Grid>
        <Grid item md={6} xs={12}></Grid>
        <Grid item md={4} xs={12}>
          {t("footer.copyright")}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

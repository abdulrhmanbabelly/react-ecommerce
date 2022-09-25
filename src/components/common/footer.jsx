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
      <Card>
        <Box component="h2">{t("footer.joinUs")}</Box>
        <Box component="h5">{t("footer.start")} </Box>
        <Button variant="contained">{t("footer.joinNow")} </Button>
      </Card>
      <Grid container pl={3} pr={3}>
        <Grid item>
          {" "}
          <Box alignItems="center" display="flex">
            <ShoppingCart />{" "}
          </Box>
        </Grid>
        <Grid item>
          <Box component="h1" pr={1} pl={1}>
            {t("footer.ecommerce")}
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={2} p={3}>
          <Box component="h4">{t("footer.sitemap_1")}</Box>
          <Link href="/products">{t("footer.links.1")}</Link>
          <Link href="/carts">{t("footer.links.2")}</Link>
          <Link href="/adminDashboard">{t("footer.links.3")}</Link>
        </Grid>
        <Grid item xs={12} md={2} p={3}>
          <Box component="h4">{t("footer.sitemap_2")}</Box>
          <Link href="/signIn">{t("footer.links.4")}</Link>
          <Link href="/signUp">{t("footer.links.5")}</Link>
          <Link href="/editAccount">{t("footer.links.6")}</Link>
        </Grid>
        <Grid item xs={12} md={2} p={3}>
          <Box component="h4">{t("footer.sitemap_3")}</Box>
          <Link href="/">{t("footer.links.7")}</Link>
          <Link href="/signUp">{t("footer.links.8")}</Link>
          <Link href="/">{t("footer.links.9")}</Link>
        </Grid>
        <Grid item xs={12} md={2} p={3}>
          <Box component="h4">{t("footer.myProjects")}</Box>
          <Link href="/">{t("footer.links.9")}</Link>
          <Link href="https://get-your-weather-for-free.herokuapp.com/">
            {t("footer.links.10")}
          </Link>
          <Link href="https://ecommerce-fake-api.herokuapp.com/">
            {t("footer.links.11")}
          </Link>
        </Grid>
        <Grid item xs={12} md={2} p={3}>
          <Box component="h4">{t("footer.social")}</Box>
          <Link href="/">{t("footer.links.12")}</Link>
          <Link href="https://mostaql.com/u/Abdalrhman_ba">
            {t("footer.links.13")}
          </Link>
          <Link href="https://www.facebook.com/abdalrahman.babelly">
            {t("footer.links.14")}
          </Link>
        </Grid>
        <Grid item xs={12} md={2} p={3}>
          <Box component="h4">{t("footer.social")}</Box>
          <Link href="https://www.linkedin.com/in/abd-alrhman-babelly-214a16219/?lipi=urn%3Ali%3Apage%3Aprofile_common_profile_index%3Be5a183e0-df30-458e-934d-984a20fb3b08">
            {t("footer.links.12")}
          </Link>
          <Link href="https://mostaql.com/u/Abdalrhman_ba">
            {t("footer.links.13")}
          </Link>
          <Link href="https://www.facebook.com/abdalrahman.babelly">
            {t("footer.links.14")}
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        p={3}
        justifyContent="center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <Grid item md={1} xs={12}>
          {t("footer.links.1")}
        </Grid>
        <Grid item md={1} xs={12}>
          {t("footer.links.2")}
        </Grid>
        <Grid item md={4} xs={12}></Grid>
        <Grid item md={6} xs={12} textAlign={{ md: "right", xs: "inherit" }}>
          {t("footer.copyright")}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
